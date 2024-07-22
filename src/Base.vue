<template>
    <CarouselArea 
      :carouselData = "carouselData"
    />
    <NotionView 
      :firstNoticeTitle = "firstNoticeTitle"
      :firstNoticeDate = "firstNoticeDate"
      :noticesData = "noticesData"
    />
    <TitleView 
      :categoryKeyword = "categoryKeyword"
      :categoryTitle = "titleSentence"
      :categoryNotice = "titleNotice"
      :categoryColor = "titleColor"
    />
    <SearchForm  @catchMessage="displayMessage" />
    <CategoryList @Category="categorySearch"/>
    <div class="display_area">
       <Pagination 
        :FormURL="formURL"
        :Cells="Cells"
        :CellNumPerPage="20"
        :keyword="keyword"
        :categoryKeyword="categoryKeyword"
        />
    </div>
</template>

<script>
import CarouselArea from './components/CarouselArea.vue'
import SearchForm from './components/SearchForm.vue'
import CategoryList from './components/CategoryList/CategoryList.vue'
import Pagination from './components/Pagination/PaginationCell.vue'
import TitleView from './components/TitleView.vue'
import NotionView from './components/NotionView.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    CarouselArea,
    SearchForm,
    NotionView,
    CategoryList,
    TitleView,
    Pagination,
  },
  data() {
      return {
          keyword: '',
          categoryKeyword: 'ALL',
          titleNotice: '',
          titleSentence: '全ユーザーからランダムで表示します',
          titleColor: '',
          formURL: process.env.VUE_APP_FORM_URL_MODIFY,
          Cells: [],
          carouselData: [],
          platformData: [],
          noticesData: [],
          firstNoticeDate: '',
          firstNoticeTitle: ''
      }
  },
   methods: {
    fetchData() {
            axios.get(`${process.env.VUE_APP_NOTICE_FIRST_URL}`)
                .then(response => {
                    const data = response.data;
                    if (data) {
                        this.getFirstNoticeTitle(data.noticeTitle);
                        this.getFirstNoticeDate(data.noticeDate);
                    }
                })
                .catch(error => {
                    console.error('Failed Fetch NoticesData:', error);
                });
            axios.get(`${process.env.VUE_APP_BANNER_URL}`)
                .then(response => {
                    this.carouselData.push(...response.data);
                })
                .catch(error => {
                    console.error('Failed Fetch CarouselData:', error);
                });
            axios.get(`${process.env.VUE_APP_USER_URL}`)
                .then(response => {
                    this.Cells.push(...response.data);
                })
                .catch(error => {
                    console.error('Failed Fetch Cells:', error);
                });
            axios.get(`${process.env.VUE_APP_PLATFORM_URL}`)
                .then(response => {
                    this.platformData.push(...response.data);
                })
                .catch(error => {
                    console.error('Failed Fetch PlatformData:', error);
                });
    },
    displayMessage(mes){
      this.keyword = mes;
    },
    categorySearch(query) {
      this.categoryKeyword = query;
      const data = this.platformData.find(item => item.platformName === query);
      if(data) {
        this.getTitleNotice(data.platformTitleNotice);
        this.getTitleSentence(data.platformTitleSentence);
        this.getTitleColorCode(data.platformBrandColor);
      }
    },
    getTitleNotice(word) {
      this.titleNotice = word;
    },
    getTitleSentence(word) {
      this.titleSentence = word;
    },
    getTitleColorCode(word) {
      this.titleColor = word;
    },
    getFirstNoticeTitle(data) {
      this.firstNoticeTitle = data;
    },
    getFirstNoticeDate(data) {
      this.firstNoticeDate = data;
    },
  },
  created() {
    this.fetchData();
  },
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
  height: auto;
}
</style>
