<!-- 头部 -->
<template lang="pug">
  div
    div.top-line
      div.sub-title 您好！欢迎访问模板门户!
      div.login-text
        span.login(@click="openWin") 模板门户
        span.login(@click="goLogin") 登录
    div.menu-line
      div.logo
        div 模板门户
        div.en TEMPLATE PILOT
      div.menu-item-line
        div.menu-item(v-for="(item, index) in menuItems" @click="goUrl(index)" :class="(pageLocation.href.indexOf(item.url) != -1 && item.url != '') ? 'selected' : ''")
          div {{item.label}}
</template>

<script>
import {userLogin} from '@/service/interface';
export default {
  name: 'Header',
  data() {
    return {
      pageLocation: location,
      currentIndex: '0',
      user: '',
      menuItems: [
        {
          label: '首页',
          url: '/index',
        }, {
          label: '菜单一',
          url: '/onlineCredit',
        }, {
          label: '菜单二',
          url: '/operate',
        }, {
          label: '菜单三',
          url: 'http://www.baidu.com/',
        }, {
          label: '菜单四',
          url: '/logistics',
        }, {
          label: '菜单五',
          url: '/infoShare',
        }, {
          label: '菜单六',
          url: '/riskControl',
        }, {
          label: '菜单七',
          url: '/monitor',
        }
      ],
    };
  },
  computed: {
  },
  methods: {
    goUrl(index) {
      console.log(index);
      this.currentIndex = index;
      if (index == 3) {
        window.open(this.menuItems[index].url);
      } else {
        // 防止重复点击
        if (!~location.href.indexOf(this.menuItems[index].url)) {
          this.$router.push(this.menuItems[index].url);
        }
      }
    },
    openWin() {
      window.open('http://www.baidu.com/');
    },
    async goLogin() {
      // let resp = await userLogin();
      // window.open(resp)
      // console.log('resp',resp);
    },
  },
  mounted() {
    // let userStr = localStorage.getItem('qzUser');
    // this.user = JSON.parse(userStr);
    // console.log('user',this.user);
  },
};
</script>

<style lang="less">
.top-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  //margin-top: 10px;
  padding-top: 10px;
  .sub-title {
    padding-left: 120px;
    color: rgba(255,255,255,1);
    font-family: SourceHanSansCN-Bold;
    font-size: 14px;
    font-weight: 500;
  }
  .login-text {
    padding-right: 120px;
    color: rgba(255,255,255,1);
    font-family: SourceHanSansCN-Bold;
    font-size: 14px;
    font-weight: 500;
    .login {
      padding: 4px 12px;
      margin-left: 20px;
      cursor: pointer;
      &:hover {
        box-shadow: 0px 0px 1px 1px #efefef;
      }
    }
  }
}

.menu-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  .logo {
    padding-left: 120px;
    color: rgba(255,255,255,1);
    font-family: SourceHanSansCN-Bold;
    font-size: 18px;
    font-weight: 700;
    .en {
      font-size: 8px;
    }
  }
  .menu-item-line {
    display: flex;
    align-items: center;
    padding-right: 120px;
    color: rgba(255,255,255,1);
    font-family: SourceHanSansCN-Regular;
    font-size: 14px;
    .menu-item {
      margin-right: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: 0.2s;
      border-bottom: 1px solid transparent;
      border-radius: 4px;
      padding: 4px 16px;
      font-weight: 600;
    }
    .menu-item:hover {
      background: #2A80EF;
      border-radius: 4px;
    }
    .selected {
      background: #2A80EF;
      border-radius: 4px;
    }
    .login {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 24px;
      border: 1px solid rgba(255,255,255,0.9);
      border-radius: 3px;
      width: 60px;
      height: 30px;
      cursor: pointer;
    }
    .register {
      cursor: pointer;
    }
  }
}
</style>
