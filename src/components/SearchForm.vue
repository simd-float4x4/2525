<template>
    <div class="search_form_view" contenteditable="true">
        <div class="search_form_input_area">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input v-model="keyword" placeholder="検索したい配信者の名前を入力" />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                keyword: ''
            }
        },
        watch: {
            keyword: function() {
                this.$emit('catchMessage', this.keyword);
            }
        }
    }
</script>

<style scoped>
    input {
        margin: 0;
        padding: 0;
        background: none;
        border: none;
        border-radius: 0;
        outline: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 100%;
        height: 100%;
        margin-right: 16px;
        font-size: 16px;
    }

    .search_form_view {
        width: 358px;
        height: 48px;
        background-color: lightgray;
        margin: 0 16px 16px 16px;
    }

    .search_form_input_area {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: left;
        margin-left: 8px;
        padding-left: 8px;
        position: relative;
    }

    .search_form_input_area i {
        margin-right: 8px;
    }

</style>