---
title: How to create a simple contact form in HTML and PHP
pub:
- 1
- Jan
published: 2017-01-01T11:43:34+02:00
modified: 2017-01-01T11:43:34+02:00
summary: HTML Forms are one of the main points of interaction between a user and a web site. This tutorial teaches you how to make one.
layout: tutorial
---

**HTML Forms** are one of the main points of interaction between a user and a web site.

I mostly use modules for <a href="https://www.drupal.org/" rel="noopener" target="_blank">Drupal</a> when needed web forms, but sometimes clients need something special. Things that normal web forms can’t provide. This tutorial teaches how to create a simple web form, validate its data and send it as an HTML email. I also use email provided by the form as the sender's email so the client can press reply when contacting the customer. You can also save all data to MySQL / MariaDB database if needed.

First, we need to create a form with basic text input fields and some radio box fields.

```HTML
&lt;form method="post" action="&lt;?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?&gt;"&gt;
&lt;input placeholder="name" type="text" name="name" maxlength="30" autofocus required&gt;
&lt;input placeholder="email" type="text" name="email" maxlength=60 autocomplete=on required&gt;
&lt;textarea name=comment rows=5 cols=40 value=message required&gt;&lt;/textarea&gt;
&lt;ul&gt;
&lt;li&gt;&lt;input name="list2" type="radio" value="Value 1" /&gt;&lt;/li&gt;
&lt;li&gt;&lt;input name="list2" type="radio" value="Value 2" /&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;input type="submit" value="Send" name="submit"&gt;
&lt;/form&gt;
```

Notice that I used `&lt;?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?&gt;` instead of `#`. That's because the `htmlspecialchars()` function converts special characters to HTML entities. This prevents attackers from exploiting the code by injecting HTML or Javascript code (Cross-site Scripting attacks) in forms.

The name attribute is used to reference elements in PHP, or to reference form data after a form is submitted. The value attribute specifies the value that is sent to submit. The radio fields use the same name and those do not need foreach because only one selection can be active at a time.

Now that we have a form ready to use, we need to make PHP code which fetches submitted data from the field, process it and send an HTML email to whoever is the recipient of the message.

```PHP
&lt;?php
// Things to happen after pressing Submit.
if($_POST["submit"]) {

// Define variables and set to empty values.
$list = $data = "";

// Fetch and validate data from text fields
$name = strip_tags($_POST['name']); // Sender’s name
$email = strip_tags($_POST["email"]); // Sender’s address
$comment = strip_tags($_POST["comment"]); // Message

// Fetch data from radio button
$list = $_POST["list2"];

$to = "info@example.com"; // Recipient of the message
$subject = "Message header";
$headers = "From: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$message = "&lt;html&gt;&lt;body&gt;";
$message .= "&lt;p&gt;$comment&lt;/p&gt;";
$message .= $list;
$message .= "&lt;/body&gt;&lt;/html&gt;";

// Send mail mail($to, $subject, $message, $headers); ?&gt;
&lt;script type="text/javascript"&gt;window.location = "https://timoanttila.com/";&lt;/script&gt;
&lt;?php } ?&gt;
```

## How to save all data from webform submissions to SQL database

You need to make a table with all rows you need to.

Put similar code after mail(). If you want a more secure method then make sql.php and put it somewhere where it's not accessible from the Internet and call it `include('/somewhere/sql.php');`.

```PHP
&lt;?php
$servername = "Server IP";
$username = "Username";
$password = "Password";
$dbname = "Database";
$table = "Table";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn-&gt;connect_error) die("Connection failed: " . $conn-&gt;connect_error);
$time = date("Y-m-d H:i");
$conn-&gt;query("INSERT INTO Form (Name, Email, Message, Up) VALUES ('$name', '$email', '$comment', '$time')");
$conn-&gt;close();
?&gt;
```