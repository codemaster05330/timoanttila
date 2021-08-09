---
title: Upgrade Debian 9 Stretch to Debian 10 Buster
createdAt: 2021-08-08T23:34:34.000Z
description: How to upgrade Debian GNU/Linux from Stretch (9) to Buster (10) safely and making sure all packages work after the upgrade.
tags: tutorials, linux, debian
image: debian
---

Debian GNU Linux is one of the first Linux distro and one of the most popular in the world. That’s where Ubuntu and its descendants come from. We have Debian running on all servers.

The downside to Debian is that it does not automatically support version upgrades, rolling releases, but the user has to change the version in the apt files. Upgrades may also break packages if the upgrade is not done securely.

We had Debian 9 Stretch running on one of the servers. The newer version offers a longer support period and new features, so we wanted to upgrade it to Debian 10 Buster, even when Stretch is still officially supported until June 2022. It is highly recommended to upgrade to the latest version.

This tutorial will walk you through how to upgrade from Debian 9 Stretch to Debian 10 Buster. You need A Debian user account with `sudo` privileges.

**Backup is highly recommended and preferably from the entire system, but at least from databases and important files. The version upgrade may modify or delete important system files and directories.**

[Rsync](/blog/rsync) is a very good tool for backups.

## Update Package Manager and Repositories

All apt files have a version specified, in this case stretch. Before doing anything else, one should make backup copy of the original `sources.list`. Usually there is no need to change anything other than the version name.

```Bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

Open the file for editing and change all `stretch` to `buster`.

```Bash
sudo nano /etc/apt/sources.list
```

It should look something like this:

```
deb http://httpredir.debian.org/debian buster main contrib non-free
deb http://httpredir.debian.org/debian buster-updates main contrib non-free
deb http://security.debian.org buster/updates main contrib non-free
```

Save and close the file using the keyboard combination `Ctrl+X`.

## Upgrade from Debian 9 to Debian 10

The command below updates the local package lists, then upgrades all packages and finally upgrades the distro. It is recommended to update all packages before updating the distro due to possible errors.

```Bash
apt update && apt upgrade -y && apt dist-upgrade -y
```

The installation will ask you to update the modified local config files. Usually you can keep the modified local files, but we were using `mysql-server` which is apparently no longer supported because `mariadb-server` has replaced it, `openssh-server` used old rules and `iptables` got a new name. `nftables` is the default and recommended firewalling framework in Debian, and it replaces the old `iptables` (and related) tools which also affected the `ufw` package.

## Checks before rebooting

Before rebooting, make sure everything is still working as desired.

Even if the ssh connection is still on, it does not mean that the openssh-server is up and running. If you didn't keep the modified file, everything is reseted and possibly the custom port has been changed to 22. We had errors because I wanted to keep the old config file and the service was down.

### From MySQL to MariaDB

```
ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/run/mysqld/mysqld.sock' (111)
```

Upgrading `mysql-server` to `mariadb-server` is easy. Just install the new package. If no switch is made, mysql server is not working.

Run the following command:

```Bash
apt install mariadb-server -y
```

### Broken ufw and iptables after upgrading to Debian 10

As I mentioned earlier, `iptables` no longer obeys the same name, which is why all old scripts should be updated. `ufw` gives an error when updating rules and does not start normally. To fix this, you may need some legacy packages if not already installed.

```Bash
sudo apt-get install -y iptables arptables ebtables
```

And then update alternatives:

```Bash
update-alternatives --set iptables /usr/sbin/iptables-legacy
update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy
update-alternatives --set arptables /usr/sbin/arptables-legacy
update-alternatives --set ebtables /usr/sbin/ebtables-legacy
```

You can read more about iptables from [Debian Wiki](https://wiki.debian.org/iptables).

If everything went as it should, you should be able to run `ufw` normally.

```Bash
sudo ufw enable
```

## Reboot the system and hope the best

Once the process and checks are complete, reboot the system to boot into Debian 10 Buster.

```Bash
sudo reboot
```

You can use the `hostnamectl` command to display the version. The `Operating System` field should display `Debian GNU/Linux 10 (buster)`.

```Bash
hostnamectl
```

## Remove useless packages

After the upgrade, your system might have outdated packages and dependencies which are no longer necessary. You should remove them.

```Bash
sudo apt --purge autoremove
```

## Conclusion

By following the directions above, you should have successfully upgraded from Debian 9 to 10. For more information about the upgrade process, including notes and extensive documentation, please refer to the Debian [release notes](https://www.debian.org/releases/stable/).

Thanks for reading.