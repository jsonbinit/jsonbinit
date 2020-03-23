<template>
  <div class="container">
    <div>
      <h1 class="title">
        JSON {🗑} IT!
      </h1>
      <h2 class="subtitle">
        Service to store JSON on the fly
      </h2>
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
  height: 300px;
}
</style>
