import Vuex, { mapState } from 'vuex';
import Vue from 'vue';
import App from './components/App.vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'
import GlobalUI from './components'
import router from './router/index.js';
import direction from './directives';
import api from './server/api.js';

direction(Vue);
api(Vue);

Vue.use(MintUI);
Vue.use(GlobalUI);

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
  });

