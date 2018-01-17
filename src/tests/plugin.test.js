import 'mocha'
import chai from 'chai'
import generate from 'generate'

import generator from '../lib/generator'

let app

const expect = chai.expect

describe('generate-swap-generator-example', function () {
  beforeEach(function () {
    app = generate()
  })

  describe('plugin', function () {
    it('should add tasks to the instance', function () {
      app.use(generator)
      expect(app.tasks).has.property('default')
      expect(app.tasks).has.property('main')
    })

    it('should only register the plugin once', function (cb) {
      let count = 0
      app.on('plugin', function (name) {
        if (name === 'generate-swap-generator-example') {
          count++
        }
      })
      app.use(generator)
      app.use(generator)
      app.use(generator)
      expect(count).to.equal(1)
      cb()
    })
  })
})
