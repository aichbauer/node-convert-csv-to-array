# convert-csv-to-array

[![npm](https://img.shields.io/npm/v/convert-csv-to-array.svg?style=flat-square)](https://www.npmjs.com/package/convert-csv-to-array)
[![Travis branch](https://img.shields.io/travis/aichbauer/node-convert-csv-to-array/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/node-convert-csv-to-array)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/node-convert-csv-to-array/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/node-convert-csv-to-array)

> Convert a csv formatted string to an array

## Table of Contents

* [Why?](#why)
* [Installation](#installation)
* [Functions](#functions)
* [Usage](#usage)
* [License](#license)

## Why?

I needed a simple way to convert csv formatted string to an array to display it in a table component.

## Installation

```sh
$ npm i convert-csv-to-array -S
```

or

```sh
$ yarn add convert-csv-to-array
```

## Functions

Take a look into the [usage section](#usage) for a detailed example.

### convertCSVToArray

> Note: you can also use the default export.

This function converts a csv formatted string into an array of objects, or into an array of arrays.

#### Syntax

Returns a new array.

```js
const array = convertCSVToArray(data, options);
```

##### Parameters

* **data**: a csv formatted string
* **options**: a object
  * holds three keys: **header**, **type** and **separator**
  * **header**: either `true` or `false`, default: `true`
  * **type**: either `'object'`or `'array'`, default: `'object'`
  * **separator**: the character which is the separator in your csv formatted string, default: `','`

## Usage

Some examples on how to use this library.

```js
const { convertCSVToArray } = require('convert-csv-to-array');
const converter = require('convert-csv-to-array');

// would be a use input (upload) or read from a file
const data = 'number;first;last;handle\n1;Mark;Otto;@mdo\n2;Jacob;Thornton;@fat\n3;Larry;the Bird;@twitter\n';

/*
  const arrayofArrays = [
    ['number', 'first', 'last', 'handle'],
    [1, 'Mark', 'Otto', '@mdo'],
    [2, 'Jacob', 'Thornton', '@fat'],
    [3, 'Larry', 'the Bird', '@twitter'],
  ];
*/
const arrayofArrays = convertCSVToArray(data, {
  type: 'array',
  separator: ';', // use the separator you use in your csv (e.g. '\t', ',', ';' ...)
});

/*
  const arrayofObjects = [
    ['number', 'first', 'last', 'handle'],
    {
      number: 1,
      first: 'Mark',
      last: 'Otto',
      handle: '@mdo',
    },
    {
      number: 2,
      first: 'Jacob',
      last: 'Thornton',
      handle: '@fat',
    },
    {
      number: 3,
      first: 'Larry',
      last: 'the Bird',
      handle: '@twitter',
    },
  ];
*/
const arrayofObjects = convertCSVToArray(data, {
  separator: ';', // use the separator you use in your csv (e.g. '\t', ',', ';' ...)
});

/*
  const arrayofArraysWithoutHeader = [
    [1, 'Mark', 'Otto', '@mdo'],
    [2, 'Jacob', 'Thornton', '@fat'],
    [3, 'Larry', 'the Bird', '@twitter'],
  ];
*/
const arrayofArraysWithoutHeader = convertCSVToArray(data, {
  header: false,
  type: 'array',
  separator: ';', // use the separator you use in your csv (e.g. '\t', ',', ';' ...)
});

/*
  const arrayofObjectsWithoutHeader = [
    {
      number: 1,
      first: 'Mark',
      last: 'Otto',
      handle: '@mdo',
    },
    {
      number: 2,
      first: 'Jacob',
      last: 'Thornton',
      handle: '@fat',
    },
    {
      number: 3,
      first: 'Larry',
      last: 'the Bird',
      handle: '@twitter',
    },
  ];
*/
const arrayofObjectsWithoutHeader = convertCSVToArray(data, {
  header: false,
  separator: ';', // use the separator you use in your csv (e.g. '\t', ',', ';' ...)
});
```

## License

MIT © Lukas Aichbauer
