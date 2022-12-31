---
title: How to create a simple popup
createdAt: 2015-09-16T22:03:47.000Z
description: Simple PHP / JavaScript popup created for Drupal but can be used with any platform. Popup works only once and again after the cookie is cleared.
tags: tutorials, php, html, css
nextUrl: generating-ssh-keys
nextTitle: Generate SSH keys and login to servers without passwords
---

While working on Drupal, sometimes clients want something more special like a popup window with questions or images. We could use existing modules, but they always require enactment and you never know what you really get and most of them do not even support everything that we need, so I decided to make my own version.

I wanted to keep it simple. This example is for image and link. Popup jumps in only once per browser and stays off until the cookie is cleared or expired. If you know anyway to make it better, please leave a comment and tell me how.

So, we want to know if a visitor is here for the first time or is (s)he has been here before. The simplest way to do it is ask nicely if the browser has any cookies to offer. `Isset()` will return `FALSE` if testing a variable that has been set to `NULL`.

If the answer is `FALSE` then serve a popup and a cookie for the poor browser and let's get this party started.
PHP and HTML

As you can see below, I have used variables for name, description and time. I recommend using a descriptive and unique name for the name because we don't want to mess with other cookies which may have been set for the same site. Doesn't really matter what you put in the $item. Time determines how long you want to keep it active (seconds).

```PHP
<?php
$name = "cookie_name";
$item = "description_or_something_else";
$int = 604800;
if(!isset($_COOKIE[$name])){ setcookie($name,$item,time()+$int); ?>
<div id="popup"><div class="wrap"><a href="your_link">
<img src="your_image.jpg" alt="insert_title"></a>
<a href="#" class="stop">x</a></div></div>
<?php } ?>
```

PHP part is ready and the popup is working. It needs a little bit of CSS and a working close button (X in the right corner).
JavaScript

I don't know which is the best way to go, JavaScript or PHP, when a visitor wants to close the popup. I used a simple JS script for that. If a visitor presses X (class stop) then add class nogo to `#popup`. Simple.

```JavaScript
<script>
(function ($) {
	$(".stop").click(function() {
	$("#popup").toggleClass("nogo");
	return false; });
})
(jQuery);
</script>
```

## CSS

Last but never least, let's make it look nicer. The popup must be top of everything so I used position: absolute and high z-index to make sure of that. It covers the entire screen. After that I just drop .wrap element to the right place.

```CSS
#popup {
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0; left: 0;
	background: rgba(0,0,0,.7);
	z-index: 999;
}
#popup .wrap {
	width: 730px;
	background: #fff;
	margin: 15vh auto 0;
	padding: 25px 25px 23px;
	-moz-border-radius: 6px;
	-webkit-border-radius: 6px;
	border-radius: 6px;
	position: relative;
}
#popup .stop {
	position: absolute;
	top: 5px;
	right: 7px;
	width: 15px;
	text-align: center;
	font-size: 1.5em;
}
#popup.nogo { display: none; }
```
