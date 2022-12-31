---
title: Add or remove class with JQuery based on vertical scroll
createdAt: 2016-03-02T04:20:02+02:00
updatedAt: 2022-12-31T10:58:59+02:00
description: A tutorial on how to use JQuery and CSS to change the appearance of the website when scrolling down.
tags: tutorials, webdev, jquery
---

When scrolling down a website, I use [JQuery](https://jquery.com/) to change the appearance of the `<header>` element. I like to make it smaller after a certain number of pixels. The best way to accomplish this is to use JavaScript / JQuery to change the class name for the `<header>` element. To make this script work, you must first load the JQuery library.

Loading the JQuery library is easy. Simply add the following line to your HTML file after the `<footer>` element. You can also add it to the `<head>`element to load it faster, but for best performance, load it just before it is needed.

```HTML
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
<script>
$(window).scroll(function() {
  if ($(this).scrollTop() > 150){
    $('header').addClass("small");
  } else {
    $('header').removeClass("small");
  }
});
</script>
```

This code invokes the `.scroll()` JavaScript event and then uses `.scrollTop()` to determine whether there are more than 150 pixels from the browser's top. If the number of pixels exceeds 150, add a new class name `small` to the header element. If the element has fewer than 150 pixels, remove the class name.

Then simply add additional CSS styles for `header.small`.

```CSS
header { height: 50px }
header .menu a { height: 1.2em }
.small { height: 25px }
.small .menu a { height: 1em }
```

So simple, yet so effective. :)
