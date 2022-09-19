<!-- 头部 -->
<template lang="pug">
  div.menu-line
    div.logo DEMO-TEMPLATE
    div.menu-item-line
      div.menu-item(v-for="(item, index) in menuItems" :key="`menu-${index}`")
        router-link(:to="item.url" v-if="index == 0") {{item.label}}
        div(@click="goUrl(index)" v-if="index != 0") {{item.label}}
      div.login(@click="goLogin" v-if="!user && !user.userName") 登录
      div.register(@click="goRegister" v-if="!user && !user.userName") 注册
      div(v-if="user && user.userName") 用户：{{user.userName}}
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      user: '',
      menuItems: [
        {
          label: '首页',
          url: '/',
        }, {
          label: '菜单2',
          url: '',
        }, {
          label: '菜单3',
          url: '',
        }, {
          label: '菜单4',
          url: '',
        }, {
          label: '菜单5',
          url: '',
        }, {
          label: '菜单6',
          url: '',
        }, {
          label: '菜单7',
          url: '',
        }, {
          label: '菜单8',
          url: '',
        }, {
          label: '菜单9',
          url: '',
        }
      ],
    };
  },
  computed: {
  },
  methods: {
    goUrl(index) {
      window.open(this.menuItems[index].url);
    },
    goLogin() {
    },
    goRegister() {
    },
  },
  mounted() {
    let userStr = localStorage.getItem('qzUser');
    this.user = JSON.parse(userStr);
    console.log('user',this.user);
  },
};
</script>

<style lang="less">
.menu-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255,255,255,0.6);
  height: 80px;
  .logo {
    padding-left: 120px;
    color: rgba(255,255,255,1);
    font-family: SourceHanSansCN-Bold;
    font-size: 30px;
    font-weight: 700;
  }
  .menu-item-line {
    display: flex;
    align-items: center;
    padding-right: 120px;
    color: rgba(255,255,255,1);
    font-family: SourceHanSansCN-Regular;
    font-size: 14px;
    .menu-item {
      margin-right: 24px;
      cursor: pointer;
      height: 80px;
      display: flex;
      align-items: center;
      transition: 0.1s;
      border-bottom: 1px solid transparent;
    }
    .menu-item:hover {
      border-bottom: 1px solid #fff;
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
