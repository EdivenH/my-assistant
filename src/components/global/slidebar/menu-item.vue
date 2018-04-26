<template>
  <li>
      <router-link href='#' style="color: white" :to='route' @click.native.stop="handleRoute">
          <slot name="icon"></slot>
          <span class="menu-title"><slot></slot></span></router-link>
  </li>
</template>
<script>
import dispatch from '../../util/dispatch.js';
export default {
  name: 'menu-item',
  mixins: [dispatch],
  props: {
      route: {
          type: String,
          default: ' '
      }
  },
  methods: {
      handleRoute(){
          this.dispatch('my-menu', 'closeByRoute');
      }
  }
}
</script>
