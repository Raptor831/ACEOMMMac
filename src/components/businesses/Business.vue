<template>
  <tr class="">
    <td>{{ business.Name }}</td>
    <td>{{ business.Author }}</td>
    <td>{{ business.Country }}</td>
    <td>{{ business.Region }}</td>
  </tr>
</template>

<script>
export default {
  name: 'Business',
  data () {
    return {
       buisiness: []
    }
  },
  props: ['business', 'type']
}
</script>
