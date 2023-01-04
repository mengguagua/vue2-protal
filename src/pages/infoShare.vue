<template lang="pug">
  div
    div.top-image
      Header.header(:key="reloadCom" :class="{noMenuBackground: scrollTopLong < 360, showMenuBackground: scrollTopLong > 360,}")
      div.banner-title
        div.text(style="padding-left: 110px") xxxx
    //div.first-content
      div
        div.content-title
          div xxxx
          div.title-svg
        div.content-line
          div.block-line
            div.item(@click="goUrl(1)")
              div.img1.icon
              div xxxx
            div.item(@click="goUrl(2)")
              div.img2.icon
              div xxxx
            div.item(@click="goUrl(3)")
              div.img3.icon
              div xxxx
            div.item(@click="goUrl(4)")
              div.img4.icon
              div xxxx
            div.item(@click="goUrl(5)")
              div.img5.icon
              div xxxx
            div.item(@click="goUrl(6)")
              div.img6.icon
              div xxxx
    div.second-content
      div.map
        div.content-title
          div xxxx
          div.sub-title xxxx，xxxx
        div.content-all
          div.left(@click="goDetail(0)")
            img(width="600px" height="340px" :src="getValue('picUrl', 0)")
            div.card
              div.card-title {{getValue('title', 0)}}
              div.card-time.top-distance(style="width: 540px")
                div {{getValue('source', 0)}}
                div {{getValue('issuingTime', 0)}}
              div.top-distance {{getValue('summary', 0)}}
          div.right
            div.card.small-card(@click="goDetail(1)")
              img(width="120px" height="70px" :src="getValue('picUrl', 1)")
              div
                div.card-title {{getValue('title', 1)}}
                div.card-time.top-distance
                  div {{getValue('source', 1)}}
                  div {{getValue('issuingTime', 1)}}
                div.top-distance {{getValue('summary', 1)}}
            div.card.top-distance.small-card(@click="goDetail(2)")
              img(width="120px" height="70px" :src="getValue('picUrl', 2)")
              div
                div.card-title {{getValue('title', 2)}}
                div.card-time.top-distance
                  div {{getValue('source', 2)}}
                  div {{getValue('issuingTime', 2)}}
                div.top-distance {{getValue('summary', 2)}}
            div.card.top-distance.small-card(@click="goDetail(3)")
              img(width="120px" height="70px" :src="getValue('picUrl', 3)")
              div
                div.card-title {{getValue('title', 3)}}
                div.card-time.top-distance
                  div {{getValue('source', 3)}}
                  div {{getValue('issuingTime', 3)}}
                div.top-distance {{getValue('summary', 3)}}
        div.content-all(style="margin-top: 30px")
          div.left(@click="goDetail(4)")
            img(width="600px" height="340px" :src="getValue('picUrl', 4)")
            div.card
              div.card-title {{getValue('title', 4)}}
              div.card-time.top-distance(style="width: 540px")
                div {{getValue('source', 4)}}
                div {{getValue('issuingTime', 4)}}
              div.top-distance {{getValue('summary', 4)}}
          div.right
            div.card.small-card(@click="goDetail(5)")
              img(width="120px" height="70px" :src="getValue('picUrl', 5)")
              div
                div.card-title {{getValue('title', 5)}}
                div.card-time.top-distance
                  div {{getValue('source', 5)}}
                  div {{getValue('issuingTime', 5)}}
                div.top-distance {{getValue('summary', 5)}}
            div.card.top-distance.small-card(@click="goDetail(6)")
              img(width="120px" height="70px" :src="getValue('picUrl', 6)")
              div
                div.card-title {{getValue('title', 6)}}
                div.card-time.top-distance
                  div {{getValue('source', 6)}}
                  div {{getValue('issuingTime', 6)}}
                div.top-distance {{getValue('summary', 6)}}
            div.card.top-distance.small-card(@click="goDetail(7)")
              img(width="120px" height="70px" :src="getValue('picUrl', 7)")
              div
                div.card-title {{getValue('title', 7)}}
                div.card-time.top-distance
                  div {{getValue('source', 7)}}
                  div {{getValue('issuingTime', 7)}}
                div.top-distance {{getValue('summary', 7)}}
    div.third-content
      div
        div.content-title
          div xxxx2
          div.title-svg
        div.content-line
          div.card(v-for="(item, index) in infoData")
            img(width="150px" height="122px" :src="item.picUrl")
            div
              div.card-title {{item.title}}
              div.card-summary {{item.summary}}
              div.card-time {{item.issuingTime}}
    div.third-content
      div
        div.content-title
          div xxxx3
          div.title-svg
        div.content-line
          div.card(v-for="(item, index) in financeInfoData")
            img(width="150px" height="122px" :src="item.picUrl")
            div
              div.card-title {{item.title}}
              div.card-summary {{item.summary}}
              div.card-time {{item.issuingTime}}
    Footer
</template>

<script>
import {newsTypeList, newsDetailList} from '@/service/interface';
export default {
  name: 'App',
  data() {
    return {
      tab: 1,
      reloadCom: 0,
      scrollTopLong: 0,
      listData: [],
      infoData: [],
      financeInfoData: [],
    };
  },
  methods: {
    goUrl(type) {
      let urls = {
        1: 'http://www.baidu.com/',
        2: 'http://www.baidu.com/',
        3: 'http://www.baidu.com/',
        4: 'http://www.baidu.com/',
        5: 'http://www.baidu.com/',
        6: 'http://www.baidu.com/',
      };
      window.open(urls[type]);
    },
    changeTab(tab) {
      this.tab = tab;
    },
    goDetail(index) {
      this.$router.push(`/newsDetail?id=${this.listData[index].id}`);
    },
    getValue(prop, index) {
      return this.listData.length > index ? this.listData[index][prop] : '';
    },
    async search(name, data, pageSize, summaryLength, titleLength) {
      let resp = await newsTypeList({pageIndex: 1,pageSize: 100});
      if (resp && resp.length) {
        let typeId = '';
        resp.forEach((item) => {
          // 后端需要使用名字匹配
          if (item.name === name) {
            typeId = item.id;
          }
        })
        this[data] = await newsDetailList({pageSize: pageSize,pageIndex: 1,typeId: typeId});
        this[data].forEach((item) => {
          if(item.summary.length > summaryLength) {
            // 摘要小于summaryLength个字
            item.summary = `${item.summary.slice(0,summaryLength)}......`
          }
          if(item.title.length > titleLength) {
            // 标题小于summaryLength个字
            item.title = `${item.title.slice(0,titleLength)}......`
          }
        });
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
    // this.search('政策法规','listData',8,70,18);
    // this.search('行业信息','infoData',10, 20,18);
    // this.search('金融资讯','financeInfoData',10,24,18);
  },

}
</script>

<style lang="less" scoped>
.top-image {
  position: relative;
  background: url('~@/assets/images/banner-infoShare.png') no-repeat;
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
    width: 1200px;
    height: 150px;
    .block-line {
      display: flex;
      justify-items: center;
      justify-content: center;
      .item {
        margin: 0 60px;
        text-align: center;
        .icon {
          margin-bottom: 12px;
          height: 70px;
          width: 72px;
        }
        .img1 {
          background: url('~@/assets/images/info-1.png') no-repeat;
          background-size: 100% 100%;
        }
        .img2 {
          background: url('~@/assets/images/info-2.png') no-repeat;
          background-size: 100% 100%;
        }
        .img3 {
          background: url('~@/assets/images/info-3.png') no-repeat;
          background-size: 100% 100%;
        }
        .img4 {
          background: url('~@/assets/images/info-4.png') no-repeat;
          background-size: 100% 100%;
        }
        .img5 {
          background: url('~@/assets/images/info-5.png') no-repeat;
          background-size: 100% 100%;
        }
        .img6 {
          background: url('~@/assets/images/info-6.png') no-repeat;
          background-size: 100% 100%;
        }
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
      height: 122px;
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
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        width: 415px;
      }
    }
    .small-card {
      display: flex;
      align-items: center;
      cursor: pointer;
      img {
        margin-right: 12px;
      }
    }
    .top-distance {
      margin-top: 12px;
    }
    .left {
      margin-left: 20px;
      cursor: pointer;
    }
    .right {

    }
  }
}
.third-content {
  display: flex;
  justify-content: center;
  width: 100vw;
  background: #fff;
  .content-line {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    //height: 150px;
    .card {
      display: flex;
      margin: 12px;
      width: 546px;
      height: 122px;
      background: #FFFFFF;
      box-shadow: 0 3px 4px 2px rgba(222,222,222,0.50);
      font-size: 14px;
      color: #666666;
      font-weight: 500;
      img {
        margin-right: 12px;
      }
      .card-title {
        margin-top: 18px;
        font-size: 20px;
        color: #333333;
      }
      .card-summary {
        margin: 12px 0;
      }
    }
  }
}
</style>
