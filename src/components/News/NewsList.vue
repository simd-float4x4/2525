<template>
    <div>
        <div class="container">      
            <div class="row">
                <div class="navigation">
                    <i class="fa-solid fa-circle-chevron-left"></i>
                    <router-link class="navigation-link" to="/">戻る</router-link>
                </div>
                <h3>お知らせ</h3>
            </div>
            <div v-for="(n, index) in noticesData" :key="index">
                <router-link 
                    :to="{ name: 'NewsDetail', params: { id: noticesData[index].id } }" 
                    class="navigation-link">
                    <Cell :date="noticesData[index].noticeDate" :title="noticesData[index].noticeTitle" />
                </router-link>
            </div>
        </div>
    </div>  
</template>

<script>
import Cell from './NewsCell.vue'
import axios from 'axios'

export default {
    name: 'NewsList',
    components: {
        Cell
    },
    data() {
        return {
            noticesData: []
        }
    },
    methods: {
        create() {
            axios.get(`${process.env.VUE_APP_NOTICE_LIST_URL}`)
                .then(response => {
                    this.noticesData.push(...response.data);
                })
                .catch(error => {
                    console.error('Failed Fetch NoticesData:', error);
                });
        }
    },
    created() {
        this.create();
    }
}
</script>

<style scoped>
    .cell-text {
        text-decoration: none;
    }

    .row {
        margin: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .navigation {
        width: 100px;
        position: absolute;
        left: 0;
        color: #007AFF;
        text-align: left;
    }

    .navigation-link {
        color: #007AFF;
        text-decoration: none;
    }

    .h3 {
        text-align: center;
        flex: 1;
    }
</style>