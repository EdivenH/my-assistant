<template>
    <div class="home">
        <div>
            <div class="head-field">
                <span class="head-field-pic" @click="JumpInfo">
                    <span class="img-hover">
                        <img :src="userInfo.headUrl" v-autofix="name" />
                    </span>
                </span>
            </div>
            <div class="grid">
                <div class="grid-item" @click="JumpInfo">
                    <i class="iconfont icon-msnui-calendar"></i>
                    <span class="grid-item-text">计划</span>
                </div>
                <div class="grid-item" @click="JumpInfo">
                    <i class="iconfont icon-wanju"></i>
                    <span class="grid-item-text">今天吃啥</span>
                </div>
                <div class="grid-item" @click="JumpInfo">
                    <i class="iconfont icon-beiwanglu"></i>
                    <span class="grid-item-text">备忘录</span>
                </div>
                <div class="grid-item" @click="JumpInfo">
                    <i class="iconfont icon-shangxiaban-copy"></i>
                    <span class="grid-item-text">假期</span>
                </div>
                <div class="grid-item" @click="JumpInfo">
                    <i class="iconfont icon-50"></i>
                    <span class="grid-item-text">抛硬币</span>
                </div>
                <div class="grid-item" @click="JumpInfo">
                    <i class="iconfont icon-jizhangben"></i>
                    <span class="grid-item-text">记账</span>
                </div>
                <div class="grid-item" @click="changeColor">
                    <i class="iconfont icon-pifu"></i>
                    <span class="grid-item-text">皮肤</span>
                </div>
            </div>

            <set-color :change-color="changeColor" ref="colorPanel"></set-color>

        </div>
    </div>
</template>
<script>
import setColor from './setColor.vue';

export default {
  name:'home',
  components: {
      setColor
  },
  data() {
      return{
          name: 'kimmy'
      }
  },
  props:['userInfo'],
    created () {
    // 解决从浏览器回退触发不了指令的问题
    this.name = 'trigger'
    setTimeout(() => {
      this.name = 'kimmy'
    }, 0)
  },
  methods: {
      JumpInfo(){

      },
      
      (){
          this.$refs.colorPanel.changColor = true;
      }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
  .home {
    .mint-header {
        background-color: #2e3238;
    }
    .head-field {
      text-align: center;
      padding: 20px 0;
      .head-field-pic {
        display: inline-block;
        width: 100%;
        .img-hover {
          // css 宽高等比例
          display: inline-block;
          width: 30%;
          height: 0;
          padding-bottom: 30%;
          border-radius: 50%;
          overflow: hidden;
        }       
      }
    }
    // 网格
    .grid {
        word-spacing: -6px;
        position: relative;
        &:before {
            content: " ";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 1px;
            border-top: 1px solid #D9D9D9;
            -webkit-transform: scaleY(.5);
            -ms-transform: scaleY(.5);
            transform: scaleY(.5);
            top: -1px;
        }
        .grid-item {
            // 微信这里用了before 和 after来做底线， 这样就不用因为高度偏差导致换行了？
            display: inline-block;
            text-align: center;
            width: 33.33%;
            padding: 20px 10px;
            box-sizing: border-box;
            position: relative;
            .grid-item-text {
              // color: #666;
              display: inline-block;
              padding: 10px;
            }
            .iconfont {
                
                font-size: 3.4rem;
            }

            &:before {
                // 它意思就是要0.5px咯
                content: " ";
                position: absolute;
                right: 0;
                top: 0;
                width: 1px;
                height: 100%;
                border-right: 1px solid #D9D9D9;
                color: #D9D9D9;
                -webkit-transform: scaleX(.5);
                -ms-transform: scaleX(.5);
                transform: scaleX(.5);
                right: -1px;
            }
            &:after {
                content: " ";
                position: absolute;
                left: 0;
                width: 100%;
                height: 1px;
                border-top: 1px solid #D9D9D9;
                -webkit-transform: scaleY(.5);
                -ms-transform: scaleY(.5);
                transform: scaleY(.5);
                bottom: -1px;
            }

        }
    }
}

  
</style>


