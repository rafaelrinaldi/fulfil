'use strict';

module.exports = function(current, previous) {
  return current.distance - previous.distance;
};
