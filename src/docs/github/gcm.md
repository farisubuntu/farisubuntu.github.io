# Git Credentional Manager (GCM)
---

[[toc]]


- get `.deb` from (https://github.com/git-ecosystem/git-credential-manager/releases/download/v2.3.2/gcm-linux_amd64.2.3.2.deb)

- install package:

```sh
sudo dpkg -i <path-to-package>
git-credential-manager configure
```

## Credential stores

There are several options for storing credentials that GCM supports:

- Windows Credential Manager
- DPAPI protected files
- macOS Keychain
- [freedesktop.org Secret Service API][freedesktop-secret-service]
- GPG/[`pass`][passwordstore] compatible files
- Git's built-in [credential cache][credential-cache]
- Plaintext files

> GCM comes without a default store on Linux distributions.

> You can select which credential store to use by setting the [`GCM_CREDENTIAL_STORE`][gcm-credential-store] environment variable, or the [`credential.credentialStore`][credential-store]
Git configuration setting. For example:

```bash
git config --global credential.credentialStore gpg
```

Some credential stores have limitations, or further configuration required depending on your particular setup. See more detailed information below for each credential store.

## GPG/pass compatible files (macOS,Linux)

> Requires `gpg`, `pass`, and a `GPG` key pair.

```shell
$ export GCM_CREDENTIAL_STORE=gpg
# or
$ git config --global credential.credentialStore gpg
```

This credential store uses GPG to encrypt files containing credentials which are stored in your file system. The file structure is compatible with the popular pass tool. By default files are stored in `~/.password-store` but this can be configured using the pass environment variable `PASSWORD_STORE_DIR`.

Before you can use this credential store, it must be initialized by the pass utility, which in-turn requires a valid `GPG` key pair. To initalize the store, run:

`pass init <gpg-id>`

..where `<gpg-id>` is the user ID of a `GPG` key pair on your system. To create a new `GPG` key pair, run:

`gpg --gen-key`

..and follow the prompts.


## Plaintext files

Available on: Windows, macOS, Linux

> ⚠️ This is not a secure method of credential storage!

```
export GCM_CREDENTIAL_STORE=plaintext
# or
git config --global credential.credentialStore plaintext
```

This credential store saves credentials to plaintext files in your file system. By default files are stored in `~/.gcm/store or %USERPROFILE%\.gcm\store`. This can be configured using the environment variable `GCM_PLAINTEXT_STORE_PATH` environment variable.

If the directory doesn't exist it will be created.

On POSIX platforms the newly created store directory will have permissions set such that only the owner can read/write/execute (700 or drwx---). Permissions on existing directories will not be modified.

Now to continue:

- [Checking for existing GPG keys](https://docs.github.com/en/authentication/managing-commit-signature-verification/checking-for-existing-gpg-keys)

then :

- [Adding a GPG key to your GitHub account](https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account)

- [Then tell your git with sign key](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)

---

**This after install `gcm`:**

## GPG/pass compatible files

> Requires gpg, pass, and a `GPG` key pair.

```bash
export GCM_CREDENTIAL_STORE=gpg
# or
git config --global credential.credentialStore gpg
```

This credential store uses `GPG` to encrypt files containing credentials which are stored in your file system. The file structure is compatible with the popular pass tool. By default files are stored in `~/`.password-store but this can be configured using the pass environment variable `PASSWORD_STORE_DIR`.

Before you can use this credential store, it must be initialized by the pass utility, which in-turn requires a valid `GPG` key pair. To initalize the store, run:

```bash
pass init <gpg-id>
# ..where <gpg-id> is the user ID of a GPG key pair on your system.
# To create a new GPG key pair, run:
gpg --gen-key
```


..and follow the prompts.


