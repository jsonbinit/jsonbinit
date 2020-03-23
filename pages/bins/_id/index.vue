<template>
  <div class="container">
    <div>
      <h1 class="title">
        JSON {🗑} IT!
      </h1>
      <p class="apipar">
        API Access: {{ apiaccess }}
      </p>
      <client-only>
        <prism-editor class="codecontent" :code="code" language="js" :line-numbers="true" :readonly="true" />
      </client-only>
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
      code: 'Loading bin...',
      apiaccess: 'test'
    }
  },
  mounted () {
    const id = this.$route.params.id
    this.apiaccess = this.$apiservice.composeJSONBinUrl(id)
    this.$apiservice.getJSON(id).then((response) => {
      this.code = JSON.stringify(response.data, null, 2)
    }).catch((error) => {
      this.apiaccess = '-'
      let resultJSON = {}
      if (error.response.status === 404) {
        resultJSON = `JSON '${id}' not found`
      } else {
        resultJSON = `Server error for JSON '${id}'`
      }
      this.code = JSON.stringify({
        result: resultJSON
      }, null, 2)
    })
  }
}
</script>

<style>
.codecontent {
  height: 300px;
  width: 100%;
}
</style>
