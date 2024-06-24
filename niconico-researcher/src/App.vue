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
  created() {
    for (let i = 1; i <= 8500; i++) {
      var r = Math.floor( Math.random() * 10 ) + 1;
      var random = Math.floor( Math.random() * 1000 ) + 100;
      var id  = Platform.Services.Twitch.serviceId;
      var name = Platform.Services.Twitch.label;

      if ( i % 15 == 0 ) {
        id = Platform.Services.Twitcasting.serviceId;
        name = Platform.Services.Twitcasting.label;
      } else if ( i % 12 == 0 ) {
        id = Platform.Services.Whowatch.serviceId;
        name = Platform.Services.Whowatch.label;
      } else if ( i % 9 == 0 ) {
        id = Platform.Services.LINEOpenChat.serviceId;
        name = Platform.Services.LINEOpenChat.label;
      } else if ( i % 7 == 0 ) {
        id = Platform.Services.YouTubeLive.
        name = Platform.Services.YouTubeLive.label;
      } else if ( i % 5 == 0 ) {
        id = Platform.Services.Twitter.serviceId;
        name = Platform.Services.Twitter.label;
      } else if ( i % 3 == 0 ) {
        id = Platform.Services.NowStreaming.serviceId;
        name = Platform.Services.NowStreaming.label;
      } else if ( i % 2 == 0 ) {
        id = Platform.Services.Instagram.serviceId;
        name = Platform.Services.Instagram.label;
      } 


      this.Cells.push(
            {
                userId: i,
                userHashTag: '#' + r + random,
                userMetaName: ['あ', 'い', '上', 'お', 'う'],
                userName: 'テスト' + i,
                platform: [
                    {
                        platformId: id,
                        platformName: name,
                        hasAccount: true,
                        isBroadCasting: false,
                        displayTextContent: '@nemuko',
                        accountUserName: 'test',
                        accountURL: 'https://www.twitch.tv/infinity_mkds',
                        accountIconImageURL: ''
                    }
                ]
            }
        );
      }
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
                        platformId: Platform.Services.Twitcasting.serviceId,
                        platformName: Platform.Services.Twitcasting.label,
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
            {
                userId: 4,
                userHashTag: '#9192',
                userMetaName: ['茂原', '茂原会', '大イム', 'ご主人'],
                userName: '大仏',
                platform: [
                    {
                        platformId: Platform.Services.Other.serviceId,
                        platformName: Platform.Services.Other.label,
                        hasAccount: true,
                        isBroadCasting: false,
                        displayTextContent: '(FC2)@aaaa',
                        accountUserName: '皐月　あーちゃん',
                        accountURL: 'https://www.twitch.tv/infinity_mkds',
                        accountIconImageURL: ''
                    }
                ]
            },
            {
                userId: 5,
                userHashTag: '#6789',
                userMetaName: [],
                userName: '皐月　りりあ（RAIVEN）',
                platform: [
                    {
                        platformId: Platform.Services.OpenREC.serviceId,
                        platformName: Platform.Services.OpenREC.label,
                        hasAccount: true,
                        isBroadCasting: false,
                        displayTextContent: '@2525coco',
                        accountUserName: 'へるぷ',
                        accountURL: 'https://www.twitch.tv/infinity_mkds',
                        accountIconImageURL: ''
                    }
                ]
            },
            {
                userId: 6,
                userHashTag: '#6790',
                userMetaName: [],
                userName: 'にゃぴさん',
                platform: [
                    {
                        platformId: Platform.Services.OpenREC.serviceId,
                        platformName: Platform.Services.OpenREC.label,
                        hasAccount: true,
                        isBroadCasting: true,
                        displayTextContent: '@2525coco',
                        accountUserName: 'にゃぴさん',
                        accountURL: 'https://www.twitch.tv/infinity_mkds',
                        accountIconImageURL: ''
                    },
                    {
                        platformId: Platform.Services.TikTok.serviceId,
                        platformName: Platform.Services.TikTok.label,
                        hasAccount: true,
                        isBroadCasting: false,
                        displayTextContent: '@2525coco',
                        accountUserName: 'にゃぴさん',
                        accountURL: 'https://www.twitch.tv/infinity_mkds',
                        accountIconImageURL: ''
                    },
                    {
                        platformId: Platform.Services.Instagram.serviceId,
                        platformName: Platform.Services.Instagram.label,
                        hasAccount: true,
                        isBroadCasting: false,
                        displayTextContent: '@2525coco',
                        accountUserName: 'にゃぴさん',
                        accountURL: 'https://www.twitch.tv/infinity_mkds',
                        accountIconImageURL: ''
                    },
                    {
                        platformId: Platform.Services.LINEOpenChat.serviceId,
                        platformName: Platform.Services.LINEOpenChat.label,
                        hasAccount: true,
                        isBroadCasting: true,
                        displayTextContent: '@2525coco',
                        accountUserName: 'にゃぴさん',
                        accountURL: 'https://www.twitch.tv/infinity_mkds',
                        accountIconImageURL: ''
                    },
                    {
                        platformId: Platform.Services.Twitter.serviceId,
                        platformName: Platform.Services.Twitter.label,
                        hasAccount: true,
                        isBroadCasting: true,
                        displayTextContent: '@2525coco',
                        accountUserName: 'にゃぴさん',
                        accountURL: 'https://www.twitch.tv/infinity_mkds',
                        accountIconImageURL: ''
                    }
                ]
            },
            {
                userId: 7,
                userHashTag: '#1290',
                userMetaName: ['茂原', 'ブサイク界隈', 'ブサイク軍団', '大仏'],
                userName: '大ちゃんマン',
                platform: [
                    {
                        platformId: Platform.Services.Twitcasting.serviceId,
                        platformName: Platform.Services.Twitcasting.label,
                        hasAccount: true,
                        isBroadCasting: true,
                        displayTextContent: '@2525coco',
                        accountUserName: '辛い',
                        accountURL: 'https://www.twitch.tv/infinity_mkds',
                        accountIconImageURL: ''
                    },
                    {
                        platformId: Platform.Services.Whowatch.serviceId,
                        platformName: Platform.Services.Whowatch.label,
                        hasAccount: true,
                        isBroadCasting: false,
                        displayTextContent: '@2525coco',
                        accountUserName: '辛い',
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
  background-color: black;
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
