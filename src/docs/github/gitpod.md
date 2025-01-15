# Introduction to Gitpod
[[toc]]

[Gitpod][https://www.gitpod.io/]  is an open source platform for automated and  **ready-to-code development environments**  that blends into your existing workflow. It enables developers to describe their dev environment as code and  **start instant and fresh development environments for each new task**  directly from your browser.

At the heart of Gitpod: **an open platform that removes all friction of manually setting up and maintaining dev environments** allowing yourself and your team to build applications quicker and more collaboratively.
<iframe width="840" height="420" src="https://www.youtube.com/embed/d6D-OUPnJeg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---


## Gitpod Concepts

Gitpod seamlessly integrates in your workflow and works with all major `git` hosting platforms including GitHub, GitLab and Bitbucket. It understands the context you are in and adjusts your dev environment accordingly. **For example, if you create a Gitpod workspace from a Pull or Merge Request, Gitpod will open a fully-initialized dev environment in code-review mode.**

![gitpod-architecture](https://www.gitpod.io/static/e8d7768b99b4f07e5886cd8fd4395ad3/267c0/gitpod-architecture.png "gitpod-architecture"]

At its core Gitpod relies on a  **client-server architecture**  where the client can either be:

-   **Any device**  with a browser and internet connection (Gitpod works with Chrome, Firefox, Safari, Edge and other Chromium-based browsers]
-   Your  **local machine**  via local VS Code, IntelliJ or simply your shell/terminal where you SSH into your Gitpod workspace (_expected to be released in early Q1/2021_]

### 🗳 Workspace

A workspace comprises(يشمل) your whole development environment and gives you similar capabilities to a Linux machine. Compared to the latter it is however  **pre-configured and optimized for your individual development workflow**. Each workspace includes:

-   Your source code
-   A shell with  [root / sudo capabilities][https://www.gitpod.io/blog/root-docker-and-vscode/#root-access]
-   Your IDE of choice* - currently this is  [VS Code][https://www.gitpod.io/blog/root-docker-and-vscode/#vs-code]  or  [Theia][https://theia-ide.org/]
-   Your personal IDE extensions, themes, editor prefs
-   Full  [Docker support][https://www.gitpod.io/blog/root-docker-and-vscode/#docker]
---

## Getting Started:

You can start using Gitpod with one or more of the following ways:

-   Use a  [Prefixed URL](https://www.gitpod.io/docs/getting-started/#prefixed-url)
	- `https://gitlab.com/gitpod/spring-petclinic` **will be** `https://gitpod.io/#https://gitlab.com/gitpod/spring-petclinic`
-   Install  [Browser Extension](https://www.gitpod.io/docs/getting-started/#browser-extension)
-   Enable  [GitLab Integration](https://www.gitpod.io/docs/getting-started/#gitlab-integration)
-   Quick start using an  [Example Project](https://www.gitpod.io/docs/getting-started/#example-project)  or  [OSS Project](https://www.gitpod.io/docs/getting-started/#gitpodified-open-source-project)

<iframe width="840" height="420" src="https://www.youtube.com/embed/ZZ0_TQ6UApY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Notes from video:**
[] 
