<template>
  <font-awesome-icon class="themer" :icon="['fa', 'sun']" @click="changeTheme" />
</template>

<script>
export default {
  methods: {
    changeTheme () {
      const html = document.getElementsByTagName('html')[0]
      if (html.className === 'light-mode') {
        html.className = 'not-dark'
      } else {
        html.className = 'light-mode'
      }
    }
  }
}
</script>

<style>
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
