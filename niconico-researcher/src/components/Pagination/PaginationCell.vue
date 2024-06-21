<template>
    <div class="pagination">
        <CastCell v-for="(cell, idx) in displayCells" :key="idx" :userData="cell" :FormURL="FormURL" />
        <div class="page-btns">
            <div v-for="(n, pidx) in pages" :key="pidx">
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
        keyword: String,
        FormURL: String,
        Cells: Array,
        CellNumPerPage: Number // １ページあたりに表示する件数
    },
    data() {
        return {
            pages: [],
            curPage: 1, // curPage starts from 1
            pageNum: 0, // number os pages
        }
    },
    created() {
        this.initPages();
    },
    computed: {
        displayCells() {
            var startIdx = (this.curPage - 1) * this.CellNumPerPage;
            var endIdx   = startIdx + this.CellNumPerPage;
    
            var fruits = []; // 全部の結果

            for(var i in this.Cells) {  //this.fruitsはdataで定義しているもの 3つのデータをforで順番に回していきます
                var user  = this.Cells[i];  //回されてきたデータを変数foodに格納

                // console.log('1st: ', this.keyword.slice(0, 1));
                if ( user.userName.indexOf(this.keyword) !== -1 ) {
                    fruits.push(user);
                } else {
                    // メタタグによる検索
                    var metaTagCount = user.userMetaName.length;
                    for (var j = 0; j < metaTagCount; j++) {
                        var firstLetter = user.userMetaName.slice(0, 1);
                        if ( firstLetter == this.keyword.slice(0, 1) ){
                            if ( user.userMetaName[j].indexOf(this.keyword) !== -1 ){
                                fruits.push(user);
                            }
                        }
                    }
                    // プラットフォームによる検索
                    var platformCount = user.platform.length;
                    for (var h = 0; h < platformCount; h++) {
                        var fLetter = user.platform[h].accountUserName.slice(0, 1);
                        // console.log('プラット： ', fLetter, ' ', this.keyword.slice(0, 1));
                        if ( fLetter == this.keyword.slice(0, 1) ){
                            if ( user.platform[h].accountUserName.indexOf(this.keyword) !== -1 ){
                                fruits.push(user);
                            }
                        }
                    }
                }         
            }

            // 配信中の人が上になるように
            fruits.sort(function(a, b) {
                if (a.platform[0].isBroadCasting < b.platform[0].isBroadCasting) {
                    return 1;
                } else {
                    return -1;
                }
            });

            // 末尾のページ番号
            // TODO: UnexpectedError対策
            // this.pageNum = Math.ceil(fruits.length / this.CellNumPerPage);
            this.resetPageNum();
            this.calcPageNum();

            return fruits.slice(startIdx, endIdx);
        },
    },
    methods: {
        initPages() {
            // 末尾のページ番号
            this.pageNum =  Math.ceil(this.Cells.length / this.CellNumPerPage);
            this.calcPageNum();
        }, 
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
