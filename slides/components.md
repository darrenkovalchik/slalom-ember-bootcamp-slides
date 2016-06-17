
---

# Components

```
$ ember generate component mini-post
```

`templates/components/mini-post.hbs`

```handlebars
<div class="mini-post">
  <h2>{{title}}</h2>
  <div class="mini-post-description">
    {{{yield}}}
  </div>
</div>
```

`templates/some-template.hbs`

```handlebars
{{#mini-post title="First Post"}}
  <p>This content will appear in the {{yield}} of the component</p>
{{/mini-post}}

{{mini-post title="First Post"}}
```

Note: Components don't have to be declared in block form. The second example
will display the component with only the title attribute outputted.

----

## Components and Inline Helpers

```handlebars
{{#mini-post title=(reverse 'First' 'Post')}}
  <p>Post description</p>
{{/mini-post}}
```

```html
<div class="mini-post">
  <h2>Post First</h2>
  <div class="mini-post-description">
    <p>Post description</p>
  </div>
</div>
```

Note: The inline helper `reverse` will pass its result into the component. This
is quite useful for combining helpers.

----

## Component.js

Component attributes are not required by default but you can do some setup in
the `init` method.

`components/mini-post.js`

```javascript
import Ember from 'ember';

export default Ember.Component.extend({

  init() {
    this._super(...arguments);

    if (!this.get('title')) {
      Ember.Logger.error('"title" is a required attribute');
    }
  }

});
```

----

## Inline Components

TODO: This isn't even what these are called. Composable components?
`component=(my-component attr1="things")` is what I'm thinking.
