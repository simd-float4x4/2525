<template>
    <div class="single_category_tab" v-for="(item, key) in platformlist" :key="key">
        <div class="category_name">
            {{ item }}
        </div>
        <div class="category_underline"></div>
    </div>
</template>

<script>
import * as Platform from "/Users/asobu_dev/Desktop/Project/System/niconicoSearcher/niconico-researcher/src/js/enum.js";

export default {
  name: 'CategoryName',
  data: () => ({
      platformlist: [
          Platform.Services.Twitch.label,
          Platform.Services.Whowatch.label,
          Platform.Services.Twitcasting.label,
          Platform.Services.LINEOpenChat.label,
          Platform.Services.TikTok.label,
          Platform.Services.Instagram.label,
          Platform.Services.YouTubeLive.label,
          Platform.Services.Twitter.label,
          Platform.Services.Other.label,
      ]
  }),
}
</script>

<style>
    .category_name {
        min-width: 78px;
        font-weight: bold;
        white-space: nowrap;
        height: 25px;
        margin: 0 auto;
    }

    .single_category_tab {
        height: 36px;
        margin-right: 8px;
        display: inline-block;
    }

    .category_underline {
        width: 40px;
        margin: 0 auto;
        height: 2px;
        background-color: black;
    }
</style>