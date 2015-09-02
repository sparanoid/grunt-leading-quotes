/*
 * grunt-leading-quotes
 * https://github.com/sparanoid/grunt-leading-quotes
 *
 * Copyright (c) 2015 Tunghsiao Liu
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  'use strict';

  var cheerio = require('cheerio');
  var path = require('path');
  var url = require('url');

  grunt.registerMultiTask('leading_quotes', 'Turn your distribution into something pastable.', function() {

    var options = this.options({
      elements: '*',
      regex: /「|『|“/,
      class: 'leading-indent-fix',
      ignoreClass: 'no-lq',
      addStyle: false,
      addStyleOffset: '-.4em',
      verbose: false
    });

    this.files.forEach(function(filePair) {
      // check that the source file exists
      if(filePair.src.length === 0) { return; }

      // init cheerio
      var $ = cheerio.load(grunt.file.read(filePair.src));

      grunt.log.writeln(('Reading: ').green + path.resolve(filePair.src.toString()));

      $(options.elements).each(function() {
        var para = $(this);
        var ignore = options.ignoreClass;

        // if (parent) element has ignore class
        if (para.hasClass(ignore) || para.parents('.' + ignore).hasClass(ignore)) {
          return;
        }

        // get first letter
        var firstLetter = para.clone().children().remove().end().text().trim().charAt(0);

        // get regex for comparing
        var regex = options.regex;

        if (firstLetter.match(regex)) {

          // show verbose log if enabled
          if (options.verbose) {
            grunt.log.writeln(('  found: ').cyan + para);
          }

          // add class for matched term
          para.addClass(options.class);

          // auto style if enabled
          if (options.addStyle) {
            para.css("text-indent", options.addStyleOffset);
          }
        }
      });

      var html = $.html();
      grunt.file.write(path.resolve(filePair.dest), html);
      grunt.log.writeln(('Created: ').green + path.resolve(filePair.dest) + '\n');
    });
  });
};
