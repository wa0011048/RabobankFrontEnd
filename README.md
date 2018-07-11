# Rabobank assignment

It uses :

* AngularJs
* Angular UI Router
* Twitter Bootstrap (CSS)
* Font Awesome

## Installation

If you don't have yet, install `gulp` globbally

```
npm install -g gulp
```

Install dependencies using npm and bower. The `npm install` will run as well `bower install`:

```
npm install
```

## Structure

This project uses `gulp` to build and `bower` for frontend dependencies.

All the sources are in the `src/` directory. When serving, are files are available in the `dist/` directory.

Feel free to edit any Gulp parameter in the `config.json` file.

## Documentation

### Building your sources

`gulp build [--env=prod]`

* It copies all files from `src/` to `dist/` directory
* When used with prod env parameters, it applies all production transformations (minification, concatenation, ...)

### Serving your project

`gulp serve [--env=prod] [--watch [--no-livereload] [--tdd]]`

* This command build (like the previous command) files then serves them on `http://localhost:8888`
* `--watch` moves changed files to `dist/` directory and launches live reload (it cannot be used with `--env=prod` parameter)
* `--watch --no-livereload` same as the before but without live reload
* `--watch --tdd` same as before but lanches test units at each changes

### Testing your project

`gulp test:unit`

* Run unit tests

`gulp test:e2e [--env=prod]`

* Run functional tests. The site should be available on localhost:8888 before running this command.

_Note : Check the value of the seleniumJar in test/protractor.conf.js and verify that the version is the same that was downloaded._

You can use `npm run-script protactor-webdriver` to download the selenium server jar.

### Configuration

Configuration is located in :

* `test/karma.conf.js`  : test unit configuration
* `ŧest/protractor.conf.js` : functional test configuration
* `config.json` : task general configuration

For Karma and Protractor, go to their respective documentation.

In `config.json`, you can configure :

* `env` : default environment
* `bases` : base directories
* `path` : paths with wildcards to find scripts, stylesheets, fonts, images, ...
* `serve` : serve server host and port
