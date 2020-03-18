<template>
  <div class="foru-carousel" style="height: 480px">
    <div class="block">
      <el-carousel trigger="click" height="480px" :autoplay="true">
        <el-carousel-item v-for="(item,index) in list" :key="index">
          <img v-lazy="item.src" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
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
  .foru-carousel {
    height: 480px;
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
</style>
