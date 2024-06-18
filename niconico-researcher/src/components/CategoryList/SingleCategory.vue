<template>
    <div class="single_category_tab" v-for="(item, key) in platformlist" :key="key" v-bind:class="item.color">
        <div class="category_name">
            {{ item.text }}
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
          {text: Platform.Services.Twitch.label, color: "TwitchServiceColor"},
          {text: Platform.Services.Whowatch.label, color: "WhowatchServiceColor"},
          {text: Platform.Services.Twitcasting.label, color: "TwitCastingServiceColor"},
          {text: Platform.Services.YouTubeLive.label, color: "YouTubeLiveColor"},
          {text: Platform.Services.LINEOpenChat.label, color: "LINEOpenChatColor"},
          {text: Platform.Services.TikTok.label, color: "TikTokColor"},
          {text: Platform.Services.Instagram.label, color: "InstagramColor"},
          {text: Platform.Services.Twitter.label, color: "TwitterColor"},
          {text: Platform.Services.Mildom.label, color: "MildomColor"},
          {text: Platform.Services.Other.label, color: "OtherServiceColor"},
      ]
  }),
}
</script>

<style>
    .TwitchServiceColor {
        background-color: #6441a5;
    }

    .WhowatchServiceColor {
        background-color: #Fb5824;
    }

    .TwitCastingServiceColor {
        background-color: #0273FF;
    }

    .YouTubeLiveColor {
        background-color: #C4302B;
    }

    .LINEOpenChatColor {
        background-color: #06C755;
    }

    .TikTokColor {
        background-color: #FE2C55;
    }

    .InstagramColor {
        background-color: #CF2E92;
    }

    .TwitterColor {
        background-color: #0F1419;
    }

    .MildomColor {
        background-color: #25F4EE;
    }

    .OtherServiceColor {
        background-color: #6f4b3e;
    }

    .category_name {
        min-width: 78px;
        font-weight: bold;
        white-space: nowrap;
        height: 25px;
        margin: 0 auto;
        padding: 8px 8px 0 8px;
    }

    .single_category_tab {
        height: 48px;
        margin-right: 8px;
        display: inline-block;
        border-radius: 8px;
    }

    .category_underline {
        width: 40px;
        margin: 0 auto;
        height: 2px;
        background-color: black;
    }
</style>