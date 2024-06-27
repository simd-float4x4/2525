<template>
    <div v-if="categoryTitle">
        <h3> {{ categoryKeyword }} </h3>
        <div class="sub">
        <p> {{ categoryTitle }} </p>
        </div>
        <div class="notice" v-if="categoryNotice !== '' ">
            <p> {{ categoryNotice }} </p>
        </div>
    </div>
</template>

<script>
export default {
        name: 'CarouselArea',
        props: {
            categoryKeyword: String,
            categoryTitle: String,
            categoryNotice: String,
            categoryColor: String
        }
    }
</script>

<style scoped>
    .notice p {
        margin: 16px;
        font-size: 12px;
        text-align: left;
        background-color: rgba(255, 105, 97, 0.3);
        border-radius: 8px;
        padding: 8px;
    }

    .sub p {
        font-size: 12px;
        padding: 8px;
        margin: 0;
    }

    h3 {
        position: relative;
        display: inline-block;
        margin-bottom: 1em;
    }

    h3:before {
        content: '';
            position: absolute;
            bottom: -15px;
            display: inline-block;
            width: 60px;
            height: 5px;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            background-color: black;
            border-radius: 2px;
        }
</style>