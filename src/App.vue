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

<style>
#app {
  overflow-x: hidden;
}
</style>
