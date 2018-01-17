import isValid from 'is-valid-app'
import helperDate from 'helper-date'

import { task } from '../../utils/utils'
import { escapeQuotes } from '../../utils/helpers'

import generateDefaults from 'generate-defaults'

export default function (app) {
  if (!isValid(app, 'generate-subgenerator-example')) return

  app.on('error', err => app.log.error(err))

  app.helper('date', helperDate)
  app.helper('escapeQuotes', escapeQuotes)

  app.use(generateDefaults)

  /**
   * Write a `example-subgenerator.txt` file to the current working directory.
   *
   * ```sh
   * $ gen subgenerator-example
   * ```
   * @name file
   * @api public
   */
  task(app, 'example-subgenerator', 'generate-subgenerator-example/example-subgenerator.txt')

  /**
   * Run the `example-subgenerator` task
   *
   * ```sh
   * $ gen example-subgenerator
   * ```
   *
   * or
   *
   * ```sh
   * $ gen example-subgenerator:default
   * ```
   *
   * @name file
   * @api public
   */
  app.task('default', ['example-subgenerator'])
}
