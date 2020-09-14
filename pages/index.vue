<template>
  <div class="container">
    <div class="header-area">
      <bin-header />
      <div class="actions-bar">
        <button :disabled="!buttonEnabled" target="_blank" class="action" @click="pushJson">
          <font-awesome-icon :icon="['fa', 'save']" /> Save
        </button>
        <div class="clipboard">
          Service to store JSON on the fly!
          <nuxt-link to="/docs">
            Read the Docs
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="main-area code-area">
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
  mounted () {
    document.getElementsByTagName('html')[0].className = localStorage.getItem('themeMode')
  },
  methods: {
    isAValidJSON (jsonStr) {
      try {
        return (typeof JSON.parse(jsonStr) === 'object')
      } catch (e) {
        return false
      }
    },
    enableButton (event) {
      if (this.isAValidJSON(event)) {
        this.buttonEnabled = true
      } else {
        this.buttonEnabled = false
      }
    },
    pushJson () {
      this.$nuxt.$loading.start()
      this.$apiservice
        .postJSON(JSON.parse(this.code))
        .then((response) => {
          const id = response.data.bin
          const path = `/bins/${id}`
          this.$nuxt.$loading.finish()
          this.$router.push(path)
        })
        .catch((error) => {
          /* istanbul ignore next */
          this.$toast.show(error, {
            icon: (el) => {
              return this.$getSvgIcons(el, 'fas', 'exclamation-triangle')
            },
            action: [
              {
                text: 'Cancel',
                onClick: (e, toastObject) => {
                  toastObject.goAway(0)
                }
              }
            ]
          })
          this.$nuxt.$loading.finish()
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.codecontent{
  position:absolute;
}
</style>
