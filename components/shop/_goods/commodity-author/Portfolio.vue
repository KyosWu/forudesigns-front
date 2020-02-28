<template>
  <div class="cards-panel Portfolio">
    <h3 class="cards-panel__title">
      Portfolio
    </h3>
    <!--swiper组件-->
    <div class="cards-panel__inner-wrap">
      <swiper :options="swiperOption1" style="width: 1280px; margin-right: 15px;">

        <swiper-slide  v-for="(item, index) in list" :key="index">
          <!--v-for="(item1, p) in list.length" :key="p"-->
          <ul class="panel-ul clear-both">
            <li v-for="(item2,i) in item.list1" :key="i">
              <nuxt-link to="">
                <div class="img-outer">
                  <img :src="item2.src" alt="" class="img-inner">
                </div>
              </nuxt-link>
            </li>
          </ul>

        </swiper-slide>

      </swiper>
      <!-- 左右箭头 -->
      <div class="swiper-button-prev s1" slot="button-prev">
        <i class="el-icon-caret-left pre"></i>
      </div>
      <div class="swiper-button-next s1" slot="button-next">
        <i class="el-icon-caret-right next"></i>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Portfolio",
        data () {
                  return {
                    list: [
                      {
                        list1: [
                          {src: require('../../../../assets/images/shop/_goods/444.jpg')},
                          {src: require('../../../../assets/images/shop/_goods/444.jpg')},
                          {src: require('../../../../assets/images/shop/_goods/444.jpg')},
                          {src: require('../../../../assets/images/shop/_goods/444.jpg')},
                          {src: require('../../../../assets/images/shop/_goods/444.jpg')},
                          {src: require('../../../../assets/images/shop/_goods/444.jpg')},
                        ]
                      },
                      {
                        list1: [
                          {src: require('../../../../assets/images/shop/_goods/3333.jpg')},
                          {src: require('../../../../assets/images/shop/_goods/3333.jpg')},
                          {src: require('../../../../assets/images/shop/_goods/3333.jpg')},
                          {src: require('../../../../assets/images/shop/_goods/3333.jpg')},
                          {src: require('../../../../assets/images/shop/_goods/3333.jpg')},
                          {src: require('../../../../assets/images/shop/_goods/3333.jpg')},
                        ]
                      },
                      {
                        list1: [
                          {src: require('../../../../assets/images/shop/_goods/444.jpg')},
                          {src: require('../../../../assets/images/shop/_goods/444.jpg')},
                          {src: require('../../../../assets/images/shop/_goods/444.jpg')},
                          {src: require('../../../../assets/images/shop/_goods/444.jpg')},
                          {src: require('../../../../assets/images/shop/_goods/444.jpg')},
                          {src: require('../../../../assets/images/shop/_goods/444.jpg')},
                        ]
                      },
                    ],
                    swiperOption1: {
                      autoplay: false,
                      // slidesPerView: 1,// 每页展示几个
                      // slidesPerGroup: 6,// 每屏滚动几个
                      speed: 800,
                      // loop: true,
                      slidesPerView: 'auto',
                      //设置点击箭头
                      navigation: {
                        nextEl: '.swiper-button-next.s1',
                        prevEl: '.swiper-button-prev.s1'
                      }
                    },
                  }
        }
    }
</script>

<style lang="scss" scoped>
  .portfolio {
    border-bottom: 1px solid #dfdfeb;
  }
  .cards-panel {
    width: 100%;
    margin: 0 auto!important;
    padding: 40px 0 41px;
  }

  .cards-panel__title {
    display: block;
    width: 100%;
    margin-bottom: 24px;
    text-align: left;
    text-transform: capitalize;
    color: #40354e;
    font-size: 20px;
    font-weight: 700;
  }
  .cards-panel__inner-wrap {
    position: relative;
  }
  .panel-ul {
    width: 100%;
    li {
      position: relative;
      display: block;
      float: left;
      width: 196px;
      height: 264px;
      margin-right: 20px;
      border: 3px solid #f5f5fa;
      border-radius: 4px;
      background: #fff;
      &:nth-child(6) {
        margin-right: 0;
      }
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        .img-outer {
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
    }
  }

  .swiper-button-prev {
    z-index: 999;
    top: 0;
    left: 0;
    display: block;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 4%;
    height: 100%;
    margin: 0;
    text-align: center;
    border: 3px solid #f5f5fa;
    outline: none;
    background: hsla(0,0%,100%,.9);
  }
  .swiper-button-prev.swiper-button-disabled {
    opacity: 0;
    cursor: auto;
    pointer-events: none;
  }
  .swiper-button-next {
    z-index: 999;
    top: 0;
    right: 0;
    display: block;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 4%;
    height: 100%;
    margin: 0;
    margin-right: -15px;
    text-align: center;
    border: 3px solid #f5f5fa;
    outline: none;
    background: hsla(0,0%,100%,.9);
  }
  .swiper-button-next.swiper-button-disabled {
    opacity: 0;
    cursor: auto;
    pointer-events: none;
  }

  .s1 {
    display: flex;
    align-items: center;
    font-size: 30px;
  }
</style>
