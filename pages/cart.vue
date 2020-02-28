<template>
    <main class="defalut-layout__main">
      <div class="cart-main">
        <!--mianbaox-->
        <div class="breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item>cart</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <!--步骤条-->
        <div class="cart-steps">
          <el-steps :active="1" align-center>
            <el-step title="STEP 1" icon="el-icon-edit" description="SHOPPING CART"></el-step>
            <el-step title="STEP 2" icon="el-icon-edit" description="ENTER ORDER INFO"></el-step>
            <el-step title="STEP 3" icon="el-icon-edit" description="ORDER SUBMISSION"></el-step>
          </el-steps>
        </div>

        <!--购物车具体信息-->
        <div class="cart-content">
          <!--如果是空购物车-->
          <div class="empty">
            <div class="no-data">
              <div class="no-data-wrap">
                <!--无数据的图片-->
                <div class="img-wrap">
                  <div class="img-outer">
                    <img src="../assets/images/cart/cart-empty.jpg" alt="" class="img-inner">
                  </div>
                </div>
                <!--无数据提醒-->
                <div class="no-data-info">
                  <div class="cart-detailed">
                    <p class="cart-title">
                      Your Shopping Cart
                    </p>
                    <p class="cart-brief">
                      You have no items in your cart...
                    </p>
                    <p class="cart-brief">
                      you can
                      <nuxt-link to="" class="cart-product">
                        Choose
                      </nuxt-link>
                      or
                      <nuxt-link to="" class="cart-product">
                        Create
                      </nuxt-link>
                      the products what you like
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--加载loading-->
          <!--<div class="el-loading-mask">-->
            <!--<div class="el-loading-spinner"></div>-->
          <!--</div>-->
        </div>

        <!--其他-->
        <div>
          <!--看过的-->
          <div class="cards-panel" style="display: none">
            <div class="cards-panel__title">
              Recently viewed
            </div>
          </div>
          <!--你可能感兴趣-->
          <div class="cards-panel" style="">
            <div class="cards-panel__title">
              You may be interested in the following items
            </div>
            <!--swiper组件-->
            <div class="cards-panel__inner-wrap">
              <swiper :options="swiperOption2" style="width: 1280px; margin-right: 15px;">

                <swiper-slide  v-for="(item, index) in list2" :key="index">
                  <!--v-for="(item1, p) in list.length" :key="p"-->
                  <ul class="panel-ul clear-both">
                    <li v-for="(item2,i) in item.list1" :key="i">
                      <nuxt-link to="">
                        <div class="img-outer">
                          <img :src="item2.src" alt="" class="img-inner"
                               style="object-fit: contain;">
                        </div>
                      </nuxt-link>
                    </li>
                  </ul>

                </swiper-slide>

              </swiper>
              <!-- 左右箭头 -->
              <div class="swiper-button-prev s2" slot="button-prev">
                <i class="el-icon-caret-left"></i>
              </div>
              <div class="swiper-button-next s2" slot="button-next">
                <i class="el-icon-caret-right"></i>
              </div>
            </div>
          </div>
        </div>

      </div>

    </main>
</template>

<script>
  import { mapGetters } from 'vuex'
    export default {
        name: "cart",
      computed: {
        ...mapGetters([
          'Cart_Head_Title'
        ]),
      },
      data () {
          return {
            list2: [
              {
                list1: [
                  {src: require('../assets/images/cart/1.jpg')},
                  {src: require('../assets/images/cart/1.jpg')},
                  {src: require('../assets/images/cart/1.jpg')},
                  {src: require('../assets/images/cart/1.jpg')},
                  {src: require('../assets/images/cart/1.jpg')},
                  {src: require('../assets/images/cart/1.jpg')},
                ]
              },
              {
                list1: [
                  {src: require('../assets/images/cart/1.jpg')},
                  {src: require('../assets/images/cart/1.jpg')},
                  {src: require('../assets/images/cart/1.jpg')},
                  {src: require('../assets/images/cart/1.jpg')},
                  {src: require('../assets/images/cart/1.jpg')},
                  {src: require('../assets/images/cart/1.jpg')},
                ]
              },
              {
                list1: [
                  {src: require('../assets/images/cart/1.jpg')},
                  {src: require('../assets/images/cart/1.jpg')},
                  {src: require('../assets/images/cart/1.jpg')},
                  {src: require('../assets/images/cart/1.jpg')},
                  {src: require('../assets/images/cart/1.jpg')},
                  {src: require('../assets/images/cart/1.jpg')},
                ]
              },
            ],
            swiperOption2: {
              autoplay: false,
              // slidesPerView: 1,// 每页展示几个
              // slidesPerGroup: 6,// 每屏滚动几个
              speed: 800,
              // loop: true,
              slidesPerView: 'auto',
              //设置点击箭头
              navigation: {
                nextEl: '.swiper-button-next.s2',
                prevEl: '.swiper-button-prev.s2'
              }
            },
          }
      },
      created () {
        //  需要判断是否是客户端
        if (process.client) {
          // 进入前创造title
          document.title = this.Cart_Head_Title
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
  .defalut-layout__main {
    padding-bottom: 20px;
  }
  .cart-main {
    width: 1280px;
    margin: 0 auto;
    background: #fff;
    .breadcrumb {
      display: -webkit-box;
      display: flex;
      width: 1280px;
      margin: 0 auto;
      padding: 0 15px;
      font-size: 14px;
      line-height: 30px;
      height: 30px;
      align-items: center;
    }
    .cart-steps {
      width: 100%;
      padding-top: 30px;
      padding-bottom: 15px;
    }
    .cart-content {
      width: 1280px;
      min-height: 365px;
    }
  }
  .no-data {
    width: 100%;
    -webkit-animation: show .5s linear;
    animation: show .5s linear;
    .no-data-wrap {
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      width: 100%;
      padding: 80px 0;
    }
  }
  .img-wrap {
    width: 205px;
    height: 205px;
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
        vertical-align: middle
      }
    }
  }
  .no-data-info {
    margin-left: 40px;
    color: #8c95a5;
    font-size: 16px;
    .cart-detailed {
      width: 400px;
      text-align: left;
      .cart-title {
        margin-bottom: 18px;
        color: #8c95a5;
        font-size: 28px;
        line-height: 25px;
      }
      .cart-brief {
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
  .cart-product {
    color: #4292e3;
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
</style>


<style lang="scss" scoped>
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
    right: -4px;
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

  .s2 {
    display: flex;
    align-items: center;
    font-size: 30px;
  }
</style>
