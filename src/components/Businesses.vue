<template>
  <table class="businesses">
    <business v-for="business in businesses" v-bind:business="business"></business>
  </table>
</template>

<script>
import business from './businesses/Business'

export default {
  name: 'businesses',
  created ()  {
    //console.log(businesses)
  },
  props: ['businesses'],
  components: {
    business
  }
}
</script>
