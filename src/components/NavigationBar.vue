<template>
    <div class="navigation_bar">
        <div class="nav_title">
            <router-link class="app_title" to="/">
                 <span>nicochan</span>
            </router-link>
        </div>
    </div>
</template>

<style>
    .navigation_bar {
        background-color: #252525;
        width: 100%;
        height: 56px;
        box-shadow: 0px 0px 10px -10px rgba(0, 0, 0, 0.34);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav_title {
        text-align: center;
    }

    .app_title {
        color: #f7f7f7;
        font-weight: bold;
        font-size: 24px;
        text-decoration: none;
    }
</style>
