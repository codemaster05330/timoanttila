---
title: Customizing theme to add image width and height automatically in WordPress
description: How to add the width and height attributes to all images in WordPress automatically
createdAt: 2023-01-16T19:07:28+02:00
nextTitle: Running NuxtJS in a Docker container
nextUrl: nuxtjs-docker
prevTitle: Configure SMTP on WordPress without using a plugin
prevUrl: wordpress-smtp
tags: tutorials, wordpress, seo, php, mail
---

Fast page loading and keeping previously loaded text in place are important for site visitors and Google's PageSpeed results.

If images are used on top of or among the text, the width and height of the images must be known so that the browser can define a suitable area for the image before it is loaded. This prevents a layout shift as the image downloads, which is an important factor for Chrome and Google PageSpeed's cumulative layout shift metric.

## Customizing theme to add image width and height automatically

Although WordPress and our frequently used plugin ShortPixel cannot automatically add width and height to images, you can make the theme generate the necessary information by editing the `functions.php` file in the WordPress theme.

Add the following code to the theme's `functions.php` file. Before you begin customizing the code, please make a backup copy. Better safe than sorry.

```PHP
function imgSize($content){
  $pattern = '/<img [^>]*?src="(https?:\/\/[^"]+?)"[^>]*?>/iu';
  preg_match_all($pattern, $content, $images);

  foreach ($images[0] as $index => $img) {
    if (strpos($img, "width=") !== false && strpos($img, "height=") !== false) {
      continue;
    }

    $imgUrl = $imgs[1][$index];
    $imgSize = @getimagesize($imgUrl);
      
    if (empty($imgSize)) {
      continue;
    }

    $replacedImg = str_replace("<img ", "<img " . $imgSize[3] . " ", $imgs[0][$index]);
    $content = str_replace($img, $replacedImg, $content);
  }
  return $content;
}

add_filter("the_content", "imgSize");
```

Thanks for reading!
