[[toc]]

# CSS Media Query Review

- Syntax:

```css
@media media type and (condition: breakpoint) {
  // CSS rules
}
```

> **Important: Always put your media queries at the end of your CSS file.**

## media types (devices):

   - all — for all media types
   - print — for printers
   - screen — for computer screens, tablets and, smart-phones
   - speech — for screen readers that “read” the page out loud
- notes inside code:

```css

@media () {      /*target all media types*/
  // CSS rules
}

```

+ No standard resolution for devices but there are some commonly used breakpoints for widths of devices:
    - **320px — 480px: Mobile devices**
    - 481px — 768px: iPads, Tablets
    - **769px — 1024px: Small screens, laptops**
    - 1025px — 1200px: Desktops, large screens
    - **1201px and more —  Extra large screens, TV**

## Responsive Design - Media Queries: Examples

- set separate styles for a page’s computer display and printout.

```css
<link rel="stylesheet" type="text/css" href="screen.css" media="screen">
<link rel="stylesheet" type="text/css" href="print.css"  media="print">
```

- Basic condition properties: **max-width**, device-width, **orientation** (landscape vs. portrait), and `color`. 

For example, if 480px is the maximum resolution of the current device’s screen, then the styles defined in main_1.css will be applied:

```html
<link rel="stylesheet" media="screen and (max-device-width: 480px)" href="main_1.css" />
```

- Mobile browsers use so-called “**smart zoom**” used to proportionally reduce page size:
    1. user-initiated zoom(ex., tapping twice on iPhone)
    2. initially displaying a zoomed-in version of a web page on load.

- To disable zoom and ensure that your page content 

```html
<meta name="viewport" content="width=device-width,
 initial-scale=1" />
 <!-- To disable zoom completely,
  use: 'user-scalable=false' -->
```

## Responsive Design - Pseudo-Elements: Examples

Here simple responsive design example:

```css
.username:after {
    content:"Insert your user name";
}
@media screen and (max-width: 1024px) {
    .username:before {
        content:"User name";
    }
}
@media screen and (max-width: 480px) {
    .username:before {
        content:"";
    }
}
```
We achieve the following:

<img src="https://assets.toptal.io/images?url=https://uploads.toptal.io/blog/image/157/toptal-blog-2_C.png&width=524" width="80%" alt="error" />

#### tricks: 

for RWD images: 

```css
img {
    max-width: 100%
}
```

for RWD Icons, a great solution is to use **IconFonts** http://css-tricks.com/examples/IconFont]

> Tip: To keep things efficient and stop you from having to work backward, it’s recommended to always wireframe your website for mobile devices first.

> Links:
Responsive web design(https://www.toptal.com/responsive-web/responsive-design-is-not-enough-we-need-responsive-performance)