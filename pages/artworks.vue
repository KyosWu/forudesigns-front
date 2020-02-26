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
        <!--<Tags/>-->
        <!--瀑布流-->
        <Artworks/>

      </div>
    </main>
    <!--测试 艺术家作品详细弹框model-->
    <WorksModel v-if="isShowModel"/>
  </main>
</template>

<script>
  import { mapGetters } from 'vuex'
  // 测试
  import WorksModel from '../components/model/Works-modal'
  import Tags from '../components/artworks/Tags'
  import Artworks from '../components/artworks/Artworks'
    export default {
        name: "artworks",
        components: {
          Tags,
          Artworks,
          WorksModel
        },
      computed: {
        ...mapGetters([
          'isShowModel'
        ]),
      },
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
