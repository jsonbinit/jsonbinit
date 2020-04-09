// import { resolve } from 'path'
// import { Nuxt, Builder } from 'nuxt'
import '@/plugins/vue-inject'
import '@/plugins/global'

// let nuxtInstance
// https://v1study.com/vuejs-nuxtjs-cac-cong-cu-phat-trien.html
describe('Render e2e', () => {
  // eslint-disable-next-line no-unused-expressions
  beforeEach(async (done) => {
    // const rootDir = resolve(__dirname, '../../')
    // const config = {
    //   dev: false,
    //   rootDir,
    //   plugins: ['@/plugins/vue-inject.js', '@/plugins/global.js']
    // }
    // nuxtInstance = new Nuxt(config)
    // await new Builder(nuxtInstance).build()
    // nuxtInstance.listen(4000, 'localhost')
    done()
  }, 400)
  test('Index', async (done) => {
    // const context = {}
    // const { html } = await nuxtInstance.renderRoute('/', context)
    // expect(html).toContain('<!doctype html>')
    done()
  }, 200)
  // test('Specific JSON', (done) => {
  //   nuxtInstance.renderAndGetWindow('http://localhost:4000/bins/l088fgWQ')
  //     .then(async (window) => {
  //       console.log(window.Vue.nextTick())
  //       done()
  //     })
  // }, 2000)
  afterEach(async (done) => {
    // await nuxtInstance.close()
    done()
  })
})
