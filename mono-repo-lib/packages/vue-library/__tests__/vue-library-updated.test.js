'use strict';

const vueLibraryUpdated = require('..');
const assert = require('assert').strict;

assert.strictEqual(vueLibraryUpdated(), 'Hello from vueLibraryUpdated');
console.info("vueLibraryUpdated tests passed");
