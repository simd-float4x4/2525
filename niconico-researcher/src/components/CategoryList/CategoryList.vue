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
            this.category = 'Twitch';
            break;
          case 2:
            this.category = 'ふわっち';
            break;
          case 3:
            this.category = 'ツイキャス';
            break;
          case 4:
            this.category = 'YouTubeLive';
            break;
          case 5:
            this.category = 'オープンチャット';
            break;
          case 6:
            this.category = 'X/スペース';
            break;
          case 7:
            this.category = 'Instagram';
            break;
          case 8:
            this.category = 'TikTok';
            break;
          case 9:
            this.category = 'OpenRec';
            break;
          case 997:
            this.category = 'ALL';
            break;
          case 998:
            this.category = '配信中';
            break;
          case 999:
            this.category = 'その他';
            break;
          default:
            console.log('error');
          }
          console.log(this.category);
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