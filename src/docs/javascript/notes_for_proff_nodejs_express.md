### Basic Routing:

First create an express app:

```js
const express =  require('express');
const app =  express();
```
  
Then you can define routes like this:

```js

app.get('/someUri', function (req, res, next) {})

```

  

That structure works for all `HTTP` methods, and expects a path as the first argument, and a handler for that path, which receives the request and response objects. So, for the basic `HTTP` methods, these are the routes

  

```js

// GET www.domain.com/myPath

app.get('/myPath', function (req, res, next) {})

// POST www.domain.com/myPath

app.post('/myPath', function (req, res, next) {})

// PUT www.domain.com/myPath

app.put('/myPath', function (req, res, next) {})

// DELETE www.domain.com/myPath

app.delete('/myPath', function (req, res, next) {})

```

  

You can check the complete list of supported verbs here. If you want to define the same behavior for a route and all ``HTTP`` methods, you can use:

  

```js

app.all('/myPath', function (req, res, next) {})

//or

app.use('/myPath', function (req, res, next) {})

//or

app.use('*', function (req, res, next) {})

// * wildcard will route for all paths

```

  

You can chain your route definitions for a single path

  

```js

app.route('/myPath')

.get(function (req, res, next) {})

.post(function (req, res, next) {})

.put(function (req, res, next) {})

```

  

You can also add functions to any `HTTP` method. They will run before the final callback and take the parameters `(req, res, next)` as arguments.

  

```js

// GET www.domain.com/myPath

app.get('/myPath', myFunction, function (req, res, next) {})

```

  

Your final callbacks can be stored in an external file to avoid putting too much code in one file:

  

```js

// other.js

exports.doSomething  =  function(req, res, next) {/* do some stuff */};

```

  

And then in the file containing your routes:

  

```js

const other =  require('./other.js');

app.get('/someUri', myFunction, other.doSomething);

```

  

### Section 3.4: Using a Template Engine

  

The following code will setup Jade as template engine. (Note: Jade has been renamed to pug as of December 2015.)

  

```js

const express =  require('express'); //Imports the express module

const app =  express(); //Creates an instance of the express module

const PORT =  3000; //Randomly chosen port

  

app.set('view engine','jade'); //Sets jade as the View Engine / Template Engine

app.set('views','src/views'); //Sets the directory where all the views (.jade files) are stored.

  

//Creates a Root Route

app.get('/',function(req, res){

res.render('index'); //renders the index.jade file into html and returns as a response. The render function optionally takes the data to pass to the view.

});

  

//Starts the Express server with a callback

app.listen(PORT, function(err) {

if (!err) {

console.log('Server is running at port', PORT);

} else {

console.log(JSON.stringify(err));

}

});

  

```

  

> Remember to `npm install` the Template Engine too such `hbs`,`jade/pug` or `ejs`.

  

---

  

### Section 3.5: JSON API with ExpressJS

  

```js

var express =  require('express');

  

var cors =  require('cors'); // Use cors module for enable Cross-origin resource sharing

  

var app =  express();

app.use(cors()); // for all routes

  

var port = process.env.PORT ||  8080;

  

app.get('/', function(req, res) {

var info = {

'string_value': 'StackOverflow',

  

'number_value':}

res.json(info);

8476

// or

/* res.send(JSON.stringify({

string_value: 'StackOverflow',

number_value: 8476

})) */

//you can add a status code to the json response

/* res.status(200).json(info) */

})

app.listen(port, function() {

console.log('Node.js listening on port '  + port)

})

```

  

On http://localhost:8080/ output object

  

```json

{

string_value:"StackOverflow",

number_value:8476

}

```

  

### Section 3.6: Serving static files

  

When building a webserver with Express it's often required to serve a combination of dynamic content and static

files.

  

It is common to use folder named 'public' to have static files. In this case the folder structure may look like:

  

```bash

project root

├── server.js

├── package.json

└── public

├── index.html

└── script.js

````

  

To configure Express to serve static files:

  

```js

app.use(express.static('public'));

```

  

you must not specify /public/ in the url). This is because, express looks up for the files relative to the static folder configured. You can specify virtual path prefix as shown below:

  

```js

app.use('/static', express.static('public'));

```

  

This will make the resources available under the `/static/` prefix.

  
  
  

To define multiple folders at the same time:

  

```js

app.use(express.static('public'));

app.use(express.static('images'));

app.use(express.static('files'));

```

> Express will examine the folder in definition order. In case of files with the same name, the one in the first matching folder will be served.

---

### Section 3.7: Adding Middleware

  
  

[x] add more about `middleware` functions

**Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.**

  Middleware functions can execute any code, make changes to res and req objects, end response cycle and call next middleware.
----

### Section 3.9: Getting info from the request

  

To get info from the requesting url (notice that req is the request object in the handler function of routes).

  

Consider this route definition `/settings/:user_id` and this particular example `/settings/32135?field=name`

  

```js

// get the full path

req.originalUrl // => /settings/32135?field=name

  

// get the user_id param

req.params.user_id // => 32135

// get the query value of the field
req.query.field // => 'name'

```

You can also get headers of the request, like this

```js

req.get('Content-Type') // "text/plain"

```

To simplify getting other info you can use middlewares. For example, to get the body info of the request, you can use the body-parser middleware, which will transform raw request body into usable format.

  

```js

var app =  require('express')();

var bodyParser =  require('body-parser');

app.use(bodyParser.json()); // for parsing application/json

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

```

  

Now suppose a request like this

  

```http

PUT /settings/32135

{

"name": "Peter"

}

```

  

You can access the posted name like this

  

```js

req.body.name // "Peter"

```

  

In a similar way, you can access cookies from the request, you also need a middleware like cookie-parser

  

```js

req.cookies.name

```

  
  

### Section 3.11: Hook: How to execute code before any `req` and after any `res`
  app.use() and middleware can be used for "before" and a combination of the close and finish events can be used for "after".

  

```js
app.use(function (req, res, next) {
function  afterResponse() {
res.removeListener('finish', afterResponse);
res.removeListener('close', afterResponse);
// actions after response
}
res.on('finish', afterResponse);
res.on('close', afterResponse);
// action before request
// eventually calling 'next()'
next();
});
app.use(app.router);
```

> Note: Just make sure this "middleware" is used before app.router as order does matter.

---

### Section 3.13: Custom middleware in Express

In Express, you can define middlewares that can be used for checking requests or setting some headers in response.

```js
app.use(function(req, res, next){ }); // signature
```

Example

The following code adds user to the request object and pass the control to the next matching route.

```js
var express =  require('express');
var app =  express();
//each request will pass through it
app.use(function(req, res, next){
req.user =  'testuser';
next(); // it will pass the control to next matching route
});
app.get('/', function(req, res){
var user = req.user;
console.log(user); // testuser
return res.send(user);
});
app.listen(3000);
```