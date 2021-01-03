const assert = require('assert');


function capitalizeFirst(input) {
    return input.length > 0
      ? input.split(' ').map(word=>word[0].toUpperCase()+word.slice(1)).join(' ')
      : '';
  }
  

assert.strictEqual(typeof capitalizeFirst, 'function');

assert.strictEqual(capitalizeFirst.length, 1);

assert.strictEqual(capitalizeFirst('javaScript'), 'JavaScript');

assert.strictEqual(capitalizeFirst('i am learning TDD'), 'I Am Learning TDD');


assert.strictEqual(capitalizeFirst('z'), 'Z');

assert.strictEqual(capitalizeFirst(''), '');