[[toc]]

# Sizing items in CSS

> https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS

## The natural or intrinsic(جوهري) size of things

- natural size: default size before affected by `css` _examples: `img`,`div`_
- intrinsic size: it's size is defined by its content.
- extrinsic(خارجي) size: when a size (`width,heigh`) given to an element (_so content needs to fit into size_). Now, no matter what content is placed into it. if no enough space for content then it will `overflow`
- size length/percentage: calculated against the size of the container block.
- the viewport: this visible area of your page in the browser
- you can use viewport to size boxes and *also* text whereas min/max-width only size boxes.
- to prevent content from overflow out its container when its no space to fit and be sure container has a specific height at least, use `min-height`
- when you size a box by percentage unit '%' such as `width/height:100%;`, you tell the box must commited(يلتزم) to the avialabe size that the container element provide it.

## White space

- White space means actual spaces, tabs and new lines.
- browser ignore it in html and css.
- Browser processes the document in a number of stages:
![not found](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works/rendering.svg)
- A DOM has a tree-like structure. Each element, attribute, and piece of text in the markup language becomes a DOM node in the tree structure and defined by their relationship (_parent,child,sibling,adjacent,ancestor..._) to other DOM nodes.
> Excersize| build a DOM tree from this HTML snippet:

```html
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>
```

> tool: [https://software.hixie.ch/utilities/js/live-dom-viewer]


---

# CSS Box Model

- Everything in CSS has a box around it.
- Several types of boxes generally fit into two categories: `block boxes` and `inline boxes`.
- The types refers to how the box behaves in terms of page flow and in relation to other boxes on the page.
- Various values for the _display type_ can set using the `display` property.
- Boxes have **inner display type**(children) and an **outer display type**(parent/container).
- Block elements in a horizontal writing mode such as English, layout vertically, one below the other.
- The size of inline-level elements is just the size of their content.
![](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow/mdn-horizontal.png)
- margins between block elements collapse?(hint: take the larger margin)
- margins between inline elements collapse?(... smaller margin size)

> see example: https://codesandbox.io/s/reverent-burnell-088kz3?file=/index.html

### Outer display type (alongside other elements in the layout `or` participation in `flow layout`)

> _examples:_ `h1,p` elements use `block` as their outer display type

**If a box has an outer display type of block, then:**
+ The box will break onto a new line.
+ The `width` and `height` properties are respected.
+ Padding, margin and border will cause other elements to be pushed away from the box.
+ If `width` is not specified, the box will extend in the inline direction to fill the space available in its container. 

> _examples:_ `<h1>,<p>` elements use `block` as their outer display type

**If a box has an outer display type of inline, then:**
- The box will not break onto a new line.
- The `width` and `height` properties will not apply (always be as content size).
- Top and bottom `padding, margins, and borders` will apply but will not cause other inline boxes to move away from the box.
- Left and `right padding, margins, and borders` will apply and will cause other inline boxes to move away from the box.
> _examples:_  `<a>,<span>,<em> elements use `inline` as their outer display type.

#### Inner display type

- Boxes also have an inner display type, which dictates how elements inside that box are laid out. By default (without any other instruction), the children elements are laid out in _normal flow_ and behave as `block` or `inline` boxes, for example:

```css
/* syntax: display:<display-outer> <display-inner>*/
dispaly:block; /* equals: display:block flow*/
```

> try it: https://developer.mozilla.org/en-US/docs/Web/CSS/display

- You can change the inner display type for example by sitting `display:flex` but this changes the inner display type to `flex` any direct children of this box will become flex items and behave according to the `Flexbox` specification.

> Remember: Changing the value of the `display` property can change whether(ما إذا كان) the outer display type of a box is block or inline.

> always you can use your browser's developer window to inspect which _outer display type_ assigned to an element and a reference to the source such as `user agent stylesheet` or `index.css`


