<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {getUserInfo} from '@/service/interface';
export default {
  components: {
  },
  computed: {
  },
  data() {
    return {
    };
  },
  methods: {
  },
  mounted () {
    // console.log('route', this.$route)
    // console.log('router', this.$router)
  },
  beforeMount() {
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
#app {
  overflow-x: hidden;
}
body {
  font-family: 'Nunito Sans', BlinkMacSystemFont, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', sans-serif;
}
</style>
