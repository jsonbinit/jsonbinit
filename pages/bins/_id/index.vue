<template>
  <div class="container">
    <div class="header-area">
      <bin-header />
      <div class="actions-bar">
        <nuxt-link to="/" class="action">
          New
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
    <div class="main-area">
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
    this.$apiservice
      .getJSON(id)
      .then((response) => {
        this.code = JSON.stringify(response.data.json, null, 2)
        console.log(this.code)
        this.apiaccess = this.$apiservice.composeJSONBinUrl(id)
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
      })
  },
  methods: {
    clipboardSuccessHandler ({ value, event }) {
      this.$toast.show('Copied to clipboard!')
    },
    clipboardErrorHandler ({ value, event }) {
      this.$toast.show('oops! something gone wrong!')
    }
  }
}
</script>
