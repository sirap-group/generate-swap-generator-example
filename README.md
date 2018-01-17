<h1 align="center">
  <a href="https://github.com/sirap-group"><img src="src/assets/img/brand.png"/></a>
  <br>
  −− generate-swap-generator-example −−
  <br>
  <br>
</h1>

<p align="center">
  <a href="https://travis-ci.org/sirap-group/generate-swap-generator-example" target="_blank">
    <img alt="Build Status" src="https://travis-ci.org/sirap-group/generate-swap-generator-example.svg?branch=master"/>
  </a>

  <a href="https://www.npmjs.com/package/generate-swap-generator-example">
    <img src="https://img.shields.io/npm/dm/generate-swap-generator-example.svg" alt="npm downloads">
  </a>

  <a href="https://npmjs.org/package/generate-swap-generator-example" target="_blank">
    <img alt="NPM version" src="https://badge.fury.io/js/generate-swap-generator-example.svg"/>
  </a>

  <a href="https://standardjs.com" target="_blank">
    <img alt="JavaScript Style Guide" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg"/>
  </a>
</p>

<h4 align="center">
  −− An example repository to illustrate to result of generating a custom generator with generate-swap-generator −−
  <br>
  <br>
  <a href="https://www.npmjs.com/package/generate-swap-generator-example" target="_blank">
    <img alt="NPM Stats" src="https://nodei.co/npm/generate-swap-generator-example.png?downloads=true&downloadRank=true&stars=true"/>
  </a>
</h4>

## Installation

### Global install to use the generator as a standarlone CLI (recommanded)

```sh
$ yarn gobal add generate-swap-generator-example
```

or

```sh
$ npm install --global generate-swap-generator-example
```

### Local install to use as a `generate` plugin or sub-generator

> You should first visit the generator framework, [generate](https://github.com/generate/generate) to understand how generators, subgenerators and plugins work. See also [related projects](#related-projects)

```sh
$ yarn add generate-swap-generator-example
```

or

```sh
$ npm install --save generate-swap-generator-example
```

## Usage

### As a standalone generator (recommanded)

```sh
$ generate-swap-generator-example
```

Should **@TODO: describe generator default action**

### Generated files

**@TODO: generated files tree**

```
.
├─┬ dir/
| └─┬ subdir/
|   ├─ example1.txt
|   └─ example2.txt
└── .travis.yml
```

### Example

#### Usage screenshot

![Usage example](src/assets/img/placehold-350x150.png)


### As a generate plugin (if you know what you are doing)

> You should first visit the generator framework, [generate](https://github.com/generate/generate) to understand how generators, subgenerators and plugins work.

```js
import generateSwapGeneratorExample from 'generate-swap-generator-example'
import isValid from 'is-valid-app'

export default function (app) {
  if (!isValid(app, 'generate-my-generator')) return

  app.use(generateSwapGeneratorExample)

  // ... your generator's stuff
}
```

Then you can use directly any 'generate-swap-generator-example' tasks as a `generate-my-generator` task.

```
$ gen my-generator:example-task
```

Should run `generate-swap-generator-example:example-task` on your own generator instance.

### As a generate sub-generator (if you know what you are doing)

> You should first visit the generator framework, [generate](https://github.com/generate/generate) to understand how generators, subgenerators and plugins work.

```js
import generateSwapGeneratorExample from 'generate-swap-generator-example'
import isValid from 'is-valid-app'

export default function (app) {
  if (!isValid(app, 'generate-my-generator')) return

  app.register('swap-generator-example', generateSwapGeneratorExample)

  // ... your generator's stuff
}
```

Then you can acces easily any `generate-swap-generator-example` tasks as a `generate-my-generator` sub-generator task.

```
$ gen my-generator.swap-generator-example:example-task
```

Should run `generate-swap-generator-example:example-task` on your own generator instance.

## API

**@TODO: document the API here**

## Contributing

### Codebase

The codebase is written using the [ESNext Specification](https://github.com/hemanth/es-next) (ECMAScript Stage 0), following the [StandardJS Code Style](https://standardjs.com/)

[![ECMASript](src/assets/img/esnext.png)](https://github.com/hemanth/es-next)
[![JavaScript Style Guide](src/assets/img/standard.png)](https://github.com/standard/standard)
[![ESLint](src/assets/img/eslint.png)](https://eslint.org)
[![Babel JS](src/assets/img/babel.png)](https://babeljs.io)
[![Yarn](src/assets/img/yarn.png)](https://yarnpkg.com/en/)

We use:

- [Yarn](https://yarnpkg.com/fr/) to handle npm dependencies,
- [ESNext CLI](https://github.com/esnext/esnext) to transform ESx code to ESNext,
- [Babel CLI](https://babeljs.io/) to transpile ESNext code to node/browser compatible javascript,
- And [Standard CLI](https://www.npmjs.com/package/standard) + [ESLint](https://eslint.org) to lint or format ESNext codebase.

### Contribution guide

> See the [contribution guide](CONTRIBUTING.md) in a separated document.

### Development

#### Global dependencies

Get the latest node engine (example with `nvm`):

```sh
$ nvm install lts/carbon
```

Install yarn from npm (for development only):

```sh
$ npm install --global yarn
```

All the rest of the development dependencies are local.

#### Clone and install

Clone the repo and install dependencies:

```sh
$ git clone git@github.com:sirap-group/generate-swap-generator-example.git
$ cd generate-swap-generator-example
$ yarn install
```
#### Running test

Finally, run the test pipeline:

```sh
$ yarn pipeline:test
```

#### Available yarn scripts

| Task Command | Task description |
|---|---|
| `yarn clear` | Delete the `./build/` and `./dist` repositories |
| `yarn lint` | Lint source files |
| `yarn lint:esnext` | Lint ESNext source files |
| `yarn build` | Build the whole distribution |
| `yarn build:assets` | Build all the assets |
| `yarn build:assets:img` | Build the images assets |
| `yarn build:assets:templates` | Build the generator's templates |
| `yarn build:lib` | Build only the lib |
| `yarn build:tests` | Build only the tests |
| `yarn build:docs` | **[TODO]** Build only the docs |
| `yarn test` | Run the tests in `./dist/tests/` |
| `yarn tests` | An alias for `yarn test` |
| `yarn travis` | Run the travis script |
| `yarn docs` | **[TODO]** Serve the docs |
| `yarn pipeline` | Run the complete pipeline |
| `yarn pipeline:test` | Run the required jobs to run the tests, then run the tests |
| `yarn pipeline:build` | Run the required jobs to build the dist, then build the dist |
| `yarn pipeline:docs` | **[TODO]** Run the required jobs to serve the docs, then serve the docs |
| `yarn pipeline:build:tests` | Run the required jobs to build the docs, then build the docs |
| `yarn pipeline:build:lib` | Run the required jobs to build the docs, then build the docs |
| `yarn pipeline:build:docs` | **[TODO]** Run the required jobs to build the docs, then build the docs |
| `yarn release` | An alias to `yarn release:patch` |
| `yarn release:prerelease` | Release and publish a new semver version (x.y.z-rc+1)|
| `yarn release:patch` | Release and publish a new patch semver version (`x.y.z+1`)|
| `yarn release:minor` | Release and publish a new minor semver version (`x.y+1.z=0`)|
| `yarn release:major` | Release and publish a new major semver version (`x+1.y=0.z=0`)|

#### Develop in BDD mode

> **B.D.D.** means **Behavior-Driven-Development**

The project is ready to code in BDD mode. Just run the `bdd` yarn command:

```
$ yarn bdd
```

The project will be lint, built, the BDD unit tests will be run, and the process will watch for any file changes to loop over the previous tasks (`lint`, `build`, `test`, `watch`).

#### Releasing a new version

The task `yarn pipeline:build` generate a `./dist` folder in the repository's root directory but this folder is not part of the git repository (there is an entry in the `.gitignore` file). However the dist folder is included in the `package.json#files` field.

Thus to release a new, lets say, "patch" version, just run:

```sh
$ yarn release:patch
```

The whole build pipeline is run locally (lint, transpile, test) and then a new git tag and a new npm tag are pushed up.


## Related projects

* [generate-swap-generators](https://npmjs.com/generate-swap-generators) Generate An ES.Next/StandardJS/UnitTest Ready, Github or Gitlab Project in Seconds! − A generator for SWAP projects [github](https://github.com/rbecheras/generate-swap-generators) | [homepage](https://rbecheras.github.io/generate-swap-generators/)
* [generate-swap-project](https://npmjs.com/generate-swap-project) Generate An ES.Next/StandardJS/UnitTest Ready, Github or Gitlab Project in Seconds! − A generator for SWAP projects [github](https://github.com/rbecheras/generate-swap-project) | [homepage](https://rbecheras.github.io/generate-swap-project/)
* [generate](https://npmjs.com/generate) A new command line tool and developer framework for scaffolding out GitHub projects. Generate offers the robustness and configurability of Yeoman, the expressiveness and simplicity of Slush, and more powerful flow control and composability than either [github](https://github.com/generate/generate) | [homepage](https://generate.github.io/generate/)
* [base](https://www.npmjs.com/package/base): Framework for rapidly creating high quality node.js applications, using plugins like building blocks | [homepage](https://github.com/node-base/base "Framework for rapidly creating high quality node.js applications, using plugins like building blocks")
* [update](https://www.npmjs.com/package/update): Be scalable! Update is a new, open source developer framework and CLI for automating updates… [more](https://github.com/update/update) | [homepage](https://github.com/update/update "Be scalable! Update is a new, open source developer framework and CLI for automating updates of any kind in code projects.")
* [verb](https://www.npmjs.com/package/verb): Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used… [more](https://github.com/verbose/verb) | [homepage](https://github.com/verbose/verb "Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used on hundreds of projects of all sizes to generate everything from API docs to readmes.")
* [composer](https://www.npmjs.com/package/composer): API-first task runner with three methods: task, run and watch. | [homepage](https://github.com/jonschlinkert/composer)
* [engine](https://www.npmjs.com/package/engine): Template engine based on Lo-Dash template, but adds features like the ability to register helpers… [more](https://www.npmjs.com/package/engine) | [homepage](https://github.com/jonschlinkert/engine)
* [template](https://www.npmjs.com/package/template): Render templates using any engine. Supports, layouts, pages, partials and custom template types. Use template… [more](https://www.npmjs.com/package/template) | [homepage](https://github.com/jonschlinkert/template)

## License

Copyright © [Groupe SIRAP](https://github.com/sirap-group)

See [LICENSE](LICENSE)

---

<p>
<a href="https://github.com/sirap-group" target="_blank">
  <img title="Groupe SIRAP" alt="Groupe SIRAP" src="src/assets/img/sirap.png" width="200px">
</a> This generator was generated by
<a href="https://github.com/rbecheras/generate-swap-generator" target="_blank">
generate-swap-generator
</a>, a project by <a href="https://github.com/sirap-group" target="_blank">
SIRAP Group
</a>
</p>