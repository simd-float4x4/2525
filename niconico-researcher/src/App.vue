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
          Cells: [
            {
                userId: 1,
                userHashTag: '#3322',
                userMetaName: ['かつき', 'ににまる', 'まんちょ'],
                userName: '岩崎かつき',
                platform: [
                    {
                        platformName: Platform.Services.Twitch.text,
                        hasAccount: true,
                        isBroadCasting: false,
                        displayTextContent: '@220niconico',
                        accountUserName: 'ににまる',
                        accountURL: '',
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
                        platformName: Platform.Services.Twitch.text,
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
                        platformName: Platform.Services.Twitch.text,
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
        for (let i = 1; i <= 250; i++) {
            this.Cells.push(
              {
                  userId: i,
                  userHashTag: '#0' + i,
                  userMetaName: ['ねむこ'],
                  userName: i,
                  platform: [
                      {
                          platformName: Platform.Services.Twitch.text,
                          hasAccount: true,
                          isBroadCasting: false,
                          displayTextContent: '@nemuko',
                          accountUserName: i,
                          accountURL: 'https://www.twitch.tv/infinity_mkds',
                          accountIconImageURL: 'niconico-researcher/src/assets/image/sample_user_03.jpeg'
                      }
                  ]
              }
            );
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

.page-btn {
    margin: 0 8px;
    button {
        width: 32px;
        height: 32px;
        border: none;
        outline: none;
        background-color: #f6f6f6;
        box-shadow: 0 2px 4px rgba($color: #000000, $alpha: 0.15);
        cursor: pointer;
        transition: 0.1s;

        &:hover {
            background-color: #f2f2f2;
            box-shadow: 0 2px 4px rgba($color: #000000, $alpha: 0.25);
        }
    }

    .active {
        color: #fff;
        background-color: #bfbfbf;
    }
}

</style>
