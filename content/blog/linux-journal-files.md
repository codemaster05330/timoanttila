---
title: Linux server journal size management
description: A guide on how to manage server journal size and delete old unnecessary files after a certain time or file size.
createdAt: 2023-04-01T14:20:00+02:00
prevTitle: Ubuntu server log file size management
prevUrl: server-log-rotation
tags: tutorials, servers, journal
---

A [journaling file system](https://en.wikipedia.org/wiki/Journaling_file_system) is a file system that keeps track of changes not yet committed to the file system's main part by recording the intentions of such changes in a data structure known as a "journal", which is usually a circular log. In the event of a system crash or power failure, such file systems can be brought back online more quickly with a lower likelihood of becoming corrupted.

The Ubuntu server, which has been running since December 2021 without optimizing sizes of the journal files, has about four gigabytes of journal files.

```shell
root@ignite:~# journalctl --disk-usage
Archived and active journals take up 4.0G in the file system.
```

The `/var/log/journal` directory contains all of the journal files. You can modify a parameter in the `/etc/systemd/journald.conf` file to control the size of the folder. Change the value of the `SystemMaxUse` parameter to the desired size.

```shell
sudo nano /etc/systemd/journald.conf
SystemMaxUse=50M
```

The `journalctl` command can also be used to change the size of the journal files. The first command will save the last 50M of data. The second command will only keep the last two days.


```shell
sudo journalctl --vacuum-size=50M
sudo journalctl --vacuum-time=2d
sudo systemctl restart systemd-journald
```

These commands only delete archived logs. To remove everything, you must first rotate the files so that recent entries are moved to inactive files.

```shell
sudo journalctl --rotate
```

For more information, use a command:

```shell
man journalctl
```

## Related Posts

- [Ubuntu server log size management](/blog/linux-log-rotation/)
- [Remove unnecessary PHP sessions files on Debian](/blog/setup-crontab-to-remove-php-session-files/)
- [Backup your data automatically on Linux](/blog/backup-your-data-automatically-on-linux/)
- [Utilize rsync to backup or sync data on Linux](/blog/rsync/)
