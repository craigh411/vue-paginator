# vue-paginator

A decoupled pagination component to correctly handle pagination events.

**Features:**

- Simply specify number of pages and length of display and `vue-paginator` will correctly calculate display.
- Sets current page in the center of the paginator to allow easy navigation backwards and forwards.
- Returns current page as an event, allowing you to implement your own pagination.
- Includes implementations for `Bootstrap`, `Semantic-ui` plus two native implementations.
- Includes mixin to allow you to easily create your own paginator.

###Examples:

- Native: https://jsfiddle.net/64bo4582/
- Bootstrap: https://jsfiddle.net/dg0vLswo/
- Semantic-UI: https://jsfiddle.net/gx06f1t9/
- Editable: https://jsfiddle.net/d0bn62n3/

### About

`vue-paginator` is a decoupled pagination component which correctly updates the paginator based on the current position. It does not handle any data itself, but instead returns the current page allowing you to implment your own methods for retrieving your paginated data.

At it's core `vue-paginator` is simply a `mixin` so you can easily develop your own pagination components without having to deal with the complicated pagination display logic. However, it does include implementation of paginator for `bootstrap` and  `semantic-ui` projects aswell as native implementations that require no further libraries.
