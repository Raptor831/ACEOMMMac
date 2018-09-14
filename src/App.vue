<template>
  <h2>Hello from {{text}}</h2>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
       message: '',
       text: ''
    }
  },
  created () {
    this.refreshMessage()
  },
  methods: {
    refreshMessage() {
      this.$http.get('./message.json').then( response => {
        this.text = response.data.fizz;
        this.message = response.data;
        //console.log(this.message);
      });
    }
  }
}
</script>

<style lang="scss" scoped>h2 { color: deeppink; }</style>
