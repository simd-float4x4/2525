<template>
    <div class="page-btn">
        <button @click="btnPressed"
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
            this.$emit('changePage', this.pageNumber);
        }
    }
}
</script>