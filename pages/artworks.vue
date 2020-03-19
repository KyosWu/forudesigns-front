<template>
  <main class="banner-layout__main">
    <div class="banner">
      <nuxt-link to="">
        <div class="banner-image" style="width: 1920px; height: 245px;">
          <img src="../assets/images/artworks/1.jpeg" alt="" class="img-inner">
        </div>
      </nuxt-link>
    </div>
    <main class="banner-layout__content">
      <div class="clear-both">
        <!--tags标签-->
        <Tags/>
        <!--瀑布流-->
        <Artworks/>

      </div>
    </main>
    <!--测试 艺术家作品详细弹框model-->
    <WorksModel v-if="isShowModel"/>

    <!--测试login登录框-->
    <Login v-if="isShowLoginOrRegisterModel"/>
  </main>
</template>

<script>
  import { mapGetters, mapActions} from 'vuex'

  import Login from '../components/model/Login-model'
  // 测试
  import WorksModel from '../components/model/Works-modal'
  import Tags from '../components/public/tags/index'
  import Artworks from '../components/artworks/Artworks'
    export default {
        name: "artworks",
        components: {
          Login,
          Tags,
          Artworks,
          WorksModel
        },
      computed: {
        ...mapGetters([
          'Artworks_Head_Title',
          'isShowModel',
          'isShowLoginOrRegisterModel'
        ]),
      },
      created () {
        //  需要判断是否是客户端
        if (process.client) {
          // 进入前创造title
          document.title = this.Artworks_Head_Title
        }
      },
      destroyed() {
        //  需要判断是否是客户端
        if (process.client) {
          //  离开时销毁title
          document.title = ''
        }
        window.removeEventListener('scroll', this.handleScroll)
      },
      mounted () {
        window.addEventListener('scroll',this.handleScroll) // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
      },
      methods:{
          ...mapActions([
            'is_Half'
          ]),
        handleScroll(){
          let screenHeight = window.screen.height
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
          let half = screenHeight/2
          // 如果超过一半页面距
          if (scrollTop > half) {
            this.is_Half(true)
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
  .banner {
    display: -webkit-box;
    display: flex;
    overflow: hidden;
    -webkit-box-pack: center;
    justify-content: center;
    min-width: 1280px;
    height: 245px;
    text-align: center;
    background-color: #f5f5f5;
    .banner-image {
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      .img-inner {
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }
    }
  }
  .banner-layout__main {
    padding-bottom: 20px;
  }
  .banner-layout__content {
    width: 1280px;
    margin: 0 auto;
  }
</style>
