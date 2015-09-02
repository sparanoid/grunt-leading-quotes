'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.assets_inline = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options');
    var expected = grunt.file.read('test/expected/default_options');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  },
  custom_elements: function(test){
    test.expect(1);

    var actual = grunt.file.read('tmp/custom_elements');
    var expected = grunt.file.read('test/expected/custom_elements');
    test.equal(actual, expected, 'tests custom elements');

    test.done();
  },
  custom_regex: function(test){
    test.expect(1);

    var actual = grunt.file.read('tmp/custom_regex');
    var expected = grunt.file.read('test/expected/custom_regex');
    test.equal(actual, expected, 'tests custom regex');

    test.done();
  },
  custom_class: function(test){
    test.expect(1);

    var actual = grunt.file.read('tmp/custom_class');
    var expected = grunt.file.read('test/expected/custom_class');
    test.equal(actual, expected, 'tests custom class');

    test.done();
  },
  custom_ignore: function(test){
    test.expect(1);

    var actual = grunt.file.read('tmp/custom_ignore');
    var expected = grunt.file.read('test/expected/custom_ignore');
    test.equal(actual, expected, 'tests custom ignore class');

    test.done();
  },
  enable_style: function(test){
    test.expect(1);

    var actual = grunt.file.read('tmp/enable_style');
    var expected = grunt.file.read('test/expected/enable_style');
    test.equal(actual, expected, 'tests appending styles');

    test.done();
  }
};
