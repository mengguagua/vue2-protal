<template lang="pug">
  div
    div.top-image
      Header.header(:key="reloadCom" :class="{noMenuBackground: scrollTopLong < 460, showMenuBackground: scrollTopLong > 460,}")
      div.title
        div.zh DEMO服务平台
        div.en Global Digital International Trade Service Platform
    div.first-content
      div.content-line
        div.item.item-img1 DEMO
        div.item.item-img2 DEMO
        div.item.item-img4 DEMO
        div.item.item-img7 DEMO
      div.content-line
        div.item.item-img8 DEMO
        div.item.item-img9 DEMO
        div.item.item-img5 DEMO
        div.item.item-img3 DEMO
    div.second-content
      div.content-line
        div.left
          div.head
            span.card-title 新闻动态
            span(style="cursor: pointer" @click="goNews") MORE >>
          div.news-text(v-for="(item,index) in newsTexts" :key="`news-${index}`" @click="goDetail(item)")
            span.text {{item.articleTitle}}
            span.time {{item.releaseTime}}
        div.right
          div.head
            span.card-title 消息公告
            span(style="cursor: pointer" @click="goNotice") MORE >>
          div.news-text(v-for="(item,index) in noticeTexts" :key="`news-${index}`" @click="goNoticeDetail(item)")
            span.text {{item.articleTitle}}
            span.time {{item.releaseTime}}
    div.third-content
      div.title 合作伙伴
    Footer
</template>

<script>
import {listNews, listNotice, getUserInfo} from '@/service/interface';
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
    goNews() {
      this.$router.push('/news');
    },
    goNotice() {
      this.$router.push('/notice');
    },
    init() {
      this.listNews();
      this.listNotice();
    },
    listNews() {
      let data = {
        current: 0,
        size: 10,
      };
      listNews(data).then((resp)=> {
        if (resp.list && resp.list.length > 4) {
          this.newsTexts = resp.list.slice(0, 4);
        } else {
          this.newsTexts = resp.list;
        }
      });
    },
    listNotice() {
      let data = {
        current: 0,
        size: 10,
      };
      listNotice(data).then((resp)=> {
        if (resp.list && resp.list.length > 4) {
          this.noticeTexts = resp.list.slice(0, 4);
        } else {
          this.noticeTexts = resp.list;
        }
      });
    },
    goDetail(ret) {
      this.$router.push({path: '/newsDetail',query: {articleId: ret.articleId, type: 'news'}});
    },
    goNoticeDetail(ret) {
      this.$router.push({path: '/newsDetail',query: {articleId: ret.articleId, type: 'notice'}});
    }
  },
  mounted() {
    let _this = this;
    window.onscroll = function () {
      //为了保证兼容性，这里取两个值，哪个有值取哪一个
      //scrollTop就是触发滚轮事件时滚轮的高度
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      _this.scrollTopLong = scrollTop;
      // console.log("滚动距离" + _this.scrollTopLong);
    }
    // this.init();
    // console.log('window.screen.width * window.devicePixelRatio',window.screen.width * window.devicePixelRatio)
    // getUserInfo({}).then((resp) => {
    //   console.log('getUserInfo', resp);
    //   localStorage.setItem('qzUser', JSON.stringify(resp));
    //   this.reloadCom += 1;
    // });
  },

}
</script>

<style lang="less" scoped>
.top-image {
  position: relative;
  background: url('~@/assets/images/banner2.jpg') no-repeat;
  background-size: 100% 100%;
  height: 540px;
  .title {
    padding-top: 200px;
    color: #fff;
    text-align: center;
    .zh {
      font-size: 40px;
    }
    .en {
      margin-top: 4px;
      font-size: 16px;
      font-weight: 400;
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
  background-image: linear-gradient(to bottom right,rgba(0,58,139,0.98),rgba(66,129,198,0.98));
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
.first-content {
  padding: 20px 6vw 60px 6vw;
  background: #fff;
  .content-line {
    display: flex;
    justify-items: center;
    margin-top: 30px;
    .item {
      margin-right: 30px;
      padding-left: 140px;
      width: 145px;
      height: 120px;
      display: flex;
      align-items: center;
      font-family: SourceHanSansCN-Bold;
      font-size: 24px;
      color: #333;
      text-align: center;
      font-weight: 700;
      box-shadow: 0 0 4px #dedede;
      cursor: pointer;
    }
    .item-img1 {
      background: url('~@/assets/images/home1-1.png') no-repeat;
      background-size: 100% 100%;
    }
    .item-img2 {
      background: url('~@/assets/images/home1-2.png') no-repeat;
      background-size: 100% 100%;
    }
    .item-img3 {
      background: url('~@/assets/images/home1-3.png') no-repeat;
      background-size: 100% 100%;
    }
    .item-img4 {
      background: url('~@/assets/images/home1-4.png') no-repeat;
      background-size: 100% 100%;
    }
    .item-img5 {
      background: url('~@/assets/images/home1-5.png') no-repeat;
      background-size: 100% 100%;
    }
    .item-img6 {
      background: url('~@/assets/images/home1-6.png') no-repeat;
      background-size: 100% 100%;
    }
    .item-img7 {
      background: url('~@/assets/images/home1-7.png') no-repeat;
      background-size: 100% 100%;
    }
    .item-img8 {
      background: url('~@/assets/images/home1-8.jpg') no-repeat;
      background-size: 100% 100%;
    }
    .item-img9 {
      background: url('~@/assets/images/home1-9.jpg') no-repeat;
      background-size: 100% 100%;
    }
  }
}
.second-content {
  padding: 20px 6vw 60px 6vw;
  background: #F6Faff;
  .content-line {
    display: flex;
    justify-items: center;
    justify-content: space-between;
    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 19px;
      margin-bottom: 20px;
      height: 88px;
      background-image: linear-gradient(to right,rgba(255,255,255,0.98),rgba(227, 238, 250,0.98));
      font-size: 14px;
      font-weight: 400;
      color: #0060D9;
      .card-title {
        font-family: SourceHanSansCN-Bold;
        font-size: 28px;
        color: #333333;
        font-weight: 700;
      }
    }
    .news-text {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 19px;
      font-size: 14px;
      color: #333333;
      cursor: pointer;
      .text {
        word-wrap: break-word; /*强制换行*/
        overflow: hidden; /*超出隐藏*/
        text-overflow: ellipsis;/*隐藏后添加省略号*/
        white-space: nowrap;/*强制不换行*/
        width: 490px;
      }
      .time {
        margin-left: 12px;
        color: #999999;
        width: 90px;
      }
    }
    .left {
      width: 590px;
      height: 264px;
      background: #fff;
      box-shadow: 0 0 4px #efefef;
    }
    .right {
      width: 590px;
      height: 264px;
      background: #fff;
      box-shadow: 0 0 4px #efefef;
    }
  }
}
.third-content {
  padding: 20px 6vw 60px 6vw;
  background: #fff;
}
</style>
