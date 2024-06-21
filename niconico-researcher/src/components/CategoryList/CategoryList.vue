<template>
    <div class="category_list_area">
        <SingleCategory
        v-model="category" 
        @clickedIdNumber="number"
        @click="returnCategory"/>
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
        this.category = 'Whowatch';
        console.log('カテゴリ: ', this.category);
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