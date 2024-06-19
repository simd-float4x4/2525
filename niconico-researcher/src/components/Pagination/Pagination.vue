<template>
    <div class="pagination">
        <CastCell v-for="(cell, idx) in displayCells" :key="idx" :userData="cell" />
        <div class="page-btns">
            <div v-for="n in pages">
                <div v-if="n !== '...'">
                    <page-button @changePage="changePage"  
                        :key="n" 
                        :pageNumber="n"
                        :curPage="curPage"
                    />
                </div>
                <p v-else>...</p>
            </div>
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
            pages: [],
            curPage: 1, // curPage starts from 1
            pageNum: 0, // number os pages
        }
    },
    created() {
        // 末尾のページ番号
        this.pageNum =  Math.ceil(this.Cells.length / this.CellNumPerPage);

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
            this.resetPageNum();
            this.curPage = value;
            this.calcPageNum();
        },
        calcPageNum() {
            if (this.pageNum <= 7) {
                for (let i = 1; i <= this.pageNum; i++) {
                    this.pages.push(i);
                    // console.log("A: ", this.pages);
                }
            } else {
                this.pages.push(1);
                if (this.curPage > 4) {
                    if (this.curPage > 5) {
                        this.pages.push('...');
                        // console.log("B: ", this.pages);
                    }
                    // this.pages.push('...');
                    // console.log("C: ", this.pages);
                }
                for (let i = Math.max(this.curPage - 2, 2); i <= Math.min(this.curPage + 2, this.pageNum); i++) {
                    this.pages.push(i);
                    // console.log("D: ", this.pages);
                }
                if (this.curPage < this.pageNum - 3) {
                    if (this.curPage < this.pageNum - 4) {
                        this.pages.push('...');
                        // console.log("E: ", this.pages);
                    }
                    this.pages.push(this.pageNum);
                    // console.log("F: ", this.pages);
                }
            }
            // rconsole.log("G: ", this.pages);
        },
        resetPageNum() {
            this.pages = [];
            // console.log("H: ", this.pages);
        }
    }
}
</script>

<style scoped>
    .page-btns {
        width: 100%;
        display: flex;
        justify-content: center;
    }
</style>
