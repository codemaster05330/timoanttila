---
title: A beginner's guide to MySQL / MariaDB
createdAt: 2015-10-20T03:24:42.000Z
description: A basic tutorial how to take control of MySQL / MariaDB server, how to make a database and a user, and how to store information in the MySQL database.
tags: tutorials, servers, sql
---

Normally, you can do everything with MySQL Workbench or software like that, but sometimes, you need to know how to use basic MySQL commands to complete your tasks.

## How to install MySQL / MariaDB on Ubuntu, Debian and CentOS

If you don't have MySQL installed on your server, you can quickly download it. Getting the right packets depends on your system, but it's very easy if you're using Debian / Ubuntu based systems or CentOS. Use a complex password for the root account when the system asks you to type it. Do not use same password what you use for your server's root / superuser account.

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

I prefer a graphical interface for creating and managing databases and users (ex. [MySQL Workbench](https://www.mysql.com/products/workbench/), [HeidiSQL](https://www.heidisql.com/), [phpMyAdmin](https://www.phpmyadmin.net/), but you can also connect to the MySQL server by typing the following command into terminal:

```Shell
mysql -u username -p
```

If you're logging in the first time, then you probably don't have any other users than root and the password for that user is whatever you put when you installed the MySQL server.

Remember, all MySQL commands end with a semicolon (;). The command will not execute without it.

It is common practise that MySQL commands are written in uppercase and everything else, like database and user names, are in lowercase to make them easier to distinguish. However, the MySQL command line is not case sensitive and you can write everything in lowercase if you like to.

## How to create, access and delete a MySQL / MariaDB Database

Let's make a database called test. Log in to the MySQL server as root and type:

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

Now you're in the database and can create tables. Remember, table and database names are case sensitive.

## How to create a table inside of the database

Let's create a table called test. There has to be a **PRIMARY KEY** in every table and in this case the key is **AUTO_INCREMENT** meaning it automatically numbers each row. The key must be unique, because rows are identified by it.

There will also be a name and birthday. Name is using **VARCHAR** and bday is **DATE**. MySQL requires that dates be written as **yyyy-mm-dd**.

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

## How to create a new MySQL / MariaDB user

```SQL
CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
```

There should be only one database per user. It is more secure.

## MySQL user permission

The next command will give all the rights to the certain database but the user can not grant privileges to other users or take anything from them. The user can control the database, create tables and data, and drop everything. That is the most common way to give access to the database.

```SQL
GRANT ALL PRIVILEGES ON test.* TO 'newuser'@'localhost';
```

If you really want to, you can also give the user superuser rights with the grant option. That is not recommended when working with CMS or apps.

```SQL
GRANT ALL PRIVILEGES ON mydb.* TO 'myuser'@'%' WITH GRANT OPTION;
```

You can also give certain permissions to the database or the table if you don't want to give all the rights.

```SQL
GRANT [type of permission] ON [database name].[table name] TO 'username'@'localhost';
```

Or you can revoke some rights if the user don't need them:

```SQL
REVOKE [type of permission] ON [database name].[table name] FROM 'username'@'localhost';
```

After making a change, you should flush privileges.

```SQL
FLUSH PRIVILEGES;
```

## Delete a MySQL / MariaDB user

```SQL
DROP USER 'demo'@'localhost';
```

## Optimize databases

```SQL
mysqlcheck -u username -p --optimize --all-databases
```

Thanks for reading!