# WordPress and GitHub Integration – Live and Local Environment
---

[[toc]]

[source: https://www.cloudways.com/blog/wordpress-github/](https://www.cloudways.com/blog/wordpress-github/)

This article outlines the use of Git in WordPress development and how developers can set up a Git-enabled WordPress development workflow.


How to Use WordPress and GitHub
-------------------------------

1.  When you have a live WordPress site on a live server and want to push the files directly to the GitHub repository (this helps developers collaborate effortlessly). I’m going to create a development environment and deploy changes to the live site.
2.  When you have a local environment and want to push WordPress files to GitHub repository.

How to Use WordPress and GitHub – Live Environment
--------------------------------------------------

I’m going to assume that you have a WordPress site on your live server. In my case, my WordPress site is hosted on a Cloudways managed server.

### Step 1: Create Repository on GitHub

Log into GitHub and create a repository by following this [link](https://github.com/new).

![create new github repository](https://www.cloudways.com/blog/wp-content/uploads/GitHub-new-respository.png)

![create new github repository](https://www.cloudways.com/blog/wp-content/uploads/GitHub-new-respository.png)

Give a name to your repository (in my case, it’s **GitHub**). You can also add a description and access control (I selected **Public)** and click **Create repository**.

### Step 2: Push Live WordPress site files to the GitHub Repository

After creating a new repository, you need to push all your WordPress files and folders from the live server to the brand new GitHub repository.

As I mentioned earlier, I’m going to use the Cloudways Platform to demonstrate the live environment.

I am going to launch the server **SSH Terminal**. If you’re a Cloudways customer, you may be familiar with the SSH terminal that is a command-line interface (CLI) through which you can handle your application files.

To launch SSH Terminal, you need to navigate to Cloudways **Server Management Panel** > **Master Credentials** > **Launch SSH Terminal** and paste your server Master Credentials **(username and password**).

![ssh terminal cloudways](https://www.cloudways.com/blog/wp-content/uploads/Cloudways-SSH-Terminal-2-300x134.png)

![ssh terminal cloudways](https://www.cloudways.com/blog/wp-content/uploads/Cloudways-SSH-Terminal-2-300x134.png)

Next, run the following commands.

cd applications/xxxxxx/public\_html (xxxxxx is the folder name of your WordPress application).

1.  cd applications/xxxxxx/public\_html (xxxxxx is the folder name of your WordPress application).


This is the path of your WordPress folder. You can also push a specific folder such as wp-content or themes folder/files by using the correct path.

![wordpress folder](https://www.cloudways.com/blog/wp-content/uploads/command-1-1.png)

![wordpress folder](https://www.cloudways.com/blog/wp-content/uploads/command-1-1.png)

git init

1.  git init

git init

This initializes the empty Git repository.

![git initialize ](https://www.cloudways.com/blog/wp-content/uploads/command-2.png)

![git initialize ](https://www.cloudways.com/blog/wp-content/uploads/command-2.png)

git add .

1.  git add .

git add .

This command adds all files to the local GitHub repository and stages them for the first commit.

![git command add files](https://www.cloudways.com/blog/wp-content/uploads/command-3.png)

![git command add files](https://www.cloudways.com/blog/wp-content/uploads/command-3.png)

git checkout -b master

1.  git checkout -b master

git checkout -b master

Switch to the master branch.

![master branch](https://www.cloudways.com/blog/wp-content/uploads/command-4.png)

![master branch](https://www.cloudways.com/blog/wp-content/uploads/command-4.png)

git commit -m "first commit"

1.  git commit -m "first commit"

git commit -m "first commit"

Commit the changes that have been tracked and prepare them for the push to the GitHub repository.

![first git commit](https://www.cloudways.com/blog/wp-content/uploads/command-5.png)

![first git commit](https://www.cloudways.com/blog/wp-content/uploads/command-5.png)

If you see this message “Please tell me who you are”, you need to run these commands:

git config --global user.email "you@example.com"                                                                                           
git config --global user.name "Your Name"

1.  git config --global user.email "you@example.com"
2.  git config --global user.name "Your Name"

git config --global user.email "you@example.com"                                                                                           
git config --global user.name "Your Name"

![setting account identity ](https://www.cloudways.com/blog/wp-content/uploads/Please-tell-me-who-you-are-1.png)

![setting account identity ](https://www.cloudways.com/blog/wp-content/uploads/Please-tell-me-who-you-are-1.png)

Replace the email and name with your own.

![config user email and name](https://www.cloudways.com/blog/wp-content/uploads/command-6-300x16.png)

![config user email and name](https://www.cloudways.com/blog/wp-content/uploads/command-6-300x16.png)

**git remote add origin** _remote repository URL  
_The URL of your GitHub repository where all files will be pushed. Copy **HTTPS** remote URL and paste it to the remote _repository URL_.

![github repository url](https://www.cloudways.com/blog/wp-content/uploads/URL-of-your-GitHub-repository-300x42.png)

![github repository url](https://www.cloudways.com/blog/wp-content/uploads/URL-of-your-GitHub-repository-300x42.png)

In my case, the entire command will be:

git remote add origin https://github.com/farhanayub/GitHub.git

1.  git remote add origin https://github.com/farhanayub/GitHub.git

git remote add origin https://github.com/farhanayub/GitHub.git

![git remote add origin ](https://www.cloudways.com/blog/wp-content/uploads/command-7-300x8.png)

![git remote add origin ](https://www.cloudways.com/blog/wp-content/uploads/command-7-300x8.png)

git push origin master

1.  git push origin master

git push origin master

This command will finally push all the files to the GitHub repository in the master branch.

![push all files](https://www.cloudways.com/blog/wp-content/uploads/command-8.png)

![push all files](https://www.cloudways.com/blog/wp-content/uploads/command-8.png)

Note: You will need to enter your GitHub username and password.

![github username and password](https://www.cloudways.com/blog/wp-content/uploads/user-and-password-GitHub.png)

![github username and password](https://www.cloudways.com/blog/wp-content/uploads/user-and-password-GitHub.png)

**_If you see any errors, use the following command, and repeat all commands in sequence._**

rm -rf .git/

1.  rm -rf .git/

rm -rf .git/

![remove the file](https://www.cloudways.com/blog/wp-content/uploads/command-9.png)

![remove the file](https://www.cloudways.com/blog/wp-content/uploads/command-9.png)

**Note:** _If you have a public repository, a good practice is to delete the wp-config.php from the GitHub repository because it contains credentials of your WordPress application. You can always edit it directly on the live site._

![successfully pushed to github](https://www.cloudways.com/blog/wp-content/uploads/Push-WordPress-files-to-GitHub.png)

![successfully pushed to github](https://www.cloudways.com/blog/wp-content/uploads/Push-WordPress-files-to-GitHub.png)

Next, check your GitHub repository and tada! You’ve successfully pushed your WordPress files.

### Step 3: Install Git

Now, you can pull your files from GitHub to your local PC and for that, you need to download and install [Git](https://git-scm.com/downloads) at your local system.

![download and install git](https://www.cloudways.com/blog/wp-content/uploads/Install-Git-300x177.png)

![download and install git](https://www.cloudways.com/blog/wp-content/uploads/Install-Git-300x177.png)

### Step 4: Pull to Local Folder from GitHub Repository

After installing Git, let’s start pulling files and folders to a local folder.

Create a folder, get into it and press **Right-Click** > **Git Bash Here**. It will open a window (resembling the command prompt), where you can enter Git commands to connect this folder to the online GitHub repository.

Enter the following Git commands one by one.

git init

git add .

git remote add origin https://github.com/farhanayub/GitHub.git

/\* Don’t forget to replace the URL with your own. \*/

git pull origin master

1.  git init

3.  git add .

5.  git remote add origin https://github.com/farhanayub/GitHub.git

7.  /\* Don’t forget to replace the URL with your own. \*/

9.  git pull origin master

git init

git add .

git remote add origin https://github.com/farhanayub/GitHub.git

/\* Don’t forget to replace the URL with your own. \*/

git pull origin master

![pull wordpress files from github](https://www.cloudways.com/blog/wp-content/uploads/Pull-Git-comamnds.png)

![pull wordpress files from github](https://www.cloudways.com/blog/wp-content/uploads/Pull-Git-comamnds.png)

It will take some time, depending on your connection speed and the size of your WordPress repository.

Once the process finishes, go to your local WordPress folder. You can see that all the files from the GitHub repo have been pulled successfully.

![pulled wordpress files](https://www.cloudways.com/blog/wp-content/uploads/WordPress-files.png)

![pulled wordpress files](https://www.cloudways.com/blog/wp-content/uploads/WordPress-files.png)

### Step 5: Build Development Environment on the Local Machine

Now, let’s create a development environment for WordPress and GitHub on the local machine. For that, I’m going to install Sublime Text and a GitHub package known as GitSavvy.

1.  Install Sublime Text  
    I am using Sublime Text as my [code editor](https://www.cloudways.com/blog/top-ide-and-code-editors-php-development/). You need to download and install the latest version of the [Sublime Text editor](https://www.sublimetext.com/).
2.  Install GitHub Package for Sublime Text Editor  
    You will find many GitHub Tools for Sublime Text. I am using [GitSavvy](https://github.com/divmain/GitSavvy), a popular package

GitSavvy has [a complete list of GitHub commands](https://github.com/timbrel/GitSavvy/blob/master/docs/README.md) that can help you manage your Push and Pull processes. To install the package, open the **Command Palette** by pressing **CTRL+SHIFT+P** or navigate to **Tools** > **Command Palette**.

![command palette](https://www.cloudways.com/blog/wp-content/uploads/Sublime-Command-Palette.png)

![command palette](https://www.cloudways.com/blog/wp-content/uploads/Sublime-Command-Palette.png)

A new popup will appear, asking you to perform a task. Now, you need to install the **Package Control** that will enable adding different Sublime Text packages. Search for **Install Package** and press enter.

![install package on sublime](https://www.cloudways.com/blog/wp-content/uploads/Install-Sublime-package.png)

![install package on sublime](https://www.cloudways.com/blog/wp-content/uploads/Install-Sublime-package.png)

Within a few seconds, you will see a new popup displaying a complete list of available packages. Now, search and install **GitSavvy**.

![gitsavvy package](https://www.cloudways.com/blog/wp-content/uploads/Sublime-GitSavvy.png)

![gitsavvy package](https://www.cloudways.com/blog/wp-content/uploads/Sublime-GitSavvy.png)

On the successful installation of the GitSavvy package, a new tab will be opened displaying a welcome message from the GitSavvy team.

![welcome message from gitsavvy](https://www.cloudways.com/blog/wp-content/uploads/welcome-message-300x110.png)

![welcome message from gitsavvy](https://www.cloudways.com/blog/wp-content/uploads/welcome-message-300x110.png)

Note: I would suggest reading this in full as you will have a good understanding of the GitSavvy basics. You can also get help within Sublime Text by pressing **CTRL+SHIFT+P** and typing **GitSavvy: help**.

### Step 6: Connect Sublime Text to GitHub

Next, you need to connect Sublime Text with GitHub so that you can easily push changes from the local environment to the WordPress repository on GitHub.

Open the local WordPress folder in Sublime Text by going to **File** > **Open Folder**.

![open wordpress folder ](https://www.cloudways.com/blog/wp-content/uploads/WordPress-files-Sublime.png)

![open wordpress folder ](https://www.cloudways.com/blog/wp-content/uploads/WordPress-files-Sublime.png)

To test this environment I am going to edit the **wp-login.php** file and

add **echo “Hello World!”;** at the top of the file just below **<?php** and **Save** it.

![adding code](https://www.cloudways.com/blog/wp-content/uploads/edit-WordPress-file-300x164.png)

![adding code](https://www.cloudways.com/blog/wp-content/uploads/edit-WordPress-file-300x164.png)

Then, initialize GitHub on Sublime Text by opening the Command Palette, search for **status**, and press enter where it says **git: status**.

![check file status](https://www.cloudways.com/blog/wp-content/uploads/status-Sublime-300x168.png)

![check file status](https://www.cloudways.com/blog/wp-content/uploads/status-Sublime-300x168.png)

This command will compare the local folder with the GitHub repository version and let you know the name of the files that you changed.

![unstagged mode](https://www.cloudways.com/blog/wp-content/uploads/unstagged-file.png)

![unstagged mode](https://www.cloudways.com/blog/wp-content/uploads/unstagged-file.png)

You can see, **wp-login.php** is in **unstaged** mode. You can do a lot with this file by following the instructed commands. But first, you need to **stage** this file, **commit** it, and then **push** it to GitHub repository.

Press **S** to stage this file, and check the status through the **git: status** command. You will notice that the file has been moved to the staged mode.

![stagged mode](https://www.cloudways.com/blog/wp-content/uploads/stagged-file.png)

![stagged mode](https://www.cloudways.com/blog/wp-content/uploads/stagged-file.png)

To commit this change, press **c**. A new tab will open describing the changes I have done in the **wp-login.php** file. Write “**my commit”** at the top of the file and press **CTRL+ENTER** to submit the commit.

![submitting commit](https://www.cloudways.com/blog/wp-content/uploads/my-commit.png)

![submitting commit](https://www.cloudways.com/blog/wp-content/uploads/my-commit.png)

**Note**: It might ask your name and email so that the **commit** could be submitted under your name.

### Step 7: Push from Local to GitHub

Now, I need to tell Sublime Text about the repository I am going to **push** the change. Use **git: remote add** command to set the remote URL.

![setting remote URL](https://www.cloudways.com/blog/wp-content/uploads/set-remote-url-300x193.png)

![setting remote URL](https://www.cloudways.com/blog/wp-content/uploads/set-remote-url-300x193.png)

![setting remote name](https://www.cloudways.com/blog/wp-content/uploads/set-remote-name.png)

![setting remote name](https://www.cloudways.com/blog/wp-content/uploads/set-remote-name.png)

Once you are connected with the GitHub repository, use **git: push** to push the changes.

![pushing changes](https://www.cloudways.com/blog/wp-content/uploads/push-file.png)

![pushing changes](https://www.cloudways.com/blog/wp-content/uploads/push-file.png)

Select the **origin** and the branch name **master**.

![setting branch name and origin](https://www.cloudways.com/blog/wp-content/uploads/origin-branch-300x179.png)

![setting branch name and origin](https://www.cloudways.com/blog/wp-content/uploads/origin-branch-300x179.png)

Note: If you are not logged into your GitHub account, it may ask you to login.

![successfully pushed file to GitHub](https://www.cloudways.com/blog/wp-content/uploads/pushed-file-300x196.png)

![successfully pushed file to GitHub](https://www.cloudways.com/blog/wp-content/uploads/pushed-file-300x196.png)

### Step 8: Connect GitHub with Live Environment

After connecting Sublime Text to GitHub, you need to log in to your Cloudways account and get into the WordPress application. From the left panel in the dashboard, go to **Deployment via Git** and tap on **Generate SSH Keys**.

![generate ssh key ](https://www.cloudways.com/blog/wp-content/uploads/generate-SSH-key-300x148.png)

![generate ssh key ](https://www.cloudways.com/blog/wp-content/uploads/generate-SSH-key-300x148.png)

Click **VIEW SSH KEY** and download SSH Keys.

![view and download ssh key](https://www.cloudways.com/blog/wp-content/uploads/download-SHH-key-300x149.png)

![view and download ssh key](https://www.cloudways.com/blog/wp-content/uploads/download-SHH-key-300x149.png)

Go back to GitHub repository and navigate to **Settings > Deploy Keys > Add Deploy Key**, set title, and enter the downloaded **SSH Keys**.

![adding ssh key in github deploy keys](https://www.cloudways.com/blog/wp-content/uploads/deploy-SSH-key-GitHub-300x179.png)

![adding ssh key in github deploy keys](https://www.cloudways.com/blog/wp-content/uploads/deploy-SSH-key-GitHub-300x179.png)

As you can see, I have marked the checkbox where it says **Allow write access** because I am going to exchange the changes.

Within your GitHub repository, navigate to the **Code** tab, copy **SSH Key**, make sure you have selected **use SSH**.

![cloning via ssh](https://www.cloudways.com/blog/wp-content/uploads/use-SSH.png)

![cloning via ssh](https://www.cloudways.com/blog/wp-content/uploads/use-SSH.png)

Now, get back to the Cloudways Platform where it says **Deployment via Git**. Paste the **SSH Key** in the **Git Remote Address** field, click **Authenticate**, and choose the branch of your Git repository (I am using **master**).

The deployment path is left empty because I am going to connect WordPress application’s **public\_html** folder with the GitHub repository. Now tap on **Start Deployment** to connect the Cloudways Platform with GitHub.

![connecting cloudways and github](https://www.cloudways.com/blog/wp-content/uploads/start-deployment.png)

![connecting cloudways and github](https://www.cloudways.com/blog/wp-content/uploads/start-deployment.png)

Once it is done, you will get a notification at the top right corner of the screen.

![message on successful repository cloning](https://www.cloudways.com/blog/wp-content/uploads/successful-notification.png)

![message on successful repository cloning](https://www.cloudways.com/blog/wp-content/uploads/successful-notification.png)

### Step 9: Pull Changes to a Live Environment from GitHub

OK so, everything is configured and working well. Now, we need to pull changes from the GitHub repository to a WordPress site on Cloudways.

From Cloudways platform, get into your application and then navigate to **Application Management > Deployment via Git**, hit the **Pull** button.

![pulling changes from github](https://www.cloudways.com/blog/wp-content/uploads/pull-changes.png)

![pulling changes from github](https://www.cloudways.com/blog/wp-content/uploads/pull-changes.png)

Bingo!

All changes have been updated on the live site. Here is how they look.

![checking pulled file](https://www.cloudways.com/blog/wp-content/uploads/testing-file-300x226.png)

![checking pulled file](https://www.cloudways.com/blog/wp-content/uploads/testing-file-300x226.png)

Why Isn’t The Pull Automated?
-----------------------------

The process of pulling all the changes may seem hassle because you have to do it manually. The reason is to avoid unwanted push to GitHub repo that can happen by mistake. It is advisable to only make a Pull request when you are confident enough to apply changes on the live site.

The whole live environment process might look complex, but once everything is properly configured, you just need to make changes in the local WordPress folder using the Sublime Text editor, push to GitHub and Pull on the live site.

How to Use WordPress and GitHub – Local Environment
---------------------------------------------------

This is the second case where you’re working on your local machine and want to push your WordPress files to the GitHub repository.

Here, I’m assuming that you have a local setup ready (if not, here’s a [complete guide](https://www.cloudways.com/blog/install-wordpress-locally/) that will help you to do that).

So, let’s get started!

### Step1: Download and Install Git

First, you need to [download](https://git-scm.com/downloads) and install Git on your local machine. Choose the version that is compatible with your OS.

![installing git](https://www.cloudways.com/blog/wp-content/uploads/install-and-setup-Git.png)

![installing git](https://www.cloudways.com/blog/wp-content/uploads/install-and-setup-Git.png)

### Step 2: Sign in to GitHub and Create a New Repository

After installing Git, log in to your GitHub account > **Respostories** > **New**.

![github repository folder](https://www.cloudways.com/blog/wp-content/uploads/GitHub-repository-1-300x117.png)

![github repository folder](https://www.cloudways.com/blog/wp-content/uploads/GitHub-repository-1-300x117.png)

Next, you need to fill the fields and click **Create repository**.

![creating a new repository](https://www.cloudways.com/blog/wp-content/uploads/new-repository.png)

![creating a new repository](https://www.cloudways.com/blog/wp-content/uploads/new-repository.png)

### Step 3: Push WordPress files from the local environment to GitHub

I’m going to push the local WordPress theme files (the Twenty Twenty theme) to the GitHub repository.

For this, go to the WordPress theme folder and right-click for the context menu, and click **Git Bash Here.**

![git bash here](https://www.cloudways.com/blog/wp-content/uploads/open-Git-Bash-300x147.png)

![git bash here](https://www.cloudways.com/blog/wp-content/uploads/open-Git-Bash-300x147.png)

A command prompt will pop up and all you need to do is use the following commands.

git init

1.  git init

git init

![initialized empty git repository](https://www.cloudways.com/blog/wp-content/uploads/Git-intialize.png)

![initialized empty git repository](https://www.cloudways.com/blog/wp-content/uploads/Git-intialize.png)

git add .

1.  git add .

git add .

![adding all files via git](https://www.cloudways.com/blog/wp-content/uploads/adding-all-files.png)

![adding all files via git](https://www.cloudways.com/blog/wp-content/uploads/adding-all-files.png)

git commit -m "first commit"

1.  git commit -m "first commit"

git commit -m "first commit"

![first git commit](https://www.cloudways.com/blog/wp-content/uploads/add-commit.png)

![first git commit](https://www.cloudways.com/blog/wp-content/uploads/add-commit.png)

git remote add origin https://github.com/farhanayub/MyWordPress.git

1.  git remote add origin https://github.com/farhanayub/MyWordPress.git

git remote add origin https://github.com/farhanayub/MyWordPress.git

![adding GitHub repository URL](https://www.cloudways.com/blog/wp-content/uploads/add-GitHub-repo-URL.png)

![adding GitHub repository URL](https://www.cloudways.com/blog/wp-content/uploads/add-GitHub-repo-URL.png)

You can copy your URL from here:

![repository https url](https://www.cloudways.com/blog/wp-content/uploads/GitHub-repository-URL-300x44.png)

![repository https url](https://www.cloudways.com/blog/wp-content/uploads/GitHub-repository-URL-300x44.png)

git push -u origin master

1.  git push -u origin master

git push -u origin master

![pushing all files](https://www.cloudways.com/blog/wp-content/uploads/push-files.png)

![pushing all files](https://www.cloudways.com/blog/wp-content/uploads/push-files.png)

### Step 4: Check GitHub Repository

Now, go to GitHub and refresh the repository page. As you can see, all theme files (the Twenty Twenty) have been successfully pushed to this GitHub repo.

![checking github repository](https://www.cloudways.com/blog/wp-content/uploads/check-repository-300x210.png)

![checking github repository](https://www.cloudways.com/blog/wp-content/uploads/check-repository-300x210.png)

Final Words
-----------

I hope this article helped you integrate WordPress with GitHub. I’ve discussed two scenarios of working with a live and a local environment of WordPress and GitHub.

If you have any questions, feel free to ask in the comments section below.