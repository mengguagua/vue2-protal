<!-- 底部 -->
<template lang="pug">
  div.text-top
    div.content
      div.title(style="margin-top: 12px;") 联系我们
      div(style="margin-top: 12px;") 地址：浙江省xx市xx区xx镇xx号
      div.unit 主办单位：xxx服务有限公司
      div.unit(style="margin-top: 12px;")
        span 承建单位：xxx有限公司
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
.text-top {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background: #0D6ED0;
  color: #fff;
  font-weight: 400;
  font-size: 12px;
  .content {
    width: 1200px;
    font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #FFFFFF;
    font-weight: 500;
    .title {
      font-size: 22px;
      font-weight: 600;
    }
    .unit {
      margin-top: 30px;
      text-align: center;
    }
  }
}
</style>
