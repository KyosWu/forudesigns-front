<template>
  <div class="the-header__left">
    <!--网站logo-->
    <div class="the-logo">
      <nuxt-link to="/">
        <img src="../../../assets/images/public/my.jpg" alt="" class="the-logo_link">
      </nuxt-link>
    </div>
    <!--nav导航-->
    <div class="nav-manu">
      <ul class="nav-manu__contanier">
        <li class="menu-item">
          <div class="base-popover">
            <div class="base-popover__target"
                 @mouseenter="enter_shop_func" @mouseleave="leave_shop_func">
              <nuxt-link to="/shop" class="menu-item__title">
                Shop
              </nuxt-link>
              <span style="display: none" class="base-popover__target-arrow"></span>
            </div>
            <!--鼠标移动上去 滑动的详细面板-->
            <transition name="shop">
              <div class="base-popover__content" v-show="isshop">
                <div class="base-popover__content__loading">
                  <i></i>
                </div>
                <!--主要内容区域-->
                <div>
                  <keep-alive>
                    <div class="shop-submenu el-row">
                      <!--左侧面板-->
                      <div class="el-col el-col-24 el-col-xs-8 el-col-sm-4 el-col-md-3">
                        <aside>
                          <ul v-for="(item, index) in menuArray" :key="index"
                              @mouseenter="enter_col_menu_func(item.type)" @mouseleave="leave_col_menu_func">
                            <li class="shop-submenu__side-menu-item">
                              <nuxt-link to="">
                                <span class="shop-submenu__side-menu-item__title">
                                  {{item.name}}
                                </span>
                                <!--图标-->
                                <span></span>
                              </nuxt-link>
                            </li>
                          </ul>
                        </aside>
                      </div>
                      <!--右侧面板-->
                      <div v-if="kind" class="el-col el-col-24 el-col-xs-16 el-col-sm-20 el-col-md-21">

                        <!--详细-->
                        <div class="shop-submenu__content">
                          <div class="shop-submenu__content__items-wrap el-row"
                               style="margin-left: -12px; margin-right: -12px;"
                               v-for="(item, index) in curdetail.child" :key="index">
                            <div v-for="v in item.child" :key="v">
                              <div class="shop-submenu__content__item
                              el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-8 el-col-lg-6 el-col-xl-6">
                                <nuxt-link to="">{{ v }}</nuxt-link>
                              </div>
                            </div>
                          </div>
                          <!--更多-->
                          <div class="shop-submenu__content__all">
                            <a href="">
                              <span>ALL</span>
                              <span>{{this.kind}}</span>
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </keep-alive>

                </div>
              </div>
            </transition>
          </div>
        </li>

        <!--create-->
        <li class="menu-item">
          <div class="base-popover">
            <div class="base-popover__target"
                 @mouseenter="enter_col_func" @mouseleave="leave_col_func">
              <nuxt-link to="/artworks" class="menu-item__title">
                Collections
              </nuxt-link>
              <span style="display: none" class="base-popover__target-arrow"></span>
            </div>
            <!--鼠标移动上去 滑动的详细面板-->
            <transition name="col">
              <div class="base-popover__content" v-show="iscol"
              style="overflow: hidden; padding-top: 0; padding-bottom: 0;">
                <div class="base-popover__content__loading">
                </div>
                <div>
                  <div class="artwork-submenu">

                    <div class="el-row" style="margin-left: -12px; margin-right: -12px;">
                      <div class="el-col el-col-24 el-col-xs-12 el-col-sm-8 el-col-md-6 el-col-lg-4 el-col-xl-4"
                      style="padding-left: 12px; padding-right: 12px;"
                           v-for="(item, index) in colArray" :key="index">
                        <nuxt-link to="" class="artwork-submenu__link">
                          <div class="img-outer" style="width: 60px; height: 60px;">
                            <img :src="item.src" alt="" class="img-inner" style="width: 60px; height: 60px;">
                          </div>
                          <span class="artwork-submenu__link__name">{{item.name}}</span>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </li>
        <!--create-->
        <li class="menu-item">
          <div class="base-popover">
            <div class="base-popover__target">
              <nuxt-link to="/create" class="menu-item__title">
                Create
              </nuxt-link>
              <span style="display: none" class="base-popover__target-arrow"></span>
            </div>
          </div>
        </li>
        <!--artist-->
        <li class="menu-item">
          <div class="base-popover">
            <div class="base-popover__target">
              <nuxt-link to="/artists" class="menu-item__title">
                Artist
              </nuxt-link>
              <span style="display: none" class="base-popover__target-arrow"></span>
            </div>
          </div>
        </li>
        <!--business-->
        <li class="menu-item">
          <div class="base-popover">
            <div class="base-popover__target">
              <nuxt-link to="/business" class="menu-item__title">
                Business
              </nuxt-link>
              <span style="display: none" class="base-popover__target-arrow"></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
  import { mapGetters } from 'vuex'
  export default {
    name: "Header_left",
    data () {
      return {
        kind: "Men's",
        // 判断鼠标进入离开shop
        isshop: false,
        // 判断鼠标进入离开collection
        iscol: false,
        colArray : [
          {id: 1, name: 'animals', src: require('../../../assets/images/nav-bar/col/1.jpeg')},
          {id: 2, name: 'art styles', src: require('../../../assets/images/nav-bar/col/2.jpeg')},
          {id: 3, name: 'colors', src: require('../../../assets/images/nav-bar/col/3.jpeg')},
          {id: 4, name: 'countries', src: require('../../../assets/images/nav-bar/col/4.jpeg')},
          {id: 5, name: 'food', src: require('../../../assets/images/nav-bar/col/5.jpeg')},
          {id: 6, name: 'funny', src: require('../../../assets/images/nav-bar/col/6.jpeg')},
          {id: 7, name: 'big day', src: require('../../../assets/images/nav-bar/col/7.jpeg')},
          {id: 8, name: 'home decor', src: require('../../../assets/images/nav-bar/col/8.jpeg')},
          {id: 9, name: 'love', src: require('../../../assets/images/nav-bar/col/9.jpeg')},
          {id: 10, name: 'nature', src: require('../../../assets/images/nav-bar/col/10.jpeg')},
          {id: 11, name: 'pop culture', src: require('../../../assets/images/nav-bar/col/11.jpeg')},
          {id: 12, name: 'view all collections', src: require('../../../assets/images/nav-bar/col/12.jpeg')},
        ],
        menuArray: [
          {
            type:"Men's",
            name:"Men's",
            child:[{
              title: 'Men\'s',
              child: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
            }]
/*              {name: "Men's All Over Print Board Shorts"},
              {name: "New Men's All Over Print T-shirt"},
              {name: "Men's All Over Print Zip Hoodie"},
              {name: "Men's All Over Print Polo Shirt"},
              {name: "White EVA High Top Canvas shoes"},
              {name: "White EVA Low Top Canvas shoes"},
              {name: "Mesh Heightening Rocking Shoes"},
              {name: "Men's All Over Print T-shirts"},
              {name: "Men's All Over Print Sweater"},
              {name: "New Black Mesh Knit Sneakers"},
              {name: "New White Mesh Knit Sneakers"},
              {name: "White High Top Canvas Shoes"},
              {name: "Black High Top Canvas Shoes"},
              {name: "Men's All Over Print Hoodie"},
              {name: "White Low Top Canvas Shoes"},
              {name: "Black Low Top Canvas Shoes"},
              {name: "Men's All Over Print Tank"},
              {name: "White Slide Sandals Shoes"},
              {name: "Black Slide Sandals Shoes"},
              {name: "White Mesh Knit Sneakers"},
              {name: "Men’s PU Lace Up Shoes"},
              {name: "White Running Shoes"},
              {name: "Black Running Shoes"},
              {name: "White Slip On Shoes"},
              {name: "Black Slip On Shoes"},
              {name: "Men's Bomber Jacket"},
              {name: "Mesh Running Shoes"},
              {name: "Men's Board Shorts"},
              {name: "Men's Bathrobe"},
              {name: "Leather Boots"},
              {name: "Slippers"},
              {name: "Mesh"},
              {name: "Flip Flops"},
              {name: "Crew Socks"},
              {name: "Waist Bags"},
              {name: "Slippers"},*/
          },
          {
            type:"Women's",
            name:"Women's",
            child:[{
              title: "Women's",
              child: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
            }]
          },
          {
            type:"Kids & Babies",
            name:"Kids & Babies",
            child:[{
              title: "Kids & Babies",
              child: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
            }]
          }
        ],
        menu_index: 0,
        menu_child: []
      }
    },
    computed: {
      curdetail:function(){
        return this.menuArray.filter(item => item.type===this.kind)[0]
      }
    },
    methods: {
      // 鼠标进入shop
      enter_shop_func () {
        this.isshop = !this.isshop
      },
      // 鼠标离开shop
      leave_shop_func () {
        this.isshop = !this.isshop
      },
      // 鼠标进入col
      enter_col_func () {
        this.iscol = !this.iscol
      },
      // 鼠标离开col
      leave_col_func () {
        this.iscol = !this.iscol
      },
      // // 鼠标进入menu 的side
      enter_col_menu_func (index) {
        this.kind = index
        // console.log(this.menu_index)
      },
      // 鼠标离开menu 的side
      leave_col_menu_func () {
        // this.kind = ''
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import '../../../assets/css/public/header/left.scss';
  .the-logo_link {
    width: 33px;
    height: 33px;
    border-radius: 50%;
    @include common_img_center_contain;
  }

  .base-popover__content {
    position: absolute;
    z-index: 9999;
    top: 101%;
    right: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    background: #fff;
    box-shadow: 0 8px 16px -8px rgba(0,0,0,.4);
    /* loading */
    .base-popover__content__loading {
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      margin: 10px 0;
      font-size: 30px;
    }
    .artwork-submenu {
      width: 100%;
      max-width: 1280px;
      margin: 0 auto;
      padding-top: 24px;
      .el-row {
        position: relative;
        box-sizing: border-box;
      }
    }
  }
  /*collections*/
  .artwork-submenu__link {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    margin-bottom: 24px;
    border-radius: 4px;
    background: #f5f5fa;
    .artwork-submenu__link__name {
      display: -webkit-box;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      width: calc(100% - 60px);
      height: 100%;
      text-align: center;
      text-transform: capitalize;
      color: #40354e;
      font-size: 16px;
      font-family: Arial;
    }
  }
  .el-row {
    position: relative;
    box-sizing: border-box;
  }

  /*商品区域*/
  .shop-submenu {
    position: relative;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;
    background: #fff;
    /*左侧*/
    .shop-submenu__side-menu-item {
      position: relative;
      display: block;
      padding: 0 15px;
      cursor: pointer;
      color: #40354e;
      border-bottom: 1px solid #dfdfeb;
      background: #fff;
      font-size: 14px;
      line-height: 42px;
      .shop-submenu__side-menu-item__title {
        display: block;
        width: 95%;
        text-transform: uppercase;
        word-break: break-all;
        color: #1a1a1a;
      }
    }
    /*右侧*/
    .shop-submenu__content {
      position: absolute;
      display: -webkit-box;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;
      height: 100%;
      background: #fff;
      .shop-submenu__content__items-wrap {
        display: -webkit-box;
        display: flex;
        overflow-y: auto;
        align-content: flex-start;
        flex-wrap: wrap;
        width: 100%;
        height: 90%;
        padding: 0 15px;
        .shop-submenu__content__item {
          display: block;
          padding: 10px 0;
          cursor: pointer;
          text-transform: capitalize;
          color: #8c95a5;
          font-size: 14px;
        }
      }
      /*更多*/
      .shop-submenu__content__all {
        display: block;
        width: 100%;
        text-align: right;
        text-transform: uppercase;
        color: #40354e;
        background: #fff;
        font-size: 14px;
        a {
          cursor: pointer;
          color: #40354e
        }
      }
    }

  }


  /* shop 动画*/
  .shop-enter-active {
    /*transition: all 0.3s ease;*/
    animation: shop_slideup 1s ease-in-out;
  }
  .shop-leave-active {
    /*transition: all 0.3s ease;*/
    animation: shop_slidedown 0.5s ease-in-out;
  }
  /* col 动画*/
  .col-enter-active {
    /*transition: all 0.3s ease;*/
    animation: col_slideup 1s ease-in-out;
  }
  .col-leave-active {
    /*transition: all 0.3s ease;*/
    animation: col_slidedown 0.5s ease-in-out;
  }
  @keyframes shop_slideup {
    0% {
      height: 0;
    }
    100% {
      height: 149px;
    }
  }
  /*{*/
    /*from {height:0;}*/
    /*to {height:192px;}*/
  /*}*/
  @keyframes shop_slidedown {
    0% {
      height: 149px;
    }
    100% {
      height: 0;
    }
    /*from {height:192px;}*/
    /*to {height:0;}*/
  }
  @keyframes col_slideup {
    0% {
      height: 0;
    }
    100% {
      height: 212px;
    }
  }
  /*{*/
  /*from {height:0;}*/
  /*to {height:192px;}*/
  /*}*/
  @keyframes col_slidedown {
    0% {
      height: 212px;
    }
    100% {
      height: 0;
    }
    /*from {height:192px;}*/
    /*to {height:0;}*/
  }


  @media only screen and (min-width: 1920px) {
    .el-col-xl-4 {
      width: 16.66667%;
    }
  }
</style>
