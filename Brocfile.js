var concat = require('broccoli-concat');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

var slides = 'slides';
slides = concat(slides, {
  outputFile: 'slides.md',
  inputFiles: [
    'intro.md',
    'routes.md',
    'controllers.md',
    'templates.md',
    'components.md',
    'actions.md',
    'services.md',
    'mixins.md',
    'utilities.md',
    'initializers.md',
    'testing.md',
    'other.md'
  ]
});

var images = 'images';
images = new Funnel(images, {
  destDir: 'images'
});

module.exports = new MergeTrees([slides, images]);
