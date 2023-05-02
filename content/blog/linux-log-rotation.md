---
title: Ubuntu server log file size management
description: A guide on how to manage Ubuntu / Debian server log file sizes and delete old unnecessary log files after a certain time.
createdAt: 2023-04-01T14:01:00+02:00
nextTitle: Linux server journal log file size management
nextUrl: server-journal-files
prevTitle: Running NuxtJS in a Docker container
prevUrl: nuxtjs-docker
tags: tutorials, servers, log
---

[Ubuntu](https://ubuntu.com/) is a Linux distribution based on [Debian](https://www.debian.org/) and composed mostly of free and open-source software. It is a popular choice for web servers and other server applications.

The server has a lot of log files and other temporary files that need to be reduced or deleted at certain intervals or the server quickly runs out of hard disk space.

The same guide works on all Debian-based distros.

## Log files

[Logrotate](https://linux.die.net/man/8/logrotate) is a system utility that automates log file rotation and compression. Log files could eventually consume all available disk space on a system if they were not rotated, compressed, and pruned on a regular basis.

Logrotate is pre-installed in Ubuntu 20.04 and later. It is designed to handle the logs of all installed packages, including the system's default log processor, rsyslog.

### Logrotate installation and version check

Logrotate should be installed by default in Ubuntu, but if it isn't, use the commands below to install it. Same command works for Debian and other Debian-based distributions.

```shell
sudo apt update
sudo apt install logrotate
```

You can check the version with the command:

```shell
root@puoti:~# logrotate --version
logrotate 3.18.0

Default mail command: /usr/bin/mail
Default compress command: /bin/gzip
Default uncompress command: /bin/gunzip
Default compress extension: .gz
Default state file path: /var/lib/logrotate/status
ACL support: yes
SELinux support: yes
```

### Logrotate settings and config files

The logrotate configuration is defined in `/etc/logrotate.conf` and `/etc/logrotate.d/`.

**File /etc/logrotate.conf**

By default, `logrotate.conf` is set to rotate log files on a weekly basis, with log files owned by the root user and the syslog group, four log files retained at a time, and new empty log files created after the current one is rotated.

**Directory /etc/logrotate.d/**

The `/etc/logrotate.d/` directory contains all package-specific configuration. Let's examine the NGINX settings a little more closely, for example.

```shell
/var/log/nginx/*.log {
        daily
        missingok
        rotate 14
        compress
        delaycompress
        notifempty
        create 0640 www-data adm
        sharedscripts
        prerotate
                if [ -d /etc/logrotate.d/httpd-prerotate ]; then \
                        run-parts /etc/logrotate.d/httpd-prerotate; \
                fi \
        endscript
        postrotate
                invoke-rc.d nginx rotate >/dev/null 2>&1
        endscript
}
```

The NGINX logs directory is `/var/log/nginx/`. The configuration file contains the following settings:

- `daily`: rotate the log files daily
- `missingok`: if the log file is missing, do not issue an error message
- `rotate 14`: keep 14 days of logs
- `compress`: compress the log files
- `delaycompress`: compress the log files only after they have been rotated
- `notifempty`: do not rotate the log file if it is empty
- `create 0640 www-data adm`: create a new log file with the specified permissions
- `sharedscripts`: run the postrotate script only once, even if there are multiple log files that match the pattern
- `prerotate`: run the specified script before rotating the log files
- `postrotate`: run the specified script after rotating the log files

You can make your own settings for any software's log files. Because all of my server's emails are routed through [msmtp](https://marlam.de/msmtp/) to the external email server, I have made custom rotation settings for it.

Content of the `/etc/logrotate.d/msmtp` file:

```shell
/var/log/msmtp/*.log {
        rotate 2
        weekly
        compress
        missingok
        notifempty
}
```

For more information, use a command:

```shell
man logrotate
```

## Related Posts

- [Removing old journal files from Ubuntu](/blog/linux-journal-files/)
- [Remove unnecessary PHP sessions files on Debian](/blog/setup-crontab-to-remove-php-session-files/)
- [Ubuntu server package updates](/ubuntu-server-update/)
- [Secure your Ubuntu server with ease: automate security package Updates](/ubuntu-server-automatic-security-updated/)
- [Backup your data automatically on Linux](/blog/backup-your-data-automatically-on-linux/)
- [Utilize rsync to backup or sync data on Linux](/blog/rsync/)
