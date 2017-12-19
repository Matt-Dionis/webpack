<template>
  <div id="app">
    {{#router}}
    <router-view/>
    {{else}}
    <HelloGraphQL/>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import HelloGraphQL from './components/HelloGraphQL'

{{/unless}}
export default {
  name: 'app'{{#router}}{{else}},
  components: {
    HelloGraphQL
  }{{/router}}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
