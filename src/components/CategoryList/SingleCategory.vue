<template>
    <div class="wrapper">
        <div v-for="(item, key) in platformlist" :key="key">
            <div class="single_category_tab">
                <button class="itemContainer"
                    :style="itemStyle(key)" 
                    @mouseover="hoveredIndex = key" 
                    @mouseleave="hoveredIndex = null"
                    @click="selectedIndex = key; changeColor(key)"
                >
                    <div v-if="item.serviceId === 997" class="category_name" :style="itemSubTextStyle(key)" >
                        ALL
                    </div>
                    <div v-else-if="item.serviceId === 2" class="category_name" :style="itemSubTextStyle(key)" >
                        ふ
                    </div>
                    <div v-else-if="item.serviceId === 3" class="category_name" :style="itemSubTextStyle(key)" >
                        ツ
                    </div>
                    <div v-else-if="item.serviceId === 9" class="category_name" :style="itemSubTextStyle(key)" >
                        O
                    </div>
                    <div v-else-if="item.serviceId === 6" class="category_name" :style="itemSubTextStyle(key)" >
                        X
                    </div>
                    <div v-else-if="item.serviceId === 11" class="category_name" :style="itemSubTextStyle(key)" >
                        n
                    </div>
                    <div v-else class="category_name" :style="itemSubTextStyle(key)">
                        <i v-bind:class="item.icon"></i>
                    </div>
                    <div class="category_underline" v-bind:class="item.color" :style="itemSubUnderlineStyle(key)" ></div>
                </button>
            </div>
        </div>
    </div>
</template>


<script>
import * as Platform from '../../js/enum.js';

export default {
  name: 'CategoryName',
  data: () => ({
      hoveredIndex: null,
      selectedIndex: null,
      platformlist: [
        {
            text: Platform.Services.All.label, 
            color: "AllServiceColor", 
            serviceId: 997
        },
        {
            text: Platform.Services.NowStreaming.label, 
            color: "NowStreamingColor", 
            icon: Platform.Services.NowStreaming.icon, 
            serviceId: 998
        },
        {
            text: Platform.Services.Twitch.label, 
            color: "TwitchServiceColor", 
            icon: Platform.Services.Twitch.icon, 
            serviceId: 1
        },
        {
            text: Platform.Services.Whowatch.label, 
            color: "WhowatchServiceColor", 
            serviceId: 2
        },
        {
            text: Platform.Services.Twitcasting.label, 
            color: "TwitCastingServiceColor", 
            serviceId: 3
        }, 
        {
            text: Platform.Services.YouTubeLive.label, 
            color: "YouTubeLiveColor", 
            icon: Platform.Services.YouTubeLive.icon, 
            serviceId: 4
        },
        {
            text: Platform.Services.OpenREC.label, 
            color: "OpenRecServiceColor", 
            serviceId: 9
        },
        {
            text: Platform.Services.Twitter.label, 
            color: "TwitterColor", 
            icon: Platform.Services.Twitter.icon, 
            serviceId: 6
        },
        {
            text: Platform.Services.LINEOpenChat.label, 
            color: "LINEOpenChatColor", 
            icon: Platform.Services.LINEOpenChat.icon, 
            serviceId: 5
        },
        {
            text: Platform.Services.TikTok.label, 
            color: "TikTokColor", 
            icon: Platform.Services.TikTok.icon, 
            serviceId: 8
        },
        {
            text: Platform.Services.Instagram.label, 
            color: "InstagramColor", 
            icon: Platform.Services.Instagram.icon,
            serviceId: 7
        },
        {
            text: Platform.Services.Niconico.label, 
            color: "NiconicoColor", 
            icon: Platform.Services.Niconico.icon,
            serviceId: 11
        },
        {
            text: Platform.Services.Other.label, 
            color: "OtherServiceColor", 
            icon: Platform.Services.Other.icon, 
            serviceId: 999
        },
      ],
      items: [
            { color: '#BAA898' },
            { color: 'red' },
            { color: '#6441a5' },
            { color: '#fb5824' },
            { color: '#0273ff' },
            { color: '#c4302b' },
            { color: '#FF4C11' },
            { color: '#0f1419' },
            { color: '#06c755' },
            { color: '#fe2c55' },
            { color: '#cf2e92' },
            { color: '#252525' },
            { color: '#6f4b3e' },
        ],
  }),
  emits: ['clickedIdNumber'], 
  methods: {
    emitIdNumber(index){
        this.$emit('clickedIdNumber', this.platformlist[index].serviceId);
    },

    itemStyle(index) {
        if (this.hoveredIndex === index) {
            return { backgroundColor: this.items[index].color, 'border-radius': '50%' };
        } else if (this.selectedIndex === index) {
            return { backgroundColor: this.items[index].color, 'border-radius': '50%' };
        } else {
            return { backgroundColor: 'transparent', 'border-radius': '0%' };
        }
    },

    changeColor(index) {
        this.itemStyle(index);
        this.emitIdNumber(index);
    },

    itemSubTextStyle(index) {
        if (this.hoveredIndex === index) {
            return { color: 'white' };
        } else if (this.selectedIndex === index) {
            return { color: 'white' };
        } else {
            return { color: '#2c3e50' };
        }
    },

    itemSubUnderlineStyle(index) {
        if (this.hoveredIndex === index) {
            return { backgroundColor: 'white' };
        } else if (this.selectedIndex === index) {
            return { backgroundColor: 'white' };
        } else {
            return { backgroundColor: this.items[index].color };
        }
    },
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
    }

    .wrapper {
        width: 100%;
        height: 64px;
        max-height: 64px;
        display: flex;
    }

    .single_category_tab {
        width: 64px;
        height: 64px;
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

    .itemContainer:hover .category_underline {
        background-color: white;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all  0.3s ease;
    }

    .itemContainer:active .category_underline {
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

    .AllServiceColor {
        background-color: #BAA898;
    }

    .NowStreamingColor {
        background-color: red;
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

    .OpenRecServiceColor {
        background-color: #FF4C11;
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