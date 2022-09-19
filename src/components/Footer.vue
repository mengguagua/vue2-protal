<!-- 底部 -->
<template lang="pug">
  div.text-link
    div.text-portal DEMO平台
    div.text
      span 主办单位：DEMO
      span 地址：DEMO
      span 技术支持：DEMO
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
    };
  },
  mounted() {
  },
  computed: {
  },
  methods: {
  }
};
</script>

<style lang="less">
.text-link {
  padding: 20px 0;
  background: #00367A;
  color: #fff;
  font-weight: 400;
  text-align: center;
  font-size: 12px;
  .text-portal {
    margin-right: 40px;
    color: #FFFFFF;
  }
  .text {
    margin-top: 12px;
    opacity: 0.6;
    span {
      padding: 0 20px;
    }
  }
}
</style>
