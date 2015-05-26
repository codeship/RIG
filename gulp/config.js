// Configure the Build suite all from one place
// You will love it :)

// Certail Values will be passed on directly
// So you can add all the available options of those plugins
// This is true for:

// By running gulp task
// it will spawn a running server and using the dev paths for that

// autoprefixer | https://www.npmjs.com/package/gulp-autoprefixer
// lint | https://www.npmjs.com/package/gulp-scss-lint


module.exports = {

  sass: {
    watch: './src/scss/**/*.scss',
    src: './src/scss/**/*.scss',
    dest: './assets/css/',
    compileDev: {
      outputStyle: 'expanded'
    },
    compileProd: {
      outputStyle: 'compressed',
    },

    autoprefixer: {
      browsers: ['last 4 versions'],
      cascade: false
    },

    lint: {
      verbose: true,
      config: 'scsslint.yml'
    }
  },

  coffee: {
    watch: './src/coffee/**/*.coffee',
    src: './src/coffee/rig.coffee',
    dest: './assets/js/',
    compile: {
      bare: true
    }
  },

  jade: {
    watch: './src/jade/**/*.jade',
    src: './src/jade/**/*.jade',
    dest: './',
    compileDev: {
      pretty: true
    },
    compileDev: {
      pretty: false
    }
  },

  revision: {
    dontRenameFile: [/^\/favicon.ico$/g, '.html']
  },

  paths: {
    dev: './dev/',
    build: './build/',
    deploy: './deploy/',
    vendors: './src/vendors',
    imgs: './src/imgs/**/*.*'
  }

}
