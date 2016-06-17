
---

# Mixins

Mixins provide extensions for other objects

----

```
$ ember generate mixin manhattan
```

`mixins/manhattan.js`

```javascript
import Ember from 'ember';

export default Ember.Mixin.create({

  mixManhattan() {
    console.log('Mixing manhattan');
  }

});
```

----

`routes/pub-crawl.js`

```javascript
import Ember from 'ember';
import Manhattan from 'my-app/mixins/manhattan';

export default Ember.Route.create(Manhattan, {

  setupController() {
    this.mixManhattan();  // Mixing manhattan
  }

});
```
