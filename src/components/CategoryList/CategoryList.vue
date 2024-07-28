<template>
    <div class="category_list_area" @click="returnCategory">
        <SingleCategory
          v-model="category" 
          @clickedIdNumber="number"
        />
    </div>
</template>

<script>
import * as Platform from '../../js/enum.js';
import SingleCategory from './SingleCategory.vue';

export default {
    name: 'CategoryList',
    components: {
      SingleCategory
    },
    data() {
        return{
            categoryKeyword: null,
            category: ''
        }
    },
    watch: {
      category: function() {
        this.$emit('category', this.category);
      }
    },
    methods: {
      number(index) {
        this.categoryKeyword = index;
      },
      returnCategory(){
          switch(this.categoryKeyword){
          case 1:
            this.category = Platform.Services.Twitch.label;
            break;
          case 2:
            this.category = Platform.Services.Whowatch.label;
            break;
          case 3:
            this.category = Platform.Services.Twitcasting.label;
            break;
          case 4:
            this.category = Platform.Services.YouTubeLive.label;
            break;
          case 5:
            this.category = Platform.Services.LINEOpenChat.label;
            break;
          case 6:
            this.category = Platform.Services.Twitter.label;
            break;
          case 7:
            this.category = Platform.Services.Instagram.label;
            break;
          case 8:
            this.category = Platform.Services.TikTok.label;
            break;
          case 9:
            this.category = Platform.Services.OpenREC.label;
            break;
          case 997:
            this.category = Platform.Services.All.label;
            break;
          case 998:
            this.category = Platform.Services.NowStreaming.label;
            break;
          case 999:
            this.category = Platform.Services.Other.label;
            break;
          default:
            console.log('error');
          }
      }
    }
}
</script>

<style>
    .category_list_area {
        width: 100%;
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        margin-bottom: 16px;
    }
</style>