<template>
    <div v-if="carouselData.length != 0">
            <div class="carousel_area" :style="{ 'background-image': carouselBackgroundImage }" @click="carouselExternalURL"> 
                <div 
                v-if="carouselData.length != 1"
                @click.stop="clickLeft"
                class="carousel left_button">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div
                v-if="carouselData.length != 1"
                @click.stop="clickRight"
                class="carousel right_button">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div class="carousel_indicator_area">
                <div class="carousel_indicators">
                    <div v-for="(slide, index) in carouselData" :key="index">
                        <div v-if="index == currentCarouselNumber" class="carousel_indicator_dot activated"></div>
                        <div v-else class="carousel_indicator_dot"></div>
                    </div>
                </div>
            </div>
    </div>
    <div v-if="carouselData.length == 0">
        <div class="carousel_area">
            <i class="fa-solid fa-spinner fa-spin-pulse"></i>
        </div>
        <div class="carousel_indicator_area">
            <div class="carousel_indicators">
                <div class="carousel_indicator_dot"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CarouselArea',
        props: {
            carouselData: Object
        },
        data: () => {
            return {
                carouselCount: 4,
                currentCarouselNumber: 0,
                currentURL: ''
            };
        },
        computed: { 
            carouselBackgroundImage() {
                if (this.carouselData.length > 0 && this.carouselData[this.currentCarouselNumber].bannerURL) {
                this.checkCarouselCount();
                this.getCurrentURL(this.carouselData[this.currentCarouselNumber].bannerTransitionURL);
                    try {
                        const imagePath = require(`@/assets/image/banner/${this.carouselData[this.currentCarouselNumber].bannerURL}`);
                        return `url(${imagePath})`;
                    } catch (e) {
                        console.error('Image not found:', e);
                        return 'none';
                    }
                } else {
                    return 'none';
                }
            }
        },
        methods: {
            clickLeft() {
                this.currentCarouselNumber -= 1;
                if (this.currentCarouselNumber < 0) {
                    this.currentCarouselNumber = this.carouselCount - 1;
                }
            },
            clickRight() {
                this.currentCarouselNumber += 1;
                if (this.currentCarouselNumber > this.carouselCount - 1) {
                    this.currentCarouselNumber = 0;
                }
            },
            checkCarouselCount() {
                this.carouselCount = this.carouselData.length;
            },
            getCurrentURL(value) {
                this.currentURL = value;
            },
            carouselExternalURL() {
                const url = this.currentURL;
                return window.open(url, '_blank');
            }
        },
    }
</script>

<style>
    .carousel_area {
        background-color: darkgray;
        width: 390px;
        height: 250px;
        margin-bottom: 8px;
        position: relative;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 48px;
    }

    .carousel {
        width: 50px;
    }

    .left_button {
        margin-left: 0px;
        height: 100%;
        position: absolute;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .right_button {
        margin-right: 0px;
        height: 100%;
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