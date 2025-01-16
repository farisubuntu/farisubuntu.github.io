[[toc]]

# Flex Box Layout:

- source: [CSS WG - drafts](https://drafts.csswg.org/css-flexbox/#overview)

- additional: [freecodecamp](https://www.freecodecamp.org/news/css-flexbox-tutorial-with-cheatsheet/)

---


## Flex layout box model and terminology

- Unlike block and inline layout, whose layout calculations are biased to the block and inline flow directions, flex layout is biased (منحاز) to the flex directions
![not found](https://drafts.csswg.org/css-flexbox/images/flex-direction-terms.svg)

- Describe:
   - main axis,main dimension
   - main-start,main-end
   - main size, main size property
   - cross axis,cross dimension
   - cross-start,cross-end
   - cross size, cross size property
- Flex containers are not block containers, and so some properties that were designed with the assumption of block layout don’t apply in the context of flex layout. In particular `clear,float`.
- As it is out-of-flow, an absolutely-positioned child of a flex container does not participate in flex layout.
- Specifying `visibility:collapse` on a flex item causes it to become a collapsed flex item?
- when you make a flex container using `display:flex;` all flex items will take some initial values as following:
    - Items display in a row (the flex-direction property's default is row).
    - The items start from the start edge of the main axis.(`justify-content:flex-start`)
    - The items do not stretch (`flex-grow:auto`) on the main dimension, but can shrink (`flex-shrink:1`) (_when the container has more space available_)
    - The items will stretch to fill the size of the cross axis (_when available space not enough_)
    - The flex-basis property is set to auto (_consult `width,min/max-width`_) else use content size as `flex-basis`
    - The `flex-wrap` property is set to nowrap.

## Flex Lines

- `flex container` can be either single-line or multi-line, depending on the `flex-wrap` property.
- When additional lines are created, they are stacked in the flex container along the `cross axis`
- Once content is broken into lines, each line is laid out independently; flexible lengths and the `justify-content` and `align-self` properties **only consider the items on a single line at a time**.
- In a multi-line flex container:
    * The `cross size` of each line is the minimum size necessary to contain the flex items on the line (after alignment due to `align-self`), and
    * The lines are aligned within the flex container with the `align-content` property.
- In a single-line flex container, 
    * the cross size of the line is the cross size of the flex container, and `align-content` has no effect.
    * The main size of a line is always the same as the main size of the flex container’s content box.

+ Properties that apply to the flex container:
    - `align-content`: only work if container has `wrap` value and container should be has a **larger vertical space than sum of all height  of the flex rows/lines**
    - `align-items` (vertically/cross axis)
    - `display` (`flex,inline-flex`)
    - `flex-direction` (`row,column,row-reverse,column-reverse`)
    - `flex-flow` (shorthand for `flex-flow:flex-direction flex-wrap`)
    - `flex-wrap`
    - `justify-content` (horizontally/main axis)

- Properties that apply to the flex items:
    - `align-self` (override align-items for individual items)
    - `flex`
    - `flex-basis`
    - `flex-grow`
    - `flex-shrink`
    - `order`

## Flexibility

- The defining aspect of flex layout is the ability to make the flex items “flexing”, altering their **width/height** to fill the available space in the main dimension. 
- when is the `flex-item` is **fully inflexible**? (such as, `flex:none;` instead of `flex:1` for example).
- The flex property shorthand specifies the components of a flexible size (**target flex items not containers**): 
    - `flex-basis`:  defines the size of that item in terms of the space it leaves as available space.
        * the initial value is `auto` means that the browser will see if the items have a size (`width`) else it will use the content's size (`min-content`) as the `flex-basis` so this tell the browser to respect the size of other items and all items grow and shrink from a flex-basis of `auto`; the result is the longer item would have more space because it started from a larger size.
        *  similar to adding width to a flex-item. It will set the initial size of a flex-item but the final size will be based on the available space,`flex-grow` and `flex-shrink`.
    - `flex-grow`: positive integer, (the opposite of `flex-shrink`) flex items can grow along the main axis from their flex-basis. This will cause the item to stretch and take up any available space on that axis, *or a proportion of the available space if other items are allowed to grow too*.
    - `flex-shrink`: helps a shrink based on the width of the flex-container.(**not work if `flex-wrap:wrap`**)

    - `flex` examples:
        - `flex: initial` = `flex: 0 1 auto`; don't grow - can shrink smaller than their `flex-basis` - items have the base size of `auto`
        - `flex: auto` = `flex: 1 1 auto`; items can grow larger than the `flex-basis` - can shrink ... - have the base size of `auto` (the space that is shared between the items is shared out after each item is laid out as max-content size.)
        - `flex:1` = `flex: 1 1 0`; can grow - can shrink - have 0 size so they all grow equally and the space is shared equally.

> When a box is a flex item, flex is consulted instead of the main size property to determine the main size of the box. If a box is not a flex item, flex has no effect.

## Examples of typical use cases of flexbox:

- source: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox

- **Navigation:**
    - a list of items displayed as a horizontal that we need to adjust their white space between or around them or absorb the extra space inside the items to allowing the items to grow and take up this space. For example: you wanted to respect the size property of items but share the avialable space among them, then use `flex:auto` (= `flex:1 1 0), this mean that the longer item would have more space because it started from a larger size. For example:
   [https://codesandbox.io/embed/lucid-cohen-svxjqz?fontsize=14hidenavigation=1&theme=dark]

    - Split navigation: enables the design pattern of a navigation bar where one group of items are aligned left and another group aligned right. This did by use **auto margins** and the only way before implement `gap` properties in flexbox:
    [https://codesandbox.io/embed/determined-paper-sywrmt?fontsize=14&hidenavigation=1&theme=dark]

- **Media Objects:**
    - With flexbox we can allow the part of the media object containing the image to take its sizing information from the image, and then the body of the media object flexes to take up the remaining space. here different ways to constrain the media object in your design:
    - To prevent the image growing too large, add a max-width to the image and because the __media object is using the initial values of flexbox it can shrink but not grow,and uses `flex-basis` of `auto`, any `width` or `max-width` applied to the image will become the `flex-basis`__.
- **Form Controls:**
    - A common pattern is to have an `<input>` element paired with a `<button>` such as _search box_. You need to allow the `<input>` field to grow, while the button does not grow.then add a label or icon to the left so button pushed  to the right.[https://codepen.io/farisubuntu/pen/abRMvgM]
   
    ```html
    <form class="example">
     <div class="wrapper"> <!--added wrapper-->
      <input type="text" id="text">
      <input type="submit" value="Send">
     </div>
    </form>
    ```
    

## Flexbox alignment overview

The set of properties can be placed into two groups. Properties for **space distribution**, and properties for **alignment**. 

The properties which distribute space are:
- `justify-content:` <mark>flex-start</mark> : space distribution on the main axis.
- `align-content:` <mark>stretch</mark>: space distribution on the cross axis.
- `place-content`: a shorthand for setting both of the above properties.

The properties used for alignment in flexbox: The space available for this alignment will depend on the **height of the flex container**, or flex line in the case of a wrapped set of items.

`justify-content` values work the same if your container `flex-direction: column;` but you may not have extra space to distribute in a column unless you add a `height` or `block-size` to the flex container, See the Pen 

[https://codepen.io/rachelandrew/pen/zLyMyV](https://codepen.io/rachelandrew/pen/zLyMyV)


- `align-self`: <mark>stretch</mark> aligns a single item on the cross axis. Flex items in a row stretch to the height of the tallest item by default.

- `align-items`: aligns all of the items as a group on the cross axis. this property can be applied to the flex container to set all of the individual `align-self` properties as a group. try different values at https://codepen.io/farisubuntu/pen/yLRweXQ

**If you are working on the main axis then the properties begin with justify-. On the cross axis they begin with align-**

#### `gap` properity:

- The gap property in CSS is a shorthand for `row-gap` and `column-gap`, specifying the size of gutters, which is the space between rows and columns within `grid`, `flex,` and `multi-column` layouts.
- 

#### Trick: centering text inside flex item

```css
.item {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

> For problems examples solved using flex layout, see: 
[https://github.com/philipwalton/solved-by-flexbox](https://github.com/philipwalton/solved-by-flexbox)

#### tricks when use flex layout:

Listed below are some of my criteria for an ideal flexbox grid system. Fortunately, with Flexbox we get most of these features for free.

- By default, each flexbox grid cell is the same width and height as every other cell in the row. Basically they all size to fit by default. (apply `flex:1` on all flex items)
- For finer control, you can add sizing classes to individual cells. Without these classes, the cells simply divide up the available space as usual.(such as `flex:0 0 33.3333%`)
- For responsive flexbox grids, you can add media query-specific classes to the cells.
- Individual cells can be aligned vertically to the top, bottom, or middle. (`align-self:flex-start|flex-end|center`)
- When you want all of the cells in a flexbox grid to have the same sizing, media, or alignment values, you should be able to just add a single class to the container to avoid unnecessary repetition.
- flexbox Grids can be nested as many levels deep as needed.

> TIP: when you use a *flex layout* to plan a page; first, for each area or section on your page decide if it will take the role as a `container/item` or both roles then contained it withing a wrapper element and set it as a `display:flex`


**Wireframes** are used to outline webpage styles, content, and functionality. UX designers will often use wireframes to explain their ideas to web developers.

---

## Using space-between

- `justify-content`: the space between items is not a **gap** or **margin**

<img src="https://defensivecss.dev/img/defensive-10-1.png" alt="not found" />

- When the number of items is less than four, here is what will happen:

<img src="https://defensivecss.dev/img/defensive-10-2.png" alt="not found" />

#### There are different solutions to this:

- Margin
- Flexbox gap (Use with caution)
- Padding (Can be applied to the parent of each child element):

```css
.wrapper {
display: flex;
flex-wrap: wrap;
gap: 1rem;
}
```

> example: https://codesandbox.io/s/flamboyant-farrell-q1p0nn?file=/index.html

- Adding empty elements to act as a spacer

---

## Text over image:

<img src="https://defensivecss.dev/img/defensive-11-1.png" width="60%" alt="not found" />

- The problem: When image fails to load, it will not readable:
To Fix that: add a background color to the image such as `img{background-color:grey;}`

## Vertical media query

see: [https://defensivecss.dev/tip/vertical-mq/](https://defensivecss.dev/tip/vertical-mq/)


---

<div class="tip note">
<div class="x-large blue">In Summary</div>

- The alignment properties started as a list in Flexbox, but are now in their own specification and apply to other layout contexts. A few key facts will help you to remember how to use them in Flexbox:
- **If a flex item has a text element or an image that is bigger than the item itself, the browser won’t shrink them.** To change that default behavior, we need to set the `min-width` of the flex item to `0`. That’s because the `min-width` default value is `auto`, the overflow happens:

```css
.card__title {
    overflow-wrap: break-word;
    min-width: 0;
}
```
> The same thing applies to a column flex wrapper, but we will use `min-height: 0` instead.

- justify- the main axis and align- the cross axis;
To use align-content and justify-content you need spare space to play with;
- The align-content and justify-content properties deal with the items as a group, sharing out space. Therefore, you can’t target an individual item and so there is no -self alignment for these properties;
- If you do want to align one item, or split a group on the main axis, use auto margins to do so;
- The align-items property sets all of the align-self values as a group. Use align-self on the flex child to set the value for an individual item.
- When element content gone outside its box, this called **overflow**. (try it:
https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
- When an element content cover or lap another element content, this called **overlap**.
(see:https://codesandbox.io/s/overlapping-r8bbt5?file=/index.html)
- 
</div>

## Resources and helping sites:

- [https://web.dev/learn/css/flexbox/]
- To get random images: [https://picsum.photos]
- https://www.smashingmagazine.com/2018/08/flexbox-alignment/

----
