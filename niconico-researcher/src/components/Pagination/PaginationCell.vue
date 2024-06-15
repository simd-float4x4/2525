<template>
    <div class="pagination">
        <div v-if="displayCells.length > 0">
            <CastCell v-for="(cell, idx) in displayCells" :key="idx" :userData="cell" :FormURL="FormURL" />
        </div>
        <div v-if="displayCells.length === 0">
            該当するデータがありませんでした
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
import PageButton from './PaginationButton.vue';
import * as Platform from "/Users/asobu_dev/Desktop/Project/System/niconicoSearcher/niconico-researcher/src/js/enum.js"

export default {
    components: {
        CastCell,
        PageButton
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
            storedCategoryKeyword: ""
        }
    },
    created() {
        this.initPages();
    },
    computed: {
        displayCells() {
            if (this.storedCategoryKeyword != this.categoryKeyword) {
                this.changePage(1);
                this.changeBoolValue(false);
            }
            this.changeCategoryKeyword(this.categoryKeyword);

            var startIdx = (this.curPage - 1) * this.CellNumPerPage;
            var endIdx   = startIdx + this.CellNumPerPage;
            var snacks = [];
            var fruits = [];
            snacks = this.Cells;

            if ( this.categoryKeyword ) {
                switch(this.categoryKeyword) {
                    case Platform.Services.All.label:
                    break;

                    case Platform.Services.NowStreaming.label:
                    snacks = snacks.filter(cell => {
                        const filteredPlatforms = cell.platform.filter(platform => platform.isBroadCasting === true);
                        return filteredPlatforms.length > 0;
                    }).map(cell => ({
                        ...cell,
                        platform: cell.platform.filter(platform => platform.isBroadCasting === true)
                    }));
                    break;
                    
                    default:
                    snacks = snacks.filter(cell => {
                        const filteredPlatforms = cell.platform.filter(platform => platform.platformName === this.categoryKeyword);
                        return filteredPlatforms.length > 0;
                    });
                    break;
                }
            }


            for(var i in snacks) {
                var user  = snacks[i];
                var metaTags = user.userMetaName; 
                var query = this.keyword;
                var platformCount = user.platform.length;

                if ( user.userName.indexOf(this.keyword) !== -1 ) {
                    for (var c in user.platform) {
                        fruits.push({
                            ...user,
                            platform: [user.platform[c]]
                        });
                    }
                } else {                                        
                    var filteredData = metaTags.filter(function(value) {
                        return value.includes(query);
                    });

                    if (filteredData.length > 0) {
                        for (var d in user.platform) {
                            fruits.push({
                                ...user,
                                platform: [user.platform[d]]
                            });
                        }
                    } else {
                        for (var h = 0; h < platformCount; h++) {
                            var fLetter = user.platform[h].accountUserName.slice(0, 1);
                            if ( fLetter == this.keyword.slice(0, 1) ){
                                if ( user.platform[h].accountUserName.indexOf(this.keyword) !== -1 ){
                                    for (var k in user.platform) {
                                        fruits.push({
                                            ...user,
                                            platform: [user.platform[k]]
                                        });
                                    }
                                }
                            }
                        }
                    }
                }    
            }

            if ( this.categoryKeyword ) {
                switch(this.categoryKeyword) {
                    case Platform.Services.All.label:
                    break;

                    case Platform.Services.NowStreaming.label:
                    fruits = fruits.filter(cell => {
                        const filteredPlatforms = cell.platform.filter(platform => platform.isBroadCasting === true);
                        return filteredPlatforms.length > 0;
                    }).map(cell => ({
                        ...cell,
                        platform: cell.platform.filter(platform => platform.isBroadCasting === true)
                    }));
                    break;
                    
                    default:
                    fruits = fruits.filter(cell => {
                        const filteredPlatforms = cell.platform.filter(platform => platform.platformName === this.categoryKeyword);
                        return filteredPlatforms.length > 0;
                    });
                    break;
                }
            }

            fruits.sort(function(a, b) {
                if (a.platform[0].isBroadCasting < b.platform[0].isBroadCasting) {
                    return 1;
                } else {
                    return -1;
                }
            });

            this.ceilTwoElement(fruits);
            this.resetPageNum();
            this.calcPageNum();

            return fruits.slice(startIdx, endIdx);
        },
    },
    methods: {
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
</style>
