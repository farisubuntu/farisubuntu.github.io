# apt - packge manager (debian)
[[toc]]

[Source: https://itsfoss.com/apt-command-guide/](https://itsfoss.com/apt-command-guide/)

# Using apt Commands in Linux [Complete Guide] - It's FOSS

_**Examples so that you can manage packages effectively.**_

What is apt?
------------

[APT](https://wiki.debian.org/Apt) (Advanced Package Tool). You can use it to find and install new packages, upgrade packages, remove the packages etc.

[apt-get][(https://linux.die.net/man/8/apt-get)] is perhaps the most popular tool around APT. But apt is slowly promoted as its alternative. 

>I have already explained the [difference between apt and apt-get][(https://itsfoss.com/apt-vs-apt-get-difference/)] in a previous article along with why apt was introduced in the first place, therefore, I will not get into the details again.

### Update package database with apt

apt actually works on a database of available packages. If the database is not updated, the system won’t know if there are any newer packages available. 
Q: Why Updating the repository should be the first thing to do in in any Linux system after a fresh install.
A: because `apt` require a database to manage packages.

Updating the package database 

```sudo apt update```

When you run this command, you’ll see:

![apt command example with apt update](https://i0.wp.com/itsfoss.com/wp-content/uploads/2017/07/apt-commands-examples.png?ssl=1)

```apt update will update the package database```

You’ll see three types of lines here, Hit, Get and Ign. Basically these are:

*   Hit: there is no change in package version from the previous version
*   Ign: the package is being ignored. Either the package is way too recent that it doesn’t even bother to check or there was an error in retrieving the file but error was trivial and thus it is being ignored. Don’t worry, this is not an error.
*   Get: There is a new version available. It will download the information about the version (not the package itself). You can see that there is download information (size in kb) with the ‘get’ line in the screenshot above.

### Upgrade installed packages with apt

- The most convenient way is to upgrade all the packages that have available updates. You can simply use the command below:

```sudo apt upgrade```

- Upgrade all packages at once

Aanother way to provide a complete upgrade by using the command below:

```sudo apt full-upgrade```

full-upgrade works the same as upgrade except that <b>if system upgrade needs the removal of a package already installed on the system, it will do that. Whereas, the normal upgrade command won’t do this.</b>

#### What is the difference between apt update and apt upgrade?

Though it sounds like when you do an apt update, will NOT get the latest version of the package. But <b>only updates the database of the packages.</b>

**For example, if you have XYZ package version 1.3 installed, after apt update, the database will be aware that a newer version 1.4 is available.  When you do an apt upgrade after apt update, it upgrades (or updates, whichever term you prefer) the installed packages to the newer version.**


This is the reason why the fastest and the most convenient way to [update Ubuntu system][(https://itsfoss.com/update-ubuntu/)] by using this command:
<b>
```sudo apt update && sudo apt upgrade -y```
</b>


### How to install new packages with apt
```sudo apt install <package_name>```

### How to install multiple packages with apt

- You can install several packages at a time by :

```sudo apt install <pkg_1> <pkg_2> <pkg_3>```

#### What if you run apt install on an already installed package?

No harm is done by using it, unless you don’t want it to be upgraded.

#### How to install packages without upgrading

You can use the option `–no-upgrade` in the following manner:

```sudo apt install <pkg_name> --no-upgrade```

#### How to only upgrade packages, not install it

To upgrade a package but don’t want to install it (if it’s not already installed), you can:

```sudo apt install <package_name> --only-upgrade```

#### How to install a specific version of an application

By default, the latest version available in the repository will be installed. 
- If you don’t want to install the latest version, you can specify the version number. You would need to know the exact version number that you want to install.
<b>Just add =version with the name of the package.</b>

```sudo apt install <package_name>=<version_number>```

### How to remove installed packages with apt

Easy as installing them. Just use the command below:

```sudo apt remove <package_name>```

**Another way of uninstalling packages is to use purge. The command is used in the following manner:**

```sudo apt purge <package_name>```

---

#### What is the difference between apt remove and apt purge?

*   `apt remove` just removes the binaries of a package. I**t leaves configuration files.**
*   `apt purge` removes everything related to a package **including the configuration files.**

- If you used `apt remove` to a get rid of a particular software and then install it again, your software will have the same configuration files. **Of course, you will be asked to override the existing configuration files when you install it again.**

- <em>Purge is useful when you have messed up with the configuration of a program. You want to completely erase its traces from the system and perhaps start afresh.</em>

- Usually, `apt remove` is more than enough for uninstalling a package.

### Search for packages

Not my preferred way of searching for packages. But this is useful when you are looking for some specific lib. Just use the following command with desired search terms. It will find all the packages containing your search term.

```apt search <search term>```

### See the content of a package

<b>To know more about a package before installing or removing it, you can use the below command:</b>

`apt show <package_name>`

This will show information 
- dependencies
- installation 
- download size
- different sources the package is available from.
- the description of the content of the package among other things.


### List upgradable and installed versions

`apt` command has a new option called list. Using this command, you can see all the packages that have a newer version ready to be upgraded:

```apt list --upgradeable```

### List all upgradeable packages

To see all the installed packages on the system with installed option:

`apt list --installed`

There is also a third option called `–all-versions`. It will list all the packages available for your system:

`apt list --all-versions`

### How to clean your system with apt

I have talked about ways of [cleaning Ubuntu system](https://itsfoss.com/free-up-space-ubuntu-linux/) to free up space. Unlike apt-get, you don’t have clean and autoclean commands here. You can still use the autoremove option and free up some diskspace:

````sudo apt autoremove````

This command removes libs and packages that were installed automatically to satisfy the dependencies of an installed package. If the package is removed, these automatically installed packages, though useless, remains in the system.

![Use aot command to free up space in Ubuntu Linux](https://i1.wp.com/itsfoss.com/wp-content/uploads/2017/07/apt-commands-examples-10.png?ssl=1)

Use autoremove to free up space

I had recently cleaned my system and that is why it shows only a few Kb of files to be removed. Otherwise, you could easily get 100s of Mb of free space with this command.

### Your input

I have deliberately not included apt edit-sources command in this article. It’s because this command option is a work in progress and at this point, it does nothing more than opening the sources.list file in the editor of your choice.

How do you like this guide for using apt commands in Linux? I hope it was easy to understand apt commands with examples. Your feedback will help in creating more such guides in the near future.