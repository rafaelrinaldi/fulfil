# woops [![Build Status](https://travis-ci.org/rafaelrinaldi/woops.svg?branch=master)](https://travis-ci.org/rafaelrinaldi/woops)

> Simple spelling suggestion using the [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) algorithm.

## Install

```sh
$ npm install woops --save
```

## Usage

```javascript
var words = require('superb').words;
var woops = require('woops');

woops('batueiful', words); // beautiful
```

## API

## `woops(input, [suggestions])`

### `input`

*Required*  
Type: `string`  

Word whose spelling should be checked.

### `suggestions`

Type: `array`  

List of suggestions available.

## License

MIT © [Rafael Rinaldi](http://rinaldi.io)
