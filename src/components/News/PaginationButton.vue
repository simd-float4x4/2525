<template>
    <div class="page-btn">
        <button class="page-btn-item" @click="btnPressed"
            :class="{active: isCurrentPage}"
        >{{ pageNumber }} </button>
    </div>
</template>

<script>
export default {
    props: {
        pageNumber: Number,
        curPage: Number
    },
    computed: {
        isCurrentPage() {
            return this.pageNumber === this.curPage;
        }
    },
    methods: {
        btnPressed() {
            this.$emit('changeNoticePage', this.pageNumber);
        }
    }
}
</script>

<style scoped>
    button {
        margin: 0;
        padding: 0;
        background: none;
        border: none;
        border-radius: 0;
        outline: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    .page-btn {
        padding: 8px;
    }

    .active {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: black;
        color: white;
        padding: 4px;
    }

    .page-btn-item {
        width: 40px;
        height: 40px;
        font-size: 12px;
        font-family: "Oswald", sans-serif;
        font-optical-sizing: auto;
        font-weight: 200;
        font-style: normal;
    }

</style>