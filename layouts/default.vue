<template>
  <div class="full-screen-as-min-layout">
    <MyHeader/>
    <nuxt />
    <MyFooter/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import MyHeader from '../components/public/header/Index.vue'
  import MyFooter from '../components/public/footer/Index.vue'
  export default {
    // 中间件测试
    middleware: 'test',
    computed: {
      ...mapGetters([
        'isModelShow'
      ]),
    },
    components:{
      MyHeader,
      MyFooter
    },
  }
</script>

<style lang="scss">
  .full-screen-as-min-layout {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    min-height: 100vh;
  }
  .the-header+div, .the-header+main {
    margin-top: 60px!important;
  }
</style>
