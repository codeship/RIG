RIG
===
![Codeship BuildStatus](https://codeship.com/projects/a62fd230-b042-0132-a853-0e5ba92aabbb/status?branch=master)

An aesthetically unopinionated CSS Framework by Codeship.

You can find documentation and examples over at [rigframework.com](http://rigframework.com/)

## QuickStart

RIG comes with 2 files that you should include in your website.

- A CSS File
- A JS File

You will find the latest release files in the `releases` folder. 
Once both files are correctly added to your website be sure to instantiate RIG correctly by calling:

```
var Rig = new Rig()
```

## Requirements for running locally

If you want to give it a try and checkout everything this framework has to offer locally, you can let it run easily on your system with `gulp` and `browsersync`.
The `package.json` has you covered with all you need regarding gulp. There are only 2 extra requirements.

As this Build uses `scsslint` for guaranteeing clean scss, you have to install `ruby` and run `gem install scss-lint`.

When you have gulp installed globally, you can kick off the thing by typing `gulp` in your terminal and you are good to go. Browsersync and Notification Builds handle the rest.


## Building

If you want to build the `rig.css` file on your own with your preferences, you can do so easily.

For installing all the dependencies, be sure to have the latest version of `npm` installed on your system. Then, using the Terminal, go to the root folder of this project and type:

```
$ npm install
```

Once everything is installed, go ahead and run gulp from the command line.

```
$ gulp
```

This will build all sass files and output all files in a folder named `dev` by default.

## License

This project is released under the GPL v3 License. Feel free to use the source code however you like, and feel free to use it for commercial products.
