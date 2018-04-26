<template>
  <mt-popup v-model='changeColor' position='bottom' class="color-panel">
      <div class="color-items">
          <span class="color-item" v-for="(item, $index) in colors" :key="$index" @click="chooseColor(item)">
              <span class="color-cycle" :class="'bg-color' + ($index +1)"></span>
          </span>
      </div>
  </mt-popup>
</template>
<script>
export default {
  name: 'set-color',
  data (){
      return {
          changeColor: false,
          colors: ['#f04134', '#00a854', '#108ee9', '#f5317f', '#f56a00', '#7265e6', '#ffbf00', '#00a2ae', '#2e3238']
      }
  },
  methods: {
      chooseColor(color){
          this.$axios.get('./static/api.json')
          .then((data) =>{
              this.$emit('set-theme', color);
              this.changeColor = false;
              localStorage.setItem('themeColor', color)
          })
          .catch((er) =>{
              console.log(er);
          })
      }
  }

}
</script>
<style lang="scss" scoped>
  .color-panel{
      width: 100%;
      padding: 10px;
      .color-items{
          display: inline-block;
          width: 100%;

          .color-item{
              display: inline-block;
              width: 20%;
              text-align: center;
              margin: 10px 0;
              .color-cycle{
                  display: inline-block;
                  width: 4rem;
                  height: 4rem;
                  border-radius: 50%;
                  box-shadow: 2px 2px 5px #666;
              }
          }
      }
  }
</style>



