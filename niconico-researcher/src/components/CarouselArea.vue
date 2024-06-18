<template>
    <div class="carousel_area">
        <div class="carousel left_button">
            <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div class="carousel right_button">
            <i class="fa-solid fa-chevron-right"></i>
        </div>
    </div>
    <div class="carousel_indicator_area">
        <div class="carousel_indicators">
            <div class="carousel_indicator_dot activated"></div>
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
        position: relative;
    }

    .carousel {
        width: 50px;
    }

    .left_button {
        margin-left: 0px;
        height: 195px;
        position: absolute;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .right_button {
        margin-right: 0px;
        height: 195px;
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
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
        width: 9px;
        height: 9px;
        margin: 8px;
        border-radius: 50%;
        background-color: darkgray;
    }

    .activated {
        background-color: green;
    }
</style>