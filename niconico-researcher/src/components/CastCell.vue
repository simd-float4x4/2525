<template>
    <div class="cell">
        <div class="cell_user_image_area">
            <div class="user_icon_container">
                <div class="icon user_image_icon"></div>
                <div class="icon user_is_broadcasting_icon">
                    <i class="fa-solid fa-video fa-fade"></i>
                </div>
            </div>
            <div class="user_seed_tag">#3322</div>
        </div>
        <div class="cell_user_name_area">
            <div class="user_name">{{ userName }}</div>
            <div class="user_id_label">aabbbb</div>
        </div>
        <div class="cell_config_area">
            <div class="setting_option">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>        
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
  props: {
      userName: String
  },
  data: () => ({
    userId: 1,
    userHashTagid: '#7829',
    userMetaTag: '',
    iconURL: '',
    userNameData: '無限',
    platform: userPlatform
  }),
}
</script>

<style scoped>

.cell_user_image_area {
    
}

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
    background-color: black;
    top: 0;
    left: 0;
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
}

.cell_user_name_area {
    width: 320px;
    height: 100%;
    margin: 16px 0 16px 16px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
}

.user_name {
    width: 100%;
    height: 50%;
    font-size: 22px;
    font-weight: bold;
    color: black;
}

.user_id_label {
    width: 100%;
    height: 50%;
    font-size: 14px;
    color: gray;
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
    width: 342px;
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