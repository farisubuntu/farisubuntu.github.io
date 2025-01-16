[[toc]]

### CSS naming convention (BEM naming convention)

source:[https://hackernoon.com/best-practice-in-css-organisation-and-naming-conventions-4d103ujy]

#### `OOCSS`:

- **OOCSS PRINCIPLES:**

  - The separation of “structure” from “skin”
  - The separation of “container” from “content”

- **CONTENT - SKIN** :
  - Define the repeating “visual” patterns as reusable “skins“
  - Define the repeating “invisible” patterns as reusable “structures“ 
- **CONTAINER - CONTENT**:
  An Object should be not depend of the location where you put it: It’s often the main cause of code duplication. For example:
  ```css
   .announcecategory > div:nth(3) {
   color: red;
   ....
   }
  ```

---

#### `BEM`: **BLOCK,Element,Modifier**:
   - A **block** is an independent entity which must be able to be moved without affecting its appearance or its functioning. A **block** can also contain other blocks. An interface can include several instances of the same block.
   - An **element** is a part of block. The context of an element is that of the block. Can be `header,footer`,a container (articles,sections,...),a menu or even a button.
   - A **modifier** is a property which is used to create variants, to make minimal changes like changing colors, size. There exists modifiers of blocks and the element modifiers.
 - The methodology BEM has three essential rules:
   1. The blocks and elements have to each other have a unique name, which will be used as a CSS class
   2. The CSS selectors don't have to use the HTML elements (not of footer div)
   3. Cascades in CSS selectors should be avoided ( not of `.foo > .bar`).
 - **Naming convention**:
   - Bloc: `bloc-name`
   - Element: `bloc-name__element-name`
   - Modifier : `bloc-name--modifier-name`, `bloc-name__element-name--modifier-name`
The official website takes care to specify that only the concepts count, the syntax remaining free.