# Basics

> For resources, see the end of this file

## PHP types

Every single expression in PHP has one of the following built-in types depending on its value:

- `null`
- `bool`
- `int`
- `float` (floating-point number)
- `string`
- `array`
- `object`
- `callable`
- `resource`

---

#### Callable <p>notesforproff - php section 9.5</p>

- anything which can be called as a **callback** such as `anonymous` functions, `static` classes, specific `Object/Class` Methods,`Objects` themselves and others.
- Callbacks can be denoted by `callable` type hint. For example:

```php
$callable = function(){
return 'value';
}; // Note 'callable' and closures end with ';'
function call_something(callable $fn) {
call_user_func($fn);
}
call_something($callable);
```

- Some functions like `call_user_func()` or `usort()` accept user-defined callback functions as a parameter. Callback functions can not only be simple functions, but also object methods, including static class methods.
- A PHP function is passed by its name as a string.

For example:

```php
// An example callback function
function my_callback_function() {
    echo 'hello world!';
}

// An example callback method
class MyClass {
    static function myCallbackMethod() {
        echo 'Hello World!';
    }
}

// Type 1: Simple callback
call_user_func('my_callback_function');

// Type 2: Static class method call
call_user_func(array('MyClass', 'myCallbackMethod'));

// Type 3: Object method call
$obj = new MyClass();
call_user_func(array($obj, 'myCallbackMethod'));

// Type 4: Static class method call
call_user_func('MyClass::myCallbackMethod');

// Type 5: Relative static class method call
class A {
    public static function who() {
        echo "A\n";
    }
}

class B extends A {
    public static function who() {
        echo "B\n";
    }
}

call_user_func(array('B', 'parent::who')); // A, deprecated as of PHP 8.2.0

// Type 6: Objects implementing __invoke can be used as callables
class C {
    public function __invoke($name) {
        echo 'Hello ', $name, "\n";
    }
}

$c = new C();
call_user_func($c, 'PHP!');
?>
```

- PHP is a dynamically typed language, which means that by default there is no need to `.....`
- To check the value and type of an expression, use the `var_dump()`
- to check if an expression is of a certain type use the `is_type` functions instead.

practices:

```php
<?php
$a_bool = true;   // a bool
$a_str  = "foo";  // a string
$a_str2 = 'foo';  // a string
$an_int = 12;     // an int

echo get_debug_type($a_bool), "\n";
echo get_debug_type($a_str), "\n";

// If $an_int is an integer, increment it by four
if (is_int($an_int)) {
    $an_int += 4;
}
var_dump($an_int);

// If $a_bool is a string, print it out
if (is_string($a_bool)) {
    echo "String: $a_bool";
}
?>
```

## Variables Scope

<p>see notesforproffesionals-php section 3</p>

- **variable scope** = visibility thought out PHP scope blocks which defined by functions, classes and a global scope.
- **Super global variable**: built-in variables that are always available in **all scope** and to access them within functions or methods, there is no need to do `global $variable` or to pass them as parameters in your functions.

Examples:

- `$GLOBALS` - References all variables available in global scope
- `$_SERVER` - Server and execution environment information (info such as `headers,paths and script locations`)
- `$_GET` - HTTP GET variables
- `$_POST` - HTTP POST variables
- `$_FILES` - HTTP File Upload variables
- `$_COOKIE` - HTTP Cookies
- `$_SESSION` - Session variables
- `$_REQUEST` - HTTP Request variables
- `$_ENV` - Environment variables

- **Static properties and variables** (inside classes declared by: `public static int $variable`) is same as **global variable** and doesn't require an instantiation of the class.
- **Functions can also define static variables inside their own scope by: `static $variable`**. This useful for example to save data after function/method is terminated.

#### **User-defined global variables**

- **global scope** is the scope outside of any function or class.
- When a PHP script includes another (using `include`
  or `require`) the scope remains the same.
- If a script is included outside of any `function` or `class`, it's global variables are included in the same global scope, but if a script is included from within a `function`, the variables in the included script are in the **scope of the function**.

> Note: Using global keyword outside a function is not an error. It can be used if the file is included from inside a function.

- To create an access **user-defined global variables** within the scope of a `function` or `class` method, the `global` keyword can be used OR via the `$GLOBALS` array which is a **superglobal** array contains references to all variables which are currently defined of the script. the variable names are the keys of the array(`[$variable_name => variable_content]`).
  For example:

```php
$myGlobal = "global"; // declare a variable outside of scope
function test()
{
 $myLocal = "local"; // declare variable inside of scope
 // both variables are printed
 var_dump($myLocal);//string 'local' (length=5)
 var_dump($GLOBALS["myGlobal"]);//string 'global' (length=6)
}
test(); // run function

// only $myGlobal is printed since $myLocal is not globally scoped
var_dump($myLocal); //null
var_dump($myGlobal);//string 'global' (length=6)
```

- Two options to **becoming global:**

  1. **global keyword**

  ```php
  function test()
  {
  global $myLocal;// can not be (global $myLocal="local";), it must be separated
  $myLocal = "local";
  var_dump($myLocal);
  var_dump($GLOBALS["myGlobal"]);
  }
  ```

  2. **`$GLOBALS` Array**

  ```php
  function test()
  {
  $GLOBALS["myLocal"] = "local";
  $myLocal = $GLOBALS["myLocal"];
  var_dump($myLocal);
  var_dump($GLOBALS["myGlobal"]);
  }

  ```

> Note: Static variables can be assigned values which are the result of constant expressions, but dynamic expressions, such as function calls, will cause a parse error.

- variables declared inside blocks such as loops or if's, will also be recognized and accessible outside of the block.

## Arrays

- define Arrays
- add a new variables using an index. for ex. add an item to the end of the list which contains 5 items?

> Arrays can contain different types of variables according to your needs, and can even contain other arrays or objects as members.

- To delete an item from an array, use the `.....` function on the member itself.

example:
(https://replit.com/@FarisubuntuDropper/phpvariablesscope2#index.php)

### Useful functions:

- to print array contents and indecis use `print_r($array)`
- `count` hint: js length property
- `reset` and `end`, first item and last item

### Stack and queue functions:

- Arrays can be used as stacks and queues as well.
- How to use `array_push`, `array_shift` _functions_

see examples:
(https://replit.com/@FarisubuntuDropper/phpstringsusefulfunctions#index.php)

### Concatenating arrays:

- `array_merge`

see example:
(https://replit.com/@FarisubuntuDropper/phpconcatentatingsortingarrays#index.php)

### Sorting arrays:

- `sort` and `rsort` (note: done on the input array and does not return a new array)

### Advanced array functions:

- ` array_slice`: returns a new array that contains a certain part of a specific array from an offset.
- The `array_splice` function does exactly the same as `array_slice`, however it will also remove the slice returned from the original array (in this case, the numbers variable).

#### Arrays with keys (instead of 'indics):

- called **associative array**
- A good example for using arrays with keys is a phone book. _try to define a `$phone_nums` with three names and their numbers_
- To add an item to an array using a key, we use the brackets operator
- To check if a key exists within an array, we can use the `array_key_exists` function
- To extract only the keys of the array (the names), we can use the `array_keys` function
- To extract only the values of the array , we can use the `array_keys` function

### Multidimensional arrays:

- This type of array may contain another array as a value for a specific index:

```php
$multiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// to print inner array:
print_r($multiArray[0]); // first array
// to get the value from any index from the inner array:
print_r($multiArray[0][0]) // 1
print_r($multiArray[0][1]) // 2
print_r($multiArray[0][2]) // 3
```

- We can also create an associative multidimensional array?

```php
$people = [
    "john_doe" => [
        "name" => "John",
        "surname" => "Doe",
        "age" => 25,
    ],
    "jane_doe" => [
        "name" => "Jane",
        "surname" => "Doe",
        "age" => 25,
    ]
];

print_r($people);
```

---

## Strings

> for quick ref see: (https://www.w3schools.com/php/php_ref_string.asp)

- We can also concatenate strings using the dot . operator. For example:

```php
$name = $first_name . " " . $last_name;
```

- To measure the length of a string, we use the `strlen` function
- To cut a part of a string and return it as a new string, we can use the `substr` function. For example:

```php
$filename = "image.png";
$extension = substr($filename, strlen($filename) - 3);
```

#### Extracting/Replacing substrings:

<p>for examples, see : phpnotesforproffesional.pdf - Section 25.2: Substring</p>

- Single characters can be extracted using array (square brace) syntax but now curly brace `{}` syntax is no longer supported. ex `$str{4}='5';`
- If more charachter is needed, a function will be required, ie - `substr()`
- Strings, like everything in PHP, are 0-indexed.

Examples:

```php
/* 
If there is a possibility of meeting multi-byte character strings,
 then it would be safer to use mb_substr:
*/

$sentence = "هذا مكتوب بالعربية";
var_dump(substr($sentence,0,3));// string(3) "ه�"
echo "<hr>";
var_dump(mb_substr($sentence,0,3,'UTF-8'));// string(6) "هذا"
// substr_replace
$foo = 'Hello world';
// below will result in $foo= 'Hello World';
$foo[6] = 'W';
substr_replace($foo, 'W', 6, 1);
/* note below, the replacement string need not be the same length as the substring replaced.*/
substr_replace($foo, 'Whi', 6, 2);// result in :  'Hello Whirled'
/*
 Let's say you want to find a specific word in a string - and don't want to use Regex.
*/
$bye = "Goodbye cruel World!";
var_dump(strpos($bye, " ")); // int(7)
var_dump(substr($bye, -1 * (strlen($bye) - strpos($bye, " ")))); // string(13) " cruel World!"

/*
Another option is a very basic parsing of an email.
*/
$email = "test@example.com";
$wrong = "foobar.co.uk";
$notld = "foo@bar";

$at = strpos($email, "@"); // int(4)
$wat = strpos($wrong, "@"); // bool(false)
$nat = strpos($notld , "@"); // int(3)
$domain = substr($email, $at + 1); // string(11) "example.com"
$womain = substr($wrong, $wat + 1); // string(11) "oobar.co
$nomain = substr($notld, $nat + 1); // string(3) "bar"
// for complete example: noteforproffesional - page 150
```

#### Joining and splitting:

- `explode` and `strstr` are simpler methods to get substrings by separators.

```php
$fruits = "apple,banana,orange";
$fruit_list = explode(",", $fruits);
```

Also note other uses:

```php
$fruits= 'apple,pear,grapefruit,cherry';
// If the limit parameter is zero, then this is treated as 1:
print_r(explode(',',$fruits,0)); //the same result if it '1', Array ( [0] => apple,pear,grapefruit,cherry )
// but: below the returned array will contain a maximum of limit elements with the last element containing the rest of string.
print_r(explode(',',$fruits,2)); // Array ( [0] => apple [1] => pear,grapefruit,cherry )
// If the limit parameter is negative, all components except the last -limit are returned.
print_r(explode(',',$fruits,-1)); // ['apple', 'pear', 'grapefruit']
// 'explode' can be combined with list to parse a string into variables in one line:
$email = "user@example.com";
list($name, $domain) = explode("@", $email);
echo "$name <br>"; // user
echo "$domain"; // example.com
// strstr strips away or only returns the substring before the first occurrence of the given needle.
$string = "1:23:456";
echo json_encode(explode(":", $string)); // ["1","23","456"]
var_dump(strstr($string, ":")); // string(7) ":23:456"
var_dump(strstr($string, ":", true)); // string(1) "1"
```

- To **join** back an array to a single string separated with commas, we use the `implode` function:

```php
$fruit_list = ["apple","banana","orange"];
$fruits = implode(",", $fruit_list);
```

#### Searching a substring with strpos:

- `strpos` can be understood as the number of bytes in the haystack before the first occurrence of the needle.

```php
var_dump(strpos("haystack", "hay")); // int(0)
var_dump(strpos("haystack", "stack")); // int(3)
var_dump(strpos("haystack", "stackoverflow"); // bool(false)
```

<p>below, try to answer by yourself if trouble see: PHPnotesforproff.pdf page 151<p>

- **Checking if a substring exists?** (be careful when checking against TRUE or FALSE because if it 0 then will evaluated as FALSE)
- **Search starting from an offset**
- **Get all occurrences of a substring**

### String Formating:

#### string interpolation:

<p>see phpnotesforprofessionals - chapter 24</p>

- You can also use interpolation to interpolate (insert) a variable within a string. Interpolation works in double quoted
  strings and the heredoc syntax only.

## PHP Loops

#### For , Foreach

- There are two types of for loops - a simple (C style) for loop, and a foreach loop. For example:

```php
$odd_numbers = [1,3,5,7,9];
for ($i = 0; $i < count($odd_numbers); $i=$i+1) {
    $odd_number = $odd_numbers[$i];
    echo $odd_number . "\n";
}
```

- `foreach` loop: iterates over an iterable element such as an array or an object, providing the members in a specific variable one at a time.

```php
$odd_numbers = [1,3,5,7,9];
foreach($odd_numbers as $odd_number){
	echo $odd_number . "\n";
}
```

- When iterating over arrays with keys, we can use the following syntax:

```php
$phone_numbers = [
  "Alex" => "415-235-8573",
  "Jessica" => "415-492-4856",
];

foreach ($phone_numbers as $name => $number) {
  echo "$name's number is $number.\n";
}
```

- also to iterate over object:

```php
class Student{
    public string $name;
    public int $age;
    public int $level;
    public function __construct($name,$age,$level){
        $this->name=$name;
        $this->age=$age;
        $this->level=$level;
    }
}
$student1=new Student("Faris",26,10);
foreach ($student1 as $prop=>$value){
    echo "$prop: " . $value . "\n";
}
```

#### While loops

```php
$counter = 0;

while ($counter < 10) {
    $counter += 1;
    echo "Executing - counter is $counter.\n";
}
```

#### Flow statements:

- Loops can be controlled using the break and continue flow statements, which come in handy in while loops very much. The break statement immediately quits the for loop at the middle of the block, while the continue statement returns to the top of the while loop, re-checking if the loop condition is met as well. For example:

```php
$counter = 0;

while ($counter < 10) {
    $counter += 1;

    if ($counter % 2 == 0) {
        echo "Skipping number $counter because it is even.\n";
        continue;
    }

    echo "Executing - counter is $counter.\n";
}
```

---

## Functions

> See phpnotesforproffesionals - chapter 21 and chapter 22

#### How to read a function definition (prototype):

see (https://www.php.net/manual/en/about.prototypes.php)

- **All functions and classes in PHP have the global scope - they can be called outside a function even if they were defined inside and vice versa.**
- **PHP does not support function overloading, nor is it possible to undefine or redefine previously-declared functions.**
- There are two types of functions - library functions and user functions.

#### User-defined functions

```php
// Explain and give examples:

// Conditional functions?
$makefoo = true;
//foo(); //not exist
bar(); //exist
if($makefoo){
 function foo(){echo "foo() exist ...";}
}
foo(); // exist
function bar(){
 echo "bar() exist... <br>";
}
// Function within functions?
function foo()
{
  function bar()
  {
    echo "I don't exist until foo() is called.\n";
  }
}
bar(); //error: bar() doesn't exist
foo();
bar(); //work: bar() exist
// Recursive functions?
function recursion($a)
{
    if ($a < 20) {
        echo "$a\n";
        recursion($a + 1);
    }
}

```

#### Function arguments

- The arguments are evaluated from left to right, before the function is actually called (eager evaluation).
- PHP supports passing arguments by value (the default), passing by reference, and default argument values. Variable-length argument lists and Named Arguments are also supported.
- The default is used only when the parameter is not specified; in particular, note that passing null does not assign the default value.
- The default value must be a constant expression, not (for example) a variable, a class member or a function call.
- Note that any optional arguments should be specified after any required arguments, otherwise they cannot be omitted from calls.

```php
// Passing arrays to functions?
  // > write function that print total of first and second elements only

// Function Argument List with trailing Comma (hint: list args vertically)

// Passing arguments by reference?: To allow a function to modify its arguments, they must be passed by reference.

// Default argument values?:

// Using non-scalar types as default values
<?php
function makecoffee($types = array("cappuccino"), $coffeeMaker = NULL)
{
    $device = is_null($coffeeMaker) ? "hands" : $coffeeMaker;
    return "Making a cup of ".join(", ", $types)." with $device.\n";
}
echo makecoffee();//Making a cup of cappuccino with hands.
echo makecoffee(array("cappuccino", "lavazza"), "teapot");//Making a cup of cappuccino, lavazza with teapot.

//  Using objects as default values:

class Person{
  public function getRule(){
   return "Person <br>";
  }
}
class Student {

  public function getRule() {
   return "Student <br>";
  }
}
class Employee {
  public function getRule(){
   return "Employee <br>";
  }
}
function getRule($person = new Person){ // note 'Person' without ();
return $person->getRule();
}
echo getRule(); //Person
echo getRule(new Student); // Student
echo getRule(new Employee); // Employee

// another example with abstract Person class : (https://replit.com/@FarisubuntuDropper/php-Functions#index.php)

// As of PHP 8.8.8,  named arguments can be used to skip over multiple optional parameters?:
function makeyogurt(
    $container = "bowl", $flavour = "raspberry", $style = "Greek"
    )
{ return "Making a $container of $flavour $style yogurt.\n"; }
echo makeyougurt(style:"natural"); // Making a bowl of raspberry natural yogurt.

// Variable-length argument lists?: PHP has support for variable-length argument lists in user-defined functions by using the ... token.  The arguments will be passed into the given variable as an array:
function getSum(...$numbers){
 $sum = 0;
 foreach($numbers as  $number){
  $sum += $number;
 }
 return $sum;
}
echo getSum(1,2,3); //6
// below, Error: unsported operand types: int+array ...
/*
echo getSum([1,2,3]);
echo getSum(range(1,3));
echo getSum(array(1,2,3));
*/

// '...' can also be used when calling functions to unpack an array or 'Traversable' variable or literal into the argument list:

function add($a,$b,$c){
 return $a+$b+$c;
}
echo add(...[1,2,3]) . "\n"; //3
//echo add(...[1,2]) . "\n";// Error: ArgCountError:too few args...
$d=[5,2];
//echo add(...$d) . "\n";//Error: ArgCountError:too few args...
$e=[1,2,3,4,5];
echo add(...$e) . "\n";// 6 not 15. only the first three elements.

// Positional arguments versus named arguments:
 // Using positional arguments:
 array_fill(0, 100, 50);
 // Using named arguments:
 array_fill(start_index: 0, count: 100, value: 50);
```

- Finally, variable arguments can also be passed by reference by prefixing the ... with an ampersand (&).

#### Returning values

- If the return is omitted the value null will be returned.
- A function can not return multiple values, but similar results can be obtained by returning an array.
- To return a reference from a function, use the reference operator `&` in both the function declaration and when assigning the returned value to a variable.
- Objects are always passed by reference and returned by reference:

```php
class Obj{
    public $x;
}
function modify($obj){
    $obj->x++;
    return $obj;
}

$obj1=new Obj();
$obj2=modify($obj1);
$obj1->x++;
echo $obj1->x . ', ' . $obj2->x; // 2,2
$obj2->x++;
echo $obj1->x . ', ' . $obj2->x; // 3,3
```

- You have to force pass by reference and return by reference on arrays:

```php
function &array_ref_inc_x(&$array) {
    $array{'x'}++; /* Array and string offset access syntax with
                      curly braces is no longer supported...?*/
    return $array;
}

$array = array();
$array['x'] = 1;

$array2 =& array_ref_inc_x($array); # Need reference here as well as the function sig
array_ref_inc_x($array2);

print $array['x'] . ', ' . $array2['x'] . "\n";
```

#### Variable functions

- If a variable name has parentheses appended to it, PHP will look for a function with the same name as whatever the variable evaluates to, and will attempt to execute it:

```php
function foo(){
    echo "Foo() ....";
}
$func='foo';
$func(); //Foo() ....
```

- also, the same applied on variable method?

#### Internal (built-in) functions

- There are functions that require specific PHP extensions compiled in, otherwise fatal "undefined function" errors will appear.
- A call to phpinfo() or get_loaded_extensions() will show which extensions are loaded into PHP.

#### Anonymous functions

- also known as **closures**, allow the creation of functions which have no specified name.

```php
$welcome= function ($user_name){
    echo "Hello, $user_name";
};

$welcome('John');
echo "\n";
$welcome('Peter');
```

- A closure is an anonymous function that can't access outside scope.
- When defining an anonymous function as such, you're creating a "namespace" for that function. It currently only
  has access to that namespace.
- Closures may also inherit variables from the parent scope. Any such variables must be passed to the `use` language construct.
- Inheriting variables from the parent scope is not the same as using global variables. Global variables exist in the global scope, which is the same no matter what function is executing. The parent scope of a closure is the function in which the closure was declared (not necessarily the function it was called from). See the following example:

Example 1:

```php
$message = 'hello';

// No "use"
$example = function () {
    var_dump($message);
    echo "<hr>";
};
$example(); // Null, undefined variable

// Inherit $message
$example = function () use ($message) { // copy $message into the closure's scope
    var_dump($message);
    echo "<hr>";
};
$example(); // string(5) "hello"

// Inherited variable's value is from when the function
// is defined, not when called
$message = 'world';
$example(); // string(5) "hello"

// reset message:
$message = "hello";
$example=function () use (&$message){ // Must passed by reference if you care about their contents over time
 var_dump($message);
 echo "<hr>";
};

$example(); //string(5) "hello"
$message ="World";

$example(); //string(5) "World"

// Closures can also accept regular arguments
$example = function ($arg) use ($message) {
 var_dump($arg . ' ' . $message);
 echo "<hr>";
};
$example("hello"); // string(11) "hello World"

// Return type declaration comes after the use clause
$example = function () use ($message): string {
 return "hello $message";
};
var_dump($example()); // string(11) "hello World"

```

Example 2:

```php
/* A basic shopping cart which contains a list of added products and the quantity of each product.
Includes a method which calculates the total price of the items in the cart using
 a closure as a callback.*/

class Cart
{
    const PRICE_BUTTER  = 1.00;
    const PRICE_MILK    = 3.00;
    const PRICE_EGGS    = 6.95;

    protected $products = array();

    public function add($product, $quantity)
    {
        $this->products[$product] = $quantity;
    }

    public function getQuantity($product)
    {
        return isset($this->products[$product]) ? $this->products[$product] :
               FALSE;
    }
    public function getTotal($tax)
    {
        $total = 0.00;

        $callback =
            function ($quantity, $product) use ($tax, &$total)
            {
                $pricePerItem = constant(__CLASS__ . "::PRICE_" .
                    strtoupper($product));
                $total += ($pricePerItem * $quantity) * ($tax + 1.0);
            };

        array_walk($this->products, $callback);
        return round($total, 2);
    }
}
$my_cart = new Cart;
// Add some items to the cart
$my_cart->add('butter', 1);
$my_cart->add('milk', 3);
$my_cart->add('eggs', 6);

// Print the total with a 5% sales tax.
print $my_cart->getTotal(0.05) . "\n";
// The result is 54.29
```

Example 3: Automatic Binding of $this

```php

$myClosure = function() {
    echo $this->property;
};

class MyClass
{
    public $property;

    public function __construct($propertyValue)
    {
        $this->property = $propertyValue;
    }
}

$myInstance = new MyClass('Hello world!');
$myBoundClosure = $myClosure->bindTo($myInstance);

$myBoundClosure(); // Shows "Hello world!"
```

Example 4: An example showing how to use closures to implement a Python-like decorator pattern:

```php
/*
 * My goal was that you should be able to decorate a function with any
 * other function, then call the decorated function directly:
 *
 * Define function:         $foo = function($a, $b, $c, ...) {...}
 * Define decorator:        $decorator = function($func) {...}
 * Decorate it:             $foo = $decorator($foo)
 * Call it:                 $foo($a, $b, $c, ...)
 *
 * This example show an authentication decorator for a service, using a simple
 * mock session and mock service.
 */

session_start();

/*
 * Define an example decorator. A decorator function should take the form:
 * $decorator = function($func) {
 *     return function() use $func) {
 *         // Do something, then call the decorated function when needed:
 *         $args = func_get_args($func);
 *         call_user_func_array($func, $args);
 *         // Do something else.
 *     };
 * };
 */
$authorise = function($func) {
    return function() use ($func) {
        if ($_SESSION['is_authorised'] == true) {
            $args = func_get_args($func);
            call_user_func_array($func, $args);
        }
        else {
            echo "Access Denied";
        }
    };
};
/*
 * Define a function to be decorated, in this example a mock service that
 * need to be authorised.
 */
$service = function($foo) {
    echo "Service returns: $foo";
};
/*
 * Decorate it. Ensure you replace the origin function reference with the
 * decorated function; ie just $authorise($service) won't work, so do
 * $service = $authorise($service)
 */
$service = $authorise($service);
/*
 * Establish mock authorisation, call the service; should get
 * 'Service returns: test 1'.
 */
$_SESSION['is_authorised'] = true;
$service('test 1');

/*
 * Remove mock authorisation, call the service; should get 'Access Denied'.
 */
$_SESSION['is_authorised'] = false;
$service('test 2');
```

#### Arrow Functions

- **Both anonymous functions and arrow functions are implemented using the Closure class.**
- Arrow functions have the basic form `fn (argument_list) => expr`.
- Arrow functions support the same features as anonymous functions, except that using variables from the parent scope is always automatic.

Example:

```php
$z=2;

$arrow_fun=fn($x)=>$x+$z; // inherit parent scope automatically no need to 'use'

echo $arrow_fun(5); // 7
$z=100;
echo "<hr>";
echo $arrow_fun(5); // 7
```

## Classes and Objects:

> examples from phpnotesforproffesionals.pdf chapter 26

Here are some important definitions related to objects:

- Classes define how objects behave. Classes do not contain data.
- Objects are instances of classes, which contain data.
- Members are variables that belong to an object.
- Methods are functions that belong to an object, and have access to its members.
- Constructor is a special method that is executed when an object is created.
- PHP treats objects in the same way as references or handles, meaning that each variable contains an object reference rather than a copy of the entire object.
- The pseudo-variable `$this` is available when a method is called from within an object context. $this is the value of the calling object.
- **class member properties** are defined by using at least one modifier (such as Visibility(`public,private,protected`), `Static` Keyword and followed by a variable declaration which may include an initialization but Must be a `constant` value.
- typed properties (`int,string,...`) Must be initialized before accessing, otherwise an ERROR is thrown.

## Class Constants

- It is possible to define constants on a per-class basis remaining the same and unchangeable and can be redefined by a child class except when it defined as `final`.
- **Remember: constants and class constants not like a regular variables so not prefixed with `$`**
- The default visibility of class constants is `public`.
- Class constants can only be defined with the `const` keyword - the `define` function cannot be used in this context.
- Outside class, Class constants may be accessed by using the double colon operator (so-called the **scope resolution operator**) on a class, much like static variables. Unlike static variables, however, class constants have their values fixed at **compile time** and cannot be reassigned to (e.g. `MathValues::PI = 7` would produce a fatal error).
- We can reference class constants internally (inside the class) using the `self` scope resolutor (which works in both instanced and static implementations). For example:

```php
class Labor {
/** How long, in hours, does it take to build the item? */
const LABOR_UNITS = 0.26; // defualt is public but can 'private','protected'
/** How much are we paying employees per hour? */
const LABOR_COST = 12.75;
// also we can do this: 'const LABOR_COST=12.75 * 0.26;'
public function getLaborCost($number_units) {
// accessing constant internally using `self`
return (self::LABOR_UNITS * self::LABOR_COST) * $number_units;
 }
}
//access class constant outside its class:
echo Labor::LABOR_UNITS; // note no $
//
$labor=new Labor();
echo $labor->getLaborCost(4); // 13.26

```

#### Abstract Classes:

- An abstract class is a class that cannot be instantiated. Abstract classes can define abstract methods, which are methods without any body, only a definition.
- Any class that contains at least one abstract method must also be abstract.
- When inheriting from an abstract class, all methods marked abstract in the parent's class declaration must be defined by the child class.

Example

```php
abstract class AbstractClass
{
    // Force Extending class to define this method
    abstract protected function getValue();
    abstract protected function prefixValue($prefix);
    // Common method
    public function printOut() {
        print $this->getValue() . "\n";
    }
}
class ConcreteClass1 extends AbstractClass
{
    protected function getValue() {
        return "ConcreteClass1";
    }
    public function prefixValue($prefix) { //note visibility can be changed
        return "{$prefix}ConcreteClass1";
    }
    /* also you can define optional arguments such
    public function prefixValue($prefix,$seperator=':'){
      return "{prefix}{$seperator}ConcreteClass1";
    }
    */
}
class ConcreteClass2 extends AbstractClass
{
    public function getValue() {
        return "ConcreteClass2";
    }
    public function prefixValue($prefix) {
        return "{$prefix}ConcreteClass2";
    }
}

$class1 = new ConcreteClass1;
$class1->printOut();
echo $class1->prefixValue('FOO_') ."\n";

$class2 = new ConcreteClass2;
$class2->printOut();
echo $class2->prefixValue('FOO_') ."\n";
```

#### How to Distinguish between Abstract class and Interface:

- An Interface is like a protocol. It doesn't designate the behavior of the object; it designates how your code tells that object to act. Defining an interface defines how your code communicates with any object implementing that interface.
- An interface is always an agreement or a promise. When a class says "I implement interface Y", it is saying "I promise to have the same public methods that any object with interface Y has".
- You would have your class implement a particular interface if you were distributing a class to be used by other people.

On other hand:

- an Abstract Class is like a partially built class. It is much like a document with blanks to fill in. It is the foundation for another object.
- When a class says "I extend abstract class Y", it is saying "I use some methods or properties already defined in this other class named Y".
- You would have your class extend an abstract class if you (or someone else) wrote a class that already had some methods written that you want to use in your new class.

Example:

```php
// this is saying that "X" agrees to speak language "Y" with your code.
class X implements Y { }
// this is saying that "X" is going to complete the partial class "Y".
class X extends Y { }
```

> **For all intents and purposes, if you're the only user of any of your classes, you don't need to implement interfaces.**

#### Summary of differences between abstract class and interface

From: (https://www.javatpoint.com/php-oops-difference-between-abstract-class-and-interface)

**Abstract class:**

- Abstract class comes under partial abstraction.
- Abstract classes can maintain abstract methods and non abstract methods.
- In abstract classes, we can create the variables/properties.
- In abstract classes, we can use any access specifier.
- By using 'extends' keyword we can access the abstract class features from derived class.
- Multiple inheritance is **not possible**.

**Interface:**

- Interface comes under fully abstraction.
- Interfaces can maintain only abstract methods.
- In interfaces, we can't create the variables/properties.
- In interface, we can use only public access specifier.
- By using 'implement' keyword we can get interface from derived class.
- By using interfaces multible inheritance is **possible**.

**Important Notes:**

- Interfaces can be extended like classes using the `extends` operator.
- When inheriting from an abstract class, all methods marked abstract in the parent's class declaration must be defined by the child (or the child itself must also be marked abstract); additionally, **these methods must be defined with the same (or a less restricted) visibility**. For example, if the abstract method is defined as protected, the function implementation must be defined as either protected or public, but not private.
- When abstract classes implement interfaces, they **do not need to implement all methods**. Any method not implemented in the base class must then be implemented by the **concrete class** _(a class that we can create an instance of, using the `new` keyword)_ that extends it. example: (https://replit.com/@FarisubuntuDropper/InterfaceInheritance-1)

> In PHP, **polymorphism** means that if B is a descendant of A and a function can accept A as a parameter, then it can also accept B as a parameter.

Try below examples:

- Good Example: (https://replit.com/@FarisubuntuDropper/howabstractinterfaceworktogether#index.php)
- Basic interface use: (https://replit.com/@FarisubuntuDropper/interfaceexample1)
- interface inherit another interface: (https://replit.com/@FarisubuntuDropper/interfaceexample2Extendable#index.php)
- Example #5 Interfaces with constants: (https://replit.com/@FarisubuntuDropper/example3-Variance-compatibility-with-multiple-interfaces#index.php)
- Example #6 Interfaces with abstract classes: (https://replit.com/@FarisubuntuDropper/Interfaces-with-abstract-classes)
- Example #7 Another good example of implementing an interface (https://replit.com/@FarisubuntuDropper/another-interface-usage)

## Traits

- Traits are a mechanism for code reuse in single inheritance languages such as PHP. A Trait is intended to reduce some limitations of single inheritance by enabling a developer to reuse sets of methods freely in several independent classes living in different class hierarchies.
- It is not possible to instantiate a Trait on its own like as class.
- Its is an addition to traditional inheritance and enables the application of class members without requiring inheritance.

Examples:

- Basic Usage: (https://replit.com/@FarisubuntuDropper/Example-1-Trait-example#index.php)

## Constructors and Destructors

(https://www.php.net/manual/en/language.oop5.decon.php)

- Parent constructors are not called **implicitly** if the child class defines a constructor.
- to run a parent constructor, a call to `parent::__construct()` within the child constructor is required. If the child does not define a constructor then it may be inherited from the parent class just like a normal class method (if it was not declared as private).

Example:

```php
<?php
class Point {
    protected int $x;
    protected int $y;

    public function __construct(int $x, int $y = 0) {
        $this->x = $x;
        $this->y = $y;
    }
}

// Pass both parameters.

$p1 = new Point(4, 5);
/* Pass only the required parameter. $y will take its default
 value of 0.*/
$p2 = new Point(4);
// With named parameters (as of PHP 8.0):
$p3 = new Point(y: 5, x: 4);
?>
```

- When a constructor argument includes a visibility modifier(`public,private,protected`), PHP will interpret it as both an object property (_promoted property_) and a constructor argument, and assign the argument value to the property. For example instead of doing this:

```php
// Instead of this:

class CustomerDTO
{
    public string $name;
    public string $email;
    public DateTimeImmutable $birth_date;
    public function __construct(
        string $name,
        string $email,
        DateTimeImmutable $birth_date
    ) {
        $this->name = $name;
        $this->email = $email;
        $this->birth_date = $birth_date;
    }
}

// You would write this:

class CustomerDTO
{

    // __construct parameters you want to be promoted object property should prefixed with visibility keyword.
    public function __construct(
        public string $name,
        public string $email,
        public DateTimeImmutable $birth_date,
    ) {}
}

```

- **Promoted properties can only be used in constructors**.
- You're not able to declare a class property and a promoted property with the same name.
- Not all arguments need to be promoted. It is possible to mix and match promoted and not-promoted arguments, in any order.

Try this example: https://replit.com/@FarisubuntuDropper/abstractclassescarexample#index.php

#### Static creation methods:

- PHP only supports a single constructor per class. In some cases, however, it may be desirable to allow an object to be constructed in different ways with different inputs. The recommended way to do so is by using **static** methods as constructor wrappers. For Example:

```php
class Product {

    private ?int $id;
    private ?string $name;

    private function __construct(?int $id = null, ?string $name = null) {
        $this->id = $id;
        $this->name = $name;
    }

   public static function fromBasicData(int $id, string $name): static {
        $new = new static($id, $name);
        return $new;
    }

    public static function fromJson(string $json): static {
        $data = json_decode($json);
        return new static($data['id'], $data['name']);
    }
    public static function fromXml(string $xml): static {
        // Custom logic here.
        $data = convert_xml_to_array($xml);
        $new = new static();
        $new->id = $data['id'];
        $new->name = $data['name'];
        return $new;
    }
}

/* Below, the three public static methods then demonstrate
different ways of instantiating the object.*/

/*fromBasicData() takes the exact parameters that are needed,
 then creates the object by calling the constructor and
  returning the result.*/
$p1 = Product::fromBasicData(5, 'Widget');
echo $p1->name  //'Widget'
/*fromJson() accepts a JSON string and does some pre-processing
 on it itself to convert it into the format desired by the
  constructor. It then returns the new object.*/
$p2 = Product::fromJson($some_json_string);

/*fromXml() accepts an XML string, preprocesses it, and then
 creates a bare object. The constructor is still called, but
  as all of the parameters are optional the method skips
  them. It then assigns values to the object properties directly
   before returning the result.*/
$p3 = Product::fromXml($some_xml_string);

/* Note: in all three cases, the static keyword is translated
 into the name of the class the code is in. In this case, Product.*/
```

#### Destructors:

- Like constructors, parent destructors will not be called implicitly by the engine. In order to run a parent destructor, one would have to explicitly call `parent::__destruct()` in the destructor body. Also like constructors, a child class may inherit the parent's destructor if it does not implement one itself. For example:

```php
class MyDestructableClass
{
    function __construct() {
        print "In constructor\n";
    }
    /* The destructor method will be called as soon as there
     are no other references to a particular object, or in
      any order during the shutdown sequence.*/
    function __destruct() {
        print "Destroying " . __CLASS__ . "\n";
    }
}

$obj = new MyDestructableClass();
```

## Object Inheritance

- When extending a class, the subclass inherits all of the public and protected methods, properties and constants from the parent class. Unless a class overrides those methods, they will retain their original functionality.
- Private methods of a parent class are not accessible to a child class. As a result, child classes may reimplement a private method themselves without regard for normal inheritance rules.
- It is not allowed to override a read-write property with a readonly property or vice versa. For example:

```php
class A {
    public int $prop;
}
class B extends A {
    // Illegal: read-write -> readonly
    public readonly int $prop;
}
```

## Visibility

- Class members declared public can be accessed everywhere. Members declared protected can be accessed only within the class itself and by inheriting and parent classes. Members declared as private may only be accessed by the class that defines the member.

#### Property Visibility

- `private,protected,public` ....

#### Public and private functions

- Example:

```php
class Student {
    // constructor should be public
    public function __construct($first_name, $last_name) {
        $this->first_name = $first_name;
        $this->last_name = $last_name;
    }
    // For external use (accessed through an 'object)
    public function say_name() {
        echo "My name is " . $this->full_name() . "\n";
    }
    // For internal use
    private function full_name() {
        return $this->first_name . " " . $this->last_name;
    }
}
$alex = new Student("Alex", "Jones");
$alex->say_name();
// this will not work
// echo $alex->full_name();
```

#### Method Visibility:

- Methods declared without any explicit visibility keyword are defined as public.

See Example: (https://replit.com/@FarisubuntuDropper/php-method-visibility#index.php)

#### Constant Visibility:

- Constants declared without any explicit visibility keyword are defined as public.

Example: (https://replit.com/@FarisubuntuDropper/php-Constant-Visibility#index.php)

#### Visibility from other objects:

- Objects of the same type will have access to each others private and protected members even though they are not the same instances.
  Example: (https://replit.com/@FarisubuntuDropper/php-Visibility-from-other-objects#index.php)

---

## Namespaces:

- Before, see the basic usage: (https://www.php.net/manual/en/language.namespaces.basics.php) [Example: (https://replit.com/@FarisubuntuDropper/php-namespace-basics#index.php)]

#### Overview

- Namespaces are a way of encapsulating items.
- For example: directories serve to group related files, and act as a namespace for the files within them.
- In PHP, namespaces are designed to solve two probelms:
  1. Name collisions between code you create, and internal PHP classes/functions/constants or third-party classes/functions/constants.
  2. Ability to alias (or shorten) Extra_Long_Names designed to alleviate the first problem, improving readability of source code.
- A namespace declaration can look as follows:

```php
namespace MyProject; // Declare the namespace MyProject
namespace MyProject\Security\Cryptography; // Declare a nested namespace
namespace MyProject { ... } // Declare a namespace with enclosing brackets.
```

**Namespaces Notes:**

- Namespace names are case-insensitive.
- The Namespace name PHP, and compound names starting with this name (like PHP\Classes) are reserved for internal language use and should not be used in the userspace code.
- Fully qualified names (i.e. names starting with a backslash) are not allowed in namespace declarations, because such constructs are interpreted as relative namespace expressions.
- `namespace` statement is defined at first of the php files. But before namespace declaration only three elements allowed. [ex. 2]
  1. `declare` statement
  2. spaces
  3. comments
- Unlike any other PHP construct, the same namespace may be defined in multiple files, allowing splitting up of a namespace's contents across the filesystem.
- It is recommended to only declare a single namespace per file, even though you can declare as many as you like in
  a single file.
- Every time you declare a namespace, classes you define after that will belong to that namespace:

```php
namespace MyProject\Shapes;
class Rectangle { ... }
class Square { ... }
class Circle { ... }

/*A namespace declaration can be used multiple times
 in different files. The example above defined three
  classes in the MyProject\Shapes namespace in a single file.
   Preferably this would be split up into three files,
   each starting with namespace MyProject\Shapes;*/
```

> **see phpnotesforProffesionals.php chapter 27: Namespaces**

**Namespaces Examples:**

1. Namespace syntax example: (https://replit.com/@FarisubuntuDropper/php-namespace-1#index.php)
2. namespace decleration : (https://replit.com/@FarisubuntuDropper/php-namespace-2#index.php)
3. define constant and explicit constant use: (https://replit.com/@FarisubuntuDropper/php-define-namespace-constant-1)
4. Declaring a single namespace with hierarchy: (https://replit.com/@FarisubuntuDropper/Declaring-a-single-namespace-with-hierarchy#)
5. Defining multiple namespaces in the same file (https://replit.com/@FarisubuntuDropper/php-Defining-multiple-namespaces-in-the-same-file#index.php)
6. Namespaces and Multiple files (https://replit.com/@FarisubuntuDropper/php-namespace-in-multiple-files-1#index.php)
7. Declaring sub-namesapce: (https://replit.com/@FarisubuntuDropper/php-Declaring-sub-namespaces#index.php)

## Exceptions

- Example:

```php
//  Each try must have at least one corresponding catch or finally block.
try {
  echo 2 / 0;
} catch (Exception $e) {
  echo "Caught exception: Division by zero!";
}

```

Multiple catch blocks can be used to catch different classes of exceptions:

```php
if (4/2 == 2) {
  echo "Right!";
} else {
  throw new Exception("Wrong answer!");
}
```

# Resources {#identifier resources}

- https://www.learn-php.org
- PHP notes for proffesionals (commented copy inside pdfs folder)
- https://www.php.net/manual/en/
