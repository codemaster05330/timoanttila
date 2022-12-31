---
title: Offsetting achor links with fixed header (CSS only)
description: When using anchor links with a fixed header, the body text may be hidden beneath the header. CSS only, no need for JavaScript.
createdAt: 2016-10-04T06:35:53+02:00
nextTitle: Embed Flickr photo albums on ProcessWire
nextUrl: flickr-photo-albums-on-processwire
prevTitle: Leverage browser caching for images, CSS and JavaScript apache2
prevUrl: leverage-browser-caching
tags: tutorials, html, css
---

When using anchor links with a fixed header, the body text may be hidden beneath the header because the browser's default offset is zero pixels from the top. So, how do I make the starting point 60px lower from the top?

I've come up with two solutions to this problem. First, I have the option of inserting an empty space before or after ID. If the header height is less than 60px, this usually looks good. If the header is higher than that, another method must be used to force the browser to scroll to the correct position.

The best way to solve this problem is using padding and margin. First, use :before and padding to it (padding-top: 90px) to make enough space before the ID. Then, degree that same amount with margin (margin-top: -90px).

The reason I'm needing this is because I have fixed layers at the top of the page, so the content is appearing overlapped behind the fixed header div.

Just in case, because of cross-browser compliance I prefer a solution that does not involve changing the container of the content to fixed and positioning top minus the height of the header.

### HTML

```HTML
<div class="jump" id="info">
<h2>Info</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ex sed tellus viverra rutrum.</p>
</div>
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

You should also use "[Animated smooth scrolling effect for one-page website](/blog/animated-smooth-scrolling-effect/)" with anchor links.
