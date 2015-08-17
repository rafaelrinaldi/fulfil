'use strict';

// TODO: https://www.npmjs.com/package/levenshtein

var Levenshtein = require('levenshtein');

function distance(word, comparison) {
  return new Levenshtein(word, comparison).distance;
}

function woops(input, suggestions) {
  var matches = [];

  suggestions.forEach(function(suggestion) {
    matches.push({
      suggestion: suggestion,
      distance: distance(input, suggestion)
    });
  });

  matches.sort(function(current, previous) {
    return current.distance - previous.distance;
  });

  return matches[0].suggestion;
}

module.exports = woops;
