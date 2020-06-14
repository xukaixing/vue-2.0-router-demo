<template>
  <main-layout>
    <p>Welcome home11</p>
    <div>hello world</div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
    components: {
      //Pascal Case用法，当首字母大写时，匹配：main-layout和mayLayout
      MainLayout
    }
  }
</script>
