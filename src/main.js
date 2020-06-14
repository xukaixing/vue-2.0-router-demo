/*
 * @Description: 入口方法
 * @Author: andy.ten@tom.com
 * @Date: 2016-09-19 21:51:06
 * @LastEditors: andy.ten@tom.com
 * @LastEditTime: 2020-06-14 19:29:39
 * @Version: 1.0.0
 * @FilePath: /vue-2.0-router-demo/src/main.js
 */
import Vue from 'vue';
import routes from './routes';

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      // json对象读取属性两种：圆点或[],routes[this.currentRoute]
      const matchingView = routes[this.currentRoute];
      // require可以动态的引入模块；import是必须要放到头位置引入；
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue');
    }
  },
  // js动态生成html，实际上，template最终会被webpack打包为render生成html
  render(h) {
    return h(this.ViewComponent);
  }
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
});
