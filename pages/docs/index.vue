<template>
  <div class="container">
    <div class="container__main">
      <div class="header-area">
        <bin-header :hidegithub="true" />
      </div>
      <div class="jumbo">
        <h1>API Documentation</h1>
      </div>
      <div class="content">
        <h1>Store a JSON</h1>
        <h2>POST </h2>
        <em>https://api.jsonbin.it/bins/</em>
        <hr>
        <br>
        <p>Store a JSON calling this API. The JSON you want to store must be the body of the request.</p>
        <client-only>
          <prism-editor
            class="codecontent"
            :code="retrieveRespCode"
            language="js"
            :line-numbers="false"
            :readonly="true"
          />
        </client-only>
        <h3>Response example</h3>
        <client-only>
          <prism-editor
            class="codecontent"
            :code="storeRespCode"
            language="js"
            :line-numbers="false"
            :readonly="true"
          />
        </client-only>
      </div>
      <div class="content">
        <h1>Retrieve a JSON</h1>
        <h2>GET </h2>
        <em>https://api.jsonbin.it/bins/:binid</em>
        <hr>
        <br>
        <p>Retrieve a generated JSON calling this API. You'll receive the requested JSON in the response.</p>
        <h3>Response example</h3>
        <client-only>
          <prism-editor
            class="codecontent"
            :code="retrieveRespCode"
            language="js"
            :line-numbers="false"
            :readonly="true"
          />
        </client-only>
      </div>
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
      storeRespCode: '{ "bin" : "l088fgWQ" }',
      retrieveRespCode: '{\n  "value" : 2000 \n}'
    }
  }
}
</script>
