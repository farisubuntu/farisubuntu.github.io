Markdown files outside the `.vitepress` directory are considered **source files**.
VitePress uses **file-based routing**: each `.md` file is compiled into a corresponding `.html` file with the same path. For example, `index.md` will be compiled into `index.html`, and can be visited at the root path `/` of the resulting VitePress site.
VitePress also provides the ability to generate clean URLs, rewrite paths, and dynamically generate pages. These will be covered in the [Routing Guide](https://vitepress.dev/guide/routing).

The tool should have also injected the following npm scripts to your `package.json`

```json
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  ...
}
```
Example: `$ npm run docs:dev`

[What's Next? - see https://vitepress.dev/guide/getting-started](https://vitepress.dev/guide/getting-started)
