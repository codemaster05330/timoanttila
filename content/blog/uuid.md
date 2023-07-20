---
title: A comparison of UUID and number ID
description: "Pros and cons of UUIDs and number IDs, and their performance in databases. Uniqueness, security with UUIDs; compact storage and readability with regular IDs."
createdAt: 2023-07-20T07:46:43+02:00
prevTitle: "Upgrading PHP 7.4 to 8.2: Navigating common code problems"
prevUrl: php-upgrade
tags: tutorials, webdev, uuid, database
---

In the world of database management, unique identifiers (primary keys) play a vital role in ensuring data integrity and efficient querying. Traditionally, number IDs have been the default choice for many applications. However, with the advent of Universally Unique Identifiers (UUIDs), developers now have an alternative option. UUID, as its name suggests, guarantees uniqueness across time and space, offering a robust solution for various scenarios.

The concept of UUID was first introduced by Dr. William Kent and later standardized by the Open Software Foundation (OSF) as part of the Distributed Computing Environment (DCE) in 1989.

This article aims to compare UUIDs and number IDs, examining their respective strengths and weaknesses, SQL query performance, and space requirements across popular databases like SQLite, MariaDB, PostgreSQL, and MongoDB.

## Universally Unique Identifier

A UUID is a 128-bit value that ensures uniqueness across time and space. It is represented as a 36-character hexadecimal string and is typically generated using various algorithms, such as UUIDv1 (time-based) or UUIDv4 (random-based).

### Pros of using UUIDs

**Uniqueness**  
UUIDs offer near-guaranteed uniqueness, even across distributed systems, reducing the risk of collisions.

**Security**  
UUIDs reveal no information about the underlying data, making them less prone to exploitation.

**Distributed systems**  
Particularly beneficial in distributed or decentralized environments where maintaining uniqueness is challenging.

**No centralized ID generator**  
UUIDs can be generated independently, eliminating the need for a centralized ID generator.

### Cons of using UUIDs

**Increased storage space**  
UUIDs require 128 bits (16 bytes) compared to number IDs, which are often smaller (e.g., 32-bit or 64-bit integers).

**Reduced readability**  
The 36-character hexadecimal representation makes UUIDs less human-readable than number IDs.

## Number ID

Number IDs are simple, incremental integers used to identify database records.

### Pros of using number IDs

**Smaller storage footprint**  
Number IDs are generally more compact than UUIDs, especially for 32-bit or 64-bit integer representations.

**Easy to read**  
Number IDs are human-readable and offer a better understanding of the sequence of records.

### Cons of using number IDs

**Uniqueness concerns**  
In distributed systems, maintaining uniqueness can become challenging without centralized control.

**Prone to exploitation**  
Incremental IDs may expose sensitive information or patterns about the data, making them vulnerable to attacks like enumeration.

## SQL query speed

The difference in speed between UUID and number ID can vary depending on the specific use case, the size of the dataset, the database management system, and the complexity of the queries being executed. In most cases, the difference in query execution time between the two ID types is relatively small, especially when dealing with individual queries.

It's essential to remember that modern database systems are optimized for efficient query execution, and the difference between using UUID and number ID, while measurable, is generally not significant enough to be a major concern for most applications. Developers should choose the ID type based on their specific requirements, data model, and the need for uniqueness and security rather than solely focusing on the speed difference. Proper database design, indexing strategies, and caching mechanisms can further enhance overall performance, regardless of the ID type used.

### INSERT queries

Scenario: You have an application that generates a high volume of records and continuously inserts new data into the database.

#### Number ID

Number IDs are typically generated using auto-increment or sequences, which ensures a fast and sequential insertion process. The database can easily maintain the next ID value, avoiding the need to search for a unique ID.

In this scenario, the insertion speed with numeric IDs is generally faster compared to UUIDs, as generating sequential numeric IDs requires less computation.

#### UUID

Generating a unique UUID for each record requires more computational effort than incrementing a numeric ID. In high-volume environments, generating UUIDs might lead to a higher overhead and slower insertion performance compared to numeric IDs.

### JOIN operations in complex queries

Scenario: You have a database with a large number of records and need to execute complex JOIN operations on multiple tables.

#### Number ID

Number IDs often utilize B-tree indexing efficiently for JOIN operations, making them faster to perform when querying. The smaller size of number IDs allows for better index performance, resulting in quicker JOIN operations, especially in large datasets.

#### UUID

UUIDs have a larger storage footprint and are more spread out across the index, which can affect the performance of JOIN operations. The larger size and less sequential nature of UUIDs may lead to slower JOINs, particularly in scenarios with complex queries involving multiple tables.

## SQL query speed and space needed in different databases

Let's compare the SQL query speed and space requirements for UUIDs and number IDs across different database systems:

### SQLite

SQLite is a lightweight, serverless database engine often used in embedded systems or mobile applications.

SQLite performs equally well with UUIDs and number IDs in simple SELECT queries, as it uses B-tree indexing efficiently for both data types.

Since SQLite uses dynamic typing, the storage space required for UUIDs and number IDs is almost the same.

### MariaDB / MySQL

MariaDB is a popular open-source relational database that evolved from MySQL.

Number IDs generally perform better than UUIDs in JOIN and WHERE clauses due to their smaller size, resulting in faster query execution.

UUIDs are stored with a fixed length of 16 bytes, while number IDs require varying storage space depending on their size, for example, 4 bytes for 32-bit integers and 8 bytes for 64-bit integers.

### PostgreSQL

PostgreSQL is a powerful open-source object-relational database management system.

PostgreSQL has excellent indexing capabilities for both UUIDs and number IDs. However, number IDs may still outperform UUIDs in complex queries due to their smaller size.

UUIDs are stored with a fixed length of 16 bytes, while number IDs require varying storage space depending on their size, for example, 4 bytes for 32-bit integers and 8 bytes for 64-bit integers.

### MongoDB

MongoDB is a NoSQL document-oriented database.

MongoDB performs similarly with UUIDs and number IDs in simple queries. However, number IDs may perform better in certain cases due to their smaller size.

MongoDB uses BSON (Binary JSON) to store data. UUIDs require 16 bytes, while number IDs' space usage depends on their size, same as MariaDB and PostgreSQL.

## Conclusion

Choosing between UUIDs and number IDs involves trade-offs related to uniqueness, security, storage space, and query performance. UUIDs are a tempting choice for applications requiring high uniqueness guarantees, particularly in remote systems. Number IDs, on the other hand, are preferred when storage efficiency and query performance are critical. Understanding your application's specific demands and characteristics will allow you to make an informed selection when selecting the proper ID type for your database.
