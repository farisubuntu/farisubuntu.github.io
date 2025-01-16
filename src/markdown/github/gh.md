# `gh` - Github CLI

[[toc]]


Main Source for `gh` is : [https://cli.github.com/manual/](https://cli.github.com/manual/)
---


## gh repo
---
“gh repo” is a command provided by GitHub CLI (Command-Line Interface) that allows users to work with GitHub repositories directly from the command-line interface. It provides a convenient and efficient way to perform various repository-related tasks without the need to navigate to the GitHub website.

With the “gh repo” command, users can perform the following actions:

-   **Create Repositories**: Users can initiate the process of creating a new repository from the command-line interface. They can specify the repository name, description, visibility (public or private), and other relevant settings. This allows users to quickly create repositories without the need to access the GitHub website.
-   **Clone Repositories**: Users can clone repositories from GitHub directly to their local machine using the “gh repo clone” command. This command automatically sets up the necessary Git configuration and establishes the connection with the remote repository, enabling users to start working on the code immediately.
-   **View Repository Information**: Users can retrieve and view detailed information about a repository using the “gh repo view” command. This includes details such as the repository’s name, owner, description, creation date, last update, license, and other relevant metadata. Users can also view information about the repository’s branches, forks, and pull requests.
-   **List Repositories**: The “gh repo list” command allows users to list and view multiple repositories in a concise format. Users can filter repositories based on criteria such as their visibility (public, private, or all), ownership (user, organization, or all), and other parameters. This helps users quickly identify and access the repositories they are interested in.
-   **Fork Repositories**: Users can create a fork of a repository using the “gh repo fork” command. Forking a repository creates a copy of the original repository under the user’s account, allowing them to make changes and contributions without affecting the original repository. This is a common workflow for collaborating on open-source projects.
-   **Clone Repositories from Templates**: GitHub provides the concept of repository templates that serve as starting points for new projects. The “gh repo create –template” command allows users to create a new repository based on an existing template. This helps streamline the process of setting up new projects with predefined file structures and configurations.
-   **Transfer Repositories**: Users with sufficient permissions can transfer ownership of a repository to another user or organization using the “gh repo transfer” command. This is useful when ownership of a repository needs to be changed or when a project is being handed off to a different entity.
-   **Delete Repositories**: Users can delete repositories using the “gh repo delete” command. This permanently removes the repository and all its associated data, including code, issues, and pull requests. Care should be taken when using this command, as deleted repositories cannot be recovered.

## gh repo Command Examples

1. Create a new repository (if the repository name is not set, the default name will be the name of the current directory):

# gh repo create name

2. Clone a repository:

# gh repo clone owner/repository

3. Fork and clone a repository:

# gh repo fork owner/repository --clone

4. View a repository in the default web browser:

# gh repo view repository --web

5. List repositories owned by a specific user or organization (if the owner is not set, the default owner will be the currently logged in user):

# gh repo list owner

6. List only non-forks repositories:

# gh repo list owner --non-forks

7. List repositories with a specific primary coding language:

# gh repo list owner --language language_name


