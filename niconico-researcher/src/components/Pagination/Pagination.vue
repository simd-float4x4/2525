<template>
    <div class="pagination">
        <CastCell v-for="(cell, idx) in displayCells" :key="idx" :userName="無限" />
        <div class="page-btns">
            <page-button @changePage="changePage" v-for="n in pageNum" 
                :key="n" 
                :pageNumber="n"
                :curPage="curPage"
            />
        </div>
    </div>
</template>

<script>
import CastCell from '../CastCell.vue'
import PageButton from './PaginationButton.vue';

export default {
    components: {
        CastCell,
        PageButton
    },
    props: {
        Cells: Array,
        CellNumPerPage: Number,
    },
    data() {
        return {
            curPage: 1, // curPage starts from 1
            pageNum: 0, // number os pages
        }
    },
    created() {
        this.calcPageNum();
    },
    computed: {
        displayCells() {
            const startIdx = (this.curPage - 1) * this.CellNumPerPage;
            const endIdx   = startIdx + this.CellNumPerPage;
            return this.Cells.slice(startIdx, endIdx);
        },
    },
    methods: {
        changePage(value) {
            this.curPage = value;
        },
        calcPageNum() {
            this.pageNum =  Math.ceil(this.Cells.length / this.CellNumPerPage);
        }
    }
}
</script>