
---

# Services

Services provide state persistence

Note: Services are persistent objects which are instantiated once per
application load. Using services, it is quite easy to keep track of state
between routes, components, etc. Good usages of services might be
authentication state, web sockets connections, or notifications.

You may see references to looking up variables on other controllers when
searching Google. This is an old method and should not be used. Services should
not generally be used for data which will not change.

----

## Service Usage

```
$ ember generate service crazy-cats
```

`services/crazy-cats.js`

```javascript
import Ember from 'ember';

export default Ember.Service.extend({

  init() {
    this._super(...arguments);
    this.set('cats', []);
  },

  add(cat) {
    this.get('cats').pushObject(cat);
  }

});
```

----

`routes/foo.js`

```javascript
import Ember from 'ember';

export default Ember.Route.extend({

  crazyCats: Ember.inject.service(),  // Automatic lookup

  cats: Ember.inject.service('cats'),  // Explicit lookup

  setupController() {
    this.get('crazyCats').add('Harry');
    this.get('crazyCats').add('Larry');
  }

});
```

Note: Services can be looked up automatically using the variable name, or they
can be explicitly looked up if you want to use a different variable name.

----

`routes/bar.js`

```javascript
import Ember from 'ember';

export default Ember.Route.extend({

  crazyCats: Ember.inject.service(),

  setupController() {
    this.get('crazyCats.cats');  // ['Harry', 'Larry']
  }

});
```

The `bar` route will have access to the list of cats added in the `foo` route
