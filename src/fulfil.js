'use strict';

var distance = require('./distance');
var sortByClosestMatch = require('./sort-by-closest-match');
var filterSuggestions = require('./filter-suggestions');

module.exports = function(input, suggestions) {
  var matches = [];

  suggestions.forEach(function(suggestion) {
    matches.push({
      suggestion: suggestion,
      distance: distance(input, suggestion)
    });
  });

  return matches
                .sort(sortByClosestMatch)
                .map(filterSuggestions);
};
