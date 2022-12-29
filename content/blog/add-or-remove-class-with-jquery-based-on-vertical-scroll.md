---
title: Add or remove class with JQuery based on vertical scroll
createdAt: 2016-03-02T04:20:02.000Z
description: A tutorial to show how to use JavaScript and CSS to change the appearance of when scrolling down on the website.
tags: tutorials, webdev, jquery
---

I often use **JQuery** to change appearance of `<header>` when scrolling down on the website. I like to make it smaller after a certain pixel amount. The best way to do that is change a class name for `<header>` element with JavaScript / JQuery. You need to load JQuery library before this script to make it work.

```JQuery
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

This code calls the `.scroll() JavaScript event` and then use `.scrollTop()` to check if there are more than 150 pixels from the top of the browser. If there is more, add a new class name small to the header element. If there are less pixels than 150, remove the class name from the element.

Then just add extra CSS styles for `header.small`.

```JQuery
header { height: 50px }
header .menu a { height: 1.2em }
.small { height: 25px }
.small .menu a { height: 1em }
```

So simple but still so powerful. :)
