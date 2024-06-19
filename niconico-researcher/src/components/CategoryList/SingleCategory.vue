<template>
    <div class="single_category_tab" v-for="(item, key) in platformlist" :key="key">
        <div class="itemContainer"
            :style="itemStyle(key)" 
             @mouseover="hoveredIndex = key" 
             @mouseleave="hoveredIndex = null"
        >
            <div v-if="item.serviceId === 2" class="category_name">
                ふ
            </div>
            <div v-else-if="item.serviceId === 3" class="category_name">
                ツ
            </div>
            <div v-else-if="item.serviceId === 6" class="category_name">
                X
            </div>
            <div v-else class="category_name">
                <i v-bind:class="item.icon"></i>
            </div>
            <div class="category_underline" v-bind:class="item.color"></div>
        </div>
    </div>
</template>


<script>
import * as Platform from "/Users/asobu_dev/Desktop/Project/System/niconicoSearcher/niconico-researcher/src/js/enum.js";

export default {
  name: 'CategoryName',
  data: () => ({
      platformlist: [
          {text: Platform.Services.Twitch.label, color: "TwitchServiceColor", icon: Platform.Services.Twitch.icon},
          {text: Platform.Services.Whowatch.label, color: "WhowatchServiceColor", serviceId: 2},
          {text: Platform.Services.Twitcasting.label, color: "TwitCastingServiceColor", serviceId: 3},
          {text: Platform.Services.Twitter.label, color: "TwitterColor", icon: Platform.Services.Twitter.icon, serviceId: 6},
          {text: Platform.Services.YouTubeLive.label, color: "YouTubeLiveColor", icon: Platform.Services.YouTubeLive.icon},
          {text: Platform.Services.LINEOpenChat.label, color: "LINEOpenChatColor", icon: Platform.Services.LINEOpenChat.icon},
          {text: Platform.Services.TikTok.label, color: "TikTokColor", icon: Platform.Services.TikTok.icon},
          {text: Platform.Services.Instagram.label, color: "InstagramColor", icon: Platform.Services.Instagram.icon},
          {text: Platform.Services.Other.label, color: "OtherServiceColor", icon: Platform.Services.Other.icon},
      ],
      items: [
            { color: '#6441a5' },
            { color: '#fb5824' },
            { color: '#0273ff' },
            { color: '#0f1419' },
            { color: '#c4302b' },
            { color: '#06c755' },
            { color: '#fe2c55' },
            { color: '#cf2e92' },
            { color: '#6f4b3e' },
        ],
        hoveredIndex: null
  }),
  methods: {
       itemStyle(index) {
            return {
                backgroundColor: this.hoveredIndex === index ? this.items[index].color : 'transparent'
            };
        },
  }
}
</script>

<style>
    .single_category_tab {
        height: 64px;
        display: inline-block;
    }

    .itemContainer {
        width: 48px;
        height: 48px;
        margin: 8px;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all  0.3s ease;
        background-color: none;
    }

    .itemContainer:hover {
        border-radius: 50%;
        color: white;
    }

    .itemContainer:hover .category_underline {
        background-color: white;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all  0.3s ease;
    }

    .category_name {
        width: 48px;
        font-weight: bold;
        height: 24px;
        line-height: 24px;
        padding-top: 8px;
    }

    .category_underline {
        width: 20px;
        height: 2px;
        margin: 0px auto 8px auto;
    }

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

    .OtherServiceColor {
        background-color: #6f4b3e;
    }

</style>