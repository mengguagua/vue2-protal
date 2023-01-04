<template lang="pug">
  div
    div.top-image
      Header.header(:key="reloadCom" :class="{noMenuBackground: scrollTopLong < 360, showMenuBackground: scrollTopLong > 360,}")
      div.banner-title
        div.text(style="padding-left: 110px") xxxxx
        div.text xxxxxxxxxxx
    div.first-content
      div
        div.content-title
          div xxxxx1
          div.title-svg
        div.content-line
          div.item
            div.icon-1
            div.item-content
              div xxxxxx
              div.text xxxxxx，xxxxxx
          div.item
            div.icon-2
            div.item-content
              div xxxxxx
              div.text xxxxxx，xxxxxx
          div.item
            div.icon-3
            div.item-content
              div xxxxxx
              div.text xxxxxx，xxxxxx
        div.content-line
          div.item
            div.icon-4
            div.item-content
              div xxxxxx
              div.text xxxxxx，xxxxxx
          div.item
            div.icon-5
            div.item-content
              div xxxxxx
              div.text xxxxxx
          div.item
            div.icon-6
            div.item-content
              div xxxxxx
              div.text xxxxxx，xxxxxx
    div.second-content
      div
        div.content-title
          div xxxxxx2
          div.title-svg
        div.item-line
          div.item
            div.icon-common.icon-1
            div.item-title xxxxxx
            div 跨境B2C清关
            div 跨境B2B清关
            div 跨境数据分析
          div.item
            div.icon-common.icon-2
            div.item-title xxxxxx
            div yyyyyy
            div yyyyyy
            div yyyyyy
          div.item
            div.icon-common.icon-3
            div.item-title xxxxxx
            div yyyyyy
            div yyyyyy
            div yyyyyy
          div.item
            div.icon-common.icon-4
            div.item-title xxxxxx
            div yyyyyy
            div yyyyyy
            div yyyyyy
    div.third-content
      div
        div.content-title
          div xxxxxx3
          div.title-svg
        div.item-line
          div.item(@click="goUrl(1)")
            div.icon-common.icon-1
            div yyyyyy
          div.item(@click="goUrl(2)")
            div.icon-common.icon-2
            div yyyyyy
          div.item(@click="goUrl(3)")
            div.icon-common.icon-3
            div yyyyyy
          div.item(@click="goUrl(4)")
            div.icon-common.icon-4
            div yyyyyy
          div.item(@click="goUrl(5)")
            div.icon-common.icon-5
            div yyyyyy
          div.item(@click="goUrl(6)")
            div.icon-common.icon-6
            div yyyyyy
    Footer
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      reloadCom: 0,
      scrollTopLong: 0,
      newsTexts: [
        {
          articleTitle: '这是新闻动态标题',
          releaseTime: '2022-08-11',
        }, {
          articleTitle: '这是新闻动态标题',
          releaseTime: '2022-08-11',
        }, {
          articleTitle: '这是新闻动态标题',
          releaseTime: '2022-08-11',
        }, {
          articleTitle: '这是新闻动态标题',
          releaseTime: '2022-08-11',
        },
      ],
      noticeTexts: [
        {
          articleTitle: '这是消息公告标题',
          releaseTime: '2022-08-11',
        }, {
          articleTitle: '这是消息公告标题',
          releaseTime: '2022-08-11',
        }, {
          articleTitle: '这是消息公告标题',
          releaseTime: '2022-08-11',
        }, {
          articleTitle: '这是消息公告标题',
          releaseTime: '2022-08-11',
        },
      ],
    };
  },
  methods: {
    goUrl(type) {
      let urls = {
        1: 'http://www.baidu.com/',
        5: 'http://www.baidu.com/',
        6: 'http://www.baidu.com/',
      };
      let localUrls = {
        2: '/onlineCredit',
        3: '/operate',
        4: '/riskControl',
      }
      if (type == 2 || type == 3 || type == 4) {
        this.$router.push(localUrls[type])
      } else {
        window.open(urls[type]);
      }
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
  background: url('~@/assets/images/banner-index.png') no-repeat;
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
    //height: 14px;
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
    display: flex;
    justify-items: center;
    margin-top: 30px;
    .item {
      margin-right: 30px;
      padding: 0 0 0 34px;
      width: 370px;
      height: 170px;
      display: flex;
      align-items: center;
      font-family: SourceHanSansCN-Bold;
      font-size: 20px;
      color: #091C43;
      font-weight: 600;
      cursor: pointer;
      border-radius: 2px;
      background-image: linear-gradient(180deg, #FFFFFF 5%, #F0F7FF 100%);
      border: 1.5px solid rgba(68,133,221,0.22);
      .icon-1 {
        height: 55px;
        width: 50px;
        background: url('~@/assets/images/icon-1.svg') no-repeat;
        background-size: 100% 100%;
      }
      .icon-2 {
        height: 55px;
        width: 50px;
        background: url('~@/assets/images/icon-2.svg') no-repeat;
        background-size: 100% 100%;
      }
      .icon-3 {
        height: 55px;
        width: 50px;
        background: url('~@/assets/images/icon-3.svg') no-repeat;
        background-size: 100% 100%;
      }
      .icon-4 {
        height: 55px;
        width: 50px;
        background: url('~@/assets/images/icon-4.svg') no-repeat;
        background-size: 100% 100%;
      }
      .icon-5 {
        height: 55px;
        width: 50px;
        background: url('~@/assets/images/icon-5.svg') no-repeat;
        background-size: 100% 100%;
      }
      .icon-6 {
        height: 55px;
        width: 50px;
        background: url('~@/assets/images/icon-6.svg') no-repeat;
        background-size: 100% 100%;
      }
      .icon-1 {
        height: 55px;
        width: 50px;
        background: url('~@/assets/images/icon-1.svg') no-repeat;
        background-size: 100% 100%;
      }
      .item-content {
        margin-left: 24px;
        .text {
          margin-top: 20px;
          font-size: 18px;
          color: #666666;
          font-weight: 500;
        }
      }
    }
  }
}
.second-content {
  display: flex;
  justify-content: center;
  width: 100vw;
  background: #fff;
  .item-line {
    display: flex;
    .item {
      padding-top: 60px;
      margin: 0 40px;
      width: 254px;
      height: 278px;
      background: url('~@/assets/images/index-back.png') no-repeat;
      background-size: 100% 100%;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #333333;
      text-align: center;
      .item-title {
        margin: 24px 0 16px 0;
        font-family: PingFangSC-Medium;
        font-size: 20px;
        font-weight: 500;
      }
    }
    .icon-common {
      margin: auto;
      width: 83px;
      height: 83px;
      background-size: 100% 100%;
    }
    .icon-1 {
      background: url('~@/assets/images/second-icon-1.svg') no-repeat;
    }
    .icon-2 {
      background: url('~@/assets/images/second-icon-2.svg') no-repeat;
    }
    .icon-3 {
      background: url('~@/assets/images/second-icon-3.svg') no-repeat;
    }
    .icon-4 {
      background: url('~@/assets/images/second-icon-4.svg') no-repeat;
    }
  }
}
.third-content {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  width: 100vw;
  background: #fff;
  .item-line {
    display: flex;
    .item {
      margin: 0 22px;
      width: 170px;
      font-family: PingFangSC-Medium;
      font-size: 20px;
      color: #333333;
      text-align: center;
      font-weight: 500;
      cursor: pointer;
      .icon-common {
        margin-bottom: 12px;
        width: 170px;
        height: 107px;
        background-size: 100% 100%;
        &:hover {
          box-shadow: 1px 1px 4px 4px #efefef;
        }
      }
      .icon-1 {
        background: url('~@/assets/images/third-icon-1.svg') no-repeat;
      }
      .icon-2 {
        background: url('~@/assets/images/third-icon-2.svg') no-repeat;
      }
      .icon-3 {
        background: url('~@/assets/images/third-icon-3.svg') no-repeat;
      }
      .icon-4 {
        background: url('~@/assets/images/third-icon-4.svg') no-repeat;
      }
      .icon-5 {
        background: url('~@/assets/images/third-icon-5.svg') no-repeat;
      }
      .icon-6 {
        background: url('~@/assets/images/third-icon-6.svg') no-repeat;
      }
    }
  }
}
</style>
