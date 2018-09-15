<script>
import xml2js from 'xml2js'
import fs from 'fs';

export default {
  name: 'app',
  data () {
    return {
       message: '',
       text: '',
       data: '',
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
          this.data = result;
          this.text = result.Data.Businesses[0].Airlines[0].Airline[0]['$'].Name
          console.log('Done');
        });
      });
    }
  }
}
</script>

<style lang="scss" scoped>h2 { color: deeppink; }</style>
