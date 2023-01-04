<template lang="pug">
  div
    div.top-image
      Header.header(:class="{noMenuBackground: scrollTopLong < 360, showMenuBackground: scrollTopLong > 360,}")
      div.banner-title
        div.text xxxxxx
        div.text(style="padding-left: 120px") xxxxxx
    div.first-content
      div
        div.content-title
          div xxxxxx
          div.title-svg
        div.content
          div.text(@click="showDialog") yyyyyy >>
          div.search
            div.row
              div.label xxxx
              el-select(v-model="formData.destCode" placeholder="请选择" size="small").select-block
                el-option( v-for="(item, index) in countryData" :key="index" :label="item.name" :value="item.code")
              div.label xxxx
              el-select(v-model="formData.goodsCode" placeholder="请选择" size="small" style="width: 220px").select-block
                el-option( v-for="(item, index) in goodsData" :key="index" :label="item.name" :value="item.code")
              div.label xxxx
              el-select(v-model="formData.transCode" placeholder="请选择" size="small" style="width: 220px")
                el-option( v-for="(item, index) in transData" :key="index" :label="item.name" :value="item.code")
            //div.row
              //div.label 物流方式
              //el-select(v-model="formData.cc" placeholder="请选择" size="small").select-block
                el-option(v-for="item in options" :key="item.value" :label="item.label" :value="item.value")
            div.row(style="margin-top: 50px")
              el-button(type="primary" size="mini" @click="reset" style="width: 90px") 重置
              el-button(type="primary" size="mini" @click="search" style="width: 90px; margin-left: 40px") 查询
          div.list
            div.list-title
              div.cell1 字端1
              div.cell2 字端2
              div.cell3 操作
            div.list-item(v-for="(item, index) in tableData" :key="`tableData-${index}`")
              div.cell1
                img(:src="item.logoFilePath")
                div.cell-text
                  div(style="margin-top: 18px;")
                    span 运输方式：
                    span(v-for="(ret, retIndex) in item.transList" :key="ret.transCode") {{ret.transName}}
                      span(v-if="item.transList.length-1 > retIndex") &nbsp;|&nbsp;
                  div
                    span 货物性质：
                    span(v-for="(ret, retIndex) in item.goodsList" :key="ret.goodsCode") {{ret.goodsName}}
                      span(v-if="item.goodsList.length-1 > retIndex") &nbsp;|&nbsp;
              div.cell2
                span(v-for="(ret, retIndex) in item.destList" :key="ret.destCode") {{ret.destName}}
                  span(v-if="item.destList.length-1 > retIndex") &nbsp;|&nbsp;
              div.cell3
                el-button(type="primary" size="mini" style="width: 90px; height: 40px" @click="openDialog(item)") 获取报价
    el-dialog(:visible.sync="addDialogVisible" :close-on-click-modal="false" width="480px" :show-close="false")
      div(slot="title" style="text-align: center") 物流供应商入驻
      div(style="padding-left: 60px")
        div.dialog-row
          span.text 物流企业名称：
          el-input(v-model="addDialogData.supplierName" size="small" style="width: 220px")
        div.dialog-row
          span.text 物流企业logo：
          el-upload(ref="imageUpload", :limit="1" action="" :http-request="selectFile" style="display: inline")
            el-button(size="mini" type="primary") 点击上传
            div.el-upload__tip(slot="tip") 支持上传JPG 、PNG图片，大小不超过2M
        div.dialog-row
          span.text 联系人：
          el-input(v-model="addDialogData.contactPerson" size="small" style="width: 220px")
        div.dialog-row
          span.text 联系电话：
          el-input(v-model="addDialogData.contactPhone" size="small" style="width: 220px")
        div.dialog-row
          span.text 目的地：
          el-select.long(v-model="addDialogData.destList" size="small" placeholder="请选择" filterable multiple style="width: 220px")
            el-option( v-for="(item, index) in countryData" :key="index" :label="item.name" :value="item.code")
        div.dialog-row
          span.text 货物性质：
          el-select.long(v-model="addDialogData.goodsList" size="small" placeholder="请选择" filterable multiple style="width: 220px")
            el-option( v-for="(item, index) in goodsData" :key="index" :label="item.name" :value="item.code")
        div.dialog-row
          span.text 运输方式：
          el-select.long(v-model="addDialogData.transList" size="small" placeholder="请选择" filterable multiple style="width: 220px")
            el-option( v-for="(item, index) in transData" :key="index" :label="item.name" :value="item.code")
      div(slot="footer" style="text-align: center;")
        el-button(size="mini" style="width: 90px; height: 30px" @click="addDialogVisible = false; $refs.imageUpload.clearFiles(); attach = []") 取消
        el-button(type="primary" size="mini" style="width: 90px; height: 30px" @click="save") 提交
    el-dialog(:visible.sync="dialogVisible" :close-on-click-modal="false" width="480px" :show-close="false")
      div(slot="title" style="text-align: center") 物流供应商信息
      div(style="padding-left: 60px")
        div 物流企业名：{{currentRow.supplierName}}
        div 联系人：{{currentRow.contactPerson}}
        div 联系电话：{{currentRow.contactPhone}}
      div(slot="footer" style="text-align: center;")
        el-button(type="primary" size="mini" style="width: 90px; height: 30px" @click="dialogVisible = false") 关闭
    Footer
</template>

<script>
import {supplierPage, getParamNames, supplierSave} from '@/service/interface';
export default {
  name: 'App',
  data() {
    return {
      attach: [],
      countryData: [],
      goodsData: [],
      transData: [],
      addDialogData: {
        supplierName: '',
        contactPerson: '',
        contactPhone: '',
        destList: [],
        goodsList: [],
        transList: [],
      },
      dialogVisible: false,
      addDialogVisible: false,
      scrollTopLong: 0,
      formData: {
        pageIndex: 1,
        pageSize: 20,
        destCode: '',
        goodsCode: '',
        transCode: '',
      },
      tableData: [],
      options: [],
      currentRow: {},
    };
  },
  methods: {
    search() {
      let data = {...this.formData};
      supplierPage(data).then((resp) => {
        this.tableData = [...resp];
      });
    },
    reset() {
      this.objectAttributeReset(this.formData);
      this.formData.pageIndex = 1;
      this.formData.pageSize = 5;
    },
    openDialog(item) {
      this.dialogVisible = true;
      this.currentRow = item;
    },
    showDialog() {
      this.addDialogVisible = true;
    },
    async searchDic() {
      this.countryData = await getParamNames({type: 'COUNTRY'});
      this.goodsData = await getParamNames({type: 'GOODS_TYPE'});
      this.transData = await getParamNames({type: 'TRANS_TYPE'});
    },
    async save() {
      if (!this.attach.length) {
        this.tipMessage('文件不能为空', 'warning');
        return false;
      }
      let formData = new FormData();
      formData.append('logoFile', this.attach[0]);
      formData.append('supplierName', this.addDialogData.supplierName);
      formData.append('contactPerson', this.addDialogData.contactPerson);
      formData.append('contactPhone', this.addDialogData.contactPhone);
      formData.append('destList', this.addDialogData.destList);
      formData.append('goodsList', this.addDialogData.goodsList);
      formData.append('transList', this.addDialogData.transList);
      let resp = await supplierSave(formData);
      this.$refs.imageUpload.clearFiles();
      this.addDialogVisible = false;
      this.tipMessage('提交成功');
    },
    selectFile(e) {
      // 图片不大于2M
      if (e && e.file.size > 2000000) {
        this.$message({
          type: 'warning',
          message: '大小不能超过2M'
        });
        this.$refs.imageUpload.clearFiles();
      } else {
        const file = e.file;
        this.attach.push(file);
        this.$message({
          type: 'success',
          message: '选择文件成功!'
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
    // this.searchDic();
  },

}
</script>

<style lang="less" scoped>
.top-image {
  position: relative;
  background: url('~@/assets/images/banner-logistics.png') no-repeat;
  background-size: 100% 100%;
  height: 466px;
  .banner-title {
    padding-top: 150px;
    padding-left: 440px;
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
    .text {
      margin-bottom: 10px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #333333;
      text-align: right;
      cursor: pointer;
      &:hover {
        color: #0D6ED0;
      }
    }
    .search {
      height: 168px;
      padding: 44px 54px;
      background: #F4F9FF;
      border-radius: 2px;
      .row {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        .label {
          margin-right: 14px;
          width: 70px;
        }
        .select-block {
          margin-right: 88px;
          width: 220px;
        }
      }
    }
    .list {
      margin-bottom: 40px;
      margin-top: 20px;
      min-height: 1000px;
      padding: 44px 54px;
      background: #F4F9FF;
      border-radius: 2px;
      .list-title {
        display: flex;
        justify-content: space-between;
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #333333;
        font-weight: 600;
        .cell1 {
          width: 650px;
        }
        .cell3 {
          margin-right: 40px;
        }
      }
      .list-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 12px;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #333333;
        .cell1 {
          display: flex;
          width: 680px;
          img {
            margin-right: 20px;
            display: block;
            width: 140px;
            height: 90px;
          }
          .cell-text {
            div {
              margin: 5px 0;
            }
          }
        }
        .cell2 {
          margin-left: -26px;
        }
      }
    }
  }
}
.dialog-row {
  margin: 4px 0;
  .text {
    width: 100px;
    display: inline-block;
  }
}
</style>
