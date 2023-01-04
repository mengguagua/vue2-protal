<template lang="pug">
  div
    div.top-image
      Header.header
    div.content
      div(style="display: flex;justify-content: space-between;")
        div.router
          span(@click="goIndex" style="cursor: pointer") 首页
          span &nbsp;/ 信息共享 / 正文
        div(@click="goBack").go-back 返回
      div.card
        div.detail-title {{articleData.title}}
        div.detail-time {{articleData.issuingTime}} &nbsp;&nbsp;&nbsp;&nbsp; {{articleData.source}}
        div(v-html="htmlText")
    Footer
</template>

<script>
import {articleGet} from '@/service/interface';
export default {
  data() {
    return {
      htmlText: '',
      articleData: '',
    };
  },
  methods: {
    handleSizeChange() {

    },
    handleCurrentChange() {

    },
  },
  mounted() {
    let args = this.getQueryStringArgs();
    let id = args['id'];
    articleGet(id).then((resp) => {
      this.htmlText = resp.content;
      this.articleData = resp;
      // console.log(this.htmlText);
    });
  },
}
</script>

<style lang="less" scoped>
.top-image {
  position: relative;
  background-image: linear-gradient(to bottom right,rgba(21,160,238,0.98),rgba(41,180,236,0.98));
  height: 120px;
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
.go-back {
  color: #333;
  padding: 4px 12px;
  box-shadow: 0 0 1px 1px #dedede;
  cursor: pointer;
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
    .detail-title {
      padding: 10px 0;
      font-size: 24px;
      color: #333333;
      font-weight: 600;
      text-align: center;
      border-bottom: 1px solid #E2E2E2;
    }
    .detail-time {
      margin-top: 12px;
      font-size: 14px;
      color: #333333;
      font-weight: 500;
      text-align: center;
    }
  }
}
</style>
