<template>

<div class="container" v-if="article">
    <div class="container-title">
        <div class="row">
            <div class="navigation">
                <i class="fa-solid fa-circle-chevron-left"></i>
                <router-link class="navigation-link" to="/news">戻る</router-link>
            </div>
        </div>
        <div class="row">
            <div class="date item">{{ article.noticeDate }}</div>
            <div class="category item">{{ article.noticeCategory }}</div>
        </div>
    <hr>
        <h3>
            {{ article.noticeTitle }}
        </h3>
    </div>
    <hr>
    <div class="container-content">
        <div v-html="article.noticeBody"></div>
    </div>
</div>

</template>

<script>
import axios from 'axios';

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      localId: null,
      article: null,
      noticesData: []
    };
  },
  methods: {
    fetchData() {
      axios.get(`${process.env.VUE_APP_NOTICE_LIST_URL}`)
        .then(response => {
          this.noticesData = response.data;
          this.article = this.noticesData.find(item => item.id === Number(this.localId));
          
          if (!this.article) {
            this.$router.replace({ name: 'Base' });
          }
        })
        .catch(error => {
          console.error('Failed Fetch NoticesData:', error);
          this.$router.replace({ name: 'Base' });
        });
    }
  },
  created() {
    this.localId = this.id;
    this.fetchData();
  },
  watch: {
    '$route.params.id': function(newId) {
      this.localId = newId;
      this.fetchData();
    }
  }
};
</script>

<style scoped>
    .container {
        margin: 16px;
    }

    .row {
        width: 100%;
        display: flex;
        margin-bottom: 16px;
    }

    .padding-row {
        width: 100%;
        padding: 16px 0;
        display: flex;
        margin-bottom: 16px;
    }

    .rules-header-row {
        width: 100%;
        text-align: left;
        font-weight: bold;
    }

    .list-style-none {
      list-style: none;
    }

    .row {
        width: 100%;
        display: flex;
        margin-bottom: 16px;
    }

    .item {
        width: 50%;
    }

    .date {
        text-align: left;
    }

    .category {
        text-align: right;
    }

    .navigation-link, .navigation {
        color: #007AFF;
        text-decoration: none;
    }
</style>

<style>
    .nd-rules-container {
        text-align: justify;
        text-justify: inter-ideograph;
        padding-bottom: 16px;
        display: block;
        font-size: 0.7rem;
        line-height: 2;
    }

    .nd-rules-list-container {
      margin: 0px;
      margin-bottom: 16px;
      padding: 0px;
      text-align: justify;
      text-justify: inter-ideograph;
      display: block;
      font-size: 0.7rem;
      line-height: 2;
    }

    .nd-rules-header-row {
        width: 100%;
        text-align: left;
        font-weight: bold;
    }

    .nd-list-style-none {
      list-style: none;
    }

    .nd-left {
      text-align: left;
    }

    .nd-middle {
      text-align: middle;
    }

    .nd-pink {
      text-decoration: underline;
      text-decoration-thickness: 0.5em;
      text-decoration-color: #ffa7a1;
      text-underline-offset: -0.2em;
      text-decoration-skip-ink: none; 
    }

    .nd-blue {
      text-decoration: underline;
      text-decoration-thickness: 0.5em;
      text-decoration-color: #a1ceff;
      text-underline-offset: -0.2em;
      text-decoration-skip-ink: none; 
    }

    .nd-yellow {
      text-decoration: underline;
      text-decoration-thickness: 0.5em;
      text-decoration-color: #ffdfa1;
      text-underline-offset: -0.2em;
      text-decoration-skip-ink: none; 
    }

    .nd-gray {
      text-decoration: underline;
      text-decoration-thickness: 0.5em;
      text-decoration-color: gray;
      text-underline-offset: -0.2em;
      text-decoration-skip-ink: none; 
    }

    .nd-h1 {
      width: 100%;
      text-align: left;
      padding: 0.25em 0.5em;/*上下 左右の余白*/
      border-left: 5px solid #252525;
    }

    .nd-h2 {
      width: 100%;
      text-align: left;
      padding: 0.25em 0.5em;/*上下 左右の余白*/
      border-left: 5px solid #252525;
    }

    .nd-h3 {
      width: 100%;
      text-align: left;
      padding: 0.25em 0.5em;/*上下 左右の余白*/
      border-left: 5px solid #252525;
    }
</style>