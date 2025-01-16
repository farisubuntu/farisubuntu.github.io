from mdn: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/


- The  _Express application_  tobject also provides methods to define route handlers for all the other HTTP verbs, which are mostly used in exactly the same way:

`checkout()`, `copy()`, **`delete()`**, **`get()`**, `head()`, `lock()`, `merge()`, `mkactivity()`,  `mkcol()`,  `move()`,  `m-search()`,  `notify()`,  `options()`,  `patch()`,  **`post()`**,  `purge()`,  **`put()`**,  `report()`,  `search()`,  `subscribe()`,  `trace()`,  `unlock()`,  `unsubscribe()`.

- There is a special routing method, `app.all()`, which will be called in response to any HTTP method. This is used for loading middleware functions at a particular path for all request methods:

```js
app.all('/secret', function(req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});
```
Routes allow you to match particular patterns of characters in a URL, and extract some values from the URL and pass them as parameters to the route handler (as attributes of the request object passed as a parameter).
- Routes allow you to match particular patterns of characters in a URL, and extract some values from the URL and pass them as parameters to the route handler (as attributes of the request object passed as a parameter).
- For example, we can create our wiki route in a module named **wiki.js**, and then export the `Router` object, as shown below:

```js
// wiki.js - Wiki route module

const express = require('express');
const router = express.Router();

// Home page route
router.get('/', function(req, res) {
  res.send('Wiki home page');
});

// About page route
router.get('/about', function(req, res) {
  res.send('About this wiki');
});

module.exports = router;
```
> **Note:** Adding routes to the `Router` object is just like adding routes to the `app` object

To use the router in our main app file we would then `require()` the route module (**wiki.js**), then call `use()` on the _Express_ application to add the Router to the middleware handling path. The two routes will then be accessible from `/wiki/` and `/wiki/about/`.

### Using middleware:

Middleware is used extensively in Express apps, for tasks from serving static files to error handling, to compressing HTTP responses. The order in which middleware is called is up to the app developer.

> **Note:** The middleware can perform any operation, execute any code, make changes to the request and response object, and it can _also end the request--response cycle_. If it does not end the cycle then it must call `next()` to pass control to the next middleware function (or the request will be left hanging).

You can find a list of middleware packages maintained by the express team which include other 3rd party packages: http://expressjs.com/en/resources/middleware.html

# Express Tutorial Part 2: Creating a skeleton website:

## [Installing the Express Application Generator]

```bash
npm install express-generator -g
```
create an `Express` app named 'helloworld':
` $ express helloworld`

change directory:  
`$ cd helloworld  `
  
install dependencies:  
`$ npm install`
  
run the app:  
`$ DEBUG=helloworld:* npm start`

The generator has a number of options, which you can view on the command line using the  `--help`  (or  `-h`) command:

```bash
> express --help

  Usage: express [options] [dir]

  Options:

        --version        output the version number
    -e, --ejs            add ejs engine support
        --pug            add pug engine support
        --hbs            add handlebars engine support
    -H, --hogan          add hogan.js engine support
    -v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
        --no-view        use static html instead of view engine
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git            add .gitignore
    -f, --force          force on non-empty directory
    -h, --help           output usage information           output usage information
```

### [What view engine should I use?](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website#what_view_engine_should_i_use "Permalink to What view engine should I use?")

The _Express Application Generator_ allows you to configure a number of popular view/templating engines, including [EJS][https://www.npmjs.com/package/ejs], [Hbs][http://github.com/donpark/hbs], [Pug][https://pugjs.org/api/getting-started.html] (Jade), [Twig][https://www.npmjs.com/package/twig], and [Vash][https://www.npmjs.com/package/vash), although it chooses Jade by default if you don't specify a view option.

Generally speaking, you should select a templating engine that delivers all the functionality you need and allows you to be productive sooner — or in other words:
-   Time to productivity.
-   Popularity and activity — Review the popularity of the engine and whether it has an active community.
-  Style — Some template engines use specific markup to indicate inserted content within "ordinary" HTML, while others construct the HTML using a different syntax (for example, using indentation and block names).
-   Performance/rendering time.
-   Features — you should consider whether the engines you look at have the following features available:
    -   Layout inheritance: Allows you to define a base template and then "inherit" just the parts of it that you want to be different for a particular page. This is typically a better approach than building templates by including a number of required components or building a template from scratch each time.
    -   "Include" support: Allows you to build up templates by including other templates.
    -   Concise variable and loop control syntax.
    -   Ability to filter variable values at template level (e.g. making variables upper-case, or formatting a date value).
    -   Ability to generate output formats other than HTML (e.g. JSON or XML).
    -   Support for asynchronous operations and streaming.
    -   Client-side features. If a templating engine can be used on the client this allows the possibility of having all or most of the rendering done client-side.

> for this project we will use `Pug` templating engine.

### [What CSS stylesheet engine should I use?](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website#what_css_stylesheet_engine_should_i_use "Permalink to What CSS stylesheet engine should I use?")

by use the one of the most common CSS stylesheet engines: `LESS, SASS, Compass, Stylus`.

As with templating engines, you should use the stylesheet engine that will allow your team to be most productive. For this project, we'll use vanilla CSS (the default) as our CSS requirements are not sufficiently complicated to justify using anything else.

### [What database should I use?](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website#what_database_should_i_use "Permalink to What database should I use?")

The generated code doesn't use/include any databases. _Express_ apps can use any [database mechanism](https://expressjs.com/en/guide/database-integration.html) supported by _Node_ (_Express_ itself doesn't define any specific additional behavior/requirements for database management).

### Creating the project

For the sample Local Library app we're going to build, we'll create a project named express-locallibrary-tutorial using the Pug template library and no CSS engine.First, navigate to where you want to create the project and then run the Express Application Generator in the command prompt as shown:

` $ express express-locallibrary-tutorial --view=pug`

The generator will create (and list) the project's files.  
  create : express-locallibrary-tutorial\
   create : express-locallibrary-tutorial\public\
   create : express-locallibrary-tutorial\public\javascripts\
   create : express-locallibrary-tutorial\public\images\
   create : express-locallibrary-tutorial\public\stylesheets\
   create : express-locallibrary-tutorial\public\stylesheets\style.css
   create : express-locallibrary-tutorial\routes\
   create : express-locallibrary-tutorial\routes\index.js
   create : express-locallibrary-tutorial\routes\users.js
   create : express-locallibrary-tutorial\views\
   create : express-locallibrary-tutorial\views\error.pug
   create : express-locallibrary-tutorial\views\index.pug
   create : express-locallibrary-tutorial\views\layout.pug
   create : express-locallibrary-tutorial\app.js
   create : express-locallibrary-tutorial\package.json
   create : express-locallibrary-tutorial\bin\
   create : express-locallibrary-tutorial\bin\www

   change directory:
     > cd express-locallibrary-tutorial

   install dependencies:
     > npm install

   run the app (Bash (Linux or macOS))
     > DEBUG=express-locallibrary-tutorial:* npm start

   run the app (PowerShell (Windows))
     > $ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start

   run the app (Command Prompt (Windows)):
     > SET DEBUG=express-locallibrary-tutorial:* & npm start

## [Enable server restart on file changes](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website#enable_server_restart_on_file_changes "Permalink to Enable server restart on file changes")

> Note: any change4s you make to your express website are currently not visible until you restart the server.  A convention tool for this purpose is `nodemon`. Here we'll install and use it locally as a developer dependency so any developers working with this project get it automatically when they install application.

install `nodemon` locally:

` $ npm install --save-dev nodemon`

**Note:** Because the tool isn't installed globally we can't launch it from the command line (unless we add it to the path) but we can call it from an NPM script because NPM knows all about the installed packages. Find the  `scripts`  section of your package.json. Initially, it will contain one line, which begins with  `"start"`. Update it by putting a comma at the end of that line, and adding the  `"devstart"` and  `"serverstart"`  lines shown below:

```
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  },
```

We can now start the server in almost exactly the same way as previously, but using the `devstart` command:

On macOS or Linux, use this command:

```bash
DEBUG=express-locallibrary-tutorial:* npm run devstart
```
## [The generated project](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website#the_generated_project "Permalink to The generated project")

### [Directory structure](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website#directory_structure "Permalink to Directory structure")

The generated project, now that you have installed dependencies, has the following file structure (files are the items  **not**  prefixed with "/"). The  **package.json**  file defines the application dependencies and other information. It also defines a startup script that will call the application entry point, the JavaScript file  **/bin/www**.

### [package.json](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website#package.json "Permalink to package.json")

The  **package.json**  file defines the application dependencies and other information:

```json
{
  "name": "express-locallibrary-tutorial",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "morgan": "~1.9.1",
    "pug": "2.0.0-beta11"
  },
  "devDependencies": {
    "nodemon": "^2.0.4"
  }
}
```

The dependencies include the  _express_  package and the package for our selected view engine (_pug_). In addition, we have the following packages that are useful in many web applications:

-   [cookie-parser](https://www.npmjs.com/package/cookie-parser): Used to parse the cookie header and populate  `req.cookies`  (essentially provides a convenient method for accessing cookie information).
-   [debug](https://www.npmjs.com/package/debug): A tiny node debugging utility modeled after node core's debugging technique.
-   [morgan](https://www.npmjs.com/package/morgan): An HTTP request logger middleware for node.
-   [http-errors](https://www.npmjs.com/package/http-errors): Create HTTP errors where needed (for express error handling).

The scripts section first defines a "_start_" script, which is what we are invoking when we call  `npm start`  to start the server (this script was added by the  _Express Application Generator_). From the script definition, you can see that this actually starts the JavaScript file  **./bin/www**  with  _node_.


The file `/bin/www`is the application entry point! The very first thing this does is `require()` the "real" application entry point (`app.js`, in the project root) that sets up and returns the express() application object. `#!/usr/bin/env node`

```js
/**
 * Module dependencies.
 */
var app = require('../app');
```

Note: `require()` is a global node function that is used to import modules into the current file. Here we specify `app.js` module using a relative path and omitting the optional (.js) file extension.

### [app.js](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website#app.js "Permalink to app.js")


