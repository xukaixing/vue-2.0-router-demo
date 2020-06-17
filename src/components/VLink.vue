<!--
 * @Description:
 * @Author: andy.ten@tom.com
 * @Date: 2020-06-14 15:56:44
 * @LastEditors: andy.ten@tom.com
 * @LastEditTime: 2020-06-17 14:48:40
 * @Version: 1.0.0
 * @FilePath: /vue-2.0-router-demo/src/components/VLink.vue
-->
<template>
  <a
    :href="href"
    :class="{ active: isActive }"
    @click="go"
  >
    <slot></slot>
  </a>
</template>

<script>
import routes from '../routes';
export default {
  // prop 是子组件用来接受父组件传递过来的数据的一个自定义属性
  // 父组件的数据需要通过 props 把数据传给子组件，子组件需要显式地用 props 选项声明 "prop"：
  // 子组件要显示的用 props 声明它期望获得的数据
  props: {
    href: {
      default: '',
      type: String, // 类型
      required: false// 是否必须
    }
  },
  computed: {
    // computed方法是带缓存的响应式，只有变量发生变化，才会调用；
    // 只有get方法，没有set方法
    //
    isActive() {
      // 引用data变量必须使用this，该this指向当前component
      return this.href === this.$root.currentRoute;
    }
  },
  methods: {
    go(event) {
      event.preventDefault();
      this.$root.currentRoute = this.href;
      window.history.pushState(
        null,
        routes[this.href],
        this.href
      );
    }
  }
};
</script>

<style scoped>
  .active {
    color: cornflowerblue;
  }
</style>
