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
          <font-awesome-icon class="themer" :icon="['fa', 'sun']" @click="changeTheme" />
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
  methods: {
    isAValidJSON (jsonStr) {
      try {
        return (typeof JSON.parse(jsonStr) === 'object')
      } catch (e) {
        return false
      }
    },
    changeTheme () {
      const head = document.getElementsByTagName('html')[0]
      if (head.className === 'light-mode') {
        head.className = 'not-dark'
      } else {
        head.className = 'light-mode'
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
.themer {
  position: relative;
  top: 0px;
  cursor: pointer;
  padding: 7px;
  color: #ededed;
  border: 2px solid;
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
}
.themer:hover {
  top: -3px;
}
</style>
