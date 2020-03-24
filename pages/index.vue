<template>
  <div class="container">
    <div class="container__main">
      <h1 class="title">
        JSON {🗑} IT!
      </h1>
      <h2 class="subtitle">
        Service to store JSON on the fly! Read the Docs for more info
      </h2>
      <client-only>
        <prism-editor class="codecontent" :code="code" language="js" :line-numbers="true" />
      </client-only>
      <github-corner repo-url="https://github.com/jsonbinit" color="#1c1e20"/>
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
import GithubCorner from '~/components/GithubCorner'

export default {
  components: {
    PrismEditor,
    GithubCorner
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
