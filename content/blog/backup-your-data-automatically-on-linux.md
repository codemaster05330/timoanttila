---
title: Backup your data automatically on Linux
createdAt: 2016-04-24T15:37:21+02:00
updatedAt: 2022-12-29T20:35:29+02:00
description: One of the most crucial aspects of running a server is backups, and these scripts assist in automatically backing up your critical data.
tags: tutorials, servers, backup, bash
---

Backups are one of the most important aspects of running a server that houses client data and files. These two scripts assist in backing up important data from [MySQL / MariaDB](/blog/mysql/) and all files from the website's folder. Both of these scripts can be placed in the same file, but I prefer to keep them separate.

## Backup MySQL / MariaDB databases

Data changes on a daily basis, so a recent backup must be available in the event of a disaster. You never know what might happen, so it's better to be safe than sorry. If you don't run a very popular web store, once per day is usually sufficient.

The script requires the username and password of the root / backup user, who has the authority to retrieve databases one by one. The user requires the privileges `EVENT`, `LOCK TABLES`, `SELECT`, and `SHOW DATABASES`. The script cannot destroy anything, so there is no need to be concerned.

First, the script defines the variables, which are username, password, and the location of the files. Then, from the MySQL server, pull all the databases to `$databases` and break it with a for loop to `$db`. The script is now aware of the database names.

If the database is not `information_schema` or start with `_` then use mysqldump to print the content of the database to SQL file. After that's done, compress it with `gzip`. The script does this separately for each database.

```Bash
#!/bin/bash
USER="backup"
PASSWORD="L63?aJbR6sFq-LuqNK"
OUTPUT="/backup/db"
databases=`mysql --user=$USER --password=$PASSWORD -e "SHOW DATABASES;" | tr -d "| " | grep -v Database`
for db in $databases; do
  if [[ "$db" != "information_schema" ]] &amp;&amp; [[ "$db" != _* ]] ; then
  mysqldump --force --opt --user=$USER --password=$PASSWORD --databases $db > $OUTPUT/$db-`date +%Y%m%d`.sql
  gzip $OUTPUT/$db-`date +%Y%m%d`.sql
  fi
done
```

## Make a backup of all important files.

Because the files are less important than the database, take up more space, and are changed less frequently, I back them up only once per week. I always have two backups on hand. This script compresses my wwwroot and places the file where it belongs.

```Bash
!/bin/bash
tar -zcvf "/backup/files/www-$(date '+%F').tar.gz" /wwwroot
```

## How to schedule a backup

Cron is a powerful tool that I use to schedule backups. Cron allows you to run commands or scripts automatically at a set time/date.

An entry in cron is made up of a series of fields separated by a space. Cron timing: minute 0-59, hour 0-23, day of month 1-31, month 1-12, day of week 0-6. The first script is run daily at 00:00, the second one runs 23:55 every Friday. The null device is typically used for disposing of unwanted output streams of a process (meaning no one cares what scripts want to tell).

To command line:

```Bash
<code>crontab -e
```

Edit crontab:

```Bash
0 0 * * * /root/backup-db > /dev/null 2>&amp;1
55 11 * * Fri /root/backup-files > /dev/null 2>&amp;1
```

What is running:

```Bash
crontab -l
```

Other examples:

```Bash
15 0 */3 * * Every third day 15 min past midnight.
15 0 3 * * Every third day of the month.
15 0 3 3 * Every third day of the third month.
15 */6 * * * Every sixth hour.
```

## How to delete old files automatically on Linux

Because I do not want to keep all backups indefinitely, this script deletes files older than two weeks. Keep in mind to change the folder. Combine this line with the scripts listed above.

```Bash
find /backup/files/* -mtime +14 -type f -delete
```

Thanks for reading, and happy backuping!
