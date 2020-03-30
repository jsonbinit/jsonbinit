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
          @change="enableButton"
        />
      </client-only>
      <div class="links">
        <button :disabled="!buttonEnabled" @click="pushJson" target="_blank" class="button--grey">Save ➡ 🗑</button>
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
      linenumbers: true,
      buttonEnabled: false
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
    enableButton (event) {
      if (this.validateJson(event)) {
        this.buttonEnabled = true
      } else {
        this.buttonEnabled = false
      }
    },
    pushJson () {
      this.$apiservice.postJSON(this.code).then((response) => {
        const id = response.data.uri
        const path = `/bins/${id.substring(id.lastIndexOf('/') + 1)}`
        this.$router.push(path)
      }).catch((error) => {
        alert(error)
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
