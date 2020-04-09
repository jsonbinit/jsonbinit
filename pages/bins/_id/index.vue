<template>
  <div class="container">
    <div class="header-area">
      <bin-header />
      <div class="actions-bar">
        <nuxt-link to="/" class="action">
          <font-awesome-icon :icon="['fa', 'plus']" /> New
        </nuxt-link>

        <div class="clipboard">
          <a
            v-clipboard="() => apiaccess"
            v-clipboard:success="clipboardSuccessHandler"
            v-clipboard:error="clipboardErrorHandler"
          >
            <font-awesome-icon :icon="['fa', 'clone']" />
          </a>
          {{ apiaccess }}
        </div>
      </div>
    </div>
    <div class="main-area code-area">
      <client-only>
        <prism-editor
          class="codecontent"
          :code="code"
          language="js"
          :line-numbers="true"
          :readonly="true"
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
      code: 'Loading bin...',
      apiaccess: '-'
    }
  },
  mounted () {
    const id = this.$route.params.id
    this.callApi(id)
  },
  methods: {
    callApi (id) {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
      })
      this.$apiservice
        .getJSON(id)
        .then((response) => {
          this.code = JSON.stringify(response.data, null, 2)

          this.apiaccess = this.$apiservice.composeJSONBinUrl(id)
          this.$nuxt.$loading.finish()
        })
        .catch((error) => {
          let resultJSON = {}
          if (error.response.status === 404) {
            resultJSON = `JSON '${id}' not found`
          } else {
            resultJSON = `Server error for JSON '${id}'`
          }
          this.code = JSON.stringify(
            {
              result: resultJSON
            },
            null,
            2
          )
          this.$nuxt.$loading.finish()
        })
    },
    clipboardSuccessHandler ({ value, event }) {
      this.$toast.show('Copied to clipboard!', {
        icon: (el) => {
          return this.$getSvgIcons(el, 'fas', 'check')
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
    },
    clipboardErrorHandler ({ value, event }) {
      this.$toast.show('Copied to clipboard!', {
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
    }
  }
}
</script>
<style lang="scss" scoped>
.codecontent{
  position:absolute;
}
</style>
