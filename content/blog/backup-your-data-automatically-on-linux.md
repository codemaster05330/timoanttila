---
title: Backup your data automatically on Linux
createdAt: 2016-04-24T15:37:21.000Z
description: Backups are one of the most important things when running a server  and these scripts help backup your important data automatically.
tags: tutorials, servers, backup, bash
---

Backups are one of the most important things when running a server where are clients' data and files. These two scripts help backup your important data from [MySQL / MariaDB](/blog/mysql){title="A beginner's guide to MySQL / MariaDB"} and all the files from the website's folder. You can put both of these scripts in the same file, but I like to keep them separated.

## Backup MySQL / MariaDB databases

Data is changing daily and there has to be very recent backup available if something bad happens. You never know what may happen, so better safe than sorry. Most of the time, once per day is enough if you don't run a very popular web store.

The script wants to know the username and password for the root / backup user which has enough power to fetch databases one by one. What the user needs is **EVENT**, **LOCK TABLES**, **SELECT** and **SHOW DATABASES**. It can't destroy anything so no worries.

First, the script defines the variables, which are username, password and where files should end up. Then pull all the databases from the MySQL server to $databases and break it with for loop to $db. Now the script knows the names of the databases.

If the database is not **information_schema** or start with **_** then use mysqldump to print the content of the database to .**sql** file. After that's done, compress it with **gzip**. The script does this separately for each database.

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

## Backup all important files

The files are not as important as the database, they take up more space, and they are changed less, so I back up those only once per week. I have always two backups available. This script compresses my wwwroot and puts the file to the right location.

```Bash
!/bin/bash
tar -zcvf "/backup/files/www-$(date '+%F').tar.gz" /wwwroot
```

## How to schedule a backup

Cron is a very powerful tool, and I use that to schedule my backups. Cron enables execute commands or scripts automatically at a specified time/date.

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

I don't want to keep all backups forever, so this script deletes files older than two weeks. Remember to change the folder. Add this line with scripts above.

```Bash
find /backup/files/* -mtime +14 -type f -delete
```

Thanks for reading and happy backuping!