[[toc]]

# RWD notes:

## Convert a Menu to a Dropdown for Small Screens

```html
<nav>
 <ul>
  <li><a href="/" class="active">Home</a></li>
  <li><a href="/collections/all">Books</a></li>
  <li><a href="/blogs/five-simple-steps-blog">Blog</a></li>
  <li><a href="/pages/about-us">About Us</a></li>
  <li><a href="/pages/support">Support</a></li>
 </ul>

 <select>
  <option value="" selected="selected">Select</option>

  <option value="/">Home</option>
  <option value="/collections/all">Books</option>
  <option value="/blogs/five-simple-steps-blog">Blog</option>
  <option value="/pages/about-us">About Us</option>
  <option value="/pages/support">Support</option>
 </select>
</nav>
```

``` css
nav select {
  display: none;
}

/* Now use media query, for example: */
@media (max-width: 960px) {
  nav ul     { display: none; }
  nav select { display: inline-block; }
}

```

---

## Fluid layout

- The font size:

```css
/*  The font size will change
   as per the viewport width. */
p,
a,
h1 {
 font-size: clamp(1rem, 0.5rem + 2.5vw, 3rem);
}
```

- Dynamic Gap: 

```css
/* With the gap property, we can
   create a dynamic spacing that changes based
   on the viewport or container size.*/
.wrapper {
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
 gap: clamp(1rem, 2vw, 24px);
}
```

- vertical padding:

```css
/* We might need to change the vertical padding
 based on the viewport size. CSS 'clamp()'
 with viewport units is perfect for that. */
.hero {
 padding: clamp(2rem, 10vmax, 10rem) 1rem;
}
```

![vertical padding using clamp()](https://ishadeed.com/assets/responsive-design/use-case-padding.jpg)

-  A font size on large screens:

```css
/* We needed a way to add a limit otherwise a font 
size can blow up to be huge on large screens:*/
h2 {
 font-size: calc(1rem + 5vw);
}

/* If the viewport width is 2000px or more, limit
* the font size to 4rem.
*/
@media (min-width: 2000px) {
 font-size: 4rem;
}

/* Instead of above code, you can use 'clamp()'  */
h2 {
 font-size: clamp(1rem, 0.5rem + 2.5vw, 3rem);
}
```

- Logical Properties When working on multilingual websites, we need to support both left-to-right (LTR) and right-to-left (RTL) layouts. (for complete article about multi-language web site styles: https://rtlstyling.com/posts/rtl-styling)

![not found](https://ishadeed.com/assets/responsive-design/logical-properties.jpeg)


```css
/* With CSS logical properties, we can write the CSS once, 
and it will be responsive to the user’s preferred language. */
.card {
  padding-inline-start: 2.5rem;
  padding-inline-end: 1rem;
  border-inline-start: 6px solid blue;
}

.card__icon {
  margin-inline-end: 1rem;
}
```

---

## Size Container Queries

- It provides us with ways to query the container width of a component.
- Container queries are an alternative to media queries, which apply styles to elements based on viewport size or other device characteristics.

![container queries](https://ishadeed.com/assets/responsive-design/media-query-vs-size-container-query.jpeg)

- for info, see:[mdn CSS container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries)

### To use container queries:

  - Declare a containment context on an element by `container-type` property with a value of `size, inline-size`, or `normal`.

    - `size`: The query will be based on the inline and block dimensions of the container. Applies layout, style, and size containment to the container.

    - `inline-size`: The query will be based on the inline dimensions of the container. Applies layout, style, and inline-size containment to the element.
    - `normal`: The element is not a query container for any container size queries, but remains a query container for container style queries.

Example:

```css
/* The following example creates a containment
 context with the name sidebar: */

.post {
 /* Define a container type */
 container-type: inline-size;
 /* set a container name */
 container-name: sidebar;
 /* shorthand: {container: sidebar / inline-size;} */
}

/* You can then target this containment context using
 the @container at-rule: */
@container sidebar (min-width: 700px) {
 .card {
  font-size: 2em;
 }
}
```

- The container query length units are:

  - `cqw`: 1% of a query container's **width**
  - `cqh`: 1% of a query container's **height**
  - `cqi`: 1% of a query container's **inline size**
  - `cqb`: 1% of a query container's **block size**
  - `cqmin`: The smaller value of either **cqi** or **cqb**
  - `cqmax`: The larger value of either **cqi** or **cqb**

- The following example uses the cqi unit to set the font size of a heading based on the inline size of the container:

```css
@container (min-width: 700px) {
 .card h2 {
  font-size: max(1.5em, 1.23em + 2cqi);
 }
}
```

---

## Example for plan a layout using modern css technologies:

![Page Layout](https://ishadeed.com/assets/responsive-design/rwd-design-1-3.png)

### Using Modern CSS

- The typography is responsive to the viewport width via `clamp()` function.
- The spacing is responsive to the viewport width via `clamp()` function.
- The hero section is responsive to its content via flexbox wrapping.
- The cards grid is responsive to the available space with `minmax()`, no media queries.
- The card component is responsive to its wrapper via size container queries and style container queries.
- The margins and paddings are responsive to the websites language via logical properties.

### Using Media Queries

- The site navigation is responsive to the viewport width.
- The theming is responsive to the user preferences in their operating system.
- The card hover effect is responsive to what the user is using (touch vs mouse).
- In the above list, the theming and navigation are done via media queries. The rest is about modern CSS features like clamp() comparison function and container queries.
