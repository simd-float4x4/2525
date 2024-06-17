<template>
  <div class="main_view">
    <div class="navigation_bar">
      <span class="app_title">Insert App Title Here</span>
    </div>
    <div class="display_area">
       <CastCell userName="無限" userAccountId="@infinity_mkds"/>
    </div>
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

.main_view {
  background-color: #F7F7F7;
  width: 390px;
  height: 2000px;
  margin: 0 auto;
}

.navigation_bar {
  position: relative;
  background-color: #252525;
  width: 100%;
  height: 56px;
  margin-bottom: 16px;
  box-shadow: 0px 0px 10px -10px rgba(0, 0, 0, 0.34);
}

.app_title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: #F7F7F7;
}

</style>
