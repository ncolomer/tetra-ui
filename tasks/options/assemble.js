module.exports = {
  options: {
    flatten: true,
    partials: ['<%= path.doc %>/partials/**/*.hbs'],
    helpers: ['<%= path.doc %>/helpers/*.js'],
    layout: ['<%= path.doc %>/layouts/default.hbs'],
    data: ['<%= path.doc %>/data/*.{json,yml}'],
    marked: {
      highlight: function (code, lang, callback) {
        return require('highlight.js').highlight(lang, code).value;
      }
    }
  },
  index: {
    src: ['<%= path.doc %>/docs/index.hbs'],
    dest: './'
  },
  docs: {
    src: ['<%= path.doc %>/docs/*.hbs', '!index.hbs'],
    dest: './doc/'
  }
};
