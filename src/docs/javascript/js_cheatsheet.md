
### Basics➤
#### On page script
```js
<script type="text/javascript">  ...
</script>
```
#### Include external JS file
```js
<script src="filename.js"></script>
```
#### Delay - 1 second timeout
```js
setTimeout(function () {}, 1000);
```
#### Functions - _regular function._
```js
function addNumbers(a, b) {
    return a + b; ;
}
x = addNumbers(1, 2);
```
#### Functions - _Arrow function._(ES6/ES2015)
```js
// from regular function:
const myFunction = function() {//...}
// To arrow function:
const myFunction = () => {//...}
// If the function body contains just a single statement, 
// you can omit the brackets:
const myFunction = () => doSomething();
Parameters are passed in the parentheses:
const myFunction = (param1, param2) => doSomething(param1, param2)
// If you have one (and just one) parameter,  you can omit
// the parentheses completely:
const myFunction = param => doSomething(param);
// Implicit return:
/* Arrow functions allow you to have an implicit return: values 
 are returned without having to use the return keyword. It 
 works when there is a one-line statement in the function
 body: */
const myFunction = () => 'test'
myFunction() //'test'
/* Another example, when returning an object, remember to wrap
 the curly brackets in parentheses to avoid it being considered
 the wrapping function body brackets: */
const myFunction = () => ({ value: 'test' })
myFunction() //{value: 'test'}
```
##### `this` in _arrow functions_:

`this` in `arrow functions` behave very differently compared
to `regular functions`:

- When defined as a method of an object, in a regular function this refers to the object, so you can do:
```js
const car = {
	model: 'Fiesta',
	manufacturer: 'Ford',
	fullName: function() {
	return `${this.manufacturer} ${this.model}`
 }
}
```
- calling The `car.fullName()` will return `"Ford Fiesta"`.
- The `this` scope with arrow functions is inherited from the execution context. - An arrow function does not bind `this` at all, so its value will be looked up in the call stack, so in `this` code `car.fullName() will not work, and will return the string `"undefined undefined"`:
```js
const car = {
	model: 'Fiesta',
	manufacturer: 'Ford',
	fullName: () => {
	return `${this.manufacturer} ${this.model}`
 }
}
```
- Due to this, arrow functions are not suited as object methods.
- `Arrow functions` cannot be used as `constructors` either, when instantiating an `object` will raise a `TypeError`. This is where `regular functions` should be used instead, when `dynamic context` is not
needed.
- This is also a problem when handling events. `DOM Event listeners` set element, and if you rely on `this`to be the target in an `event handler`, a `regular function` is necessary:
```js
const link = document.querySelector('#link');
link.addEventListener('click', () => {
// this === window
})
const link = document.querySelector('#link')
link.addEventListener('click', function() {
// this === link
})
```
#### Edit DOM element
```js
document.getElementById("elementID")
	.innerHTML = "Hello World!";
```
#### Output
```js
console.log(a);  // write to the browser console
document.write(a);   // write to the HTML
alert(a);       // output in an alert box
confirm("Really?");  /* yes/no dialog, returns true/false depending
 on user click.*/
prompt("Your age?","0");  /* input dialog. Second argument is the
 initial value*/
```
#### Comments
```js
/* Multi line
   comment */
// One line
```
#### If - Else
```js
if ((age >= 14) && (age < 19)) {// logical
							// condition
    status = "Eligible."; /* executed if 
    condition is true*/
} else {                // else block is 
						// optional
 status = "Not eligible."; /* executed if 
 condition is false*/
}
```
#### Switch Statement
```js
switch (new Date().getDay()) { // input is current day
    case 6:                  // if (day == 6)
        text = "Saturday";          
        break;
    case 0:                // if (day == 0)
        text = "Sunday";
        break;
    default:              // else...
        text = "Whatever";
}
```
## Loops↶

#### For Loop
```js
for (var i = 0; i < 10; i++) {
    document.write(i + ": " + i*3 + "<br />");
}
var sum = 0;
for (var i = 0; i < a.length; i++) {
    sum + = a[i];
}            // parsing an array
html = "";
for (var i of custOrder) {
    html += "<li>" + i + "</li>";
}
```
#### While Loop
```js
var i = 1;         // initialize
while (i < 100) {  // enters the cycle if statement is true
    i *= 2;                     // increment to avoid infinite loop
    document.write(i + ", ");   // output
}
```
#### Do While Loop
```js
var i = 1;                      // initialize
do {                            // enters cycle at least once
    i *= 2;                     // increment to avoid infinite loop
    document.write(i + ", ");   // output
} while (i < 100)               // repeats cycle if statement is true at the end
```
#### Break
```js
for (var i = 0; i < 10; i++) {
   if (i == 5) { break; } // stops and exits the cycle
   document.write(i + ", "); // last output number is 4
}
```
#### Continue
```js
for (var i = 0; i < 10; i++) {
if (i == 5) { continue; }// skips the rest of the cycle
    document.write(i + ", ");       // skips 5
}
```

## Data Typesℜ
```js
var age = 18;                           // number 
var name = "Jane";                      // string
var name = {first:"Jane", last:"Doe"};  // object
var truth = false;                      // boolean
var sheets = ["HTML","CSS","JS"];       // array
var a; typeof a;                        // undefined
var a = null;                           // value null
```
#### Objects

```js
var student = {                 // object name
    firstName:"Jane",           // list of properties and values
    lastName:"Doe",
    age:18,
    height:170,
    fullName : function() {     // object function
       return this.firstName + " " + this.lastName;
    }
}; 
student.age = 19;           // setting value
student[age]++;             // incrementing
name = student.fullName();  // call object function
```
##### Dates📆
```js
Wed Feb 19 2020 15:55:59 GMT+0300 (Arabian Standard Time)
var d = new Date();
1582116959653 miliseconds passed since 1970
Number(d) 
Date("2017-06-23");  // date declaration
Date("2017");        // is set to Jan 01
Date("2017-06-23T12:00:00-09:45");  
// date - time YYYY-MM-DDTHH:MM:SSZ
Date("June 23 2017");   // long date format
Date("Jun 23 2017 07:45:00 GMT+0100 (Tokyo Time)"); // time zone
```
#### Get Times
```js
var d = new Date();
a = d.getDay();     // getting the weekday
getDate();          // day as a number (1-31)
getDay();           // weekday as a number (0-6)
getFullYear();      // four digit year (yyyy)
getHours();         // hour (0-23)
getMilliseconds();  // milliseconds (0-999)
getMinutes();       // minutes (0-59)
getMonth();         // month (0-11)
getSeconds();       // seconds (0-59)
getTime();        // milliseconds since 1970
```
##### Setting part of a date
```js
var d = new Date();
d.setDate(d.getDate() + 7); // adds a week to a date
setDate();          // day as a number (1-31)
setFullYear();      // year (optionally month and day)
setHours();         // hour (0-23)
setMilliseconds();  // milliseconds (0-999)
setMinutes();       // minutes (0-59)
setMonth();         // month (0-11)
setSeconds();       // seconds (0-59)
setTime();          // milliseconds since 1970)
```
## Variablesx
```js
var a;                          // variable
var b = "init";                 // string
var c = "Hi" + " " + "Joe";     // = "Hi Joe"
var d = 1 + 2 + "3";            // = "33"
var e = [2,3,5,8];              // array
var f = false;                  // boolean
var g = /()/;                   // RegEx
var h = function(){};           // function object
const PI = 3.14; /* constant, has block scope, same as let. does
 not provide immutability, just makes sure that the reference 
 can't be changed.*/
var a = 1, b = 2, c = a + b;    // one line
let z = 'zzz';                  // block scope local variable
```
#### Strict mode
```js
"use strict";   // Use strict mode to write secure code
x = 1;          // Throws an error because variable is not declared
```
#### Values
```js
false, true                     // boolean
18, 3.14, 0b10011, 0xF6, NaN    // number
"flower", 'John'                // string
undefined, null , Infinity      // special
```
#### Operators
```js
a = b + c - d;      // addition, substraction
a = b * (c / d);    // multiplication, division
x = 100 % 48;       // modulo. 100 / 48 remainder = 4
a++; b--;     // postfix increment and decrement
```
#### Bitwise operators
<table class="tableStyle1">
<tbody>
<tr>
<td>&amp;</td>
<td>AND&nbsp;</td>
<td><span style="color:#00b418" class="jsComment">&nbsp;5 &amp; 1 (0101 &amp; 0001)</span></td><td><span style="color:#00b418" class="jsComment">1 (1)</span></td>
</tr>
<tr>
<td>|</td>
<td>OR&nbsp;</td>
<td><span style="color:#00b418" class="jsComment">&nbsp;5 | 1 (0101 | 0001)</span></td><td><span style="color:#00b418" class="jsComment">5 (101)</span></td>
</tr>
<tr>
<td>~</td>
<td>NOT&nbsp;</td>
<td><span style="color:#00b418" class="jsComment">&nbsp;~ 5 (~0101)</span></td><td><span style="color:#00b418" class="jsComment">10 (1010)</span></td>
</tr>
<tr>
<td>^</td>
<td>XOR&nbsp;</td>
<td><span style="color:#00b418" class="jsComment">&nbsp;5 ^ 1 (0101 ^ 0001)</span></td><td><span style="color:#00b418" class="jsComment">4 (100)</span></td>
</tr>
<tr>
<td>&lt;&lt;</td>
<td>left shift&nbsp;</td>
<td><span style="color:#00b418" class="jsComment">&nbsp;5 &lt;&lt; 1 (0101 &lt;&lt; 1)</span></td><td><span style="color:#00b418" class="jsComment">10 (1010)</span></td>
</tr>
<tr>
<td>&gt;&gt;</td>
<td>right shift&nbsp;</td>
<td><span style="color:#00b418" class="jsComment">&nbsp;5 &gt;&gt; 1 (0101 &gt;&gt; 1)</span></td><td><span style="color:#00b418" class="jsComment">2 (10)</span></td>
</tr>
<tr>
<td>&gt;&gt;&gt;</td>
<td>zero fill right shift&nbsp;</td>
<td><span style="color:#00b418" class="jsComment">&nbsp;5 &gt;&gt;&gt; 1 (0101 &gt;&gt;&gt; 1)</span></td><td><span style="color:#00b418" class="jsComment">2 (10)</span></td>
</tr>
</tbody>
</table>

#### Arithmetic
```js
a * (b + c)         // grouping
person.age          // member
person[age]         // member
!(a == b)           // logical not
a != b              // not equal
typeof a            // type (number, object, function...)
x << 2  x >> 3      // minary shifting
a = b               // assignment
a == b              // equals
a != b              // unequal
a === b             // strict equal
a !== b             // strict unequal
a < b   a > b       // less and greater than
a <= b  a >= b      // less or equal, greater or eq
a += b              // a = a + b (works with - * %...)
a && b              // logical and
a || b              // logical or
```

### Strings⊗
```js
var abc = "abcdefghijklmnopqrstuvwxyz";
var esc = 'I don\'t \n know';   // \n new line
var len = abc.length;           // string length
abc.indexOf("lmno");    // find substring, -1 if doesn't contain 
abc.lastIndexOf("lmno");        // last occurance
abc.slice(3, 6); /* cuts out "def", negative values count from 
					behind*/
abc.replace("abc","123");/* find and replace, takes regular 
							expressions*/
abc.toUpperCase();              // convert to upper case
abc.toLowerCase();              // convert to lower case
abc.concat(" ", str2);          // abc + " " + str2
abc.charAt(2);                  // character at index: "c"
abc[2];                   // unsafe, abc[2] = "C" doesn't work
abc.charCodeAt(2);       // character code at index: "c" -> 99
abc.split(",");   // splitting a string on commas gives an array
abc.split("");                  // splitting on characters
128.toString(16);  // number to hex(16), octal (8) or binary (2)
```

### Numbers and Math∑
```js
var pi = 3.141;
pi.toFixed(0);          // returns 3
pi.toFixed(2);          // returns 3.14 - for working with money
pi.toPrecision(2)       // returns 3.1
pi.valueOf();           // returns number
Number(true);           // converts to number
Number(new Date())      // number of milliseconds since 1970
parseInt("3 months");   // returns the first number: 3
parseFloat("3.5 days"); // returns 3.5
Number.MAX_VALUE        // largest possible JS number
Number.MIN_VALUE        // smallest possible JS number
Number.NEGATIVE_INFINITY// -Infinity
Number.POSITIVE_INFINITY// Infinity
```
#### Math.
```js
var pi = Math.PI;       // 3.141592653589793
Math.round(4.4);        // = 4 - rounded
Math.round(4.5);        // = 5
Math.pow(2,8);          // = 256 - 2 to the power of 8
Math.sqrt(49);          // = 7 - square root 
Math.abs(-3.14);        // = 3.14 - absolute, positive value
Math.ceil(3.14);        // = 4 - rounded up
Math.floor(3.99);       // = 3 - rounded down
Math.sin(0);            // = 0 - sine
Math.cos(Math.PI);      // OTHERS: tan,atan,asin,acos,
Math.min(0, 3, -2, 2);  // = -2 - the lowest value
Math.max(0, 3, -2, 2);  // = 3 - the highest value
Math.log(1);            // = 0 natural logarithm 
Math.exp(1);            // = 2.7182pow(E,x)
Math.random();          // random number between 0 and 1
Math.floor(Math.random() * 5) + 1;// random integer, from 1 to 5
```
#### Constants like Math.PI:
```js
E, PI, SQRT2, SQRT1_2, LN2, LN10, LOG2E, Log10E
```

### Events🕖
```js
<button onclick="myFunction();">
   Click here
</button>
```

#### Mouse

```js
onclick, oncontextmenu, ondblclick,
onmousedown, onmouseenter, onmouseleave,
onmousemove, onmouseover, onmouseout, onmouseup
```

#### Keyboard
```js
onkeydown, onkeypress, onkeyup
```
#### Frame
```js
onabort, onbeforeunload, onerror, onhashchange, 
onload, onpageshow, onpagehide, onresize, onscroll,
onunload
```
#### Form
```js
onblur, onchange, onfocus, onfocusin,onfocusout,
oninput, oninvalid, onreset,onsearch, onselect, onsubmit
```
#### Drag
```js
ondrag, ondragend, ondragenter, ondragleave, ondragover,
ondragstart, ondrop
```
#### Clipboard
```js
oncopy, oncut, onpaste
```
#### Media
```js
onabort, oncanplay, oncanplaythrough, 
ondurationchange, onended, onerror, onloadeddata,
onloadedmetadata, onloadstart, onpause, onplay,onplaying,
onprogress, onratechange,onseeked, onseeking, onstalled, 
onsuspend, ontimeupdate, onvolumechange, onwaiting
```
#### Animation
```js
animationend, animationiteration, animationstart
```
#### Miscellaneous
```js
transitionend, onmessage, onmousewheel, ononline,
onoffline, onpopstate, onshow, onstorage, ontoggle,
onwheel, ontouchcancel, ontouchend, ontouchmove, 
ontouchstart.
```
### Global Functions()
```js
eval();   // executes a string as if it was script code
String(23);// return string from number
(23).toString(); // return string from number
Number("23");    // return number from string
decodeURI(enc);  // decode URI. Result: "my page.asp"
encodeURI(uri);  // encode URI. Result: "my%page.asp"
decodeURIComponent(enc);// decode a URI component
encodeURIComponent(uri);// encode a URI component
isFinite();     // is variable a finite, legal number
isNaN();        // is variable an illegal number
parseFloat(); // returns floating point number of string
parseInt();   // parses a string and returns an integer
```
## Arrays≡
```js
var dogs = ["Bulldog", "Beagle", "Labrador"]; 
var dogs = new Array("Bulldog", "Beagle",
			 "Labrador"); 	 // declaration
alert(dogs[1]); /* access value at index, first item
 being [0]*/
dogs[0] = "Bull Terier";    // change the first item
for (var i = 0; i < dogs.length; i++) { /* parsing with 
										array.length*/
    console.log(dogs[i]);
```
#### Methods
```js
dogs.toString();      /* convert to string: results 
						"Bulldog,Beagle,Labrador"*/
dogs.join(" * ");// join: "Bulldog * Beagle * Labrador"
dogs.pop();              // remove last element
dogs.push("Chihuahua");  // add new element to the end
dogs[dogs.length] = "Chihuahua"; // the same as push
dogs.shift();        // remove first element
dogs.unshift("Chihuahua"); /* add new element to 
the beginning*/
delete dogs[0];/* change element to undefined (not
 recommended)
dogs.splice(2, 0, "Pug", "Boxer");/* add elements 
(where, how many to remove, element list)*/
var animals = dogs.concat(cats,birds);/* join two arrays
 (dogs followed by cats and birds)*/
dogs.slice(1,4); // elements from [1] to [4-1]
dogs.sort();    // sort string alphabetically
dogs.reverse();   // sort string in descending order
x.sort(function(a, b){
return a - b});// numeric sort
x.sort(function(a, b){
return b - a});// numeric descending sort
highest = x[0]; /* first item in sorted array is the
 lowest (or highest) value*/
x.sort(function(a, b){
return 0.5 - Math.random()});/* random order sort*/
```

## Regular Expressions
```js
var a = str.search(/CheatSheet/i);
```
#### Modifiers

**i :** _perform case-insensitive matching_
**g :** _perform a global match_
**m :** _perform multiline matching_

#### Patterns
<div class="descriptionListing">
<div><span id="selectableSpan50" onclick="selectText(&quot;selectableSpan50&quot;)">\</span> <em>Escape character</em></div>
	<div><span id="selectableSpan51" onclick="selectText(&quot;selectableSpan51&quot;)">\d </span><em>find a digit </em></div>
<div><span id="selectableSpan52" onclick="selectText(&quot;selectableSpan52&quot;)">\s </span><em>find a whitespace character </em></div>
	<div><span id="selectableSpan53" onclick="selectText(&quot;selectableSpan53&quot;)">\b </span><em>find match at beginning or end of a word </em></div>
	<div><span id="selectableSpan54" onclick="selectText(&quot;selectableSpan54&quot;)">n+ </span><em>contains at least one n </em></div>
<div><span id="selectableSpan55" onclick="selectText(&quot;selectableSpan55&quot;)">n* </span><em>contains zero or more occurrences of n </em></div>
<div><span id="selectableSpan56" onclick="selectText(&quot;selectableSpan56&quot;)">n? </span><em>contains zero or one occurrences of n </em></div>
	<div><span id="selectableSpan57" onclick="selectText(&quot;selectableSpan57&quot;)">^</span> <em>Start of string</em></div>
	<div><span id="selectableSpan58" onclick="selectText(&quot;selectableSpan58&quot;)">$</span> <em>End of string</em></div>
	<div><span id="selectableSpan59" onclick="selectText(&quot;selectableSpan59&quot;)">\uxxxx </span><em>find the Unicode character </em></div>
	<div><span id="selectableSpan60" onclick="selectText(&quot;selectableSpan60&quot;)">.</span> <em>Any single character</em></div>
	<div><span id="selectableSpan61" onclick="selectText(&quot;selectableSpan61&quot;)">(a|b)</span> <em>a or b</em></div>
	<div><span id="selectableSpan62" onclick="selectText(&quot;selectableSpan62&quot;)">(...)</span> <em>Group section</em></div>
	<div><span id="selectableSpan63" onclick="selectText(&quot;selectableSpan63&quot;)">[abc]</span> <em>In range (a, b or c)</em></div>
	<div><span id="selectableSpan64" onclick="selectText(&quot;selectableSpan64&quot;)">[0-9]</span> <em>any of the digits between the brackets</em></div>
	<div><span id="selectableSpan65" onclick="selectText(&quot;selectableSpan65&quot;)">[^abc]</span> <em>Not in range</em></div>
	<div><span id="selectableSpan66" onclick="selectText(&quot;selectableSpan66&quot;)">\s</span> <em>White space</em></div>
	<div><span id="selectableSpan67" onclick="selectText(&quot;selectableSpan67&quot;)">a?</span> <em>Zero or one of a</em></div>
	<div><span id="selectableSpan68" onclick="selectText(&quot;selectableSpan68&quot;)">a*</span> <em>Zero or more of a</em></div>
	<div><span id="selectableSpan69" onclick="selectText(&quot;selectableSpan69&quot;)">a*?</span> <em>Zero or more, ungreedy</em></div>
	<div><span id="selectableSpan70" onclick="selectText(&quot;selectableSpan70&quot;)">a+</span> <em>One or more of a</em></div>
	<div><span id="selectableSpan71" onclick="selectText(&quot;selectableSpan71&quot;)">a+?</span> <em>One or more, ungreedy</em></div>
	<div><span id="selectableSpan72" onclick="selectText(&quot;selectableSpan72&quot;)">a{2}</span> <em>Exactly 2 of a</em></div>
	<div><span id="selectableSpan73" onclick="selectText(&quot;selectableSpan73&quot;)">a{2,}</span> <em>2 or more of a</em></div>
	<div><span id="selectableSpan74" onclick="selectText(&quot;selectableSpan74&quot;)">a{,5}</span> <em>Up to 5 of a</em></div>
	<div><span id="selectableSpan75" onclick="selectText(&quot;selectableSpan75&quot;)">a{2,5}</span> <em>2 to 5 of a</em></div>
	<div><span id="selectableSpan76" onclick="selectText(&quot;selectableSpan76&quot;)">a{2,5}?</span> <em>2 to 5 of a, ungreedy</em></div>
	<div><span id="selectableSpan77" onclick="selectText(&quot;selectableSpan77&quot;)">[:punct:]</span> <em>Any punctu­ation symbol</em></div>
	<div><span id="selectableSpan78" onclick="selectText(&quot;selectableSpan78&quot;)">[:space:]</span> <em>Any space character</em></div>
	<div><span id="selectableSpan79" onclick="selectText(&quot;selectableSpan79&quot;)">[:blank:]</span> <em>Space or tab</em></div>
</div>

---
// to be added: 
- working with objects and arrays using `Rest` and `Spread`.
- 