<template>
  <div class="the-header__left">
    <!--网站logo-->
    <div class="the-logo">
      <nuxt-link to="/">
          <img src="../../../assets/images/public/my.jpg" alt="" class="the-logo_link"
               :class="{'rotate-logo':islogshow}"
               @mouseover="enter_log_func"
               @mouseleave="leave_log_func">
      </nuxt-link>
    </div>
    <!--nav导航-->
    <div class="nav-manu">
      <ul class="nav-manu__contanier">
        <!--nav-->
        <li class="menu-item" v-for="(item, j) in nav" :key="j">
          <div class="base-popover">
            <div class="base-popover__target"
                 @mouseenter="enter_func(j)" @mouseleave="leave_func(j)"
                 @click="chooseItem(j)">
              <nuxt-link :to="item.to" class="menu-item__title" :class="{active_Nav_Index: chooseindex === j}">
                {{item.name}}
              </nuxt-link>
              <span style="display: none" class="base-popover__target-arrow"></span>
            </div>
          </div>
        </li>

      </ul>
      <!--鼠标移动上去 滑动的详细面板-->
      <transition name="shop">
        <div class="base-popover__content" v-show="isshop">
          <div class="base-popover__content__loading">
            <i></i>
          </div>
          <!--主要内容区域-->
          <div @mouseenter="enter_content_func" @mouseleave="leave_content_func">
            <keep-alive>
              <div class="shop-submenu el-row">
                <!--左侧面板-->
                <div class="el-col el-col-24 el-col-xs-8 el-col-sm-4 el-col-md-3">
                  <aside>
                    <ul v-for="(menuitem, k) in menuArray" :key="k"
                        @mouseenter="enter_col_menu_func(menuitem.type, k)" @mouseleave="leave_col_menu_func">
                      <li class="shop-submenu__side-menu-item">
                        <nuxt-link to="">
                          <span class="shop-submenu__side-menu-item__title" :class="{active_menu_item: menuindex === k}">
                            {{menuitem.name}}
                          </span>
                          <!--图标-->
                          <span class="shop-submenu__side-menu-item__arrow" v-show="menuindex === k">
                            <i class="el-icon-arrow-right"></i>
                          </span>
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
                      <div v-for="v in item.child" :key="v" class="shop-submenu__content__item
                        el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-8 el-col-lg-6 el-col-xl-6"
                           style="padding-left: 12px; padding-right: 12px;">
                          <nuxt-link to="">{{ v }}</nuxt-link>
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

      <!--鼠标移动上去 滑动的详细面板-->
      <transition name="col">
        <div class="base-popover__content" v-show="iscol"
             style="overflow: hidden; padding-top: 0; padding-bottom: 0;">
          <div class="base-popover__content__loading">
          </div>
          <div @mouseenter="enter_content_func" @mouseleave="leave_content_func">
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
  </div>
</template>


<script>
  import { mapGetters } from 'vuex'
  export default {
    name: "Header_left",
    data () {
      return {
        nav: [
          {name: 'Shop', to: '/shop'},
          {name: 'Collections', to:'/artworks'},
          {name: 'Create', to: '/create'},
          {name: 'Artists', to:'/artists'},
          {name: 'Business', to: '/business'}
        ],
        // 鼠标静茹menu 的index 下标
        menuindex: 0,
        islogshow: false,
        ischoose: false,
        kind: "Men's",
        // 判断鼠标进入离开shop
        isshop: false,
        // 判断是否slide在模板当中
        isContent: false,
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
              child: ['Men\'s All Over Print Board Shorts',
                'Men\'s All Over Print Board Shorts',
                'Men\'s All Over Print Board Shorts',
                'Men\'s All Over Print Board Shorts',
                'New Men\'s All Over Print T-shirt',
                'New Men\'s All Over Print T-shirt',
                'Mesh Heightening Rocking Shoes',
                'Mesh Heightening Rocking Shoes']
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
              child: ['Men\'s All Over Print Board Shorts',
                'Men\'s All Over Print Board Shorts',
                'Men\'s All Over Print Board Shorts',
                'Men\'s All Over Print Board Shorts',
                'New Men\'s All Over Print T-shirt',
                'New Men\'s All Over Print T-shirt',
                'Mesh Heightening Rocking Shoes',
                'Mesh Heightening Rocking Shoes']
            }]
          },
          {
            type:"Kids & Babies",
            name:"Kids & Babies",
            child:[{
              title: "Kids & Babies",
              child: ['Men\'s All Over Print Board Shorts',
                'Men\'s All Over Print Board Shorts',
                'Men\'s All Over Print Board Shorts',
                'Men\'s All Over Print Board Shorts',
                'New Men\'s All Over Print T-shirt',
                'New Men\'s All Over Print T-shirt',
                'Mesh Heightening Rocking Shoes',
                'Mesh Heightening Rocking Shoes']
            }]
          }
        ],
        menu_index: 0,
        menu_child: [],
        chooseindex: '',
        choosename: ''
      }
    },
    computed: {
      curdetail:function(){
        return this.menuArray.filter(item => item.type===this.kind)[0]
      }
    },
    methods: {
      enter_log_func () {
        this.islogshow = true
      },
      leave_log_func () {
        this.islogshow = false
      },
      // 鼠标进入nav
      enter_func (index) {
        this.chooseindex = index
        if(index === 0) {
          this.isshop = true
          this.iscol = false
          this.isContent = true
        }
        if(index === 1) {
          this.iscol = true
          this.isshop = false
          this.isContent = true
        }
      },
      // 鼠标离开nav
      leave_func (index) {
        this.chooseindex = ''
        if(index === 0 && this.isContent === false) {
          this.isshop = false
        }
        if(index === 1 && this.isContent === false) {
          this.iscol = false
        }
      },
      // 鼠标进入content
      enter_content_func (index) {
        this.isContent = true
      },
      // 鼠标离开content
      leave_content_func (index) {
        this.iscol = false
        this.isshop = false
      },
      // 鼠标进入menu 的side
      enter_col_menu_func (type ,index) {
        this.kind = type
        this.menuindex = index
      },
      // 鼠标离开menu 的side
      leave_col_menu_func () {
      },
      // 选中nav 的item
      chooseItem (j) {
        // 选中的索引
        // this.chooseindex = j
        // this.ischoose = true
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import '../../../assets/css/public/header/left.scss';
  .the-logo_link {
    width: 50px;
    /*height: 50px;*/
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
      .shop-submenu__side-menu-item__arrow {
        position: absolute;
        top: 0;
        right: 5px;
        color: #40354e;
        font-size: 16px;
        .el-icon-arrow-right {
          font-weight: bold;
        }
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
          a {
            color: #8c95a5;
          }
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
      a {
        cursor: pointer;
        color: #40354e;
      }
    }
  }

  /*选择每个item 地下新增下划线*/
  .active_Nav_Index {
    border-bottom: 4px solid red!important;
  }
  /*menu 进入的item 效果*/
  .active_menu_item {
    font-weight: bold;
  }


  .rotate-logo {
    -webkit-transition-property: -webkit-transform;
    -webkit-transition-duration: 0.5s;
    -moz-transition-property: -moz-transform;
    -moz-transition-duration: 1s;
    -webkit-animation: rotate 2s linear infinite;
    -moz-animation: rotate 2s linear infinite;
    -o-animation: rotate 2s linear infinite;
    animation: rotate 2s linear infinite;
  }
  @-webkit-keyframes rotate{from{-webkit-transform: rotate(0deg)}
    to{-webkit-transform: rotate(-360deg)}
  }
  @-moz-keyframes rotate{from{-moz-transform: rotate(0deg)}
    to{-moz-transform: rotate(-359deg)}
  }
  @-o-keyframes rotate{from{-o-transform: rotate(0deg)}
    to{-o-transform: rotate(-359deg)}
  }
  @keyframes rotate{from{transform: rotate(0deg)}
    to{transform: rotate(-359deg)}
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


  @media only screen and (min-width: 1200px) {
    .el-col-lg-6 {
      width: 25%;
    }
  }
  @media only screen and (min-width: 1920px) {
    .el-col-xl-4 {
      width: 16.66667%;
    }
  }
</style>
