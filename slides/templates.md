
---

# Templates

```
$ ember generate template template-name
```

TODO: Add description here

----

## Basic Usage

TODO: This slide is way too long. It also jumps straight into variables, which
may not be a good thing.

```
$ ember generate route name
$ ember generate controller name
```

`controllers/name.js`
<!-- .element: data-fragment-index="1" class="fragment" -->
```javascript
import Ember from 'ember';

export default Ember.Controller.extend({
  name: 'Wilbur'
});
```
<!-- .element: data-fragment-index="1" class="fragment" -->

`routes/name.js`
<!-- .element: data-fragment-index="2" class="fragment" -->
```javascript
import Ember from 'ember';

export default Ember.Route.extend({

  setupController(controller) {
    controller.set('name', 'Wilbur');
  },

  someRouteMethod() {
    this.controller.set('name', 'Bartholomew');
  }

});
```
<!-- .element: data-fragment-index="2" class="fragment" -->

`templates/name.hbs`
<!-- .element: data-fragment-index="3" class="fragment" -->
```handlebars
Hello {{name}}!
```
<!-- .element: data-fragment-index="3" class="fragment" -->

Note: Templates receive variables from controllers and components. However, data
will generally be coming from a route, so most often you'll be setting template
variables from the route.

----

## HTMLBars

[Arrays](http://emberjs.com/api/classes/Ember.Templates.helpers.html#method_each)
<!-- .element: data-fragment-index="1" class="fragment" -->
```handlebars
{{#each someArray as |value index|}}
  <li>{{value}}</li>
{{/each}}
```
<!-- .element: data-fragment-index="1" class="fragment" -->

[Objects](http://emberjs.com/api/classes/Ember.Templates.helpers.html#method_each-in)
<!-- .element: data-fragment-index="2" class="fragment" -->
```handlebars
{{#each-in someObject as |key value|}}
  <li>{{key}}: {{value}}</li>
{{/each-in}}
```
<!-- .element: data-fragment-index="2" class="fragment" -->

Conditionals
<!-- .element: data-fragment-index="3" class="fragment" -->
```handlebars
{{#if true}}
  Truth!
{{else}}
  Falsehood!
{{/if}}
```
<!-- .element: data-fragment-index="3" class="fragment" -->

Escaping (or lack thereof)
<!-- .element: data-fragment-index="4" class="fragment" -->
```handlebars
{{{htmlOutput}}}
```
<!-- .element: data-fragment-index="4" class="fragment" -->

Note: Variables are escaped by default. the `{{{` marker turns escaping off.
In the unlikely event you need to output `{{` into your template, you may prepend
`\{{` to do so.
[Ember template guide](https://guides.emberjs.com/v2.4.0/templates/handlebars-basics/)

----

## Links

`route.js`

```javascript
this.route('photos', { path: 'photos/:id'});
```

`template.hbs`

```handlebars
{{#link-to "photos" 1}}First Photo{{/link-to}}
{{#link-to "photos" photo}}A Photo{{/link-to}}
```

Note: The link to helper can be passed params. You can either use the actual param
or an instance of an object which contains the appropriate param. [Ember links guide](https://guides.emberjs.com/v2.4.0/templates/links/)

----

## Template Debugging

`template.hbs`

```handlebars
{{log 'Name is:' name}}
{{debugger}}
```

Inspector Console

```
'Name is: Jimbo'
> context
> get('name')
```

---

# Template Helpers

```
$ ember generate helper helper-name
```

TODO: Add description here

----

## Basic Usage

```
$ ember generate helper reverse
```

`helpers/reverse.js`

```javascript
import Ember from 'ember';

export default Ember.Helper.helper(function([arg1, arg2]) {
  return `${arg2} ${arg1}`;
});
```

`template.hbs`

```handlebars
{{reverse "First" "Second"}}
```

----

## Inline Helpers

Inline Helpers can be used to combine formatting or logic

```handlebars
{{reverse "My" (reverse "dog" "Spot")}}
```

```html
Spot dog My
```

```handlebars
{{#if true (if true)}}
  True!
{{/if}}
```

Note: The first example is basically useless, but combining logic helpers can
be quite powerful. Be careful not to put too much logic into the template,
however; advanced logic should be put higher up the chain.
