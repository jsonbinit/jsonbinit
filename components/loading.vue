<template lang="html">
  <transition name="fade">
    <div v-if="loading" class="loading-page">
      <p><font-awesome-icon :icon="['fas', 'spinner']" pulse /></p>
    </div>
  </transition>
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
