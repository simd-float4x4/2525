<template>
  <div class="main_view">
    <NavigationBar />
    <CarouselArea />
    <SearchForm />
    <CategoryList />
    <div class="display_area">
       <CastCell userName="無限" userAccountId="@infinity_mkds"/>
       <CastCell userName="無限" userAccountId="@infinity_mkds"/>
       <CastCell userName="無限" userAccountId="@infinity_mkds"/>
       <CastCell userName="無限" userAccountId="@infinity_mkds"/>
       <CastCell userName="無限" userAccountId="@infinity_mkds"/>
       <CastCell userName="無限" userAccountId="@infinity_mkds"/>
    </div>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import CarouselArea from './components/CarouselArea.vue'
import CastCell from './components/CastCell.vue'
import SearchForm from './components/SearchForm.vue'
import CategoryList from './components/CategoryList/CategoryList.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    CarouselArea,
    SearchForm,
    CategoryList,
    CastCell
  }
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
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

</style>
