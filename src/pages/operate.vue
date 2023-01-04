<template lang="pug">
  div
    div.top-image
      Header.header(:class="{noMenuBackground: scrollTopLong < 360, showMenuBackground: scrollTopLong > 360,}")
      div.banner-title
        div.text(style="padding-left: 110px") xxxx
        div.text xxxxxxxxxxxx
    div.first-content
      div
        div.content-title
          div xxxxxx1
          div.title-svg
        div.content
          iframe(src="http://www.baidu.com/"
            width="1200px" height="3000px" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no")
    Footer
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      scrollTopLong: 0,
      formData: {},
      options: [],
    };
  },
  methods: {
  },
  mounted() {
    if (document.documentElement.scrollTop) {
      document.documentElement.scrollTop = 0;
    } else {
      document.body.scrollTop = 0;
    }
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
      this.scrollTopLong = scrollTop;
    }
    let _this = this;
    window.onscroll = function () {
      //为了保证兼容性，这里取两个值，哪个有值取哪一个
      //scrollTop就是触发滚轮事件时滚轮的高度
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      _this.scrollTopLong = scrollTop;
      // console.log("滚动距离" + _this.scrollTopLong);
    }
  },

}
</script>

<style lang="less" scoped>
.top-image {
  position: relative;
  background: url('~@/assets/images/banner-operate.png') no-repeat;
  background-size: 100% 100%;
  height: 466px;
  .banner-title {
    padding-top: 170px;
    padding-left: 140px;
    color: #fff;
    font-family: AlimamaShuHeiTi-Bold;
    font-size: 56px;
    letter-spacing: 0;
    font-weight: 700;
    .text {
      text-shadow: 0px 4px 8px #15a0ee;
    }
  }
}
.header {
  position: fixed;
  top: 0px;
  width: 100vw;
  transition: 1.5s;
  z-index: 100;
}
.showMenuBackground {
  background-image: linear-gradient(to bottom right,rgba(21,160,238,0.98),rgba(41,180,236,0.98));
}
.noMenuBackground {
}
.title {
  padding: 40px 0 20px 0;
  font-family: SourceHanSansCN-Bold;
  font-size: 28px;
  color: #333333;
  text-align: center;
  font-weight: 700;
}
.content-title {
  padding: 60px 0 30px 0;
  font-family: PingFangSC-Semibold;
  font-size: 28px;
  color: #333333;
  text-align: center;
  font-weight: 600;
  .title-svg {
    padding-top: 10px;
    margin: auto;
    //height: 20px;
    width: 140px;
    background: url('~@/assets/images/content-title.jpg') no-repeat;
    background-size: 100% 100%;
  }
}
.first-content {
  display: flex;
  justify-content: center;
  width: 100vw;
  background: #fff;
  .content {
    width: 1200px;
    .head {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 30px;
      padding: 0 60px;
      height: 92px;
      border: 1.8px solid #666666;
      border-radius: 46px;
      font-family: PingFangSC-Semibold;
      font-size: 24px;
      color: #333333;
      font-weight: 600;
    }
    .search {
      padding: 33px 54px;
      height: 75px;
      background: #F4F9FF;
      border-radius: 2px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #666666;
      .row {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        .label {
          margin-right: 14px;
          width: 70px;
        }
        .select-block {
          margin-right: 8px;
          width: 160px;
        }
      }
    }
  }
}
</style>
