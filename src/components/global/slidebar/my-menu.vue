<template>
    <div class="sideBar togglehide" ref="barPart">
        <div class="menuCover" @click="toggleMenu" ref="cover"></div>
        <ul class="menu">
            <li class="list-title">
                <slot name="menu-title"></slot>
            </li>
            <slot></slot>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'my-menu',
  props: {
      myVisible: {
          type: Boolean,
          default: false
      }
  },
  methods: {
      toggleMenu(){
          this.$emit('update:myVisible', !this.myVisible);
      },
      toggleShow(){
          let target = this.$refs.barPart;
          let test = target.classList.contains('togglehide');

          if(!test){
              target.classList.add('togglehide');
              this.$emit('closeBar');
              let OpenMenu = target.querySelectorAll('.openMenu')
              let OpenIcon = target.querySelectorAll('.openIcon')
              this.$refs.barPart.style.left = -this.$refs.barPart.offsetWidth + 'px'
              for (let i = 0; i < OpenMenu.length; i++) {
              OpenMenu[i].classList.remove('openMenu')
              OpenMenu[i].style.display = 'none'
              }
              for (let i = 0; i < OpenIcon.length; i++) {
              OpenIcon[i].classList.remove('openIcon')
              }
              }else{
                  target.removeAttribute('style');
                  target.classList.remove('togglehide');
                  this.$emit('openBar');

                  target.style.left = 0 + 'px';
              }
           }
  },
  watch:{
      myVisible(){
          this.toggleShow();
      }
  },
  mounted(){
      this.$refs.barPart.style.left = -this.$refs.barPart.offsetWidth + "px";
      this.$on('closeByRoute', ()=>{
          this.$emit('update:myVisible', !this.myVisible);
      });
  }
}
</script>
<style lang="scss">
    .menuCover{
    position: fixed;
    top: 0;
    left: 0px;
    right: 0;
    bottom: 0;
    background: #2c3b41;
    opacity: .5;
    //z-index: 11111;
  }
   .togglehide {
    span {
      display: none;
    }
    .list-title {
      display: none;
    }
    .menu {
      padding-top: 50px;
    }
    i {
      font-size: 18px;
    }
    .menuCover {
      display: none;
    }
  }
  .sideBar {
    padding: 20px 0px;
    min-width: 200px;
    background: black;
    position: absolute;
    top: 0;
    bottom:0;
    z-index:1000;
    transition: all ease .4s;
    overflow: auto;
    font-size: 16px;
    span {
      font-size: 1.2rem;
    }
    i {
      font-size: 1.2rem;
    }
  }

  .menu{
      font-size: 14px;
      .list-title{
          padding: 20px 10px;
          color: white;
          text-align: center;
      }
      li{
          list-style: none;
          position: relative;
          &>a{
              color: #b8c7ce;
              padding: 10px;
              box-sizing: border-box;
              display: inline-block;
              width: 100%;
          }
      }
      .treeview{
          background: #1a2226 !important;

          &:hover{
              background: black !important;
              color: white !important;
              border-left: 3px solid white;
          }
      }
      .treeview-menu{
          padding-left: 20px;
          background: #2c3b41;
          transition: height .3s ease-out;
          a{
              padding: 5px 20px 5px 10px!important;
              color: #8aa4af;
          }
      }
  }
  .openIcon{
      display: inline-block;
      transform: rotateZ(-180deg);
      transition: all ease .2s;
  }
  
</style>



