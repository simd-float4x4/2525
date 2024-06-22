<template>
  <div class="main_view">
    <NavigationBar />
    <CarouselArea />
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
    <FooterView />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import CarouselArea from './components/CarouselArea.vue'
import SearchForm from './components/SearchForm.vue'
import CategoryList from './components/CategoryList/CategoryList.vue'
import Pagination from './components/Pagination/PaginationCell.vue'
import FooterView from './components/FooterView.vue'
import * as Platform from "/Users/asobu_dev/Desktop/Project/System/niconicoSearcher/niconico-researcher/src/js/enum.js"

export default {
  name: 'App',
  components: {
    NavigationBar,
    CarouselArea,
    SearchForm,
    CategoryList,
    Pagination,
    FooterView
  },
  data() {
      return {
          keyword: '',
          categoryKeyword: '',
          formURL: 'https://www.yahoo.co.jp/',
          Cells: [
            {
                userId: 1,
                userHashTag: '#3322',
                userMetaName: ['かつき', 'ににまる', 'まんちょ'],
                userName: 'かつき',
                platform: [
                    {
                        platformId: Platform.Services.Twitch.serviceId,
                        platformName: Platform.Services.Twitch.label,
                        hasAccount: true,
                        isBroadCasting: false,
                        displayTextContent: '@220niconico',
                        accountUserName: 'いちまる',
                        accountURL: 'https://www.twitch.tv/infinity_mkds',
                        accountIconImageURL: ''
                    },
                    {
                        platformId: Platform.Services.Twitch.serviceId,
                        platformName: Platform.Services.Twitch.label,
                        hasAccount: true,
                        isBroadCasting: false,
                        displayTextContent: '@220niconico',
                        accountUserName: 'ににまる',
                        accountURL: 'https://www.twitch.tv/infinity_mkds',
                        accountIconImageURL: ''
                    }
                ]
            },
            {
                userId: 2,
                userHashTag: '#8729',
                userMetaName: ['笑原心恋', '心恋', 'ここ'],
                userName: '心恋(ここ)',
                platform: [
                    {
                        platformId: Platform.Services.OpenREC.serviceId,
                        platformName: Platform.Services.OpenREC.label,
                        hasAccount: true,
                        isBroadCasting: true,
                        displayTextContent: '@2525coco',
                        accountUserName: 'ここ',
                        accountURL: 'https://www.twitch.tv/infinity_mkds',
                        accountIconImageURL: ''
                    }
                ]
            },
            {
                userId: 3,
                userHashTag: '#2891',
                userMetaName: ['ねむこ'],
                userName: 'ねむこ',
                platform: [
                    {
                        platformId: Platform.Services.YouTubeLive.serviceId,
                        platformName: Platform.Services.YouTubeLive.label,
                        hasAccount: true,
                        isBroadCasting: false,
                        displayTextContent: '@nemuko',
                        accountUserName: 'ねむこ＠へるぷ垢',
                        accountURL: 'https://www.twitch.tv/infinity_mkds',
                        accountIconImageURL: ''
                    }
                ]
            },
          ],
      }
  },

    methods: {
      displayMessage(mes){
        this.keyword = mes;
      },
      categorySearch(query) {
        this.categoryKeyword = query;
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
