<template>
    <div>
        <div class="carousel_area" :style="{ 'background-image': 'url(' + currentImage + ')' }">
            <div 
            @click="clickLeft"
            class="carousel left_button">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div
            @click="clickRight"
            class="carousel right_button">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
        <div class="carousel_indicator_area">
            <div class="carousel_indicators">
                <div v-for="(slide, index) in carousels" :key="index">
                    <div v-if="index==currentCarouselNumber" class="carousel_indicator_dot activated"></div>
                    <div v-else class="carousel_indicator_dot"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CarouselArea',
        data: () => {
            return {
                carousels: [
                    '',
                    '',
                    '',
                    '',
                ],
                carouselCount: 4,
                currentCarouselNumber: 0,
            };
        },
        computed: {
            currentImage() {
                return this.carousels[this.currentCarouselNumber];
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
            }
        }
    }
</script>

<style>
    .carousel_area {
        background-color: darkgray;
        width: 390px;
        height: 195px;
        margin-bottom: 8px;
        position: relative;
        background-position: center;
        background-size: contain;
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