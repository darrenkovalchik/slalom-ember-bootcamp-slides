
---

# Actions

Data down <!-- .element: class="fragment" -->

Actions up <!-- .element: class="fragment" -->

Note: Ember 1.x made heavy use of two way binding, similar to Angular 1.x.
Ember 2.x encourages the React style of one way binding. Although there are
still ways to use two way binding via `mutable` helpers and `input` components
a project is much more maintainable and understandable if using a data down,
actions up approach.

----

## Declaring Actions

`component.js`

```javascript
import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    sayHello(name) {
      alert(`Hello ${name}.`);
    }

  }

});
```

`template.hbs`
<!-- .element: data-fragment-index="1" class="fragment" -->
```handlebars
<button {{action "sayHello" "John"}}>Say Hello</button>
```
<!-- .element: data-fragment-index="1" class="fragment" -->

```handlebars
<button {{action "sayHello" "John" on="mouseUp"}}>Say Hello</button>
```
<!-- .element: data-fragment-index="2" class="fragment" -->

Note: Actions declared on components and controllers are suitable for things
which effect display. Actions which effect data are ideally declared on the
route. This is not to say that components should never handle their own data.
An example of a component which handles its own data might be a Twitter feed.

----

## Route Actions

`route.js`

```javascript
import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    updateName(event) {
      this.set('name', event.target.value);
    }

  }

});
```

`template.hbs`
<!-- .element: data-fragment-index="1" class="fragment" -->
```handlebars
<input onInput={{action "updateName"}}>
```
<!-- .element: data-fragment-index="1" class="fragment" -->

TODO: The distinction between actions here and route-actions as closure actions
is confusing. Try to make this clearer.

Note: Routes are suitable spots to declare actions which update data.
Notice the different event attachment format. Either format is acceptable
but attaching the event using the element event attribute allows us to access
the event (and subsequently, the input value) as the last parameter of the
action.

----

## Closure Actions

`controllers/my-route.js`

```javascript
import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    sayHello(name) {
      alert(`Hello ${name}.`);
    }

  }

});
```

`templates/my-route.hbs`
<!-- .element: data-fragment-index="1" class="fragment" -->
```handlebars
{{my-button alertAction=(action "sayHello" "John")}}
```
<!-- .element: data-fragment-index="1" class="fragment" -->

`templates/components/my-button.hbs`
<!-- .element: data-fragment-index="2" class="fragment" -->
```handlebars
<button {{action alertAction}}>Say Hello</button>
```
<!-- .element: data-fragment-index="2" class="fragment" -->

Note: The closure action syntax is utilizing the action helper to assign the
action function to an attribute on the component. Rather than referencing
the action via a string within the component, we reference it using the
attribute which holds the action function.

----

## Route Closure Actions

```
$ ember install ember-route-action-helper
```

`routes/my-route.js`
<!-- .element: data-fragment-index="1" class="fragment" -->
```javascript
import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    updateName(event) {
      this.set('name', event.target.value);
    }

  }

});
```
<!-- .element: data-fragment-index="1" class="fragment" -->

`templates/my-route.hbs`
<!-- .element: data-fragment-index="2" class="fragment" -->
```handlebars
{{my-input updateAction=(action "updateName")}}
```
<!-- .element: data-fragment-index="2" class="fragment" -->

`templates/components/my-input.hbs`
<!-- .element: data-fragment-index="3" class="fragment" -->
```handlebars
<input onInput={{action updateAction}}>
```
<!-- .element: data-fragment-index="3" class="fragment" -->

Note: Currently, Ember doesn't support actions defined on the route being
passed as closure actions. This is a big problem, because we ideally want to
keep our data manipulation as close to the source as possible. Luckily, the
folks at [Dockyard](https://dockyard.com/) created an addon which allows us
to pass route actions as closures.

----

## Sending Actions

```
this.send('actionName');
```

Don't ever do this <!-- .element: class="fragment" -->

Unless you really have to <!-- .element: class="fragment" -->

Seriously though, don't do it <!-- .element: class="fragment" -->

Note: So you will see the send syntax for actions floating around. A lot of
Ember 1.x dealt with actions via listeners. This is all well and good, but can
get confusing quickly. There are probably some situations in which you might
need to do this, but if you can get away without it your application code
will be much easier to understand.
