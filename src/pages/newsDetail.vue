<template lang="pug">
  div
    div.top-image
      Header.header
      div.title
        div.zh DEMO服务平台
        div.en Global Digital International Trade Service Platform
    div.content
      div.router
        span(@click="goIndex" style="cursor: pointer") 首页
        span(@click="goList" style="cursor: pointer") > {{type === 'news' ? '新闻动态' : '消息公告'}}
        span > 正文
      div.card(v-html="htmlText")
    Footer
</template>

<script>
import {articleGet} from '@/service/interface';
export default {
  data() {
    return {
      htmlText: '',
      type: '',
    };
  },
  methods: {
    handleSizeChange() {

    },
    handleCurrentChange() {

    },
    goList() {
      if (this.type === 'news') {
        this.$router.push('/news');
      } else {
        this.$router.push('/notice');
      }
    },
  },
  mounted() {
    let articleId = this.$route.query.articleId;
    this.type = this.$route.query.type;
    articleGet({articleId: articleId}).then((resp) => {
      this.htmlText = resp.articleContent;
      console.log(this.htmlText);
    });
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
    padding-top: 120px;
    color: #fff;
    text-align: center;
    font-weight: 700;
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
.content {
  padding: 20px 10vw 60px 10vw;
  background: #f6faff;
  .router {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
  }
  .card {
    margin-top: 20px;
    padding: 12px 20px;
    min-height: 400px;
    background: #fff;
  }
}
</style>
