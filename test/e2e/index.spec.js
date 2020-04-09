import { resolve } from 'path'
import { Nuxt, Builder } from 'nuxt'

let nuxtInstance

describe('Render e2e', () => {
  // eslint-disable-next-line no-unused-expressions
  beforeEach(async (done) => {
    const rootDir = resolve(__dirname, '../..')
    let config = {}
    try { config = require(resolve(rootDir, 'nuxt.config.js')) } catch (e) {}
    config.rootDir = rootDir
    config.dev = false
    config.mode = 'universal'
    nuxtInstance = new Nuxt(config)
    await new Builder(nuxtInstance).build()
    nuxtInstance.listen(4000, 'localhost')
    done()
  }, 20000)
  test('index', async (t) => {
    const context = {}
    const { html } = await nuxtInstance.renderRoute('/', context)
    expect(html).toContain('<h1 class="red">Hello world!</h1>')
  })
  afterEach((done) => {
    nuxtInstance.close()
    done()
  })
})
