import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

function compare( a, b ) {
  if ( a.date < b.date ){
    return 1;
  }
  if ( a.date > b.date ){
    return -1;
  }
  return 0;
}

import mock from './mock-data.js'
mock.sort(compare);

let data = {
  games: mock,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
