<template>
    <div class="single_category_tab">
        <div class="category_name">
            {{ platformName }}
        </div>
    </div>
</template>

<script>
import * as Platform from "/Users/asobu_dev/Desktop/Project/System/niconicoSearcher/niconico-researcher/src/js/enum.js";

export default {
  name: 'CategoryName',
  data: () => ({
      platformName: Platform.Services.Twitch.label
  }),
}
</script>

<style>
    .single_category_tab {
        width: 78px;
        min-width: 78px;
        height: 48px;
        display: flex;
        background-color: blue;
    }

    .category_name {
        background-color: red;
        height: 25px;
        margin: 0 auto;
    }
</style>