- To generate a html styled from a markdown content with various ready themes:

https://github.com/mixu/markdown-styles

- to adding styles inside markdown file:

`# heading text{#identifier cssselector}`

for example:
in top of markdown file:

```html
<style>
.heading1 {
    color: red;
    font-weight:700;
    font-size: 35px;
}
.heading2 {
    color: blue;
    font-weight:700;
    font-size: 30px;
}
</style>
```
reference your style with this syntax:
```md
# Markdown heading styles {#identifier .heading1}
## Markdown heading styles {#identifier .heading2}
```