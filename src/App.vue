<template>
  <div id="main">
    <div class="filters">
      <select v-model="regionFilter">
        <option>All</option>
        <option>Africa</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>North America</option>
        <option>South America</option>
        <option>Oceania</option>
      </select>
    </div>
    <businesses v-bind:regionFilter="regionFilter" v-bind:businesses="airlines"></businesses>
  </div>
</template>

<script>
import xml2json from 'xml2json'
import fs from 'fs';
import businesses from './components/Businesses'

export default {
  name: 'app',
  data () {
    return {
      data: '',
      businesses: '',
      airlines: '',
      regionFilter: 'Africa'
    }
  },
  
  created () {
    this.refreshData()
  },
  methods: {
    refreshData() {
      let parser = xml2json
      fs.readFile(__dirname + '/../data/Datastore.xml', (err, data) => {
        let result = parser.toJson(data, {object: true})
        this.data = result.Data
        this.businesses = result.Data.Businesses
        this.airlines = this.data.Businesses.Airlines.Airline
        console.log(this.data);
      });
    },
  },
  components: {
    businesses
  }
}
</script>

<style lang="scss" scoped>#main { color: deeppink; }</style>
