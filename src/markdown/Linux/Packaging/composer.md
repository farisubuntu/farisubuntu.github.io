# Composer
[[toc]]

## Installing Composer:

```sh
$ sudo apt-get install php

# Download composer
$ curl -Ss https://getcomposer.org/installer | php

# move to /usr/local/bin/composer
$ sudo mv composer.phar /usr/local/bin/composer

# make it exe
$ chmod +x /usr/local/bin/composer

# check the version of the Composer
$ composer

```

## adding to PATH:

`export PATH=$PATH:$HOME/.config/composer/vendor/bin`

Or, inside your .bashrc, add :

`export PATH=$PATH:"$HOME/.config/composer/vendor/bin"`

## Remove unused dependences

`$ composer update`

## Create a project:

```bash
$ composer init
```



