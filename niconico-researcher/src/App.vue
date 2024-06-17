<template>
  <div class="display_container">
    <CastCell userName="無限" userAccountId="@infinity_mkds"/>
    <CastCell userName="無限" userAccountId="@infinity_mkds"/>
  </div>
</template>

<script>
import CastCell from './components/CastCell.vue'

export default {
  name: 'App',
  components: {
    CastCell
  }
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.display_container {
  background-color: #F7F7F7;
  width: 390px;
  height: 2000px;
  margin: 0 auto;
}
</style>
