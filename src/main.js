import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import bgUi from './packages/index';
Vue.use(bgUi);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
