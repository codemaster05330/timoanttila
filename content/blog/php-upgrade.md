---
title: 'Upgrading PHP 7.4 to 8.2: Navigating common code problems'
description: Learn how to safely upgrade your PHP website from version 7.4 to 8.2, including how to navigate common code problems and compatibility issues.
createdAt: 2023-05-03T09:06:40+02:00
prevTitle: Add or remove HTML class with vanilla JavaScript based on vertical scroll
prevUrl: change-class-with-javascript-based-on-vertical-scroll
tags: tutorials, webdev, php
---

[PHP](https://www.php.net/) is a web development server-side scripting language. It's commonly used to build web pages and applications. PHP is popular among web developers because of its ease of use, flexibility, and extensive library and framework support. According to [W3Techs data](https://w3techs.com/technologies/details/pl-php), PHP is used by 77.4% of all the websites whose server-side programming language we know. So, nearly 8 out of every 10 websites you visit on the Internet use PHP in some way.

Support for PHP 7.4 ended on November 28, 2022. This means that the PHP development team will no longer provide bug fixes, security updates, or other forms of support for PHP 7.4.

Upgrading to PHP 8.2 is critical for security because running an outdated and unsupported version of PHP can expose your website or application to security vulnerabilities and exploits. Hackers may use these flaws to gain unauthorized access to your system, steal sensitive data, or cause other types of damage.

By upgrading to PHP 8.2, you can ensure that you have access to the latest security patches and updates, helping to keep your website or application secure and protected from potential threats.

Additionally, upgrading to PHP 8.2 can also bring significant performance improvements and new features, allowing you to take advantage of the latest technologies and tools available in the PHP ecosystem.

## Differences between PHP 7.4 and 8.2

A lot has changed, and here are some of the most significant differences between PHP 7.4 and 8.2.

### Release notes
-  [PHP 8.0](https://www.php.net/releases/8.0/en.php)
-  [PHP 8.1](https://www.php.net/releases/8.1/en.php)
-  [PHP 8.2](https://www.php.net/releases/8.2/en.php)

### Performance

PHP 8.2 brings significant performance improvements over PHP 7.4, including faster execution times and reduced memory usage.

### Type system

PHP 8.2 introduces a more strict and expressive type system, which makes it easier to catch type errors in your code. The new type of system includes several changes and improvements, including the following:

**Mixed types** can be used to represent any type of value. This is useful when working with code that has dynamic types or when dealing with legacy code.

**Union types** allow you to specify that a parameter or return value can be of more than one type. For example, you can define a function that accepts either a string or an array as an argument.

**Named arguments** allow you to pass arguments to a function or method by name, rather than by position. This can make your code more readable and easier to understand.

**Improved type inference** allows the compiler to automatically deduce the type of a variable based on its context. This can help catch errors and make your code more concise.

Overall, the new type system in PHP 8.2 provides more ways to define and enforce types in your code, which can lead to fewer errors and more robust applications.

### JIT compiler

PHP 8.2 includes a new JIT (Just-In-Time) compiler, an experimental feature, which compiles PHP code into native machine code at runtime, which can result in faster execution times for certain types of applications.

The JIT compiler works by analyzing the code as it is executed and generating optimized machine code for the parts of the code that are executed most frequently. This can result in significant performance improvements for applications that perform a lot of computation or looping.

However, it's worth noting that the JIT compiler is not a silver bullet for performance and may not provide significant performance benefits for all types of applications. In some cases, the overhead of compiling the code at runtime may actually slow down performance.

### Constructor property promotion

Constructor property promotion allows for a more concise definition and initialization of object properties in a class. With constructor property promotion, you can define a class and its properties in a single statement. For example:

```php
class Person {
  public function __construct(
    public string $name, 
    public int $age,
    public ?string $address = null
  ) {}
}

$person = new Person('John Doe', 35, '123 Main St.');
```

### Null-safe operator

Traditionally, accessing an object property or method that doesn't exist or is null would result in a fatal error in PHP. To avoid this, developers would often need to write extra code to check for null values, which could make the code more complex and verbose.

With the null-safe operator, you can now safely access object properties and methods without the risk of causing a fatal error. Here's an example:

```php
$address = $person?->getAddress()?->getStreet();
```

In this example, we're accessing the `getAddress()` method of the `$person` object. If `$person` is null, the expression will simply return null and no fatal error will occur. Similarly, if the result of `getAddress()` is null, the expression will return null and no fatal error will occur when accessing the `getStreet()` method.

The null-safe operator can help simplify code and reduce the risk of fatal errors caused by null values. However, it's worth noting that the null-safe operator should be used with caution, as it can potentially mask errors or hide bugs if not used properly. It's important to thoroughly test your code and use best practices when using the null-safe operator.

### Improvements to error handling

PHP 8.2 includes several improvements to error handling, making it easier to identify and debug errors in your code.

One of the key improvements is the addition of a new `--rethrow `option for the `php` command-line interface (CLI). This option allows errors to be rethrown to the caller instead of being caught and handled by the error handler. This can make it easier to debug errors by providing more context about where the error occurred and what caused it.

Furthermore, PHP 8.2 introduces several new error types and codes, making it easier to identify and handle specific types of errors. For example, there is now a `TypeError` code for type declaration errors, as well as a `ValueError` code for invalid or unexpected values.

Finally, PHP 8.2 includes a new `throw` expression for more concise and expressive error handling. With the throw expression, you can now `throw` an exception directly in an expression, rather than needing to write a separate statement.

Overall, the improvements to error handling in PHP 8.2 can make it easier to identify and debug errors in your code, ultimately improving the quality and reliability of your PHP applications.


## Common code problems when upgrading to PHP 8.2

Upgrading a PHP website or application from version 7.4 to 8.2 is a significant step that requires careful planning and execution PHP 8.2 includes many performance enhancements, new features, and bug fixes that will improve the overall functionality of your application. However, the upgrade process may introduce compatibility and code issues that must be addressed to ensure a smooth transition.

### Deprecated features

PHP 8.2 deprecates several functions and features that were available in earlier versions. It's essential to review your codebase and identify any deprecated features that you're using. You can use tools like PHP Deprecated Detector to identify these features automatically. Once you've identified them, you can update your code to use the recommended alternatives or remove the deprecated features altogether.

### Type errors

PHP 8.2 introduces stricter type checking, which can highlight type errors in your code that were previously ignored. These errors can be caused by passing an argument of the wrong type to a function or method or returning a value of the wrong type from a function. To fix these errors, you need to update your code to use the correct data types.

```php
function add(int $a, int $b) {
  return $a + $b;
}
$result = add(5, "10");
```

In this example, I define the `add` function, which takes two integer parameters and returns their sum. When we call the `add` function, we pass a string as the second argument rather than an integer. This will result in a `TypeError` with the following message in PHP 8.2:


```php
TypeError: Argument 2 passed to add() must be of the type int, string given in...
```

This error message clearly indicates that the add function expected an integer as the second argument but instead received a string.

In the following example, I attempt to use the `count()` function on the null or undefined variable `$myArray`. This will result in a `TypeError` in PHP 8.2.

```php
$myArray = null; // Not defined or null
if (count($myArray)) {}
if (in_array("something", $myArray)) {}

Uncaught TypeError: count(): Argument #1 ($array) must be of type array, null given
Uncaught TypeError: in_array(): Argument #2 ($haystack) must be of type array, null given
```

This error message clearly indicates that the `count()` function was expecting a non-null array as its first argument, but received null instead. To avoid this error, you can use the null-safe operator `?` to check if the array is null before calling `count():`

```php
$count = $myArray ? count($myArray) : 0;
```

We use the ternary operator to check if `$myArray` is null. If it is, we set `$count` to 0. If it's not null, we call `count($myArray)` to get the number of elements in the array.

By providing more specific error messages for type errors, PHP 8.2 can help developers identify and fix issues in their code more quickly and easily.

### Namespace conflicts

PHP 8.2 introduces several new functions and classes that may conflict with existing functions and classes in your codebase. To avoid these conflicts, you can update your code to use namespaces, which provide a way to organize code and avoid naming collisions.

### Compatibility issues with third-party modules

If your PHP application uses third-party modules, you need to ensure that they're compatible with PHP 8.2 before upgrading. You can check the module's documentation or contact the module's developer for compatibility information. If the module isn't compatible, you may need to find an alternative or update the module's code yourself.

## How to upgrade your PHP website safely

Before making any changes, it's essential to create a backup of your current codebase and database. This ensures that you can roll back to the previous version in case of any issues.

### Test your codebase on a local environment

You can set up a local environment with PHP 8.2 and test your codebase to identify any compatibility issues or code problems. This helps you to address these issues before deploying the updated code to your production environment.

Once you've identified and fixed any code problems, you can update your codebase to use PHP 8.2. This involves updating your web server configuration and any dependencies that your codebase relies on.

After updating your codebase, it's essential to test it on a staging environment that mirrors your production environment. This helps you to identify any issues that may have been missed during local testing.

Once you've tested your codebase on a staging environment and verified that it's working correctly, you can deploy it to your production environment.

## Conclusion

Upgrading your PHP website or application from version 7.4 to 8.2 can enhance its performance and functionality. However, it's crucial to identify and address any compatibility issues and code problems before upgrading to ensure a smooth transition. By following the steps outlined above, you can safely upgrade your PHP application to version 8.2 and enjoy its benefits.
