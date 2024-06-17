<template>
    <div class="single_category_tab">
        <div class="category_name">
            {{ platformName }}
        </div>
        <div class="category_underline"></div>
    </div>
</template>

<script>
import * as Platform from "/Users/asobu_dev/Desktop/Project/System/niconicoSearcher/niconico-researcher/src/js/enum.js";

export default {
  name: 'CategoryName',
  data: () => ({
      platformName: Platform.Services.LINEOpenChat.label
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