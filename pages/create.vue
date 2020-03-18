<template>
  <div class="defalut-layout__main">
    <div class="banner">
      <nuxt-link to="">
        <div class="banner-image" style="width: 1920px; height: 245px;">
          <img src="../assets/images/create/1.jpeg" alt="" class="img-inner">
        </div>
      </nuxt-link>
    </div>

    <main class="banner-layout__content">
      <div class="clear-both">
        <Tab/>
        <div style="display: flex">
          <!--分类框-->
          <Collapse/>
          <!--list商品主目录-->
          <List/>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Tab from '../components/create/CreateTab'
  import List from '../components/create/list'
  import Collapse from '../components/public/categories/index'
    export default {
        name: "create",
      components: {
          Tab,
          List,
        Collapse
      },
      computed: {
        ...mapGetters([
          'Create_Head_Title'
        ])
      },
      created () {
        //  需要判断是否是客户端
        if (process.client) {
          // 进入前创造title
          document.title = this.Create_Head_Title
        }
      },
      destroyed() {
        //  需要判断是否是客户端
        if (process.client) {
          //  离开时销毁title
          document.title = ''
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
