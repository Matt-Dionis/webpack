<template>
  <div class="hello">
    <h1>\{{ msg }}</h1>
    <h2>Current Weather in San Francisco:</h2>
    <h4>{{weather.weather.summary}}</h4>
    <h3>{{weather.weather.temperature}}</h3>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">VueJS Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">VueJS Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">VueJS Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">VueJS Twitter</a></li>
      <br>
      <li><a href="http://graphql.org/"></a>GraphQL.org</li>
      <li><a href="https://www.apollographql.com/client"></a>Apollo GraphQL</li>
      <li><a href="https://twitter.com/apollographql"></a>Apollo GraphQL Twitter</li>
      <br>
      <li><a href="https://github.com/Matt-Dionis/webpack-apollo-graphql" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">apollo-client 2.0</a></li>
    </ul>
  </div>
</template>

<script>
import WEATHER_QUERY from '../graphql/WeatherQuery.gql'

export default {
  name: 'HelloGraphQL',
  data () {
    return {
      msg: 'Welcome to Your Vue.js & Apollo GraphQL App',
      weather: {}
    }
  },
  apollo: {
    weather: {
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
