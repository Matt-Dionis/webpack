<template>
  <div class="hello">
    <h1>\{{ msg }}</h1>
    <h2>Current Weather in San Francisco:</h2>
    <h4>\{{ location.weather.summary }}</h4>
    <h3>\{{ location.weather.temperature }}</h3>
    <h2>Links</h2>
    <ul>
      <li><a href="https://www.apollographql.com/client">Apollo GraphQL</a></li>
      <li><a href="https://twitter.com/apollographql">Apollo GraphQL Twitter</a></li>
      <li><a href="https://twitter.com/mattdionis">Matt Dionis Twitter (template creator)</a></li>
      <br>
      <li><a href="https://github.com/Matt-Dionis/webpack-apollo-graphql" target="_blank">Docs for This Template</a></li>
    </ul>
  </div>
</template>

<script>
import WEATHER_QUERY from '../graphql/WeatherQuery.gql'

export default {
  name: 'HelloGraphQL',
  data () {
    return {
      msg: 'Welcome to Your VueJS + Apollo GraphQL App',
      location: {
        weather: {}
      }
    }
  },
  apollo: {
    location: {
      query: WEATHER_QUERY,
      variables: {
        place: 'Golden Gate Bridge'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
