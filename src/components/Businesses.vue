<template>
  <div class="businesses">
    <div v-for="business in businesses">{{ business.Airline[0]['$'].Name }}</div>
  </div>
</template>

<script>
export default {
  name: 'businesses',
  created ()  {
    //console.log(businesses)
  },
  props: ['businesses']
}
</script>
