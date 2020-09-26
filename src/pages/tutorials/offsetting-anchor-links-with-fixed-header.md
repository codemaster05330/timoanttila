---
title: How to leverage browser caching for images, CSS and JavaScript
pub:
- 4
- Oct
published: 2016-10-04T06:35:53+03:00
modified: 2016-10-04T06:35:53+03:00
summary: Using anchor links with a fixed header is a problem, as the body text may be hidden underneath the header. No JavaScript needed.
layout: tutorial
---

Using anchor links with a fixed header is a problem, as the body text may be hidden underneath the header as the browser's default offset is zero pixels from top. So, how to change the starting point to be 60px down from the top?

I have found two ways to handle this problem. First, I can use the empty space before or after ID. Most of the time that looks good if the header’s height is less than 60px. If header is higher than that’s probably not going and one must use another way to force the browser to scroll to the right position.

The best way to solve this problem is using padding and margin. First, use :before and padding to it (padding-top: 90px) to make enough space before the ID. Then, degree that same amount with margin (margin-top: -90px).

The reason I'm needing this is because I have fixed layers at the top of the page, so the comment is appearing overlapped behind the fixed header div.

Just in case, because of cross-browser compliance I prefer a solution that does not involve changing the container of the comment to fixed and positioning top minus the height of the header.

### HTML

```HTML
&lt;div class="jump" id="info"&gt;
&lt;h2&gt;Info&lt;/h2&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ex sed tellus viverra rutrum.&lt;/p&gt;
&lt;/div&gt;
```

### CSS

```CSS
.jump:before {
    content: "";
    display: block;
    padding-top: 90px; /* header height + empty space */
    margin-top: -50px; /* header height to degrees padding’s space */
}
```

You should also use <a href="/tutorials/animated-smooth-scrolling-effect" title="Animated smooth scrolling effect for one-page website">smooth scrolling</a> with anchor links.