<template>
  <div class="container">
    <div class="header-area">
      <bin-header />
      <div class="actions-bar">
        <button
          :disabled="!buttonEnabled"
          target="_blank"
          class="action"
          @click="pushJson"
        >
          Save
        </button>
        <div class="clipboard">
          Service to store JSON on the fly!
          <nuxt-link to="/docs">
            Read the Docs
          </nuxt-link>for more info
        </div>
      </div>
    </div>
    <div class="main-area">
      <client-only>
        <prism-editor
          v-model="code"
          class="codecontent"
          language="js"
          :line-numbers="true"
          @change="enableButton"
        />
      </client-only>
    </div>
    <bin-footer />
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
      this.$apiservice
        .postJSON(JSON.parse(this.code))
        .then((response) => {
          console.log(response)
          const id = response.data.bin
          const path = `/bins/${id}`

          this.$router.push(path)
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
}
</script>
