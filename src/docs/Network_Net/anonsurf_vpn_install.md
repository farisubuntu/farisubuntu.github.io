# Anonsurf VPN

[[toc]]

### Step 1. Clone

```bash
$ git clone  https://github.com/Und3rf10w/kali-anonsurf.git
```

> This repo was forked from ParrotSec. Und3rf10w has made some improvisations, like using DNS servers of Private Internet access. Plus, it already contains the Pandora package.

### Step 2. Install

```bash
$  cd  kali-anonsurf
# Give the installer execute permissions.
$ chmod  +x installer.sh
# Run the installer with ./installer.sh.
$ ./installer.sh
```
**Note**: This adds keys, updates, and installs anonsurf for you.

--- 
To check whether the installation is successful, enter the following command:
```bash
$ anonsurf
```

The following screen will appear if you have correctly gone through the installation process:

[![](https://linuxhint.com/wp-content/uploads/2020/07/2-68.png)](https://linuxhint.com/wp-content/uploads/2020/07/2-68.png)

### Step 3. Go Anonymous

Now that you have a working Anonsurf module, the following simple commands will help get you started.

-   **start**  starts the anon mode
-   **stop**  finishes the anon session
-   **restart**  combines “stop” and “start” options
-   **start-bridge**  starts system-wide Tor tunnel with Obfs4 bridge support
-   **changeid** restarts Tor to change identity
-   **enable-boot**  enables Anonsurf at boot
    -   Also by $ systemctl enable anonsurf
-   **disable-boot** disables Anonsurf at boot
    -   Also by $ systemctl disable anonsurf
-   **status**  checks whether Anonsurf is working properly
    -   Uses the  _Nyx_  application to display information about Tor service, bandwidth, nodes, etc.
-   **myip**  checks your IP and verifies your Tor connection
-   **dns**  replaces your DNS with the OpenNIC DNS servers.

Run the following command from the terminal to launch a secure Tor channel to direct your traffic, which will change your IP every five to ten minutes

```shell
$ anonsurf start
```

**Yes, it is that simple. Be sure that you are running this command as the root user or using the sudo prefix. However, if you are a Parrot OS user, you can simply select the ‘start service’ option to anonymize your browsing immediately.**

```js
$ sudo  anonsurf start
```

The program may prompt for a restart of various applications to clean out dangerous caches.

[![](https://linuxhint.com/wp-content/uploads/2020/07/3-63.png)](https://linuxhint.com/wp-content/uploads/2020/07/3-63.png)

**To check your IP at any given time, enter the following command:**

```bash
$ anonsurf myip
```

To check the status of the module, enter the following command:

```bash
$ anonsurf status
```
Nyx shows us information about the Tor service, bandwidth, and other information, such as nodes, average speed, etc.

[![](https://linuxhint.com/wp-content/uploads/2020/07/4-60-1024x263.png)](https://linuxhint.com/wp-content/uploads/2020/07/4-60.png)

**A simple stop command ends the session and wipes clean any traces.**

```bash
$ anonsurf stop
```

[![](https://linuxhint.com/wp-content/uploads/2020/07/5-52.png)](https://linuxhint.com/wp-content/uploads/2020/07/5-52.png)
