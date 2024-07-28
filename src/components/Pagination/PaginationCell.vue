<template>
    <div class="pagination">
        <div v-if="displayCells.length > 0">
        <div v-for="(cell, idx) in displayCells" :key="idx">
            <CastCell :userData="cell" :FormURL="FormURL" />
        </div>
        </div>
        <div v-if="displayCells.length === 0">
            <div v-if="isInitialLoadingEnd === false">
                <div class="container">
                    <i class="fa-solid fa-spinner fa-spin-pulse"></i>
                </div>
            </div>
            <div v-if="isInitialLoadingEnd === true">
                該当するデータがありませんでした
            </div>
        </div>
        <div class="page-btns">
            <div v-for="(n, pidx) in pages" :key="pidx">
                <div v-if="n !== '...'">
                    <page-button @changePage="changePage"  
                        @storeBoolValue="clickedMoreThanTwo"
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
// import DummyCastCell from '../DummyCastCell.vue'
import PageButton from './PaginationButton.vue';
import * as Platform from "../../js/enum.js"

export default {
    components: {
        CastCell,
        PageButton,
        // DummyCastCell
    },
    props: {
        categoryKeyword: String,
        keyword: String,
        FormURL: String,
        Cells: Array,
        CellNumPerPage: Number
    },
    data() {
        return {
            pages: [],
            curPage: 1,
            pageNum: 0,
            moreThanTwoIsClicked: false,
            storedCategoryKeyword: "",
            isInitialLoadingEnd: false
        }
    },
    created() {
        this.initPages();
    },
    computed: {
        displayCells() {
            // カテゴリを変更するとき、強制的にページネーションを1にする
            if (this.storedCategoryKeyword != this.categoryKeyword) {
                this.changePage(1);
                this.changeBoolValue(false);
            }
            this.changeCategoryKeyword(this.categoryKeyword);

            // ページネーション：最初の数字と最後の数字を決定
            var startIdx = (this.curPage - 1) * this.CellNumPerPage;
            var endIdx   = startIdx + this.CellNumPerPage;
            
            var fruits = [];
            var snacks = this.Cells;
            
            var all = Platform.Services.All.label;
            var now = Platform.Services.NowStreaming.label;
            var query = this.keyword;

            if (this.categoryKeyword === now) {
                snacks = snacks.filter(u => {
                    return u.userPlatforms.some(platform => platform.isBroadCasting === true);
                });
            } else if (this.categoryKeyword === all) {
                // do nothing
            } else {
                snacks = snacks.filter(u => {
                    return u.userPlatforms.find(platform => platform.platformName === this.categoryKeyword);
                });
            }
            
            for(var i in snacks) {
                var user  = snacks[i];
                var metaNames = user.metaNames;

                for (var element in user.userPlatforms) {

                    if (user.userPlatforms[element].hasAccount !== true) {
                        break;
                    }

                    var isThisMatched = false

                    // プラットフォームでユーザー名検索時の最初の文字を取得
                    var fLetter = user.userPlatforms[element].accountUserName.slice(0, 1);
                    
                    // メタネームをフィルターする
                    var filteredData = metaNames.filter(function(value) {
                        return value.includes(query);
                    });

                    // ユーザー名検索
                    if ( user.name.indexOf(query) !== -1 ) {
                        isThisMatched = true
                    
                    // メタタグ検索
                    } else if ( filteredData.length > 0 ) {
                        isThisMatched = true
                    
                    // アカウントユーザー名検索
                    } else if ( fLetter == query.slice(0, 1) ) {
                        if ( user.userPlatforms[element].accountUserName.indexOf(query) !== -1 ){
                            isThisMatched = true
                        }
                    }
                    
                    if (this.categoryKeyword === now) {
                        if (user.userPlatforms[element].isBroadCasting === false) {
                            isThisMatched = false
                        }
                    }

                    if (this.categoryKeyword !== all && this.categoryKeyword !== now && this.categoryKeyword !== user.userPlatforms[element].platformName) {
                        isThisMatched = false
                    }

                    // 一つでも合致すればデータを入れてしまう
                    if(isThisMatched) {
                        fruits.push({
                            ...user,
                            platform: user.userPlatforms[element]
                        });
                    }
                }
            }

            fruits.sort(function(a, b) {
                if (a.userPlatforms[0].isBroadCasting < b.userPlatforms[0].isBroadCasting) {
                    return 1;
                } else {
                    return -1;
                }
            });

            this.ceilTwoElement(fruits);
            this.resetPageNum();
            this.calcPageNum();

            if (fruits.length !== 0){
                this.changeInitialLoadingStatus();
            }

            return fruits.slice(startIdx, endIdx);
        },
    },
    methods: {
        changeInitialLoadingStatus() {
            this.isInitialLoadingEnd = true;
        },
        shuffle(array) {
            let currentIndex = array.length, temporaryValue, randomIndex;

            // まだシャッフルする要素が残っている場合
            while (0 !== currentIndex) {

                // 残りの要素の中からランダムな要素を選ぶ
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // ランダムに選んだ要素と現在の要素を交換する
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        },
        storeBoolValue(value){
            this.moreThanTwoIsClicked = value;
        },
        changeBoolValue(value){
            this.moreThanTwoIsClicked = value;
        },
        changeCategoryKeyword(value){
            this.storedCategoryKeyword = value;
        },
        ceilTwoElement(fruits){
            this.pageNum =  Math.ceil(fruits.length / this.CellNumPerPage)
        },
        initPages() {
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
                }
            } else {
                this.pages.push(1);
                if (this.curPage > 4) {
                    if (this.curPage > 5) {
                        this.pages.push('...');
                    }
                }
                for (let i = Math.max(this.curPage - 2, 2); i <= Math.min(this.curPage + 2, this.pageNum); i++) {
                    this.pages.push(i);
                }
                if (this.curPage < this.pageNum - 3) {
                    if (this.curPage < this.pageNum - 4) {
                        this.pages.push('...');
                    }
                    this.pages.push(this.pageNum);
                }
            }
        },
        resetPageNum() {
            this.pages = [];
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

    .pagination {
        min-height: 80vh;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 48px;
    }
</style>
