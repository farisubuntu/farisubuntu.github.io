- for learning purposes you can replace all `block-level` elements with `<div>` so you can avoid thinking about **semantic** `html` elements and **css inheritance** and default/initial styles.
- think of page elements as **block-box** or **inline-box**; say push it right? push it down? and so on.
- use `padding`, `width` as initial then modify styles as required.
- for every `flex item` decide how it will share the additional space with its sibling and when it must wrap and take examples below as a guide:
     - `flex: initial` = `flex: 0 1 auto`; don't grow - can shrink smaller than their `flex-basis` - items have the base size of `auto`.
     - `flex: auto` = `flex: 1 1 auto`; items can grow larger than the `flex-basis` - can shrink ... - have the base size of `auto` (the space that is shared between the items is shared out after each item is laid out as max-content size.).
     - `flex:1` = `flex: 1 1 0`; can grow - can shrink - have 0 size so they all grow equally and the space is shared equally.

> <div style="color:red"><b>Browser Developer Tool is the best friend to learn/debug/understand css layout and others front-end technologies.</b></div>

---

### How To Decide Which To Use, Grid layout or Flex layout

source: https://ishadeed.com/article/grid-layout-flexbox-components/

- How the component(container) child items are displayed? Inline or as columns and rows? __if inline then use `flex layout` else `grid layout`__
- How the component is expected to work on various screen sizes?

## Use Cases And Examples:

#### Examples for using Grid layout

###### Main And Sidebar
```html
<div class="wrapper">
  <aside>Sidebar</aside>
  <main>Main</main>
</div>
```
```css
@media (min-width: 800px) {
  .wrapper {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-gap: 16px;
  }
  /* If align-self weren’t used for the <aside> element, 
  the height of it will be as equal to the main element, 
  no matter the content length. */
  aside {
    align-self: start;
  }
}
```
https://codesandbox.io/s/vigorous-ride-dbtx9u?file=/index.css



<h6> Cards Grid </h6>

<img src="https://ishadeed.com/assets/grid-flex/grid-use-2.png" width="65%" alt="not found">

here how to implement the layout:
```css
.wrapper {
  display: grid;
  /* The column width will be at least 200px, and if 
  space is not enough, it will wrap cards into a new line. 
  note that this code can cause horizontal scrolling if
   the viewport width is less than 200px. 
   Use '@media' to add the grid definition 
   only when the viewport width is enough.*/
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 16px;
}
```
<h6>Section Layout</h6>

<img src="https://ishadeed.com/assets/grid-flex/grid-use-3.png" width="50%" alt="not found" />

In the design above, we can use grid twice, the first use is to divide the area into two areas (the contact us sidebar, the form), and the second use is to the form grid itself.

try to implement grid using this link: (https://codesandbox.io/s/festive-smoke-de6k9x?file=/index.css) and for applying grid layout on html forms see: (https://webdesign.tutsplus.com/tutorials/how-to-build-web-form-layouts-with-css-grid--cms-28776)

#### Examples of Flexbox layout

<h6>Website Navigation</h6>
- For 90% of the time. The most common pattern is having the logo on the left, and the navigation on the right.

<img src="https://ishadeed.com/assets/grid-flex/flexbox-use-1.png" width="80%" alt="not found">

```css
.site-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
```
- The same concept can work on the following design as well:

<img src="https://ishadeed.com/assets/grid-flex/flexbox-use-1.png" width="80%" alt="not found">

<h6>Actions List</h6>

- An example of an action list is something that we can borrow from Facebook or Twitter:

<img src="https://ishadeed.com/assets/grid-flex/flexbox-use-3.png" width="80%" alt="not found">

```css
.actions-list {
  display: flex;
}
.actions-list__item {
  flex: 1; /* expand the items to take the available space equally between them */
}
```
Another example:

<img src="https://ishadeed.com/assets/grid-flex/flexbox-use-4.png" width="80%" alt="not found">

Both of the modal header and footer have child elements that are displayed inline. As you see, the spacing between them is done as below:

for model header:
```css
.modal-header {
  display: flex;
  justify-content: space-between;
}
```
for the footer:
```css
.cancel__action {
  margin-left: auto;
}
```

###### Form Elements
A combination of an input field with a button next to it is a perfect use-case for Flexbox

<img src="https://ishadeed.com/assets/grid-flex/flexbox-use-5.png" width="80%" alt="not found">

```css
.input {
/* Notice how without using flex: 1 1 auto on the text field,
 it won’t expand and fill the remaining space. */
  flex: 1 1 auto;
}
```
###### Card Components

Many Variations:

<img src="https://ishadeed.com/assets/grid-flex/flexbox-use-8.png" width="80%" alt="not found">

```css
.card {
  display: flex;
  flex-direction: column;
}

@media (min-width: 800px) {
  .card {
    flex-direction: row;
  }
}
```
Another common variation
<img src="https://ishadeed.com/assets/grid-flex/flexbox-use-9.png" width="60%" />

Notice how the icon and text label is centered horizontally and vertically.
```css
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```
##### Tabs / Bottom Menus

When it comes to elements that take the full width of screen and have items that should fill all the available space, then flexbox is the perfect tool here. Each item should fill the available space, and they should be equal in width.
<img src="https://ishadeed.com/assets/grid-flex/flexbox-use-10.png" width="60%" />

```css
.tabs__item {
  flex-grow: 1;
}
```
###### Centering A Section’s Content
Let’s consider that we have a hero section, and the content needs to be centered horizontally and vertically.
<img src="https://ishadeed.com/assets/grid-flex/flexbox-use-12.png" width="60%" />

```css
.hero {
/* using 'text-align': */
  /* text-align: center; */

/* using flexbox layout: */
  display: flex;
  flex-direction: column;
  align-items: center; /* centers items horizontally */
  justify-content: center; /* centers items vertically */
  text-align: center;
}

```

#### Combining CSS Grid And Flexbox

When I think about combining them, the first use-case I got is a list of cards. Grid is used to lay out the cards, and flexbox is used for the card component itself.
<img src="https://ishadeed.com/assets/grid-flex/grid-and-flex.png" width="60%" />

- Here are the requirements for the layout:

    - The height of the cards for each row should be equal
    - The read more link should be positioned at the end of the card, no matter its height.
    - The grid should use `minmax()` function

```html
<div class="wrapper">
  <article class="card">
    <img src="sunrise.jpg" alt="" />
    <div class="card__content">
      <h2><!-- Title --></h2>
      <p><!-- Desc --></p>
      <p class="card_link"><a href="#">Read more</a></p>
    </div>
  </article>
</div>
```
```css
@media (min-width: 500px) {
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 16px;
  }
}

.card {
  display: flex; /* [1] */
  flex-direction: column; /* [2] */
}

.card__content {
  flex-grow: 1; /* [3] */
  display: flex; /* [4] */
  flex-direction: column;
}

.card__link {
  margin-top: auto; /* [5] */
}
```