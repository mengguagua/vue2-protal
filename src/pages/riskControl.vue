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
    div.first2-content
      div
        div.content-title
          div xxxx
          div.title-svg
        div.content-line
          div.tip xxxx，xxxx，xxxx
          div.line-title xxxx
          div(@click="goUrl").btn 进入平台
    div.third-content
      div.map
        div.content-title
          div xxxx
          div.sub-title xxxx,xxxx
        div.tab
          div.item(@click="changeTab(1)" :class="tab == 1 ? 'selected' : ''") tab1
          div.item(@click="changeTab(2)" :class="tab == 2 ? 'selected' : ''") tab2
        div(:class="tab == 1 ? 'tabLine' : 'tabLineRight'")
        div(v-for="(item, index) in listData" :key="`list-${index}`").list
          div {{item.summary}}
          div.time {{item.issuingTime}}
    div.four-content
      div
        div.content-title
          div xxxx
          div.title-svg
        div.content-line
          div.item(@click="openUrl(1)") xxxx
          div.item(@click="openUrl(2)") xxxx
          div.item(@click="openUrl(3)") xxxx
        div.content-line
          div.item(@click="openUrl(4)") xxxx
          div.item(@click="openUrl(5)") xxxx
          div.item(@click="openUrl(6)") xxxx
    //div.five-content
      div
        div.content-title
          div 行业风险
          div.title-svg
    Footer
</template>

<script>
import {newsTypeList, newsDetailList, userLogin} from '@/service/interface';
export default {
  name: 'App',
  data() {
    return {
      tab: 1,
      reloadCom: 0,
      scrollTopLong: 0,
      listData: [],
    };
  },
  methods: {
    changeTab(tab) {
      this.tab = tab;
      // this.search();
    },
    async goLogin() {
      // let resp = await userLogin();
      // window.open(resp)
    },
    goUrl() {
      window.open('http://www.baidu.com/');
    },
    openUrl(type) {
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
    async search() {
      let resp = await newsTypeList({pageIndex: 1,pageSize: 100});
      if (resp && resp.length) {
        let typeId = '';
        resp.forEach((item) => {
          // 后端需要使用名字匹配
          let nameDic = {
            1: '国内政策风险',
            2: '国外政策风险',
          };
          if (item.name === nameDic[this.tab]) {
            typeId = item.id;
          }
        })
        this.listData = await newsDetailList({pageSize: 8,pageIndex: 1,typeId: typeId});
        this.listData.forEach((item, index) => {
          if(item.summary.length > 60) {
            // 摘要小于60字
            item.summary = `${index+1}、${item.summary.slice(0,60)}......`
          } else {
            item.summary = `${index+1}、${item.summary}`
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
    // this.search();
  },

}
</script>

<style lang="less" scoped>
.top-image {
  position: relative;
  background: url('~@/assets/images/banner-risk.png') no-repeat;
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
  //background-image: linear-gradient(to bottom right,rgba(21,160,238,0.1),rgba(41,180,236,0.1));
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
.first2-content {
  display: flex;
  justify-content: center;
  width: 100vw;
  background: #fff;
  .content-line {
    margin-top: 30px;
    background: url('~@/assets/images/online-back-3.png') no-repeat;
    background-size: 100% 100%;
    width: 1200px;
    height: 350px;
    .tip {
      padding-top: 70px;
      font-family: PingFangSC-Medium;
      font-size: 18px;
      color: #FFFFFF;
      font-weight: 500;
      text-align: center;
    }
    .line-title {
      margin-top: 14px;
      margin-bottom: 80px;
      font-size: 28px;
      color: #FFFFFF;
      letter-spacing: 8px;
      font-weight: 600;
      text-align: center;
    }
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      width: 200px;
      height: 46px;
      background: #FFFFFF;
      border-radius: 4px;
      font-size: 16px;
      color: #0D6ED0;
      font-weight: 600;
      cursor: pointer;
    }
  }
}
.four-content {
  display: flex;
  justify-content: center;
  width: 100vw;
  background: #fff;
  margin-bottom: 12px;
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
.third-content {
  margin-top: 30px;
  margin-bottom: 0px;
  width: 100vw;
  background: #fff;
  .content-title {
    padding: 20px 0 30px 0;
    font-family: PingFangSC-Semibold;
    font-size: 28px;
    color: #333333;
    text-align: center;
    font-weight: 600;
  }
  .tab {
    display: flex;
    justify-content: center;
    //margin-bottom: 20px;
    .item {
      height: 36px;
      width: 90px;
      font-family: PingFangSC-Medium;
      font-size: 18px;
      color: #333333;
      text-align: center;
      font-weight: 500;
      cursor: pointer;
    }
    .selected {
      color: #3F8EF6;
    }
  }
  .tabLine {
    margin-bottom: 20px;
    width: 90px;
    height: 5px;
    background: #3F8EF6;
    transform: translate(544px,0px);
    transition: transform 0.2s;
  }
  .tabLineRight {
    margin-bottom: 20px;
    width: 90px;
    height: 5px;
    background: #3F8EF6;
    transform: translate(634px,0px);
    transition: transform 0.2s;
  }
  .sub-title {
    font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #444;
    text-align: center;
    font-weight: 500;
  }
  .map {
    margin: auto;
    width: 1270px;
    height: 540px;
    background: url('~@/assets/images/fourth-back.png') no-repeat;
    background-size: 100% 100%;
    .list {
      display: flex;
      justify-content: space-between;
      padding: 10px 30px;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #333333;
    }
    .time {
      width: 180px;
    }
  }
}
.five-content {
  margin-top: 30px;
  margin-bottom: 40px;
  width: 100vw;
  background: #fff;
}
</style>
