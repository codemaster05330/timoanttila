---
title: Add or remove HTML class with vanilla JavaScript based on vertical scroll
description: Learn how to use vanilla JavaScript to add or remove CSS classes on HTML elements to change the appearance of the website when scrolling down.
createdAt: 2023-05-02T21:15:42+02:00
prevTitle: 'Secure your Ubuntu server with ease: automate security package updates'
prevUrl: ubuntu-server-automatic-security-updated
tags: tutorials, webdev, javascript, css
---

Adding or removing an HTML class with vanilla JavaScript based on vertical scroll can be a useful when wanting to change the appearance of the website when scrolling up or down. In this article, I'll show you how to change a CSS class based on the user's vertical scroll position using only vanilla JavaScript.

## Step 1: Add an event listener

The first step is to add an event listener to the window object that listens for the `scroll` event. This event fires every time the user scrolls the page vertically.

```javascript
window.addEventListener('scroll', function() {
  // code to be executed when scrolling occurs
});
```

## Step 2: Get the vertical scroll position

The next step is to get the current vertical scroll position of the user. You can do this by accessing the `pageYOffset` property of the window object. This property returns the number of pixels that the document has been scrolled vertically.

```javascript
window.addEventListener('scroll', function() {
  const verticalScrollPosition = window.pageYOffset;
  // code to be executed when scrolling occurs
});
```

## Step 3: Add or remove the HTML class

Now that you have the vertical scroll position, you can use it to add or remove an HTML class from an element on the page.

```javascript
const element = document.getElementById('head');
const classToAdd = 'your-new-class';

window.addEventListener('scroll', function() {
  const verticalScrollPosition = window.pageYOffset;
  const isActive = element.classList.contains(classToAdd);
  
  if (verticalScrollPosition > 100 && !isActive) {
    element.classList.add(classToAdd);
  } else {
    element.classList.remove(classToAdd);
  }
});
```

In the above example, the code adds an HTML class called `your-new-class` to the element with the ID `head` when the user scrolls down more than 100 pixels. If the user scrolls back up, the class is removed.

## Step 4: Optimize the Code

Changing classes on every scroll event can cause performance issues on your website. To optimize the code, you can use a technique called `debounce`, which limits the frequency of function calls.

```javascript
const element = document.getElementById('head');
const classToAdd = 'your-new-class';

window.addEventListener('scroll', debounce(function() {
  const verticalScrollPosition = window.pageYOffset;
  const isActive = element.classList.contains(classToAdd);
  
  if (verticalScrollPosition > 100 && !isActive) {
    element.classList.add(classToAdd);
  } else {
    element.classList.remove(classToAdd);
  }
}, 100));

function debounce(func, delay) {
  let timer;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      func.apply(context, args);
    }, delay);
  }
}
```

A debounce function that wraps the scroll event listener. This function limits the frequency of the function calls to every 100 milliseconds, which helps to optimize the performance of the code.

## Step 5: Add CSS

The final step is to add CSS to the HTML class that you added or removed in the previous step. In the example below, the class `your-new-class` is added to the element with the ID `head` when the user scrolls down more than 100 pixels.

```css
#head:not(.your-new-class) {
  background-color: #fff;
  color: #000;
}
#head.your-new-class {
  background-color: #000;
  color: #fff;
}
```

## Conclusion

Changing an HTML class with vanilla JavaScript based on vertical scroll can be a useful technique in web development. By using the steps outlined in this article, you can create dynamic effects on your web pages that enhance the user experience. Remember to optimize your code by using a debounce function to limit the frequency of function calls.

## Related Articles

- [Add or remove class with JQuery based on vertical scroll](/blog/add-or-remove-class-with-jquery-based-on-vertical-scroll/)
