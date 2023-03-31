---
title: Replace a line in a text file automatically every week with Linux bash shell script
description: My goal was to read the number in the file, and if the number is smaller than three add one to it, and if bigger reset the number to one. Write new to the file.
createdAt: 2017-02-12T11:45:54+02:00
nextTitle: Remove unnecessary PHP sessions files on Debian
nextUrl: setup-crontab-to-remove-php-session-files
prevTitle: Create a simple contact form in HTML, PHP and SQL
prevUrl: contact-form
tags: tutorials, bash
---

In this case I had to create a view to a website where the lunch list changes every week in three week cycles. I did an actual view with PHP, but the number changes every week was better done separately. PHP is only loaded when someone visits the page, and no one visits that page in the middle of the night. So I made a Bash script which reads a file's first line, then adds one to that number and writes the new number to the file. This tutorial is how that Bash script works, not about the list view.

Sometimes you may want to look at a file's first line only. Command head is very useful for this. If you want to read only the first line of the file:

```Bash
head -n 1 file
```

And if you want to see three lines of that file:

```Bash
head -n 3 file
```

You can also use `sed`. This prints the first line and then quits:

```Bash
sed q file
```

In this case I wanted to read the first line of the file and save it as variable.

```Bash
file="/path/to/file.txt"
line=$(head -n 1 "$file")
```

Now I have a number. If the number is not bigger than three, add one to that number. If the number is bigger than three it should be reset to one.

```Bash
(( line > 3 )) &amp;&amp; (( line++ )) || line=1
echo "$line" > "$file"
```

Now we have a new number which tells us which list we want to use next week and the script wrote it to the file. Here's the same script as a whole and shortcutted by [galaktos](https://www.reddit.com/user/galaktos) from [reddit](https://www.reddit.com/r/bash/comments/5tlap6/how_to_replace_a_line_in_a_text_file/). Thanks for help.

```Bash
#!/bin/bash
file="/path/to/file.txt"
line=$(head -n1 -- "$file")
printf '%d\n' "$((++line>3?1:line))" >| "$file"
```

## How to run a script automatically in Linux

Crontab is our friend when we want to do things automatically in Linux. I wanted the script to run every Saturday.

```Shell
crontab -e
```

Add this line:

```Crontab
0 0 * * Sat /home/user/scripts/bash-script
```

This command runs every Saturday at 00:00.  
Cron timing: minute 0-59, hour 0-23, day of month 1-31, month 1-12, day of week 0-6 (or Sun-Sat).

Now we are all set. The number will change every Saturday till the end of the days (or till the server is dead).
