<template>
  <div class="main_view">
    <NavigationBar />
    <div class="carousel_area">

    </div>
    <div class="display_area">
       <CastCell userName="無限" userAccountId="@infinity_mkds"/>
    </div>
  </div>
</template>

<script>
import CastCell from './components/CastCell.vue'
import NavigationBar from './components/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
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

.main_view {
  background-color: #F7F7F7;
  width: 390px;
  height: 2000px;
  margin: 0 auto;
}

.carousel_area {
  background-color: darkgray;
  width: 390px;
  height: 195px;
  margin-bottom: 16px;
}



</style>
