<template>
  <div class="the-header__right">
    <div class="the-header__right__inner-warp">

      <div class="base-popover" @mouseenter="enter_notice_func"
           @mouseleave="leave_func(1)">
        <div class="base-popover__target">
          <nuxt-link to="/my/message">
            <div class="notice-icon"></div>
          </nuxt-link >
        </div>

      </div>
      <!--通知-->
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut">
        <Notice v-if="isNotice"/>
      </transition>

      <!--购物车-->
      <div class="base-popover" @mouseenter="enter_carts_func"
      @mouseleave="leave_func(2)">
        <div class="base-popover__target">
          <nuxt-link to="/cart">
            <div class="cart-icon"></div>
          </nuxt-link >
        </div>
      </div>
      <transition
        enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight">
        <Cart v-if="isCart"/>
      </transition>

      <!--用户登录状态显示-->
      <div class="base-popover" @mouseenter="enter_user_func"
           @mouseleave="leave_func(3)">
        <div class="base-popover__target">
          <!--用户头像-->
          <nuxt-link to="/my">
            <div class="user-icon"></div>
          </nuxt-link >
          <!--三角标签-->
          <span class="base-popover__target-arrow"></span>
        </div>
      </div>
      <transition
        enter-active-class="animated flipInY"
        leave-active-class="animated fadeOut">
        <User v-if="isUser"/>
      </transition>


      <!--登录按钮-->
      <Login/>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

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
      }
    },
    computed: {
      ...mapGetters([
        'isNotice',
        'isContent',
        'isCart',
        'isUser'
      ])
    },
    methods: {
      ...mapActions([
        'set_content',
        'set_notice',
        'set_cart',
        'set_user'
      ]),
      // 进入通知触发
      enter_notice_func () {
        this.set_notice(true)
        this.set_content(true)
        this.set_cart(false)
        this.set_user(false)
      },
      // 进入cart触发
      enter_carts_func () {
        this.set_cart(true)
        this.set_content(true)
        this.set_notice(false)
        this.set_user(false)
      },
      enter_user_func () {
        this.set_user(true)
        this.set_content(true)
        this.set_notice(false)
        this.set_cart(false)
      },
      // 离开触发
      leave_func (num) {
        if(num === 1 && this.isContent === false) {
          this.set_notice(false)
        }
        if(num === 2 && this.isContent === false) {
          this.set_cart(false)
        }
        if(num === 3 && this.isContent === false) {
          this.set_user(false)
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/public/header/right.scss";
</style>


<style lang="scss" scoped>
  .the-header__right {
    -webkit-box-pack: end;
    justify-content: flex-end;
    height: 100%;
    margin-left: 20px;
    .the-header__right__inner-warp {
      position: relative;
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      height: 100%;
    }
  }
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
  .user-icon {
    width: 40px;
    height: 40px;
    @include common_img_center-contain;
    background-image: url("../../../assets/images/public/avatar/用户.svg");
  }
  .base-popover {
    margin: 0 10px;
    .base-popover__target {
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      height: inherit;
      a {
        padding-bottom: 10px;
        padding-top: 10px;
      }
    }
  }

</style>
