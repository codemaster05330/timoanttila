---
title: Utilize rsync to backup or sync data on Linux
description: Rsync is a powerful tool for transferring and synchronizing data between local and remote systems.
createdAt: 2016-05-14T19:50:05+02:00
updatedAt: 2022-12-29T20:15:36+02:00
nextTitle: Leverage browser caching for images, CSS and JavaScript apache2
nextUrl: leverage-browser-caching
prevTitle: Backup your data automatically on Linux
prevUrl: backup-your-data-automatically-on-linux
tags: tutorials, servers, backup, crontab, security
---

[Rsync](https://linux.die.net/man/1/rsync) finds files that need to be transferred by default using a `lqquick checkrq` algorithm that looks for files that have changed in size or last-modified time. Any changes in the other preserved attributes (as requested by options) are made on the destination file directly when the quick check indicates that the file's data does not need to be updated.

All new and modified files are transferred from Server 1 to Server 2. Full copy over SSH takes less time and bandwidth. Because it does not affect local files, you do not require write permission on Server 1 (and in my case, my user does not have write permission to /wwwroot).

First, you must create SSH keys in order to log into a remote server without being prompted for a password. After that, you must create your own command using variables.

```Shell
rsync -azq /wwwroot/ timo@Server_2:/wwwroot/
```

The `-a` flag stands for `archive` and syncs recursively while preserving symbolic links, special and device files, modification times, group, owner, and permissions. The `-z` option compresses file data while transferring, and the `-q` option suppresses non-error messages.

If you want to see what's going on, use `-azhvP`.

The `-P` option combines the options `--progress` and `--partial`. There is a progress bar and the ability to resume interrupted transfers. The `-h` option displays numbers in a human-readable format, and the `-v` option increases verbosity. As a result, there is more information that is easier to read.

## Crontab

However, this should happen automatically without the user having to do anything, so let's use `cron` to handle sync. Make a new file and type something like this.

To use the command line:

```Shell
crontab -e
```

Edit crontab:

```Shell
15 1 * * Sat rsync -avh /wwwroot/ timo@Server_2:/wwwroot/ > /dev/null 2>&amp;1
```

This command runs every Saturday at 01:15.  
Cron timing: minute 0-59, hour 0-23, day of month 1-31, month 1-12, day of week 0-6.

```Shell
crontab -l
```

More information about rsync can be found [here](https://linux.die.net/man/1/rsync).
The most convenient way to [learn cron](https://crontab.guru/).

Thank you for reading, and happy rsyncing!

## Related Posts

- [Backup your data automatically on Linux](/blog/backup-your-data-automatically-on-linux/)
- [Remove unnecessary PHP sessions files on Debian](/blog/setup-crontab-to-remove-php-session-files/)
- [Ubuntu server log size management](/blog/linux-log-rotation/)
- [Removing old journal files from Ubuntu](/blog/linux-journal-files/)
