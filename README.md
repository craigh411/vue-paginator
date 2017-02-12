# vue-paginator

A decoupled pagination component to correctly handle pagination events.

**Features:**

- A native paginator that requires no further libraries.
- A paginator for [bootstrap](http://getbootstrap.com).
- A paginator for [semantic-ui](http://semantic-ui.com).
- No reliance on jQuery.


### About

`vue-paginator` is a decoupled pagination component which correctly updates the paginator based on the current position. It does not handle any data itself, but instead returns the current page allowing you to implment your own methods for retrieving your paginated data.

At it's core `vue-paginator` is simply a `mixin` so you can easily develop your own pagination components without havinf to deal with the complicated display logic, however, it does include implementation of paganators for `bootstrap` and  `semantic-ui` projects aswell as native implementations that require no further libraries.
