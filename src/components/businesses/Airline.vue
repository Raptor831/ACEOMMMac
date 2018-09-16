<template>
  <tr v-for="airline in airlines.Businesses[0].Airlines[0]"></tr>
</template>

<script>
export default {
  name: Airline,
  data () {
    return {
       airlines: []
    }
  }
}
</script>
