---
title: Upgrade Debian 9 Stretch to Debian 10 Buster
description: How to safely upgrade Debian GNU/Linux from Stretch (9) to Buster (10) while ensuring that all packages continue to function.
createdAt: 2021-08-08T23:34:34+02:00
updatedAt: 2022-12-29T19:44:44+02:00
nextTitle: Redirect old domain to new domain in WordPress via .htaccess
nextUrl: wordpress-redirect-old-domain
prevTitle: Creating a bootable Manjaro USB memory stick on Linux
prevUrl: making-bootable-usb-drive-on-linux
tags: tutorials, linux, debian
image: debian
---

Debian GNU Linux was one of the first and most popular Linux distributions. That is where Ubuntu and its descendants originate. Debian is installed on all of our servers.

The disadvantage of Debian is that it does not support automatic version upgrades or rolling releases; instead, the user must change the version in the `apt` files. Upgrades can also break packages if they are not performed securely.

One of the servers was running Debian 9 Stretch. We wanted to upgrade to Debian 10 Buster because the newer version has a longer support period and new features, even though Stretch is still officially supported until June 2022. It is strongly advised to upgrade to the most recent version.

This guide will show you how to upgrade from Debian 9 Stretch to Debian 10 Buster. A Debian user account with `sudo` privileges is required.

**Backup is strongly advised, preferably from the entire system, but at the very least from databases and important files. Important system files and directories may be modified or deleted as a result of the version upgrade.**

[Rsync](/blog/rsync/) is an excellent backup tool.

## Update Package Manager and Repositories

All `apt` files have a version number, which in this case is stretch. Before proceeding, a backup copy of the original `sources.list` should be created. Other than the version name, there is usually no need to change anything.

```Bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

Change all of the `stretch` to `buster` in the file.

```Bash
sudo nano /etc/apt/sources.list
```

The file's lines should look something like this:

```
deb http://httpredir.debian.org/debian buster main contrib non-free
deb http://httpredir.debian.org/debian buster-updates main contrib non-free
deb http://security.debian.org buster/updates main contrib non-free
```

Using the keyboard shortcut `Ctrl+X`, save and close the file.

## Upgrade from Debian 9 to Debian 10

The following command updates the local package lists before upgrading all packages and finally the distro. Due to the possibility of errors, it is recommended that all packages be updated before updating the distro.

```Bash
apt update && apt upgrade -y && apt dist-upgrade -y
```

The installation will ask you to update the modified local config files. Usually you can keep the modified local files, but we were using `mysql-server` which is apparently no longer supported because `mariadb-server` has replaced it, `openssh-server` used old rules and `iptables` got a new name. `nftables` is the default and recommended firewalling framework in Debian, and it replaces the old `iptables` (and related) tools which also affected the `ufw` package.

The installation will prompt you to update the altered local configuration files. Normally, you can keep the modified local files, but we were using `mysql-server`, which appears to be deprecated because `mariadb-server` has replaced it, `openssh-server` used old rules, and `iptables` got a new name. `nftables` is Debian's default and recommended firewalling framework, replacing the old `iptables` (and related) tools that also impacted the `ufw` package.

## Before rebooting, performs checks

Check that everything is still working properly before rebooting.

Even if the `ssh` connection is still active, this does not imply that the `openssh-server` is operational. If you did not save the modified file, everything is reset and the custom port may have been changed to `22`. We had issues because I wanted to keep the old config file and the service was unavailable.

### From MySQL to MariaDB

```
ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/run/mysqld/mysqld.sock' (111)
```

Upgrading `mysql-server` to `mariadb-server` is easy. Simply install the updated package. If you do not change the package, the MySQL server will not function.

Execute this command:

```Bash
apt install mariadb-server -y
```

### Broken ufw and iptables after upgrading to Debian 10

As previously stated, `iptables` no longer obeys the same name, so all old scripts should be updated. When updating rules, `ufw` throws an error and does not start normally. If you don't already have them, you may need to install some legacy packages to fix this.

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

If everything went well, you should be able to run `ufw` normally now.

```Bash
sudo ufw enable
```

## Restart the system and hope for the best.

When the process and checks are finished, reboot the system to enter Debian 10 Buster.

```Bash
sudo reboot
```

To view the version, use the `hostnamectl` command. `Debian GNU/Linux 10 (buster)` should be displayed in the `Operating System` field.

```Bash
hostnamectl
```

## Remove all unnecessary packages

Following the upgrade, your system may contain obsolete packages and dependencies that are no longer required. You should get rid of them.

```Bash
sudo apt --purge autoremove
```

## Conclusion

You should have successfully upgraded from Debian 9 to Debian 10 by following the instructions above. Please see the Debian [release notes](https://www.debian.org/releases/stable/) for more information on the upgrade process, including notes and extensive documentation.

Thank you for your time.
