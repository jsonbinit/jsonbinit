<template>
  <div class="container">
    <div class="container__main">
      <bin-header>
        Service to store JSON on the fly!
        <nuxt-link to="/docs">
          Read the Docs
        </nuxt-link>for more info
      </bin-header>
      <client-only>
        <prism-editor
          v-model="code"
          class="codecontent"
          language="js"
          :line-numbers="true"
          @change="checkCanSave"
        />
      </client-only>
      <div class="links">
        <a target="_blank" class="button--grey" @click="pushJson">Save ➡ 🗑</a>
      </div>
      <bin-footer />
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
  },
  methods: {
    validateJson (json) {
      try {
        JSON.parse(json)
      } catch (e) {
        return false
      }
      return true
    },
    checkCanSave (event) {
      if (this.validateJson(event)) {
        console.log('è json')
        // this.code = event
      } else {
        console.log('non è json')
      }
    },
    pushJson () {
      console.log(this.code)
      this.$apiservice.postJSON(this.code).then((response) => {
        const id = response.data.uri
        this.$router.push(`/bins/${id.substring(id.lastIndexOf('/') + 1)}`)
      })
    }
  }
}
</script>

<style>
.codecontent {
  height: 400px;
}
</style>
