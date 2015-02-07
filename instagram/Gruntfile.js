/*jslint node: true */
'use strict';

var pkg = require('./package.json');

//Using exclusion patterns slows down Grunt significantly
//instead of creating a set of patterns like '**/*.js' and '!**/node_modules/**'
//this method is used to create a set of inclusive patterns for all subdirectories
//skipping node_modules, vendor, build, and any .dirs
//This enables users to create any directory structure they desire.
var createFolderGlobs = function (fileTypePatterns) {
  fileTypePatterns = Array.isArray(fileTypePatterns) ? fileTypePatterns : [fileTypePatterns];
  var ignore = ['node_modules', 'vendor', 'build', 'temp'];
  var fs = require('fs');
  return fs.readdirSync(process.cwd())
    .map(function (file) {
      if (ignore.indexOf(file) !== -1 ||
        file.indexOf('.') === 0 || !fs.lstatSync(file).isDirectory()) {
        return null;
      } else {
        return fileTypePatterns.map(function (pattern) {
          return file + '/**/' + pattern;
        });
      }
    })
    .filter(function (patterns) {
      return patterns;
    })
    .concat(fileTypePatterns);
};

module.exports = function (grunt) {

  // load all grunt tasks
  require('load-grunt-tasks')(grunt);
  require('logfile-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    connect: {
      main: {
        options: {
          port: 9001,
          open: true
        }
      }
    },
    watch: {
      main: {
        options: {
          livereload: true,
          livereloadOnError: false,
          spawn: false
        },
        files: [createFolderGlobs(['*.js', '*.less', '*.html']), '!_SpecRunner.html', '!.grunt'],
        tasks: [] //all the tasks are run dynamically during the watch event handler
      }
    },
    jshint: {
      main: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: createFolderGlobs('*.js')
      }
    },
    clean: {
      before: {
        src: ['build', 'temp']
      },
      after: {
        src: ['temp']
      }
    },
    less: {
      production: {
        options: {},
        files: {
          'temp/app/app.css': 'app/app.less'
        }
      }
    },
    ngtemplates: {
      main: {
        options: {
          module: pkg.name,
          htmlmin: '<%= htmlmin.main.options %>'
        },
        src: [createFolderGlobs('*.html'), '!index.html', '!_SpecRunner.html'],
        dest: 'temp/app/templates.js'
      }
    },
    copy: {
      main: {
        files: [
          {src: ['img/**'], dest: 'build/'},
          {src: ['vendor/font-awesome/fonts/**'], dest: 'build/', filter: 'isFile', expand: true},
          {src: ['vendor/bootstrap/fonts/**'], dest: 'build/', filter: 'isFile', expand: true}
          //{src: ['vendor/angular-ui-utils/ui-utils-ieshiv.min.js'], dest: 'build/'},
          //{src: ['vendor/select2/*.png','vendor/select2/*.gif'], dest:'build/css/',flatten:true,expand:true},
          //{src: ['vendor/angular-mocks/angular-mocks.js'], dest: 'build/'}
        ]
      }
    },
    dom_munger: {
      read: {
        options: {
          read: [
            {selector: 'script[data-concat!="false"]', attribute: 'src', writeto: 'appjs'},
            {selector: 'link[rel="stylesheet"][data-concat!="false"]', attribute: 'href', writeto: 'appcss'}
          ]
        },
        src: 'index.html'
      },
      update: {
        options: {
          remove: ['script[data-remove!="false"]', 'link[data-remove!="false"]'],
          append: [
            {selector: 'body', html: '<script src="app/app.full.min.js"></script>'},
            {selector: 'head', html: '<link rel="stylesheet" href="app/app.full.min.css">'}
          ]
        },
        src: 'index.html',
        dest: 'build/index.html'
      }
    },
    cssmin: {
      main: {
        src: ['temp/app/app.css', '<%= dom_munger.data.appcss %>'],
        dest: 'build/app/app.full.min.css'
      }
    },
    concat: {
      main: {
        src: ['<%= dom_munger.data.appjs %>', '<%= ngtemplates.main.dest %>'],
        dest: 'temp/app/app.full.js'
      }
    },
    ngAnnotate: {
      main: {
        src: 'temp/app/app.full.js',
        dest: 'temp/app/app.full.js'
      }
    },
    uglify: {
      main: {
        src: 'temp/app/app.full.js',
        dest: 'build/app/app.full.min.js'
      }
    },
    htmlmin: {
      main: {
        options: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        },
        files: {
          'build/index.html': 'build/index.html'
        }
      }
    },
    //Imagemin has issues on Windows.
    //To enable imagemin:
    // - "npm install grunt-contrib-imagemin"
    // - Comment in this section
    // - Add the "imagemin" task after the "htmlmin" task in the build task alias
    // imagemin: {
    //   main:{
    //     files: [{
    //       expand: true, cwd:'build/',
    //       src:['**/{*.png,*.jpg}'],
    //       dest: 'build/'
    //     }]
    //   }
    // },
    karma: {
      options: {
        frameworks: ['jasmine'],
        files: [  //this files data is also updated in the watch handler, if updated change there too
          '<%= dom_munger.data.appjs %>',
          'vendor/angular-mocks/angular-mocks.js',
          createFolderGlobs('*-spec.js')
        ],
        logLevel: 'ERROR',
        reporters: ['mocha'],
        autoWatch: false, //watching is handled by grunt-contrib-watch
        singleRun: true
      },
      all_tests: {
        browsers: ['PhantomJS', 'Chrome', 'Firefox']
      },
      during_watch: {
        browsers: ['PhantomJS']
      }
    },
    // TODO: create prompt for username into stash repo
    gitclone: {
      clone: {
        options: {
          repository: 'https://',
          directory: 'vendor'
        }
      }
    },
    lesslint: {
      options: {
        csslint: {
          csslintrc: '.csslintrc'
        }
      },
      src: createFolderGlobs('*.less')
    },
    htmlhint: {
      options: {
        htmlhintrc: '.htmlhintrc'
      },
      src: createFolderGlobs('*.html')
    }
  });

  grunt.registerTask('build', ['lintCode', 'clean:before', 'less', 'dom_munger', 'ngtemplates', 'cssmin', 'concat', 'ngAnnotate', 'uglify', 'copy', 'htmlmin', 'clean:after']);
  grunt.registerTask('serve', ['dom_munger:read', 'lintCode', 'connect', 'watch']);
  grunt.registerTask('test', ['dom_munger:read', 'karma:all_tests']);
  grunt.registerTask('bower', ['gitclone']);

  /**
   * Lints JS, HTML, and CSS files.
   */
  grunt.registerTask('lintCode', function () {
    var skipLint = grunt.option('skipLint');
    if (!skipLint) {
      grunt.task.run([
        'jshint',
        'htmlhint',
        'lesslint'
      ]);
    }
  });


  grunt.event.on('watch', function (action, filepath) {
    //https://github.com/gruntjs/grunt-contrib-watch/issues/156

    var tasksToRun = [];

    if (filepath.lastIndexOf('.js') !== -1 && filepath.lastIndexOf('.js') === filepath.length - 3) {

      //lint the changed js file
      grunt.config('jshint.main.src', filepath);
      tasksToRun.push('jshint');

      //find the appropriate unit test for the changed file
      var spec = filepath;
      if (filepath.lastIndexOf('-spec.js') === -1 || filepath.lastIndexOf('-spec.js') !== filepath.length - 8) {
        spec = filepath.substring(0, filepath.length - 3) + '-spec.js';
      }

      //if the spec exists then lets run it
      if (grunt.file.exists(spec)) {
        var files = [].concat(grunt.config('dom_munger.data.appjs'));
        files.push('vendor/angular-mocks/angular-mocks.js');
        files.push(spec);
        grunt.config('karma.options.files', files);
        tasksToRun.push('karma:during_watch');
      }
    }

    //if index.html changed, we need to reread the <script> tags so our next run of karma
    //will have the correct environment
    if (filepath === 'index.html') {
      tasksToRun.push('dom_munger:read');
    }

    grunt.config('watch.main.tasks', tasksToRun);

  });
};
