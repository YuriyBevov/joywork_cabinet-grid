let Masonry = require('masonry-layout');

let masonry = document.querySelector('.cabinet__container');

masonry ?
new Masonry( '.cabinet__container', {
  itemSelector: '.cabinet__section',
  percentPosition: true,
  gutter: 30
}) : null;
