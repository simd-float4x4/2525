<template>
    <div>
        <div class="container">      
            <div class="row">
                <h4>お知らせ</h4>
                <div class="navigation" v-if="firstNoticeDate">
                    <button @click="goToNewsList" class="navigation">もっと見る</button>
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </div>
            </div>   
            <p v-if="firstNoticeDate">
                {{ firstNoticeDate }}
                <br>
                {{ firstNoticeTitle }}
            </p>
            <div class="skelton-p" v-if="!firstNoticeDate">
                <i class="fa-solid fa-spinner fa-spin-pulse"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
        name: 'NotionView',
        props: {
            firstNoticeTitle: String,
            firstNoticeDate: String,
            noticesData: Array
        },
        methods: {
            goToNewsList() {
                this.$router.push({ name: 'NewsList' });
            }
        }
    }
</script>

<style scoped>
    button{
        border: none;
        cursor: pointer;
        outline: none;
        padding: 0;
        appearance: none;
        background: none;
    }

    .row {
        height: 24px;
        display: flex;
        align-items: center;
        margin: 0 16px 0 16px;
    }

    h4 {
        margin: 0;
        width: 50%;
        text-align: left;
        flex: 1;
    }

    .navigation {
        width: 50%;
        text-align: right;
        font-size: 12px;
        padding-right: 8px;
        color: #007AFF;
        text-decoration: none;
    }

    p {
        margin: 0 16px 0 16px;
        font-size: 12px;
        text-align: left;
        background-color: #d7d7d7;
        border-radius: 8px;
        padding: 8px;
    }

    .skelton-p {
        margin: 0px 16px;
        height: 50px;
        background-color: #d7d7d7;
        border-radius: 8px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
    }

    .container {
        margin-top: 16px;
    }
</style>