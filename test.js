'use strict';

var woops = require('./');
var test = require('tape');
var words = require('superb').words;

test('woops', function(t) {
  t.deepEqual(woops('batueiful', words), 'beautiful', 'should suggest best match for the given input');
  t.deepEqual(woops('awesome', words), 'awesome', 'when there is a perfect match, it should be suggested');
  t.end();
});
