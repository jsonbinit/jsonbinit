<template>
  <div class="container">
    <div class="container__main">
      <bin-header>
        Service to store JSON on the fly! <nuxt-link to="/docs">Read the Docs</nuxt-link> for more info
      </bin-header>
      <client-only>
        <prism-editor class="codecontent" :code="code" language="js" :line-numbers="true" />
      </client-only>
      <div class="links">
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >Save ➡ 🗑</a>
      </div>
      <bin-footer/>
    </div>
  </div>
</template>

<script>
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'vue-prism-editor/dist/VuePrismEditor.css'

import PrismEditor from 'vue-prism-editor'

export default {
  components: {
    PrismEditor
  },
  data: () => {
    return {
      code: '',
      linenumbers: true
    }
  }
}
</script>

<style>
.codecontent {
  height: 400px;
}
</style>
