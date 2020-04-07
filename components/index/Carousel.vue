<template>
  <div class="carousel" style="width: 100%">
      <el-carousel trigger="click" style="height: 100%" :autoplay="false">
        <el-carousel-item v-for="(item,index) in list" :key="index" class="img-outer">
          <img v-lazy="item.src" alt="" class="img-inner">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "Carousel",
        data () {
          return {
            list: [
              {src: require('../../assets/images/index/carousel/1.jpeg')},
              {src: require('../../assets/images/index/carousel/2.jpeg')},
              {src: require('../../assets/images/index/carousel/3.jpeg')},
              {src: require('../../assets/images/index/carousel/4.jpeg')},
              {src: require('../../assets/images/index/carousel/5.jpeg')}
            ]
          }
        }
    }
</script>

<style>
  .carousel {
    height: 480px;
    min-width: 1280px;
    background: #e6e6e6;
  }
  .el-carousel__button {
    width: 45px;
    height: 7px;
    cursor: pointer;
    border-radius: 4px;
    outline: none;
    background: #fff;
  }
  .el-carousel__container {
    height: 100%;
  }
</style>
