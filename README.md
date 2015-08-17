# fulfil [![Build Status](https://travis-ci.org/rafaelrinaldi/fulfil.svg?branch=master)](https://travis-ci.org/rafaelrinaldi/fulfil)

> Simple search suggestion using the [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) algorithm.

## Install

```sh
$ npm install fulfil --save
```

## Usage

```javascript
var words = require('superb').words;
var fulfil = require('fulfil');

fulfil('batueiful', words).shift(); // beautiful
```

## API

## `fulfil(input, [suggestions])`

Return: `array`  

An array of suggestions sorted by the closest matches found.

### `keyword`

*Required*  
Type: `string`  

Word used to lookup for a suggestion.

### `suggestions`

Type: `array`  

List of suggestions available.

## License

MIT © [Rafael Rinaldi](http://rinaldi.io)
