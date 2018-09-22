<template>
  <table class="businesses">
    <business v-for="business in filterAirlines(businesses)" v-bind:business="business"></business>
  </table>
</template>

<script>
import business from './businesses/Business'

export default {
  name: 'businesses',
  created ()  {
    //console.log(businesses)
  },
  methods: {
    filterAirlines(airlines) {
      console.log(airlines)
      return airlines.filter( (airline) => {
        if ( this.regionFilter !== 'All' ) {
          return airline.Region === this.regionFilter
        } else {
          return true;
        }
      })
    }
  },
  props: ['businesses', 'regionFilter'],
  components: {
    business
  }
}
</script>
