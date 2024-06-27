<template>
    <div class="cell">
        <div class="cell-container">
            <h5>{{ date }}</h5>
            <p>{{ title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsCell',
    props: {
        date: String,
        title: String
    }
}
</script>


<style>
    .cell {
        background-color: white;
        border-radius: 16px;
        margin: 16px;
        min-height: 65px;
        font-family: -apple-system, 'BlinkMacSystemFont', 'Hiragino Kaku Gothic ProN', 'メイリオ', Sans-Serif;
        border-radius: 16px;
        box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.34);
    }

    .cell-container {
        margin: 8px;
        text-align: left;
    }

    .cell-container h5 {
        padding: 0 8px 0 0;
        margin-bottom: 0px;
    }

    .cell-container p {
        margin-top: 0;
        padding-top: 0;
    }

</style>