
---

# Controllers

Handle display logic    <!-- .element: class="fragment" -->
Define query parameters <!-- .element: class="fragment" -->

```
$ ember generate controller controller-name
```

TODO: Better definition for the slide. Also, this entire section seems out
of place.

Note: Although you can use controllers to handle data updates, data manipulation
should generally take place on the route. Controllers should contain logic for
presentation, for example toggling the visibility of a dom element.

Components will eventually be replaced by routable components. Controllers
and components are conceptually nearly identical, however, controllers are what
handles display logic for route templates at this time.

----

## Query Parameters

```
$ ember generate controller posts
```

`controllers/posts.js`

```javascript
import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['category'],
  category: null
});
```

URL: `posts?category=food`

----

## Computed Properties

```javascript
this.get('fullName')
```

```handlebars
{{fullName}}
```

```javascript
fullName: Ember.computed('person.firstName', 'person.lastName', function() {
  return `${this.get('person.firstName')} ${this.get('person.lastName')}`;
})
```

Property Brace Expansion
<!-- .element: data-fragment-index="1" class="fragment" -->
```javascript
fullName: Ember.computed('person.{firstName,lastName}', function() {
  return `${this.get('person.firstName')} ${this.get('person.lastName')}`;
})
```
<!-- .element: data-fragment-index="1" class="fragment" -->

Note: Computed properties will update any time one of their watched properties
updates. I've most often used computed properties on a data model, but they can
be added to any object and a controller or component is a logical spot for them.
Be careful not to add too many computed properties, as they can slow down your
application.

You may also see references to observers, which are declared very similarly to
computed properties. Although observers can be useful, they can also lead to
code which is difficult to debug and comprehend. My advice would be to use them
sparingly.

----

## Setting Computed Properties

```javascript
this.set('fullName', 'William Duffo')
```

```javascript
fullName: Ember.computed('person.{firstName,lastName}', function() {

  get(key) {
    return `${this.get('person.firstName')} ${this.get('person.lastName')}`;
  },

  set(key, value) {
      var [firstName, lastName] = value.split(/\s+/);
      this.set('firstName', firstName);
      this.set('lastName',  lastName);
      return value;
  }

});
```

Note: Setting computed properties can be a powerful tool, but be sure to use it
carefully. For example, presenting the user with a single input for their name
may be easier for them but if they enter three words instead of two, they may
end up with an unexpected first or last name.
