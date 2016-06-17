# Welcome to Ember

----

## Why use Ember?

- CLI                           <!-- .element: class="fragment" -->
- Addons                        <!-- .element: class="fragment" -->
- Speed of setup/development    <!-- .element: class="fragment" -->
- Opinionated                   <!-- .element: class="fragment" -->
- Data adapter/serializer       <!-- .element: class="fragment" -->
- Tools                         <!-- .element: class="fragment" -->

----

## Why Should Clients Like Ember?

- Built in testing              <!-- .element: class="fragment" -->
- Semantic Versioning           <!-- .element: class="fragment" -->
- Upgrade & deprecation process <!-- .element: class="fragment" -->
- LTS releases                  <!-- .element: class="fragment" -->
- Fastboot                      <!-- .element: class="fragment" -->
- Engines                       <!-- .element: class="fragment" -->

----

## Oh, and There's Also a Mascot

![](images/tomster.jpg) <!-- .element: class="fragment" -->

---

# Ember Ecosystem

- Ember                         <!-- .element: class="fragment" -->
- Ember Data                    <!-- .element: class="fragment" -->
- Ember CLI                     <!-- .element: class="fragment" -->
- Ember Learning                <!-- .element: class="fragment" -->
- Third party Addons            <!-- .element: class="fragment" -->

----

## Release Cycle

- Canary &mdash; Master branch
- Beta &mdash; Weekly
- Stable &mdash; Every six weeks
- LTS &mdash; Twice a year

Note: LTS releases will receive critical bugfixes for 6 release cycles
(36 weeks) and security patches for 10 release cycles (60 weeks).

---

# Developing in Ember

Developing in Ember is not like developing in other Javascript frameworks. Ember
takes a convention over configuration approach, which is a unique position in
the Javascript framework landscape.

Note: This is one of the biggest sources of frustration surrounding Ember.
Javascript lets developers do pretty much whatever they want. Ember wants you
to do things a certain way; in fact, sometimes it demands it. Over the years
Ember has actually become *less* prescriptive, but it is still oftentimes a
pain point for new developers.

----

## MVC

<table>
  <thead>
    <tr>
      <th></th>
      <th>Traditional MVC</th>
      <th>Ember MVC</th>
    <tr>
  </thead>
  <tbody>
    <tr data-fragment-index="1" class="fragment">
      <td>M</td>
      <td>Model</td>
      <td>Model</td>
    </tr>
    <tr data-fragment-index="2" class="fragment">
      <td>V</td>
      <td>View</td>
      <td>
        <span data-fragment-index="5" class="fragment fade-out">Controller/</span>
        Component/Template
      </td>
    </tr>
    <tr data-fragment-index="3" class="fragment">
      <td>C</td>
      <td>Controller</td>
      <td>Route</td>
    </tr>
  </tbody>
</table>

It's confusing, I know <!-- .element: data-fragment-index="4" class="fragment" -->

Things will get a bit simpler <!-- .element: data-fragment-index="5" class="fragment" -->

Note: Ember will be eliminating the concept of controllers in the future.
components will take their place; conceptually, they have become nearly
equivalent. These slides assume you will be using controllers in the near
and extended future, as "routable components" have been on the roadmap for
over a year now.

Controllers and components are similar enough that most applications should
not have too many problems moving away from them in the future,
especially if they have utilized components for reusable sections.

----

## When you run into a problem

<small>(and you will)</small>
<!-- .element: class="fragment" -->

- Consult the [guides](https://guides.emberjs.com/v2.4.0/) and
[API documentation](http://emberjs.com/api/)
<!-- .element: class="fragment" -->

- Ask the [community](http://emberjs.com/community/)
<!-- .element: class="fragment" -->

Note: Your first inclination when running into problems implementing something
in Ember *should not* be to find a way to work around the problem, it should be
to read the documentation and consult the
[community](http://emberjs.com/community/).

There's a great [Slack channel](http://emberjs-seattle.herokuapp.com/) for
developers in the Seattle area. You can usually find someone willing to
give you a hand.

----

## Requirements to develop
Node, Bower, Ember CLI

## Requirements to test
<!-- .element: data-fragment-index="1" class="fragment" -->
PhantomJS
<!-- .element: data-fragment-index="1" class="fragment" -->

## Requirements to run in production
<!-- .element: data-fragment-index="2" class="fragment" -->
None (unless using location history)
<!-- .element: data-fragment-index="2" class="fragment" -->

Note: Most addons will eventually be loaded primarily via NPM. Bower will likely
remain a part of the Ember CLI pipeline, in order to facilitate loading third
party Javascript libraries.

----

## Project Setup

```
$ npm install -g ember-cli
$ ember new my-project
$ cd my-project
$ npm start
```

You can start developing in about 60 seconds
<!-- .element: class="fragment" -->

You can start writing unit, integration, and acceptance tests immediately
<!-- .element: class="fragment" -->

Note: Although the documentation suggests installing `ember-cli` globally when
creating a new Ember project, I would highly recommend uninstalling the global
instance after project creation and using the locally installed version.
The local project install of `ember-cli` can be accessed via
`./node_modules/.bin/ember` or, even better, by installing the
[npm-run](https://www.npmjs.com/package/npm-run) module.

----

## Configuration

- npm script
- environment.js

TODO: Add info here. I'm not entirely certain what I meant by this slide.
I don't know as either of these are critical to learning about Ember apps.

----

## Installing Addons

Ember addons are distributed via NPM and can be installed with the following
command:

```
$ ember install ember-addon-name
```

Note: There are a number of useful sites to find addons, including
[Ember Observer](http://emberobserver.com/) and
[Ember Addons](https://www.emberaddons.com/)

## Useful Tools

- A Node version manager (Nodenv or NVM)
- Ember Inspector
- Google (limit your search to past year)
- Slack

TODO: Add more info here

Note: Ember 2.0 is much different than Ember 1.0. The six week development
cycle of Ember core means that posted solutions over a year old can be
drastically outdated. I've found that limiting results to the past year
is an effective way of finding useable answers.

And seriously, use the Slack channels. The people there are great.
