<template lang="pug">
  div
    div.top-image
      Header.header(:key="reloadCom" :class="{noMenuBackground: scrollTopLong < 360, showMenuBackground: scrollTopLong > 360,}")
      div.banner-title
        div.text(style="padding-left: 110px") xxxx
    div.first-content
      div
        div.content-title
          div xxxx
          div.title-svg
        div.content-line
          div.block-line
            div.item xxxxxxxx
            div.item.item-center
              div(style="text-align: center")
                img(src="@/assets/images/risk-icon-1.svg")
                div xxxxxxxx
            div.item xxxxxxxx
          div.btn(@click="goLogin") 立即登录
          div.btn-tip xxxxxxxx
    div.second-content
      div
        div.content-title
          div xxxx
          div.title-svg
        div.content-line
          div.item
            div.back-img.img1
            div xxxx
          div.item
            div.back-img.img2
            div xxxx
          div.item
            div.back-img.img3
            div xxxx
          div.item
            div.back-img.img4
            div xxxx
    div.third-content
      div
        div.content-title
          div xxxx
          div.title-svg
        div.back-img
        div.line-block
          div.item
            div.img.icon1
            div xxxx
          div.item
            div.img.icon2
            div xxxx
          div.item
            div.img.icon3
            div xxxx
          div.item
            div.img.icon4
            div xxxx
    Footer
</template>

<script>
import {userLogin} from '@/service/interface';
export default {
  name: 'App',
  data() {
    return {
      tab: 1,
      reloadCom: 0,
      scrollTopLong: 0,
    };
  },
  methods: {
    changeTab(tab) {
      this.tab = tab;
    },
    async goLogin() {
      // let resp = await userLogin();
      // window.open(resp)
    },
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
  background: url('~@/assets/images/banner-monitor.png') no-repeat;
  background-size: 100% 100%;
  height: 466px;
  .banner-title {
    padding-top: 200px;
    padding-left: 140px;
    color: #fff;
    font-family: AlimamaShuHeiTi-Bold;
    font-size: 56px;
    letter-spacing: 0;
    font-weight: 700;
    .text {
      text-shadow: 4px 4px 8px #0098ee;
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
  .content-line {
    margin-top: 30px;
    background: url('~@/assets/images/online-back-1.png') no-repeat;
    background-size: 100% 100%;
    width: 1200px;
    height: 350px;
    .block-line {
      display: flex;
      justify-items: center;
      padding-top: 38px;
      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 18px;
        width: 356px;
        height: 154px;
        background: #FFFFFF;
        border: 1.5px solid rgba(68,133,221,0.22);
        box-shadow: 0 0 4px 2px #F4F9FE;
        border-radius: 16px;
        font-family: PingFangSC-Semibold;
        font-size: 20px;
        color: #091C43;
        font-weight: 600;
      }
      .item-center {
        background-image: linear-gradient(180deg, #FFFFFF 5%, #F0F7FF 100%);
        border: 1.5px solid rgba(68,133,221,0.80);
      }
    }
    .btn {
      margin: auto;
      margin-top: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 146px;
      height: 40px;
      background: #3F8EF6;
      border-radius: 24px;
      color: #fff;
      cursor: pointer;
    }
    .btn-tip {
      margin-top: 25px;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #555;
      text-align: center;
    }
  }
}
.second-content {
  display: flex;
  justify-content: center;
  width: 100vw;
  background: #fff;
  .content-line {
    display: flex;
    justify-items: center;
    margin-top: 30px;
    .item {
      margin-right: 20px;
      width: 268px;
      height: 240px;
      font-family: SourceHanSansCN-Bold;
      font-size: 20px;
      color: #091C43;
      font-weight: 600;
      cursor: pointer;
      border-radius: 2px;
      background: #FFFFFF;
      box-shadow: 0 2px 10px 4px #EBF3FF;
      text-align: center;
      .back-img {
        margin: 30px 0 20px 14px;
        width: 240px;
        height: 134px;
      }
      .img1 {
        background: url('~@/assets/images/monitor-back-1.png') no-repeat;
        background-size: 100% 100%;
      }
      .img2 {
        background: url('~@/assets/images/monitor-back-2.png') no-repeat;
      }
      .img3 {
        background: url('~@/assets/images/monitor-back-3.png') no-repeat;
      }
      .img4 {
        background: url('~@/assets/images/monitor-back-4.png') no-repeat;
      }
    }
  }
}
.third-content {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 0px;
  width: 100vw;
  background: #fff;
  .back-img {
    width: 1200px;
    height: 294px;
    background: url('~@/assets/images/monitor-back.jpg') no-repeat;
    background-size: 100% 100%;
  }
  .line-block {
    margin-top: 40px;
    margin-bottom: 80px;
    display: flex;
    justify-content: center;
    .item {
      display: flex;
      align-items: center;
      margin: 0 16px;
      width: 268px;
      height: 88px;
      background-image: linear-gradient(180deg, #FFFFFF 5%, #F0F7FF 100%);
      box-shadow: 0 0 4px 2px #F4F9FE;
      border-radius: 8px;
      .img {
        margin-left: 26px;
        margin-right: 32px;
        width: 50px;
        height: 37px;
      }
      .icon1 {
        background: url('~@/assets/images/monitor-icon1.svg') no-repeat;
        background-size: 100% 100%;
      }
      .icon2 {
        background: url('~@/assets/images/monitor-icon2.svg') no-repeat;
        background-size: 100% 100%;
      }
      .icon3 {
        background: url('~@/assets/images/monitor-icon3.svg') no-repeat;
        background-size: 100% 100%;
      }
      .icon4 {
        background: url('~@/assets/images/monitor-icon4.svg') no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}
</style>
