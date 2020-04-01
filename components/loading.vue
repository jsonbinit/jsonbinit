<template lang="html">
  <div class="loading-page" v-if="loading">
    <p><font-awesome-icon :icon="['fas', 'spinner']" pulse /></p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>
