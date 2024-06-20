<template>
  <div class="main_view">
    <NavigationBar />
    <CarouselArea />
    <SearchForm  @catchMessage="displayMessage" />
    <CategoryList />
    <div class="display_area">
       <Pagination 
        :FormURL="formURL"
        :Cells="Cells"
        :CellNumPerPage="20"
        :keyword="keyword"
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
import * as Platform from "/Users/asobu_dev/Desktop/Project/System/niconicoSearcher/niconico-researcher/src/js/enum.js"

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
          keyword: '',
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
                        platformName: Platform.Services.Twitch.text,
                        hasAccount: true,
                        isBroadCasting: false,
                        displayTextContent: '@220niconico',
                        accountUserName: 'いちまる',
                        accountURL: 'https://www.twitch.tv/infinity_mkds',
                        accountIconImageURL: ''
                    },
                    {
                        platformId: Platform.Services.Twitch.serviceId,
                        platformName: Platform.Services.Twitch.text,
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
                        platformName: Platform.Services.OpenREC.text,
                        hasAccount: true,
                        isBroadCasting: true,
                        displayTextContent: '@2525coco',
                        accountUserName: 'ここ',
                        accountURL: 'https://www.twitch.tv/infinity_mkds',
                        accountIconImageURL: 'niconico-researcher/src/assets/image/sample_user_01.jpeg'
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
                        platformName: Platform.Services.YouTubeLive.text,
                        hasAccount: true,
                        isBroadCasting: false,
                        displayTextContent: '@nemuko',
                        accountUserName: 'ねむこ＠へるぷ垢',
                        accountURL: 'https://www.twitch.tv/infinity_mkds',
                        accountIconImageURL: 'niconico-researcher/src/assets/image/sample_user_02.jpeg'
                    }
                ]
            },
          ],
      }
  },
  created() {
        // itemの作成
        for (let i = 1; i <= 8500; i++) {
            var r = Math.floor( Math.random() * 10 ) + 1;
            var random = Math.floor( Math.random() * 1000 ) + 100;
            var id  = Platform.Services.Twitch.serviceId;
            var name = Platform.Services.Twitch.text;

            if ( i % 15 == 0 ) {
              id = Platform.Services.Twitcasting.text;
              name = Platform.Services.Twitcasting.text;
            } else if ( i % 12 == 0 ) {
              id = Platform.Services.Whowatch.text;
              name = Platform.Services.Whowatch.text;
            } else if ( i % 9 == 0 ) {
              id = Platform.Services.LINEOpenChat.text;
              name = Platform.Services.LINEOpenChat.text;
            } else if ( i % 5 == 0 ) {
              id = Platform.Services.Twitter.text;
              name = Platform.Services.Twitter.text;
            } else if ( i % 3 == 0 ) {
              id = Platform.Services.NowStreaming.text;
              name = Platform.Services.NowStreaming.text;
            } else if ( i % 2 == 0 ) {
              id = Platform.Services.Instagram.text;
              name = Platform.Services.Instagram.text;
            } else {
              id = Platform.Services.YouTubeLive.text;
              name = Platform.Services.YouTubeLive.text;
            }

            this.Cells.push(
              {
                  userId: i,
                  userHashTag: '#' + r + random,
                  userMetaName: ['青', 'あお', '2'],
                  userName: 'dfghyjuikol',
                  platform: [
                      {
                          platformId: id,
                          platformName: name,
                          hasAccount: true,
                          isBroadCasting: false,
                          displayTextContent: '@nemuko',
                          accountUserName: 'aa',
                          accountURL: 'https://www.twitch.tv/infinity_mkds',
                          accountIconImageURL: ''
                      }
                  ]
              }
            );
        }
    },
    methods: {
      displayMessage(mes){
        this.keyword = mes;
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
