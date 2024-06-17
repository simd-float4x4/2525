<template>
    <div class="carousel_area">

    </div>
    <div class="carousel_indicator_area">
        <div class="carousel_indicators">
            <div class="carousel_indicator_dot"></div>
            <div class="carousel_indicator_dot"></div>
            <div class="carousel_indicator_dot"></div>
            <div class="carousel_indicator_dot"></div>
        </div>
    </div>
</template>

<style>
    .carousel_area {
        background-color: darkgray;
        width: 390px;
        height: 195px;
        margin-bottom: 8px;
    }

    .carousel_indicator_area {
        width: 100%;
        height: 32px;
    }

    .carousel_indicators {
        width: 160px;
        height: 32px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }

    .carousel_indicator_dot {
        width: 12px;
        height: 12px;
        margin: 4px;
        border-radius: 50%;
        background-color: darkgray;
    }
</style>