
<div align="center">
  <!-- PR's Welcome -->
  <a href="http://makeapullrequest.com" style="width: 50%">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"
      alt="PR's Welcome" />
  </a>
  
</div>

<h1 align="center">Webpack Plugin Boilerplate</h1>

<div align="center">
  A webpack plugin boilerplate built for webpack 4.
</div>

## Table of Contents
- [Features](#features)
- [Usage](#usage)
- [Documentation](#documentation)
- [Installation](#installation)
- [Support](#support)

## Features

Why use this boilerplate? It comes with a lot of features out of the box that will let you focus on writing webpack plugins.

- __testable__: built with [jest](https://facebook.github.io/jest/) installed and ready to go. Also provides code coverage.
- __compatible__: write cutting-edge javascript and [Babel](https://babeljs.io/) will compile it to a version that older browsers support
- __consistent__: uses webpack's [eslint config](https://github.com/webpack-contrib/eslint-config-webpack) and [lint-staged](https://github.com/okonet/lint-staged) to run eslint on any .js files you commit.
- __extensible__: simply replace boilerplate defaults and you have an npm package just waiting to be written.


## Usage

>This example code is already written in the repo. To see the demo plugin in action, you shouldn't need to write any new code. This is just a walkthrough of how it was written.

### Writing The Plugin

Let's say you want to create a webpack plugin called `DemoPlugin` that prints "Hello World" wants webpack compilation is done (super useful!).

To do this, we will need to make sure our code fulfills a few important properties:

1. It should be a class that is named the same as your plugin. In this case we will use `DemoPlugin`.
2. It should have a class method `apply` that takes a `compiler` parameter. This compiler parameter is described in more details in the [compiler hook documentation](https://webpack.js.org/api/compiler-hooks/#done).
3. Inside the apply method, we will hook into the [done lifecycle hook](https://webpack.js.org/api/compiler-hooks/#done) and do our `console.log`.

Your plugin's main file will be the `src/index.js` file. It should look something like this:

```
export default class DemoPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.done.tap('DemoPlugin', () => {
      console.log('\nHello world\n');
    });
  }
}
```
Notice we have used `compiler.hooks.done.tap` to tap into the `done` lifecycle hook. Our callback will now be called when webpack compilation step has been completed.

### Building The Plugin

Now we need to compile our plugin.

```
npm run build
```
We now have our built plugin files in the `/dist` directory. The main one we want to import is located in `dist/cjs.js`. When you publish your NPM module, this will be the file that gets imported since it's specified in our `package.json` file as our `main` file.

> For local development, you'll have to directly import the `cjs.js` to test your local changes.

### Including The Plugin In Webpack
Now, inside of your webpack configuration for your project, you can import and add your plugin to your plugins list.

```
const DemoPlugin = require('./path/to/DemoPlugin/dist/cjs');

module.exports = {
  mode: 'development',
  plugins: [
    new DemoPlugin({}),
  ],
};
```

The final step is to build your webpack project. In the output, you should see that the `DemoPlugin` was called after webpack finished compilation and printed "Hello World" to the console.

<p align="left">
  <img src="https://i.imgur.com/ZWWg13N.png">
</p>

And that's it! You now can work on adding some useful functionality to your plugin.

**Important:** Don't forget to rebuild your plugin each time you make a change!

## Documentation

See the [webpack plugin API Docs](https://webpack.js.org/api/plugins/) for a full description of webpack plugin API.

## Installation

1. Clone the repository into your "DemoPlugin" directory (replace DemoPlugin with your plugin name).

    ```bash
    git clone https://github.com/ctaylo21/webpack-plugin-boilerplate.git DemoPlugin && cd DemoPlugin
    ```

2. Remove the git repository, and then initialize a new one

    ```bash
    rm -rf .git && git init
    ```

3. Remove README and replace with your own

    ```bash
    rm README.md && touch README.md
    ```

4. Update `package.json` and install dependencies

    ```bash
    npm init && npm install
    ```

    Don't forget to update any relevant fields in the `package.json` file!

5. Start coding!

## Support

If you find any problems or bugs, please open a new [issue](https://github.com/ctaylo21/webpack-plugin-boilerplate/issues).