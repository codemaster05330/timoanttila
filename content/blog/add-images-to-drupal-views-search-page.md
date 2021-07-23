---
title: Add images to Drupal Views Search Page
createdAt: 2016-03-02T00:03:47.000Z
description: Drupal Views is a powerful tool for all kind of mixed results but how to add images to Views' Page when url have '?'. Blocks can't help you, but PHP can.
tags: tutorials, webdev, php
---

I had a problem how to print big hero images to custom made search page ([Drupal Views](https://www.drupal.org/project/views){:target="_blank"}) only for certain search results. [Drupal](https://www.drupal.org/){:target="_blank"}'s blocks do not understand urls with `?` so that option was out. The answer was very simple and my saviour was once again PHP. I added `Global: PHP` field to View's Header section.

I use Drupal's term reference fields as features for Products (Drupal Commerce) and Brand is one of them. First, I wanted to know if the search page result is "brand only". Those images should be visible only when there is only one brand name selected and nothing else.

```PHP
<?php
if(isset($_GET['field_brand_tid'])) {
    if(count($_GET) == 2 AND count($_GET['field_brand_tid']) == 1){
        $i = $_GET['field_brand_tid'][0];
        $term = taxonomy_term_load($i);
        $term = $term->name;
        $term = strtolower($term);
        $term = preg_replace('/\s+/', '', $term);
        echo "<img src='/sites/all/themes/themename/brand/$term.jpg' alt=''/>";
    }
}
?>
```

`var_dump($_GET)` gives something like this:

```PHP
array(2) { ["field_brand_tid"]=> array(1) { [0]=> string(1) "1" } ["q"]=> string(4) "search" }
```

First, there has to be at least one brand selected, if none found then this code is not executed. Then I want to know how many $_GET results there are because there can be only two; one for search (q) and one for the brand. After that we can check out the ID and the name of the brand and fix the name for the file name. strtolower makes the name lowercase and preg_replace removes all spaces. Now everything is ready for printing.

I really enjoyed this little challenge and big thanks for [Joonas](https://www.linkedin.com/in/joonaskolkka/){:target="_blank"} from [Comspot](https://www.comspot.fi/){:target="_blank"} for helping me out.