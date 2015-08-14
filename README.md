# woops [![Build Status](https://travis-ci.org/rafaelrinaldi/woops.svg?branch=master)](https://travis-ci.org/rafaelrinaldi/woops)

> Simple spelling suggestion using the [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) algorithm.

## Install

```sh
$ npm install woops --save
```

## Usage

```javascript
var words = require('superb');
var woops = require('woops');

woops('batueiful', words); // beautiful
```

## License

MIT © [Rafael Rinaldi](http://rinaldi.io)
