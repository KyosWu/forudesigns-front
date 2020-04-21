<template>
    <main class="banner-layout__main" style="width: 100%">
      <div class="banner">
        <nuxt-link to="">
          <div class="banner-image" style="width: 1920px; height: 245px;">
            <img src="../../assets/images/shop/1.jpeg" alt="" class="img-inner">
          </div>
        </nuxt-link>
      </div>
      <main class="banner-layout__content">
        <div class="clear-both">
          <!--tags标签-->
          <Tags/>
          <div style="display: flex; margin: 10px">
            <!--分类框-->
            <Collapse/>
            <!--list商品主目录-->
            <List/>
          </div>

        </div>
      </main>
    </main>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Tags from '../../components/public/tags/index'
  import Collapse from '../../components/public/categories/index'
  import List from '../../components/shop/List'
    export default {
        name: "shop",
        components: {
          Tags,
          Collapse,
          List
        },
      computed: {
        ...mapGetters([
          'Shop_Head_Title',
        ])
      },
      created () {
        //  需要判断是否是客户端
        if (process.client) {
          // 进入前创造title
          document.title = this.Shop_Head_Title
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
        /*background-image: url("../assets/image/shop/1.jpeg");*/
      }
    }
  }
  .banner-layout__main {
    min-width: 1280px;
    padding-bottom: 20px;
  }
  .banner-layout__content {
    width: 1280px;
    margin: 0 auto;
    min-height: 70%;
  }
</style>
