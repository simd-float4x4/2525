<template>
    <div class="footer">
        <div class="container">
            <div class="flex">
                <div class="nav_title">
                    <span class="app_title">nicochan </span>
                    <span class="version">（{{ currentVersion }}）</span>
                </div>
            </div>
            <div class="flex-p0">
                <span class="copyright"> ©︎2024 nicochan All-Rights Reserved. </span>
            </div>
            <div class="flex">
                <a :href="add" target="_blank" class="link">配信者登録フォーム</a>
            </div>
            <div class="flex">
                <a :href="modify" target="_blank" class="link">情報修正フォーム</a>
            </div>
            <div class="flex">
                <a :href="inquiry" target="_blank" class="link">お問い合わせ</a>
            </div>
            <div class="flex">
                <router-link class="link" to="/news">お知らせ一覧</router-link>
            </div>
            <div class="flex bd-btm">
                
            </div>
            <div class="flex">
                <b>公式SNS</b>
            </div>
            <div class="flex p-btm-90 ft-size-18" v-on:click="goTwitterURL">
                <i class="rounded-button fa-brands fa-x-twitter"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterView',
        props: {
            currentVersion: String
        },
        data() {
            return {
                add: process.env.VUE_APP_ADD_USER_URL,
                modify: process.env.VUE_APP_MODIFY_USER_URL,
                inquiry: process.env.VUE_APP_INQUIRY_URL
            };
        },
        methods: {
            goTwitterURL() {
                window.location.href = 'https://x.com/nicochan_PR';
            }
        }
    }
</script>

<style scoped>
    .footer {
        background-color: #252525;
        height: auto;
        color: white;
        padding: 16px;
        margin-top: 64px;
    }

    .flex {
        display: flex;
        justify-content: left;
        margin-top: 16px;
        padding: 0 8px;
    }

    .flex-p0 {
        display: flex;
        justify-content: left;
        margin-top: 0px;
        padding: 0 8px;
    }

    .link, .link:active, .link:visited {
        color: #d7d7d7;
        border: 2px;
        text-decoration: none;
        font-size: 13px;
    }

    .app_title {
        width: auto;
        height: 56px;
        color: #f7f7f7;
        font-weight: bold;
        font-size: 24px;
    }

    .version {
        width: auto;
        height: 56px;
        color: #f7f7f7;
        font-size: 12px;
    }

    .copyright {
        color: lightgray;
    }

    .bd-btm {
        border: 2px solid white;
        border-height: 100px;
    }

    .p-btm-90 {
        padding-bottom: 90px;
    }

    .ft-size-18 {
        font-size: 24px;
    }

    .rounded-button {
        border: 1px solid white;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        padding: 8px;
    }
</style>