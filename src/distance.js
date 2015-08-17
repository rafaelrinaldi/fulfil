'use strict';

var Levenshtein = require('levenshtein');

module.exports = function(word, comparison) {
  return new Levenshtein(word, comparison).distance;
};
