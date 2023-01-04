<template lang="pug">
  div
    div.top-image
      Header.header(:key="reloadCom" :class="{noMenuBackground: scrollTopLong < 360, showMenuBackground: scrollTopLong > 360,}")
      div.banner-title
        div.text(style="padding-left: 110px") xxxx  xxxx  xxxx
    div.first-content
      div
        div.content-title
          div xxxxxx
          div.title-svg
        div.content-line
          div.block-line
            div.item xxxxxx1
            div.item.item-center
              div(style="text-align: center")
                img(src="@/assets/images/online-icon-1.svg")
                div xxxxxx
            div.item xxxxxx
          div.btn(@click="goLogin") 立即登录
          div.btn-tip xxxxxx
    div.second-content
      div.map
        div.content-title
          div xxxxxx2
          div.sub-title xxxxxx，xxxxxx
        //div.more 查看更多 >>
        div.content-all
          div.left
            img(width="600px" height="340px" :src="listData.length > 0 ? listData[0].picUrl : ''")
            div.card(style="margin-top:24px")
              div.card-title {{listData.length > 0 ? listData[0].title : ''}}
              div.top-distance {{listData.length > 0 ? listData[0].summary : ''}}
              div.card-time.top-distance {{listData.length > 0 ? listData[0].issuingTime : ''}}
          div.right
            div.card
              div.card-title {{listData.length > 1 ? listData[1].title : ''}}
              div.top-distance {{listData.length > 1 ? listData[1].summary : ''}}
              div.card-time.top-distance {{listData.length > 1 ? listData[1].issuingTime : ''}}
            div.card.top-distance
              div.card-title {{listData.length > 2 ? listData[2].title : ''}}
              div.top-distance {{listData.length > 2 ? listData[2].summary : ''}}
              div.card-time.top-distance {{listData.length > 2 ? listData[2].issuingTime : ''}}
            div.card.top-distance
              div.card-title {{listData.length > 3 ? listData[3].title : ''}}
              div.top-distance {{listData.length > 3 ? listData[3].summary : ''}}
              div.card-time.top-distance {{listData.length > 3 ? listData[3].issuingTime : ''}}
    div.third-content
      div
        div.content-title
          div xxxxxx3
          div.title-svg
        div.content-line
          div.item(@click="goUrl(1)") xxxxxx
          div.item(@click="goUrl(2)") xxxxxx
          div.item(@click="goUrl(1)") xxxxxx
        div.content-line
          div.item(@click="goUrl(3)") xxxxxx
          div.item(@click="goUrl(4)") xxxxxx
          div.item(@click="goUrl(5)") xxxxxx
    Footer
</template>

<script>
import {newsTypeList, newsDetailList, userLogin} from '@/service/interface';
export default {
  name: 'App',
  data() {
    return {
      reloadCom: 0,
      scrollTopLong: 0,
      listData: [],
    };
  },
  methods: {
    async goLogin() {
      let resp = await userLogin();
      window.open(resp)
    },
    async search() {
      let resp = await newsTypeList({pageIndex: 1,pageSize: 100});
      if (resp && resp.length) {
        let typeId = '';
        resp.forEach((item) => {
          // 后端需要使用名字匹配
          if (item.name === '电商信用') {
            typeId = item.id;
          }
        })
        this.listData = await newsDetailList({pageSize: 4,pageIndex: 1,typeId: typeId});
        this.listData.forEach((item) => {
          if(item.summary.length > 75) {
            // 摘要小于75字
            item.summary = `${item.summary.slice(0,75)}......`
          }
        });
      }
    },
    goUrl(type) {
      let urls = {
        1: 'https://www.SEC.gov',
        2: 'https://www.gov.uk',
        3: 'https://www.handelsregister.de',
        4: 'https://www.mca.gov.in',
        5: 'https://www.acra.gov.sg',
        6: 'https://www.icris.cr.gov.hk/csci/',
      };
      window.open(urls[type]);
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
    // this.search();
  },

}
</script>

<style lang="less" scoped>
.top-image {
  position: relative;
  background: url('~@/assets/images/banner-onlice.png') no-repeat;
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
.third-content {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  width: 100vw;
  background: #fff;
  .content-line {
    display: flex;
    justify-items: center;
    margin-top: 30px;
    .item {
      margin-right: 20px;
      padding: 0 0 0 32px;
      width: 355px;
      height: 165px;
      display: flex;
      align-items: center;
      font-family: SourceHanSansCN-Bold;
      font-size: 20px;
      color: #091C43;
      font-weight: 600;
      cursor: pointer;
      border-radius: 2px;
      //box-shadow: 0 0 4px 2px #F4F9FE;
      background: url('~@/assets/images/online-back-2.png') no-repeat;
      background-size: 100% 100%;
      &:hover {
        box-shadow: 1px 1px 4px 4px #efefef;
      }
    }
  }
}
.second-content {
  margin-top: 30px;
  margin-bottom: 40px;
  width: 100vw;
  background: #fff;
  .map {
    margin: auto;
    width: 1270px;
  }
  .content-title {
    padding: 20px 0 30px 0;
    font-family: PingFangSC-Semibold;
    font-size: 28px;
    color: #333333;
    text-align: center;
    font-weight: 600;
    .sub-title {
      font-family: PingFangSC-Medium;
      font-size: 18px;
      color: #444;
      text-align: center;
      font-weight: 500;
    }
  }
  .more {
    margin-bottom: 12px;
    text-align: right;
    font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #0D6ED0;
    font-weight: 500;
  }
  .content-all {
    display: flex;
    justify-content: space-between;
    .card {
      padding: 20px 24px;
      width: 552px;
      height: 127px;
      background: #F5F9FF;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #333333;
      letter-spacing: 0;
      line-height: 22px;
      font-weight: 400;
      .card-title {
        font-size: 20px;
        font-weight: 500;
      }
      .card-time {
        font-size: 12px;
      }
    }
    .top-distance {
      margin-top: 18px;
    }
    .left {
      margin-left: 20px;
    }
    .right {

    }
  }
}
</style>
