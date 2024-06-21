<template>
    <div class="category_list_area">
        <SingleCategory @clickedIdNumber="number" />
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
            categoryKeyword: null
        }
    },
    
    methods: {
      number(index) {
        this.categoryKeyword = index;
        console.log('ここに数字が出たら成功', this.categoryKeyword);
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