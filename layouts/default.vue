<template>
  <div class="full-screen-as-min-layout" style="width: 100%">
    <MyHeader/>
    <nuxt />
    <MyFooter/>
  </div>
</template>

<script>
  import { mapGetters, mapMutations} from 'vuex'
  import MyHeader from '../components/public/header/Index.vue'
  import MyFooter from '../components/public/footer/Index.vue'
  export default {
    // 中间件测试
    middleware: 'test',
    components:{
      MyHeader,
      MyFooter
    },
    computed: {
      ...mapGetters([
        'isModelShow',
        'isMobile'
      ]),
    },
    created () {
      //  需要判断是否是客户端
      if (process.client) {
        // 进入前创造title
        document.title = this.Index_Head_Title
      }
    },
    mounted() {
      /*APP.vue  mounted*/
      if (this._isMobile()) {
        console.log('手机端')
        this.ISMOBILE(true)
      } else {
        console.log('pc端')
      }
    },
    methods: {
      ...mapMutations([
        'ISMOBILE'
      ]),
      /*APP.vue methods  判断是否是移动端访问设备*/
      _isMobile () {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
        return flag
      }
    }
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
    position: relative;
    min-width: 1280px;
  }
  .the-header+div, .the-header+main {
    margin-top: 60px!important;
  }
</style>
