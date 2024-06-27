<template>
    <div class="footer">
        <div class="flex">
            <router-link class="link border-r" to="/terms-use">利用規約</router-link>
            <router-link class="link border-l" to="/privacy-policy">プライバシーポリシー</router-link>
        </div>
        <div class="flex">
            <router-link class="link" to="/news">お知らせ一覧</router-link>
        </div>
        <div class="flex">
            <span class="link">{{ currentVersion }}</span>
        </div>
        <div class="flex">
            ©︎2024 nicochan All-Rights Reserved. 
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterView',
        props: {
            currentVersion: String
        },
    }
</script>

<style scoped>
    .footer {
        background-color: #252525;
        width: 100%;
        height: 180px;
        color: white;
        margin-bottom: 0;
        position: absolute;
        bottom: 0;
    }

    .flex {
        display: flex;
        justify-content: center;
        margin-top: 16px;
    }

    .link {
        color: #d7d7d7;
        border: 2px;
        text-decoration: none;
    }

    .border-l {
        border-left: solid white;   
        padding: 0 8px;
    }

    .border-r {
        border-right: solid white;   
        padding: 0 8px;
    }
</style>