<template>
  <h2>Hello from {{text}}</h2>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
       text: ''
    }
  }
}
</script>

<style lang="scss" scoped>h2 { color: red; }</style>
