<template>
  <div class="carousel" style="width: 100%">
      <el-carousel trigger="click" style="height: 100%" :autoplay="true">
        <el-carousel-item v-for="(item,index) in bannerList" :key="index" class="img-outer">
          <img v-lazy="item.image" alt="" class="img-inner">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
import { mapGetters,mapMutations, mapActions } from 'vuex'
export default {
    name: "Carousel",
    computed: {
      ...mapGetters([
        'bannerList'
      ])
    },
    created () {
      this.getImage()
    },
    methods: {
      ...mapMutations([
        'SETBANNER'
      ]),
      ...mapActions([
        'getBanner'
      ]),
      getImage() {
        this.getBanner().then(res => {
          this.SETBANNER(res.data)
        })
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
