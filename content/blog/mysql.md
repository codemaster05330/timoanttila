---
title: A beginner's guide to MySQL / MariaDB
createdAt: 2015-10-20T03:24:42+02:00
updatedAt: 2022-12-29T21:25:49+02:00
description: A basic tutorial on how to take control of a MySQL / MariaDB server, create a database and a user, and store data in a MySQL database.
tags: tutorials, servers, sql
---

Normally, you can complete all tasks with Sequel Pro, MySQL Workbench, HeidiSQL, DBeaver, or similar software, but there are times when you need to know how to use basic MySQL commands to complete your tasks.

## MySQL / MariaDB installation on Ubuntu, Debian, and CentOS

If MySQL is not already installed on your server, you can quickly download it. Getting the correct packets depends on your system, but it's very simple if you're running Debian / Ubuntu or CentOS. When the system prompts you to enter a password for the root account, use a complex one. Use a different password for your server's root / superuser account.

### Debian and Ubuntu

```Shell
sudo apt-get install mysql-server
```

### CentOS:

```Shell
sudo yum install mysql-server
/etc/init.d/mysqld start
```

Now you should have the MySQL server up and running.

### Starting server

You can start, restart and stop the server easily:

```Shell
sudo /etc/init.d/mysql restart | stop | start
```

## How to access the MySQL / MariaDB server

For creating and managing databases and users, I prefer a graphical interface, but you can also connect to the MySQL server by typing the following command into terminal:

```Shell
mysql -u username -p
```

If this is your first time logging in, you probably don't have any other users other than root, and the password for that user is whatever you entered when you installed the MySQL server.

Remember that all MySQL commands must be followed by a semicolon (;). Without it, the command will not run.

MySQL commands are typically written in uppercase, while everything else, such as database and user names, is written in lowercase to make them easier to distinguish. The MySQL command line, on the other hand, is not case sensitive, so you can type everything in lowercase if you prefer.

## How to create, access and delete a MySQL / MariaDB Database

Let's create a test database. Log in as root to the MySQL server and type:

```SQL
CREATE DATABASE test;
CREATE DATABASE test CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

If you want to know what databases are available:

```SQL
SHOW DATABASES;
```

The command above shows all the databases that are created in the MySQL server.

After creating a database, you can start using it and store information in it. Open the database by typing:

```SQL
USE test;
```

You are now in the database and have the ability to create tables. Keep in mind that table and database names are case sensitive.

## How to create a table inside of the database

Let's call this table test. Every table must have a **PRIMARY KEY**, and in this case, the key is **AUTO INCREMENT**, which means that each row is automatically numbered. Because it identifies rows, the key must be unique.

A name and birthday will also be included. **VARCHAR** is used for the name, and **DATE** is used for the birthday. MySQL requires dates to be formatted as **yyyy-mm-dd**.

```SQL
CREATE TABLE test (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20),
    bday DATE
);
```

Now you can see what you just did by typing:

```SQL
SHOW TABLES;
```

## Structure

```SQL
DESCRIBE test;
```

## How to add information to a MySQL table

Use this format to insert information into each row:

```SQL
INSERT INTO 'test' ('id','name','food','confirmed','signup_date')
VALUES (NULL, "Max", '1977-07-17');
```

If you want to see what table has been eating:

```SQL
SELECT * FROM test;
```

You can also update existing data:

```SQL
UPDATE 'test' SET 'bday' = '1981-07-17' WHERE 'test'.'name' ='Max';
```

### How to delete a database

When the database is no longer needed you can drop it.

```SQL
DROP DATABASE test;
```

## How to use mysqldump to get backups or schema

I typically use the `mysqldump` command to backup databases, but it can also extract a schema without data. I use it occasionally when saving initial settings to Github.

```SQL
mysqldump -u youruser -p yourdatabase
```

The `-u` flag specifies the username, while the '-p' flag specifies that a password will be supplied. You will be prompted for your password after pressing `<enter>`.

The password can also be supplied on the command line, but there must be no space between the `-p` flag and the password. For instance, if the password was `tuspe`, do the following:

```SQL
mysqldump --d -u youruser -ptuspe yourdatabase
```

### Schema only

The `-d` flag says not to include data in the dump. Alternatively you can use `–no-data` instead if you find that easier to remember:

```SQL
mysqldump -d -u youruser -p yourdatabase  
mysqldump --no-data -u youruser -p yourdatabase
```

## How to create a new MySQL / MariaDB user

```SQL
CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
```

There should be only one database per user. It is more secure.

## MySQL user permission

The following command grants the user full access to the specified database, but the user cannot grant or take privileges from other users. The user has the ability to manage the database, create tables and data, and delete everything. This is the most common method of granting database access.

```SQL
GRANT ALL PRIVILEGES ON test.* TO 'newuser'@'localhost';
```

If you really want to, you can grant the user superuser privileges using the grant option. When working with CMS or apps, this is not recommended.

```SQL
GRANT ALL PRIVILEGES ON mydb.* TO 'myuser'@'%' WITH GRANT OPTION;
```

If you do not want to grant all rights to the database or table, you can grant specific permissions.

```SQL
GRANT [type of permission] ON [database name].[table name] TO 'username'@'localhost';
```

You can also revoke some rights if the user no longer requires them:

```SQL
REVOKE [type of permission] ON [database name].[table name] FROM 'username'@'localhost';
```

You should flush privileges after making any changes.

```SQL
FLUSH PRIVILEGES;
```

## Change user password

```SQL
ALTER USER 'timo'@'localhost' IDENTIFIED BY 'newpassword?';
```

## Delete a MySQL / MariaDB user

```SQL
DROP USER 'demo'@'localhost';
```

## Optimize databases

```SQL
mysqlcheck -u username -p --optimize --all-databases
```

Thank you for your time!
