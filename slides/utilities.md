
---

# Utilities

Utilities are standard modules

----

```
$ ember generate util martini
```

`utils/martini.js`

```javascript
export default function drink() {
  console.log('Drinking martini');
}

export function shake() {
  console.log('Shaking martini');
}

export function stir() {
  console.log('Stirring martini');
}
```

----

`routes/last-call.js`

```javascript
import Ember from 'ember';
import drinkMyFancyMartini, { shake, stir } from 'my-app/utils/martini';

export default Ember.Route.extend({

  setupController() {
    shake();                // Shaking martini
    stir();                 // Stirring martini
    drinkMyFancyMartini();  // Drinking martini
  }

});
```
