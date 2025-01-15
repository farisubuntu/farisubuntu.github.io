# NPM Quick Reference

[[toc]]

```bash

$ which node # where installed

/usr/bin/node

$ node --version # check version

v12.15.0

$ node

> console.log('Node is running');

Node is running

> .help

.break Sometimes you get stuck, this gets you out

.clear Alias for .break

.editor Enter editor mode

.exit Exit the repl

.help Print this help message

.load Load JS from a file into the REPL session

.save Save all evaluated commands in this REPL session to a file

  

Press ^C to abort current expression, ^D to exit the repl

```

  

> Node.js installation is OK, lets check `npm`

  

```bash

$ which npm

/usr/bin/npm

$ npm --version

6.13.7

```

  

> For Node Package Manager, is a separate project from Node.js. It tends to be updated more frequently. You can check the latest available npm version on this <https://www.npmjs.com/package/npm.>

> to be sure, update `npm`:

  

```bash

npm install -g npm@latest

```

  

## Node Packaged Modules

  

- In `Local` mode Inside `node_modules` folder in your parent working directory. This location is owned by the current user. If you’re not using a [version manager] (such as nvm)

  

```bash

$curl -o https://raw.githubusercontent.com/creationix nvm/v0.35.2/install.sh | bash

```

  

> See <https://www.sitepoint.com/quick-tip-multiple-versions-node-nvm/]>which you probably should be)

  

> global packages are in `{prefix}/lib/node_modules/`, which is owned by root (where `{prefix}` is usually `/usr/` or `/usr/local`). This means you would have to use `sudo` to install packages globally, which could cause permission errors when resolving third-party dependencies, as well as being a security concern.

  

## Changing the Location of Global Packages

  

Let’s see what output `npm config` gives us:

  

```bash

$ npm config list

; cli configs

metrics-registry = "https://registry.npmjs.org/"

scope = ""

user-agent = "npm/6.13.7 node/v12.15.0 linux x64"

  

; node bin location = /usr/bin/nodejs

; cwd = /home/sitepoint

; HOME = /home/sitepoint

;  "npm config ls -l" to show all defaults.

```

This gives us information about our install. For now, it’s important to get the current global location:

```bash
$ npm config get prefix
/usr
```

This is the prefix we want to change, in order to install global packages in our home directory. To do that create a new directory in your home folder:  

```bash

$cd  ~  && mkdir .node_modules_global

$ npm config set prefix=$HOME/.node_modules_global

```

  

With this simple configuration change, we’ve altered the location to which global Node packages are installed. This also creates a `.npmrc` file in our home directory:

  

```bash

$ npm config get prefix

/home/sitepoint/.node_modules_global

$ cat .npmrc

prefix=/home/sitepoint/.node_modules_global

  

```

  

We still have npm installed in a location owned by root. But because we changed our global package location, we can take advantage of that. We need to install npm again, but this time in the new, user-owned location. This will also install the latest version of npm:

  

```bash
npm install npm@latest -g
```

  

Finally, we need to add `.node_modules_global/bin` to our `$PATH` environment variable, so that we can run global packages from the command line. Do this by appending the following line to your `.profile`, `.bash_profile`or `.bashrc` and restarting your terminal:

  

```bash
export PATH="$HOME/.node_modules_global/bin:$PATH"
```

Now our `.node_modules_global/bin` will be found first and the correct version of npm will be used:


```bash
$ which npm
/home/sitepoint/.node_modules_global/bin/npm
$ npm --version
6.13.7
```

  

> Tip: you can avoid all of this if you use a Node version manager. Check out this tutorial to find out how: [Installing Multiple Versions of Node.js Using nvm](https://www.sitepoint.com/quick-tip-multiple-versions-node-nvm/).

  

## Installing Packages in Global Mode

  

At the moment, we only have one package installed globally — the npm package itself. So let’s change that and install [UglifyJS](https://www.npmjs.com/package/uglify-js) (a JavaScript minification tool). We use the `--global` flag, but this can be abbreviated to `-g`:

  

```bash

$ npm install uglify-js --global

/home/sitepoint/.node_modules_global/bin/uglifyjs -> /home/sitepoint/.node_modules_global/lib/node_modules/uglify-js/bin/uglifyjs

+ uglify-js@3.7.7

added 3 packages from 38 contributors in 0.259s

  

```

  

As you can see from the output, additional packages are installed. These are UglifyJS’s dependencies.

  

## Listing Global Packages

  

We can list the global packages we’ve installed with the `npm list` command:

  

```bash

$ npm list --global

home/sitepoint/.node_modules_global/lib

├─┬ npm@6.9.0

│ ├── abbrev@1.1.1

│ ├── ansicolors@0.3.2

│ ├── ansistyles@0.1.3

│ ├── aproba@2.0.0

│ ├── archy@1.0.0

....................

└─┬ uglify-js@3.5.3

├── commander@2.19.0

└── source-map@0.6.1

  

```

  

The output, however, is rather verbose. We can change that with the `--depth=0` option:

  

```bash

$ npm list -g --depth=0

/home/sitepoint/.node_modules_global/lib

├── npm@6.13.7

└── uglify-js@3.7.7

  

```

  

That’s better; now we see just the packages we’ve installed along with their version numbers.

  

Any packages installed globally will become available from the command line. For example, here’s how you would use the Uglify package to minify `example.js` into `example.min.js`:

  

```bash

$uglifyjs example.js -o example.min.js

```

  

## Installing Packages in Local Mode

  

When you install packages locally, you normally do so using a `package.json` file. Let’s go ahead and create one:

  

```bash

$ mkdir project &&  cd project

  

$ npm init

package name: (project)

version: (1.0.0)

description: Demo of package.json

entry point: (index.js)

test command:

git repository:

keywords:

author:

license: (ISC)

  

```

  

Press Return to accept the defaults, then press it again to confirm your choices. This will create a `package.json` file at the root of the project:

  

```javascript

{

"name": "project",

"version": "1.0.0",

"description": "",

"main": "index.js",

"scripts": {

"test": "echo \"Error: no test specified\" && exit 1"

},

"author": "",

"license": "ISC"

}

  

```

  

_Tip: If you want a quicker way to generate a `package.json` file use `npm init --y`._

  

The fields are hopefully pretty self-explanatory, with the exception of `main` and `scripts`. The `main` field is the primary entry point to your program, and the `scripts` field lets you specify script commands that are run at various times in the life cycle of your package. We can leave these as they are for now, but if you’d like to find out more, see the [package.json documentation on npm](https://docs.npmjs.com/files/package.json) and this article on [using npm as a build tool](https://www.sitepoint.com/guide-to-npm-as-a-build-tool/).

  

Now let’s try and install [Underscore](http://underscorejs.org/):

  

```bash

$ npm install underscore

npm notice created a lockfile as package-lock.json. You should commit this file.

npm WARN project@1.0.0 No repository field.

  

+ underscore@1.9.2

added 1 package from 1 contributor and audited 1 package in 0.412s

found 0 vulnerabilities

  

```

  

_Note that a lockfile is created. We’ll be coming back to this later._

  

Now if we have a look in `package.json`, we’ll see that a `dependencies` field has been added:

  

[Report Advertisement](https://www.sitepoint.com/beginners-guide-node-package-manager/#report-ad)

  

```javascript

{

...

"dependencies": {

"underscore": "^1.9.2"

}

}

  

```

  

## Managing Dependencies with package.json

  

As you can see, Underscore v1.9.2 was installed in our project. The caret (`^`) at the front of the version number indicates that when installing, npm will pull in the highest version of the package it can find where only the major version has to match (unless a `package-lock.json` file is present). In our case, that would be anything below v2.0.0. This method of versioning dependencies (major.minor.patch) is known as **semantic versioning**. You can read more about it here: [Semantic Versioning: Why You Should Be Using it](https://www.sitepoint.com/semantic-versioning-why-you-should-using/).

  

Also notice that Underscore was saved as a property of the `dependencies` field. This has become the default in the latest version of npm and is used for packages (like Underscore) required for the application to run. It would also be possible to save a package as a `devDependency` by specifying a `--save-dev` flag. `devDependencies` are packages used for development purposes — for example, for running tests or transpiling code.

  

_Tip: you can also add `private: true` to `package.json` to prevent accidental publication of private repositories, as well as suppressing any warnings generated when running `npm install`._

  

Far and away the biggest reason for using `package.json` to specify a project’s dependencies is portability. For example, when you clone someone else’s code, all you have to do is run `npm i` in the project root and npm will resolve and fetch all of the necessary packages for you to run the app. We’ll look at this in more detail later.

  

Before finishing this section, let’s quickly check that Underscore is working. Create a file called `test.js` in the project root and add the following:

  

```javascript

const  _  =  require("underscore");

console.log(_.range(5));

  

```

  

Run the file using `node test.js` and you should see `[0, 1, 2, 3, 4]` output to the screen.

  

## Uninstalling Local Packages

  

npm is a package manager, so it must be able to remove a package. Let’s assume that the current Underscore package is causing us compatibility problems. We can remove the package and install an older version, like so:

  

```bash

$ npm uninstall underscore

removed 1 package in 0.386s

  

$ npm list

project@1.0.0 /home/sitepoint/project

└── (empty)

```

  

## Installing a Specific Version of a Package

  

We can now install the Underscore package in the version we want. We do that by using the @ sign to append a version number:

  

```bash

$ npm install underscore@1.9.1

+ underscore@1.9.1

added 1 package in 1.574s

  

$ npm list

project@1.0.0 /home/sitepoint/project

└── underscore@1.9.1

  

```

  

## Updating a Package

  

Let’s check if there’s an update for the Underscore package:

  

```bash

$ npm outdated

Package Current Wanted Latest Location

underscore 1.9.1 1.9.2 1.9.2 project

```

  

The _Current_ column shows us the version that is installed locally. The _Latest_ column tells us the latest version of the package. And the _Wanted_ column tells us the latest version of the package we can upgrade to without breaking our existing code.

  

Remember the `package-lock.json` file from earlier? Introduced in npm v5, the purpose of this file is to ensure that the dependencies remain _exactly_ the same on all machines the project is installed on. It’s automatically generated for any operations where npm modifies either the `node_modules` folder or the `package.json` file.

  

You can go ahead and try this out if you like. Delete the `node_modules` folder, then re-run `npm i` (this is short for `npm install`). npm will re-install Underscore v1.9.1, even though we just saw that v1.9.2 is available. This is because we specified version 1.9.1 in the `package-lock.json` file:

  

```javascript

{

"name": "project",

"version": "1.0.0",

"lockfileVersion": 1,

"requires": true,

"dependencies": {

"underscore": {

"version": "1.9.1",

"resolved": "https://registry.npmjs.org/underscore/-/underscore-1.9.1.tgz",

"integrity": "sha512-5/4etnCkd9c8gwgowi5/om/mYO5ajCaOgdzj/oW+0eQV9WxKBDZw5+ycmKmeaTXjInS/W0BzpGLo2xR2aBwZdg=="

}

}

}

  

```

  

Prior to the emergence of the `package-lock.json` file, inconsistent package versions proved a big headache for developers. This was normally solved by using an `npm-shrinkwrap.json` file, which had to be manually created.

  

Now, let’s assume the latest version of Underscore fixed the bug we had earlier and we want to update our package to that version:

  

```bash

$ npm update underscore

+ underscore@1.9.2

updated 1 package in 0.236s

  

$ npm list

project@1.0.0 /home/sitepoint/project

└── underscore@1.9.2

  

```

  

_Tip: for this to work, Underscore has to be listed as a dependency in `package.json`. We can also execute `npm update` if we have many outdated modules we want to update._

  

## Searching for Packages

  

We’ve used the `mkdir` command a couple of times in this tutorial. Is there a Node package that has this functionality? Let’s use `npm search`:

  

```bash

$ npm search mkdir

NAME | DESCRIPTION | AUTHOR | DATE

mkdir | Directory creation… | =joehewitt | 2012-04-17

fs-extra | fs-extra contains… | =jprichardson… | 2019-06-28

mkdirp | Recursively mkdir,… | =isaacs… | 2020-01-24

make-dir | Make a directory… | =sindresorhus | 2019-04-01

...

  

```

  

There’s ([mkdirp](https://www.npmjs.com/package/mkdirp)). Let’s install it:

  

```bash

$ npm install mkdirp

+ mkdirp@1.0.3

added 1 package and audited 2 packages in 0.384s

  

```

  

Now create a `mkdir.js` fie and copy–paste this code:

  

```javascript

const  mkdirp  =  require('mkdirp');

  

const  made  =  mkdirp.sync('/tmp/foo/bar/baz');

console.log(`made directories, starting with ${made}`);

  

```

  

Next, run it from the terminal:

  

```bash

$ node mkdir.js

made directories, starting with /tmp/foo

  

```

  

## Re-installing Project Dependencies

  

Let’s first install one more package:

  

```bash

$ npm install request

+ request@2.88.0

added 48 packages from 59 contributors and audited 65 packages in 2.73s

found 0 vulnerabilities

  

```

  

Check the `package.json`:

  

```javascript

"dependencies": {

"mkdirp": "^1.0.3",

"request": "^2.88.0",

"underscore": "^1.9.2"

},

  

```

  

Note the dependencies list got updated automatically. If you wanted to install a package without saving it in `package.json`, just use the `--no-save` argument.

  

Let’s assume you’ve cloned your project source code to a another machine and we want to install the dependencies. Let’s delete the `node_modules` folder first, then execute `npm install`:

  

```bash

$ rm -R node_modules

$ npm list --depth=0

project@1.0.0 /home/sitepoint/project

├── UNMET DEPENDENCY mkdirp@1.0.3

├─┬ UNMET DEPENDENCY request@2.88.0

...

└── UNMET DEPENDENCY underscore@1.9.2

  

npm ERR! missing: mkdirp@1.0.3, required by project@1.0.0

npm ERR! missing: request@2.88.0, required by project@1.0.0

npm ERR! missing: underscore@1.9.2, required by project@1.0.0

...

  

$ npm install

added 50 packages from 60 contributors and audited 65 packages in 1.051s

found 0 vulnerabilities

  

```

  

If you look at your `node_modules` folder, you’ll see that it gets recreated again. This way, you can easily share your code with others without bloating your project and source repositories with dependencies.

  

## Managing the Cache

  

When npm installs a package, it keeps a copy, so the next time you want to install that package, it doesn’t need to hit the network. The copies are cached in the `.npm` directory in your home path:

  

```bash

$ ls ~/.npm

anonymous-cli-metrics.json _cacache index-v5 _locks _logs node-sass

  

```

  

This directory will get cluttered with old packages over time, so it’s useful to clean it up occasionally:

  

```bash

$npm cache clean --force

  

```

  

You can also purge all `node_module` folders from your workspace if you have multiple node projects on your system you want to clean up:

  

```bash

find . -name "node_modules" -type d -exec rm -rf '{}' +

  

```

  

## Audit

  

Have you noticed all of those `found 0 vulnerabilities` scattered throughout the CLI output? The reason for this is that a new feature was introduced in npm that allows developers to scan the dependencies for known security vulnerabilities.

  

Let’s try out this feature by installing an old version of `express`:

  

```bash

$ npm install express@4.8.0

  

express@4.8.0

added 36 packages from 24 contributors and audited 123 packages in 2.224s

found 21 vulnerabilities (8 low, 9 moderate, 4 high)

run `npm audit fix` to fix them, or `npm audit`  for details

  

```

  

As soon as we finish installing, we get a quick report that multiple vulnerabilities have been found. You can run the command `npm audit` to view more details:

  

```bash

$ npm audit

  

=== npm audit security report ===

  

# Run npm install express@4.17.1 to resolve 21 vulnerabilities

┌───────────────┬──────────────────────────────────────────────────────────────┐

│ High │ Regular Expression Denial of Service │

├───────────────┼──────────────────────────────────────────────────────────────┤

│ Package │ negotiator │

├───────────────┼──────────────────────────────────────────────────────────────┤

│ Dependency of │ express │

├───────────────┼──────────────────────────────────────────────────────────────┤

│ Path │ express > accepts > negotiator │

├───────────────┼──────────────────────────────────────────────────────────────┤

│ More info │ https://nodesecurity.io/advisories/106 │

└───────────────┴──────────────────────────────────────────────────────────────┘

  

┌───────────────┬──────────────────────────────────────────────────────────────┐

│ Moderate │ Timing Attack │

├───────────────┼──────────────────────────────────────────────────────────────┤

│ Package │ cookie-signature │

├───────────────┼──────────────────────────────────────────────────────────────┤

│ Dependency of │ express │

├───────────────┼──────────────────────────────────────────────────────────────┤

│ Path │ express > cookie-signature │

├───────────────┼──────────────────────────────────────────────────────────────┤

│ More info │ https://nodesecurity.io/advisories/134 │

└───────────────┴──────────────────────────────────────────────────────────────┘

  

```

  

You’ll get a detailed list of packages that have vulnerabilities. If you look at the `Path` field, it shows the dependency path. For example, the Path `express > accepts > negotiator` means Express depends on the `Accepts` package. The `Accepts` package depends on the the `negotiator` package, which contains the vulnerability.

  

There are two ways of fixing all these problems. We can either execute the command `npm install express@4.17.1` as suggested, or run `npm audit fix`. Let’s do the latter:

  

```bash

$ npm audit fix

  

+ express@4.17.1

added 20 packages from 14 contributors, removed 7 packages and updated 29 packages in 1.382s

fixed 21 of 21 vulnerabilities in 122 scanned packages

  

```

  

The command `npm audit fix` automatically installs any compatible updates to vulnerable dependencies. While this might seem like magic, do note that vulnerabilities can’t always be fixed automatically. This could happen if you’re using a package that’s undergone a major change which could break your current project if updated. For situations such as this, you’ll have to review your code and manually apply the fix.

  

You can also run `npm audit fix --force` if you don’t mind upgrading packages with breaking changes. After you’ve executed the command, run `npm audit` to ensure that all vulnerabilities have been resolved.

  

## Aliases

  

As you may have noticed, there are multiple ways of running npm commands. Here’s a brief list of some of the commonly used npm aliases:

  

-  `npm i <package>`: install local package

-  `npm i -g <package>`: install global package

-  `npm un <package>`: uninstall local package

-  `npm up`: npm update packages

-  `npm t`: run tests

-  `npm ls`: list installed modules

-  `npm ll` or `npm la`: print additional package information while listing modules

  

You can also install multiple packages at once like this:

  

```bash

$npm i express momemt lodash mongoose body-parser webpack

  

```

  

If you want to view all the common npm commands, just execute `npm help` for the full list. You can also learn more in our article [10 Tips and Tricks That Will Make You an npm Ninja](https://www.sitepoint.com/10-npm-tips-and-tricks/).

  

## npx

  

You might also hear talk of npx on your travels. Don’t confuse this with npm. As we’ve learned, npm is a tool for _managing_ your packages, whereas npx is a tool for _executing_ packages. It comes bundled with npm version 5.2+.

  

A typical use of npx is for executing one-off commands. For example, imagine you wanted to spin up a simple HTTP server. You _could_ install the [http-server package](https://www.npmjs.com/package/http-server) globally on your system, which is great if you’ll be using `http-server` on a regular basis. But if you just want to test the package, or would like to keep your globally installed modules to a minimum, you can change into the directory where you’d like to run it, then execute the following command:

  

```bash

npx http-server

  

```

  

And this will spin up the server without installing anything globally.

  

You can [read more about npx here](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner).

  

## Conclusion

  

In this tutorial, we’ve covered the basics of working with npm. We’ve demonstrated how to install Node.js from the project’s download page, how to alter the location of global packages (so we can avoid using `sudo`), and how to install packages in local and global mode. We also covered deleting, updating and installing a certain version of a package, as well as managing a project’s dependencies.
 

With every new release, npm is making huge strides into the world of front-end development. [According to its co-founder](http://frontendhappyhour.com/episodes/npm-install-beer-save-in-mouth/), its user base is changing and most of those using it are not using it to write Node at all. Rather, it’s becoming a tool that people use to put JavaScript together on the front end (seriously, you can use it to install just about anything) and one which is becoming an integral part of writing modern JavaScript.
 

Are you using npm in your projects? If not, now might be a good time to start.