<template>
    <div class="cell">
        <div class="cell_user_image_area">
            <div class="user_icon_container">
                <div>
                    <div class="icon user_image_icon"></div>
                </div>
                <div class="icon user_is_broadcasting_icon">
                    <i class="fa-solid fa-video fa-fade"></i>
                </div>
            </div>
            <div class="user_seed_tag">#0000</div>
        </div>
        <div class="cell_user_name_area">
            <div class="user_name"  :style="cellViewBackground(11)">ダミーデータ</div>
            <div class="user_id_label"> 
                Twitch: @sampledata<br>
                <div class="url">
                    
                </div>
            </div>
        </div>
        <div class="cell_config_area">
            <div class="setting_option">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>        
    </div>
</template>

<script>
import * as Platform from "../js/enum.js";

export default {
  name: 'CastCell',
  props: {

  },
  methods: {
      moveToUserStreamingURL(url) {
        window.open(url, '_blank')
      },
      cellViewBackground(index) {
          var color = '';
          switch(index) {
            case Platform.Services.Twitch.serviceId:
                color = Platform.Services.Twitch.brandColor;
                break;
            case Platform.Services.Whowatch.serviceId:
                color = Platform.Services.Whowatch.brandColor;
                break;
            case Platform.Services.Twitcasting.serviceId:
                color = Platform.Services.Twitcasting.brandColor;
                break;
            case Platform.Services.Twitter.serviceId:
                color = Platform.Services.Twitter.brandColor;
                break;
            case Platform.Services.TikTok.serviceId:
                color = Platform.Services.TikTok.brandColor;
                break;
            case Platform.Services.YouTubeLive.serviceId:
                color = Platform.Services.YouTubeLive.brandColor;
                break;
            case Platform.Services.Instagram.serviceId:
                color = Platform.Services.Instagram.brandColor;
                break;
            case Platform.Services.LINEOpenChat.serviceId:
                color = Platform.Services.LINEOpenChat.brandColor;
                break;
            case Platform.Services.OpenREC.serviceId:
                color = Platform.Services.OpenREC.brandColor;
                break;
            case Platform.Services.All.serviceId:
                color = Platform.Services.All.brandColor;
                break;
            case Platform.Services.NowStreaming.serviceId:
                color = Platform.Services.NowStreaming.brandColor;
                break;
            case Platform.Services.Other.serviceId:
                color = Platform.Services.Other.brandColor;
                break;
            case Platform.Services.Niconico.serviceId:
                color = Platform.Services.Niconico.brandColor;
                break;
          }
          return {
               'border-left' : '5px solid' + color
          }
      }
  }
}
</script>

<style scoped>

.user_icon_container {
    width: 40px;
    height: 40px;
    margin: 0 auto;
    position: relative;
}

.icon {
    border-radius: 50%;
    position: absolute;
}

.user_image_icon {
    width: 40px;
    height: 40px;
    top: 0;
    left: 0;
    background-image: url('../assets/image/user_icon_default.png');
    background-size: cover;
}

.user_is_broadcasting_icon {
    background-color: red;
    color: white;
    width: 16px;
    height: 16px;
    font-size: 8px;
    bottom: 0;
    right: 0;
}

.user_is_broadcasting_icon i {
    padding: 4px;
}

.user_seed_tag {
    width: 40px;
    margin-top: 8px; 
    font-size: 12px;
    font-family: "Oswald", sans-serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
}

.cell_user_name_area {
    width: 100%;
    height: 100%;
    margin: 16px 0 16px 16px;
    text-align: left;
    white-space: nowrap;
    overflow-x: auto;
}

.user_name {
    width: 100%;
    height: 50%;
    font-size: 22px;
    font-weight: bold;
    color: black;
    padding-left: 8px;
}

.user_id_label {
    width: 100%;
    height: 50%;
    font-size: 14px;
    color: gray;
    margin-left: 13px;
}

.user_id_label .url {
    font-size: 8px;
}

.cell_config_area {
    width: 40px;
    height: 100%;
    margin: 16px 16px 16px 0;
    margin: left;
}

.setting_option {
    width: 100%;
    text-align: right;
    top: 0;
    right: 0;
}


.cell {
    background-color: white;
    border-radius: 16px;
    width: auto;
    height: 65px;
    margin: 0 16px 16px 16px;
    font-family: -apple-system, 'BlinkMacSystemFont', 'Hiragino Kaku Gothic ProN', 'メイリオ', Sans-Serif;
    border-radius: 16px;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.34);
    display: flex;
    align-items: center;
    padding: 8px;
}
</style>