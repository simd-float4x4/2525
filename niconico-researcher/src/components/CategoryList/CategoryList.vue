<template>
    <div class="category_list_area" @click="returnCategory">
        <SingleCategory
          v-model="category" 
          @clickedIdNumber="number"
        />
    </div>
</template>

<script>
import SingleCategory from './SingleCategory.vue'

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
        // 値の変化があるたび検索キーワードを保存
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
            this.categoryKeyword = 'Twitch';
            break;
          case 2:
            this.categoryKeyword = 'ふわっち';
            break;
          case 3:
            this.categoryKeyword = 'ツイキャス';
            break;
          case 4:
            this.categoryKeyword = 'YouTubeLive';
            break;
          case 5:
            this.categoryKeyword = 'オープンチャット';
            break;
          case 6:
            this.categoryKeyword = 'X/スペース';
            break;
          case 7:
            this.categoryKeyword = 'Instagram';
            break;
          case 8:
            this.categoryKeyword = 'TikTok';
            break;
          case 9:
            this.categoryKeyword = 'OpenRec';
            break;
          case 997:
            this.categoryKeyword = 'ALL';
            break;
          case 998:
            this.categoryKeyword = '配信中';
            break;
          case 999:
            this.categoryKeyword = 'その他';
            break;
          default:
            console.log('error');
          }
          console.log(this.categoryKeyword);
      }
    }
}
</script>

<style>
    .category_list_area {
        width: 390px;
        margin-bottom: 16px;
        display: flex;
        overflow: scroll;
    }
</style>