---
title: A beginner's guide to Drush
pub:
- 1
- Jan
published: 2016-01-27T20:01:10+02:00
modified: 2020-09-11T00:43:05+03:00
summary: Drush is a command-line shell and scripting interface for Drupal. This tutorial help you understand how Drush works and how it makes your life easier.
layout: tutorial
---

<a href="https://www.drush.org/" rel="noopener" target="_blank">Drush</a> is a command-line shell and scripting interface for <a href="https://www.drupal.org/" rel="noopener" target="_blank">Drupal</a>. It makes my life a lot easier because I don't have to manage all the websites from Drupal's admin pages, but I can give commands to the server's command line. It helps you perform admin tasks using one or few commands in the terminal.

You need to <a href="https://en.wikipedia.org/wiki/Secure_Shell" rel="noopener" target="_blank" title="Wikipedia: Secure Shell">SSH access</a> to your server and write all commands to the terminal. <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/" rel="noopener" target="_blank">PuTTY</a> is very good tool for Windows and OS X / Linux got their own terminal + ssh software so you can just start by making a connection to your server. If you don't know how to use ssh then you probably don't want to play with drush.

## Install drush

Download latest stable release using the code below:

```Shell
wget -O drush.phar https://github.com/drush-ops/drush-launcher/releases/download/0.6.0/drush.phar
```

No one likes to use long commands like `php drush.phar <drush_command>` so let's make it work as normal commands. If you have `sudo` or `root` access to your server then copy `drush.phar` to `/usr/local/bin/`.

```Shell
chmod +x drush.phar
sudo mv drush.phar /usr/local/bin/drush
```

If you don't have special rights to a server, you can add `export PATH=$PATH:</path/to/file>` to your `~/.bashrc` file (if your system use bash).

## Download, enable and uninstall modules

Go to your Drupal installation folder.

```Shell
cd /<your_drupal_folder>/sites
```

You can download and enable any module from <a href="https://www.drupal.org/project/project_module" rel="noopener" target="_blank" title="Official Drupal Modules">Drupal.org</a> and you can enable multiple modules at once.

I use this "one liner" to activate all the necessary modules for new site (Drush download the modules automatically):

```Shell
drush en pathauto ckeditor views jquery_update module_filter transliteration l10n_update admin_menu admin_menu_toolbar imce less html5_tools menu_block views_ui ctools token libraries elements field_ui overlay image contextual taxonomy
```

Command `drush en` enable module. You can also only download modules without activating them by using `drush dl` (pm-download).

`drush dis` (pm-disable) is a command to uninstall. Drush can't delete modules so you have to do that manually (`rm -rf /<your_drupal_folder>/sites/all/modules/<module>`).

## Update Drupal with Drush

See main information and status of the site:

```Shell
drush status
```

Before I found Drush it was a pain in the ass upgrading Drupal core and all enabled modules. Now you can just write one simple command and watch how Drush does all the work for you.

Use the command below to see all available updates. Before using the update command you should clear all the cache files from Drush and Drupal.

```Shell
drush rf
drush cc all
drush up
```

Command update (`up`) updates all modules pending, but you can also update only one or a few modules at the time. If you're updating a very important site, then you should first take a backup from SQL database and then update all modules one by one so if something goes wrong you know which module is the most problematic.

`-y` skips the confirmation question.

```Shell
drush up drupal -y
drush up module1 module2 -y
```

That command also updates your database if needed, but you can also do it without updating modules.

```Shell
drush updb
```

Drush always takes backups from modules and core before upgrading them, so if a new version is not good for you, you can always switch back to old ones.

## See all the enabled modules

```Shell
drush pm-list --type=Module --no-core --status=enabled
```

If you want to find certain module from the list:

```Shell
drush pm-list --type=Module --no-core --status=enabled | grep module
```

Information about certain module:

```Shell
drush pm-info <module_name>
```

## Disable and uninstall modules

Command disable (`dis`) only disables the module, but does not delete anything. Can also disable all modules depending on disabled module.

Command pm-uninstall disable module and delete all information from SQL. Module is still under all/modules after pm-uninstall but all data is gone.

```Shell
drush dis module1 module2 -y
drush pm-uninstall module -y
```

If Drupal is broken and you can't disable modules normally:

```Shell
drush sql-query "UPDATE system SET status = '0' WHERE name = 'module_name'"
drush sql-query "DELETE FROM cache_bootstrap WHERE cid = 'system_list'"
```

## How to disable all non-core modules

```Shell
drush pml --no-core --type=module --status=enabled --pipe | xargs drush -y dis
```

## Drush Lock: How to freeze the version of a module during 'drush up'

Every so often I will find myself needing to update lots of Drupal modules but not one in particular.

```Shell
drush up --lock=views_slideshow
drush up --unlock=views_slideshow
```

## Backup

Drush can backup your database, code and files into a single file.  
Commands: `archive-dump` (ard) and `archive-restore` (arr).

```Shell
drush ard default --destination=/backups/mysite.tar
```

You can also backup only your database:

```Shell
drush sql-dump > /path/to/backup_dir/database-backup.sql
```

## Recovering the administrator password

```Shell
drush upwd --password="password1234" admin
```

You can also use that command for any other user.

## Unlock a locked user account

Drupal locks the user account after five failed attempts. That is very good if someone tries to guess your password, but very bad if you tried and failed multiple times yourself. This command will unlock the user account which was locked because of flood / spam.

```Shell
drush sql-query "delete from flood"
```

## Create and delete users

```Shell
drush user-create username --mail="person@example.com" --password="letmein"
drush user-cancel username
```

## Force logout

Log all users out:

```Shell
drush sql-query 'TRUNCATE TABLE sessions;'
```

### Log out a specific user

```Shell
drush sql-query 'DELETE FROM sessions WHERE uid = 2;'
```

## Update all Drupal websites

I made a script which I use to update all hosted Drupal websites at once. Very simple script, but still so powerful and saves a lot of time. You can find this script at <a href="https://github.com/timoanttila/Drupal-Drush" rel="noopener" target="_blank" title="Drush script by Timo Anttila">Github</a>.

```Bash
#!/bin/sh
# Author: Timo Anttila, moro@tuspe.com
cd /www/drupal
for d in ./* ; do (cd "$d/www/sites" &amp;&amp; drush up -y &amp;&amp; drush cc all); done
chown -R www-data.www-data /www/drupal
```

### Read more

<ul>
<li><a href="https://github.com/timoanttila/Drupal-Drush" rel="noopener" target="_blank">Update all your Drupal websites once</a></li>
<li><a href="http://docs.drush.org/en/master/" rel="noopener" target="_blank">Drush Docs</a></li>
</ul>