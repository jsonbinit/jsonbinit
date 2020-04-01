<template>
  <header>
    <nuxt-link to="/">
      <h1 class="title">
        JSON{🗑}IT!
      </h1>
    </nuxt-link>
    <h2 class="subtitle">
      <slot></slot>
    </h2>
    <github-corner repo-url="https://github.com/jsonbinit" color="#1c1e20"/>
  </header>
</template>

<script>
import GithubCorner from '~/components/GithubCorner'

export default {
  components: {
    GithubCorner
  }
}
</script>
