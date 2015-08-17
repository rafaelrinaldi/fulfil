'use strict';

var fulfil = require('./');
var test = require('tape');
var words = require('superb').words;

test('fulfil', function(t) {
  t.deepEqual(fulfil('batueiful', words).shift(), 'beautiful', 'should suggest best match for the given input');
  t.deepEqual(fulfil('awesome', words).shift(), 'awesome', 'when there is a perfect match, it should be suggested');
  t.end();
});
