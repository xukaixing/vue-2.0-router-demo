<!--
 * @Description:
 * @Author: andy.ten@tom.com
 * @Date: 2020-06-14 15:56:44
 * @LastEditors: andy.ten@tom.com
 * @LastEditTime: 2020-06-17 14:51:24
 * @Version: 1.0.0
 * @FilePath: /vue-2.0-router-demo/src/layouts/Main.vue
-->
<template>
  <div class="container">
    <ul>
      <li>
        <v-link href="/">Home</v-link>
        <v-link href="/about">About</v-link>
      </li>
    </ul>
    <!--插槽；会保留被渲染组件内部内容，包括html标签-->
    <slot></slot>
  </div>
</template>

<script>
import VLink from '../components/VLink.vue';

export default {
  components: {
    VLink
  }
};
</script>

<style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 15px 30px;
    background: #f9f7f5;
  }
</style>
