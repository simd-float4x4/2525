<template>
  <div class="main_view">
    <NavigationBar />
    <router-view>
    </router-view>
    <FooterView 
      :currentVersion="currentVersion" 
    />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import FooterView from './components/FooterView.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    NavigationBar,
    FooterView
  },
  data() {
    return {
      currentVersion: ''
    }
  },
  methods: {
    fetchData() {
        axios.get(`${process.env.VUE_APP_VERSION_URL}`)
        .then(response => {
          const data = response.data;
          if (data) {
            this.getCurrentVersion(data.currentVersion);
          }
        })
        .catch(error => {
          console.error('Failed Fetch Version Data:', error);
        });
    },
    getCurrentVersion(word) {
      this.currentVersion = word;
    },
  },
  created() {
    this.fetchData();
  }
}
</script>

<style>

html {
  width: 100%;
  height: 100%;
  --s: 200px; /* control the size */
  --c1: #1d1d1d;
  --c2: #4e4f51;
  --c3: #3c3c3c;

  background: repeating-conic-gradient(
        from 30deg,
        #0000 0 120deg,
        var(--c3) 0 180deg
      )
      calc(0.5 * var(--s)) calc(0.5 * var(--s) * 0.577),
    repeating-conic-gradient(
      from 30deg,
      var(--c1) 0 60deg,
      var(--c2) 0 120deg,
      var(--c3) 0 180deg
    );
  background-size: var(--s) calc(var(--s) * 0.577);
}

body {
  margin: 0;
  padding: 0;
  /* background-color: rgba(47, 47, 47, 1); */
  /* background-image: repeating-linear-gradient(135deg, rgba(13, 13, 13, 1) 5% 10%, rgba(34, 34, 34, 1) 10% 15%, rgba(26, 26, 26, 1) 15% 20%, rgba(47, 47, 47, 1) 20% 25%); */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.main_view {
  background-color: #F7F7F7;
  width: 390px;
  height: auto;
  margin: 0 auto;
  padding-bottom: 270px;
  position: relative;
  min-height: 80vh;
}

</style>
