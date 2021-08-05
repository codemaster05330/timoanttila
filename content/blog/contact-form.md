---
title: Create a simple contact form in HTML, PHP and SQL
createdAt: 2017-01-01T11:43:34.000Z
description: HTML Forms are one of the main points of interaction between a user and a web site. This tutorial teaches you how to make one.
tags: tutorials, drupal, php
---

**HTML Forms** are one of the main points of interaction between a user and a web site.

I mostly use modules for [Drupal](https://www.drupal.org/) when needed web forms, but sometimes clients need something special. Things that normal web forms can't provide. This tutorial teaches how to create a simple web form, validate its data and send it as an HTML email. I also use email provided by the form as the sender's email so the client can press reply when contacting the customer. You can also save all data to MySQL / MariaDB database if needed.

First, we need to create a form with basic text input fields and some radio box fields.

```HTML
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
<input placeholder="name" type="text" name="name" maxlength="30" autofocus required>
<input placeholder="email" type="text" name="email" maxlength=60 autocomplete=on required>
<textarea name=comment rows=5 cols=40 value=message required></textarea>
<ul>
<li><input name="list2" type="radio" value="Value 1" /></li>
<li><input name="list2" type="radio" value="Value 2" /></li>
</ul>
<input type="submit" value="Send" name="submit">
</form>
```

Notice that I used `<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>` instead of `#`. That's because the `htmlspecialchars()` function converts special characters to HTML entities. This prevents attackers from exploiting the code by injecting HTML or Javascript code (Cross-site Scripting attacks) in forms.

The name attribute is used to reference elements in PHP, or to reference form data after a form is submitted. The value attribute specifies the value that is sent to submit. The radio fields use the same name and those do not need foreach because only one selection can be active at a time.

Now that we have a form ready to use, we need to make PHP code which fetches submitted data from the field, process it and send an HTML email to whoever is the recipient of the message.

```PHP
<?php
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
$message = "<html><body>";
$message .= "<p>$comment</p>";
$message .= $list;
$message .= "</body></html>";

// Send mail mail($to, $subject, $message, $headers); ?>
<script type="text/javascript">window.location = "https://timoanttila.com/";</script>
<?php } ?>
```

## How to save all data from webform submissions to SQL database

You need to make a table with all rows you need to.

Put similar code after mail(). If you want a more secure method then make sql.php and put it somewhere where it's not accessible from the Internet and call it `include('/somewhere/sql.php');`.

```PHP
<?php
$servername = "Server IP";
$username = "Username";
$password = "Password";
$dbname = "Database";
$table = "Table";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);
$time = date("Y-m-d H:i");
$conn->query("INSERT INTO Form (Name, Email, Message, Up) VALUES ('$name', '$email', '$comment', '$time')");
$conn->close();
?>
```