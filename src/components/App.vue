<template>
  <div id="app">
      <mt-spinner class="g-spinner" type="double-bounce" :color="loadingColor" v-show="loading"></mt-spinner>
      <app-header>
          <i class="iconfont icon-menu" @click="toggleShowMenu"></i>
      </app-header>
      
      <my-menu :my-visible.sync="visible">
          <template slot="menu-title">私人小助手</template>
          <menu-item route='/'><i slot="icon" class="iconfont icon-shouye"></i>首页</menu-item>
          <menu-item route='/'><i slot="icon" class="iconfont icon-msnui-calendar"></i>计划</menu-item>
          <menu-item route='/'><i slot="icon" class="iconfont icon-chifan2600"></i>吃啥</menu-item>
          <menu-item route='/'><i slot="icon" class="iconfont icon-beiwanglu"></i>备忘录</menu-item>
          <menu-item route='/'><i slot="icon" class="iconfont icon-shangxiaban-copy"></i>假期</menu-item>
          <menu-item route='/'><i slot="icon" class="iconfont 
          icon-50"></i>抛硬币</menu-item>
          <my-submenu>
              <i slot="icon" class="iconfont icon-jizhangben"></i>
              <template slot="submenu-title">记记账</template>
              <menu-item route='/'><i slot="icon" class="iconfont icon-fangzilengjiao"></i>记账首页</menu-item>
              <menu-item route='/'><i slot="icon" class="iconfont icon-50"></i>添加记账</menu-item>
          </my-submenu>
          <my-submenu>
              <i slot="icon" class="iconfont icon-zhurou"></i>
              <template slot="submenu-title">女朋友</template>
              <menu-item route='/'><i slot="icon" class="iconfont icon-zhuzhu"></i>刘欢</menu-item>
          </my-submenu>
      </my-menu>
      <router-view :userInfo="userInfo" @update-userInfo="updateUserinfo"></router-view>
  </div>
</template>

<script>
import appHeader from './header.vue';

export default {
  name: 'app',
  data () {
      return {
          loading: false,
          visible: false,
          userInfo: {
              color: '',
              headUrl: './assets/img/head.jpg'
          },
          loadingColor: '#26a2ff'
      }
  },
  created(){
      this.$on('set-theme', (color)=>{
          this.userInfo.color = color;
          this.loadingColor = color;
      })
  },
  computed: {

  },
  methods: {
      toggleShowMenu(){
          console.log("我被点了！");
          this.visible =true;
      },
      setTheme(){
          this.loadingColor = this.userInfo.color;
      },
      updateUserinfo(obj){
          this.userInfo = Object.assign(this.userInfo, obj);
      }
  },
  components: {
      appHeader
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
html {
  font-size: 62.5%;
}
body {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
             "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
             SimSun, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .g-loading {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -14px;
    margin-top: -14px;
  }
}
</style>


