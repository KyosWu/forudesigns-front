<template>
  <div class="the-header__right">
    <div class="the-header__right__inner-warp">

      <div class="base-popover" @mouseenter="enter_notice_func"
           @mouseleave="leave_notice_func">
        <div class="base-popover__target">
          <nuxt-link to="/my/message">
            <div class="notice-icon"></div>
          </nuxt-link >
        </div>
      </div>
      <!--通知-->
      <Notice v-if="isnotice"/>
      <!--购物车-->
      <div class="base-popover" @mouseenter="enter_carts_func"
      @mouseleave="leave_cart_func">
        <div class="base-popover__target">
          <nuxt-link to="/cart">
            <div class="cart-icon"></div>
          </nuxt-link >
        </div>
      </div>
      <transition
        enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight">
        <Cart v-if="iscart"/>
      </transition>

      <!--用户登录状态显示-->
      <User/>
      <!--登录按钮-->
      <Login/>
    </div>
  </div>
</template>

<script>
  import Notice from './headerRight/Notice'
  import Cart from './headerRight/Cart'
  import User from './headerRight/User'
  import Login from './headerRight/Login'
  export default {
    name: "Header_right",
    components: {
      Notice,
      Cart,
      User,
      Login
    },
    data () {
      return {
        isnotice: false,
        iscart: false
      }
    },
    methods: {
      // 进入通知触发
      enter_notice_func () {
        this.isnotice = true
      },
      // 离开通知触发
      leave_notice_func () {
        this.isnotice = true
      },
      // 进入cart触发
      enter_carts_func () {
        this.iscart = true
      },
      // 离开cart触发
      leave_cart_func () {
        this.iscart = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/public/header/right.scss";
</style>


<style lang="scss" scoped>
  .notice-icon {
    width: 25px;
    height: 25px;
    @include common_img_center-contain;
    background-image: url("../../../assets/images/public/tools/铃铛.svg");
  }
  .cart-icon {
    width: 25px;
    height: 25px;
    @include common_img_center-contain;
    background-image: url("../../../assets/images/public/tools/购物车.svg");
  }
  .base-popover {
    margin: 0 10px;
    .base-popover__target {
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      height: inherit;
    }
  }
</style>
