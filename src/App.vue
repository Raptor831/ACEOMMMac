<template>
  <div id="main">
    {{ text }}
    <businesses v-bind:businesses="airlines"></businesses>
  </div>
</template>

<script>
import xml2js from 'xml2js'
import fs from 'fs';
import businesses from './components/Businesses'

export default {
  name: 'app',
  data () {
    return {
       message: '',
       text: '',
       data: '',
       airlines: []
    }
  },
  created () {
    this.refreshMessage()
  },
  methods: {
    refreshMessage() {
      let parseString = xml2js.parseString
      fs.readFile(__dirname + '/../data/Datastore.xml', (err, data) => {
        xml2js.parseString(data, (err, result) => {
          this.data = result.Data;
          this.airlines = result.Data.Businesses[0].Airlines[0].Airline
          console.log(this.airlines)
          //this.text = result.Data.Businesses[0].Airlines[0].Airline[0]['$'].Name
          console.dir(result.Data)
          console.log('Done');
        });
      });
    }
  },
  components: {
    businesses
  }
}
</script>

<style lang="scss" scoped>h2 { color: deeppink; }</style>
