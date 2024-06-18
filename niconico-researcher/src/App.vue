<template>
  <div class="main_view">
    <NavigationBar />
    <CarouselArea />
    <SearchForm />
    <CategoryList />
    <div class="display_area">
       <Pagination 
        :Cells="Cells"
        :CellNumPerPage="20"
        />
    </div>
    <FooterView />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import CarouselArea from './components/CarouselArea.vue'
import CastCell from './components/CastCell.vue'
import SearchForm from './components/SearchForm.vue'
import CategoryList from './components/CategoryList/CategoryList.vue'
import Pagination from './components/Pagination/Pagination.vue'
import FooterView from './components/FooterView.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    CarouselArea,
    SearchForm,
    CategoryList,
    CastCell,
    Pagination,
    FooterView
  },
  data() {
      return {
          Cells: [
            'ぞっくん',
            'ねむこ',
            '横山緑（暗黒放送）',
          ],
      }
  }
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
  background-color: #252525;
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
  height: auto;
  margin: 0 auto;
  padding-bottom: 270px;
  position: relative;
}

</style>
