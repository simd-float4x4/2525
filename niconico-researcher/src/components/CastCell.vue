<template>
    <div class="cell">
    </div>
</template>

<script>
import * as Platform from "/Users/asobu_dev/Desktop/Project/System/niconicoSearcher/niconico-researcher/src/js/enum.js";

let userPlatform = [
    {
        platformName: Platform.Services.Twitch.text,
        hasAccount: true,
        isBroadCasting: false,
        displayTextContent: '@infinity_mkds',
        accountURL: ''
    }
]

export default {
  name: 'CastCell',
  data: () => ({
    userId: 1,
    userHashTagid: '#7829',
    iconURL: '',
    userName: '無限',
    platform: userPlatform
  }),
}
</script>

<style scoped>

.cell {
    background-color: white;
    border-radius: 16px;
    width: 358px;
    height: 65px;
    margin: 0 auto 16px auto;
    font-family: -apple-system, 'BlinkMacSystemFont', 'Hiragino Kaku Gothic ProN', 'メイリオ', Sans-Serif;
    border-radius: 16px;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.34);
    display: flex;
    align-items: center;
    padding: 8px;
}

.icon {
    width: 32px;
    height: 32px;
    background-color: black;
    border-radius: 16px;
    margin: 8px;
}

h2 {
    width: 260px;
    text-align: left;
    line-height: 30px;
}

h3 {
    font-weight: bold;
    width: 260px;
    color: gray;
    text-align: left;
    line-height: 20px;
}

 .text-container {
    display: flex;
    flex-direction: column;
 }

</style>