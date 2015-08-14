'use strict';

var woops = require('./');
var test = require('tape');
var words = require('superb').words;

test('woops', function(t) {
  t.deepEqual(woops('batueiful', words), 'beautiful', 'should suggest best match for the given input');
  t.end();
});
