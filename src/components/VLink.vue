<!--
 * @Description:
 * @Author: andy.ten@tom.com
 * @Date: 2020-06-14 15:56:44
 * @LastEditors: andy.ten@tom.com
 * @LastEditTime: 2020-06-14 16:49:23
 * @Version: 1.0.0
 * @FilePath: /vue-2.0-router-demo/src/components/VLink.vue
-->
<template>
  <a
    v-bind:href="href"
    v-bind:class="{ active: isActive }"
    v-on:click="go"
  >
    <slot></slot>
  </a>
</template>

<script>
  import routes from '../routes'

  export default {
    //prop 是子组件用来接受父组件传递过来的数据的一个自定义属性
    //父组件的数据需要通过 props 把数据传给子组件，子组件需要显式地用 props 选项声明 "prop"：
    //子组件要显示的用 props 声明它期望获得的数据
    props: {
      href: String,
      required: true
    },
    computed: {
      isActive () {
        return this.href === this.$root.currentRoute
      }
    },
    methods: {
      go (event) {
        event.preventDefault()
        this.$root.currentRoute = this.href
        window.history.pushState(
          null,
          routes[this.href],
          this.href
        )
      }
    }
  }
</script>

<style scoped>
  .active {
    color: cornflowerblue;
  }
</style>
