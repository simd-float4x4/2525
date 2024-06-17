<template>
    <div class="category_list_area">
        <SingleCategory />
    </div>
</template>

<script>
import SingleCategory from './SingleCategory.vue'

export default {
  name: 'CategoryList',
  components: {
    SingleCategory
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