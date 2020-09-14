<template>
  <div ref="toggle" class="toggle active" @click="changeTheme" />
</template>

<script>
export default {
  mounted () {
    if (localStorage.getItem('themeMode') === 'not-dark') {
      this.$refs.toggle.classList.toggle('active')
    }
  },
  methods: {
    changeTheme () {
      const html = document.getElementsByTagName('html')[0]
      this.$refs.toggle.classList.toggle('active')
      if (this.$refs.toggle.classList.contains('active')) {
        localStorage.setItem('themeMode', 'light-mode')
        html.className = 'light-mode'
        document.getElementsByClassName('prism-editor__line-numbers')[0]
          .style.setProperty('background-color', '#2d2d2d')
      } else {
        localStorage.setItem('themeMode', 'not-dark')
        html.className = 'not-dark'
        document.getElementsByClassName('prism-editor__line-numbers')[0]
          .style.removeProperty('background-color')
      }
    }
  }
}
</script>

<style scoped>
.toggle {
  position: absolute;
  top: 6px;
  left: 220px;
  background: #ededed;
  border: 2px solid #2b2626;
  width: 48px;
  height: 25px;
  cursor: pointer;
  border-radius: 22px;
  transition: 0.5s;
}
.toggle.active {
  background: #2b2626;
  border: 2px solid #ededed;
}
.toggle:before {
  content: url('~assets/sun-solid.svg');
  position: absolute;
  top: 4px;
  left: 2px;
  width: 16px;
  height: 16px;
  transition: 0.5s;
}
.toggle.active:before {
  content: url('~assets/moon-solid.svg');;
  left: 27px;
}
</style>
