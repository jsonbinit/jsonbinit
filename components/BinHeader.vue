<template>
  <header>
    <nuxt-link to="/">
      <h1 class="title">
        JSON{🗑}IT! <span class="version-claim">&nbsp;BETA&nbsp;</span>
      </h1>
    </nuxt-link>
    <theme-switcher />
    <github-corner v-if="!hidegithub" repo-url="https://github.com/jsonbinit" color="#FFF" fill-color="#008cff" />
  </header>
</template>

<script>
import GithubCorner from '~/components/GithubCorner'
import ThemeSwitcher from '~/components/ThemeSwitcher'

export default {
  components: {
    GithubCorner,
    ThemeSwitcher
  },
  props: {
    hidegithub: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.version-claim {
    background-color: yellow;
    color:black;
    font-size: 0.8rem;
}
</style>
