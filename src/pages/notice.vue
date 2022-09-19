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
        span > 消息公告
      div.card-title 消息公告
      div.list-row(v-for="(item, index) in newsData" :key="`list-${index}`" @click="goDetail(item)")
        div.list-title
          div.sub-title {{item.articleTitle}}
          div {{item.releaseTime}}
        div.summary {{item.description}}
      div(style="background: #fff; text-align: center;padding: 20px 0")
        el-pagination(
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[5, 10, 20, 100]"
          :page-size="size"
          layout="sizes, prev, pager, next, jumper"
          :total="total"
        )
    Footer
</template>

<script>
import {listNews} from '@/service/interface';
export default {
  data() {
    return {
      newsData: [],
      current: 0,
      size: 10,
      total: 0,
    };
  },
  methods: {
    goDetail(ret) {
      console.log('ret',ret);
      this.$router.push({path: '/newsDetail',query: {articleId: ret.articleId, type: 'notice'}});
    },
    listNews() {
      let data = {
        current: this.current,
        size: this.size,
      };
      listNews(data).then((resp)=> {
        if (resp.list && resp.list.length) {
          this.newsData = resp.list;
          this.total = resp.total;
        }
      });
    },
    handleSizeChange(e) {
      this.size = e;
      this.listNews();
    },
    handleCurrentChange(e) {
      this.current = e;
      this.listNews();
    },
  },
  mounted() {
    // this.listNews();
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
  .card-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 88px;
    background-image: linear-gradient(to right,rgba(255,255,255,0.98),rgba(227, 238, 250,0.98));
    font-size: 28px;
    color: #333333;
    margin-top: 20px;
  }
  .list-row {
    padding: 20px 30px;
    background: #fff;
    font-size: 14px;
    color: #666666;
    border-bottom: 1px solid #efefef;
    cursor: pointer;
    .list-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .sub-title {
      margin-bottom: 16px;
      font-size: 16px;
      color: #333333;
      font-weight: 700;
    }
    .summary {
      word-wrap: break-word; /*强制换行*/
      overflow: hidden; /*超出隐藏*/
      text-overflow: ellipsis;/*隐藏后添加省略号*/
      white-space: nowrap;/*强制不换行*/
    }
  }
}
</style>
