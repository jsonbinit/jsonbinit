<template>
  <header>
    <nuxt-link to="/">
      <h1 class="title">
        JSON{🗑}IT!
      </h1>
    </nuxt-link>
    <github-corner v-if="!hidegithub" repo-url="https://github.com/jsonbinit" color="#FFF" fill-color="#008cff" />
  </header>
</template>

<script>
import GithubCorner from '~/components/GithubCorner'

export default {
  props: {
    hidegithub: {
      type: Boolean,
      default: false
    }
  },
  components: {
    GithubCorner
  }
}
</script>
