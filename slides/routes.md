
---

## Ember Resolver

TODO: Although I don't really want to go too in depth into the resolver, I
think it's important to clarify some of the "magic" surrounding how Ember
loads modules, etc. Important info to cover here would be a basic path overview
and dashed-name to camelCase conversion.

---

# Routes

```
$ ember generate route route-name
```

TODO: Add description here

Note: Ember has a robust and well tested routing system. Although you can
certainly make an app which doesn't need it, most Ember apps you
build will likely be using the router from the outset.

----

## Generating routes

```
$ ember generate route posts
```

`router.js`

```javascript
Router.map(function() {
  this.route('posts');
});
```

- URL: `/posts`
- Route: `routes/posts.js`
- Template: `templates/posts.hbs`

----

## Transitioning to Routes

`routes/index.js`

```javascript
this.transitionTo('posts');
```

`templates/index.hbs`

```handlebars
{{#link-to 'posts'}}Posts{{/link-to}}
```

----

## Specifying Route Paths

`router.js`

```javascript
this.route('posts', { path: 'blog-posts' });
```

- URL: `/blog-posts`
- Route: `routes/posts.js`
- Template: `templates/posts.hbs`

----

## Route Params

`router.js`

```javascript
this.route('posts', { path: 'posts/:id' });
```

- URL: `/posts/:id`
- Route: `routes/posts.js`
- Template: `templates/posts.hbs`

`routes/posts.js`
<!-- .element: data-fragment-index="1" class="fragment" -->
```javascript
model(params) {
  return this.get('ajax').request(`api/posts/${params[0]}`);
}
```
<!-- .element: data-fragment-index="1" class="fragment" -->

`template.hbs`
<!-- .element: data-fragment-index="2" class="fragment" -->
```handlebars
{{#link-to 'posts' 1}}Post 1{{/link-to}}
{{#link-to 'posts' post}}Post{{/link-to}}
```
<!-- .element: data-fragment-index="2" class="fragment" -->

----

## Index Routes

`router.js`

```javascript
this.route('posts', function() {
  // this.route('index');
});
```

- URL: `/posts`
- Route: `routes/posts.js`
- Route: `routes/posts/index.js`
- Template: `templates/posts.hbs`
- Template: `templates/posts/index.hbs`

`template.hbs`
<!-- .element: data-fragment-index="1" class="fragment" -->
```handlebars
{{#link-to 'posts'}}Posts{{/link-to}}
```
<!-- .element: data-fragment-index="1" class="fragment" -->

`templates/posts.hbs`
<!-- .element: data-fragment-index="2" class="fragment" -->
```
{{outlet}}  {{!-- Renders posts/index template --}}
```
<!-- .element: data-fragment-index="2" class="fragment" -->

Note: Index routes do not need to be declared (and cannot be without an error),
however, they exist for every route which is passed a function as its final
parameter. The `routes/posts.js` parent route will fire before the
`routes/posts/index.js` route. The `templates/posts/index.hbs` template will
render within the `{{outlet}}` of the `templates/posts.hbs` parent template.

----

## Nested Routes

```
$ ember generate route posts/comments
```

`router.js`

```javascript
this.route('posts', { path: 'posts/:id' }, function() {
  // this.route('index');
  this.route('comments');
});
```

- URL: `/posts/:id/comments`
- Route: `routes/posts/comments.js`
- Template: `templates/posts/comments.hbs`

`routes/posts/comments.js`
<!-- .element: data-fragment-index="1" class="fragment" -->
```javascript
this.modelFor('posts');
```
<!-- .element: data-fragment-index="1" class="fragment" -->

`template.hbs`
<!-- .element: data-fragment-index="2" class="fragment" -->
```handlebars
{{#link-to 'posts.comments' post}}Post{{/link-to}}
```
<!-- .element: data-fragment-index="2" class="fragment" -->

Note: The model for any previously loaded route can be accessed with the `modelFor`
method. This should generally only be used on child routes, as their parent
route is guaranteed to have loaded before them.

----

## Application Route

```javascript
// this.route('application', function() {
  // this.route('index');
  this.route('posts');
// })
```

----

## Practical Example

`router.js`

```javascript
this.route('posts', function() {
  this.route('new');
  this.route('id', { path: ':id' }, function() {
    this.route('comments');
  });
});
```

```javascript
// this.route('application', function() {
  // this.route('index');
  this.route('posts', function() {
    // this.route('index');
    this.route('new');
    this.route('id', { path: ':id' }, function() {
      // this.route('index');
      this.route('comments');
    });
  });
// });
```

- `/posts`
- `/posts/new`
- `/posts/:id`
- `/posts/:id/comments`

TODO: Add some notes about this example. Because it's confusing.
