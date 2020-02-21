<template>
    <div>
      <div class="banner">
        <nuxt-link to="">
          <div class="banner-image" style="width: 1920px; height: 245px;">
            <img v-lazy="" alt="" class="img-inner">
          </div>
        </nuxt-link>
      </div>
      <main class="banner-layout__content">
        <div class="clear-both">
          <!--tags标签-->
          <div class="tags-wrap"></div>
          <!--分类框-->
          <div class="el-collapse"></div>
          <!--list商品主目录-->
          <div class="list-wrap fr"></div>
        </div>
      </main>
    </div>
</template>

<script>
    export default {
        name: "shop"
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
        background-image: url("../assets/images/shop/1.jpeg");
      }

    }
  }

</style>
