<template>
  <div class="the-header__right">
    <div class="the-header__right__inner-warp">
      <!--购物车-->
      <div class="base-popover">
        <div class="base-popover__target">
          <nuxt-link to="/cart">
            <div class="cart-icon"></div>
          </nuxt-link >
          <!--<span></span>-->
        </div>
        <!--购物车提示面板-->
        <div class="base-popover__content" style="display: none">
          <!--加载效果-->
          <div class="base-popover__content__loading">
            <i></i>
          </div>
          <!--主面板内容-->
          <div class="">
            <div class="the-cart__popover">
              <!--无订单，空的情况下-->
              <div class="cart-empty" style="display: none">
                <h3 class="cart-empty__title">
                  You have no items in your cart...
                </h3>
                <p class="cart-empty__notice">
                  You can go to shopping right now!
                </p>
                <div class="cart-empty__link">
                  <nuxt-link to="#">
                    <button class="cart-empty__link__btn btn_02">Shop Now</button>
                  </nuxt-link>
                </div>
              </div>
              <!--有订单情况下，确认结算-->
              <div class="cart-list" style="display: block">
                <div class="cart-list__content">
                  <ul></ul>
                </div>
                <div class="cart-list__btns">
                  <a href="">
                    <button class="cart-list__btns__left btn_01">
                      More in Cart
                    </button>
                  </a>
                  <a href="">
                    <button class="cart-list__btns__right btn_01">
                      Check Out
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--用户登录状态显示-->
      <div class="user-dropdown" style="display: none">
        <div class="base-popover__target">
          <a href="" class="user-dropdown__avatar">
            <div>
              <img src="" alt="">
            </div>
          </a>
          <span></span>
        </div>
        <div class="base-popover__content" style="display: none">
          <div class="base-popover__content__loading">
            <i></i>
          </div>
          <div class="user-dropdown__popover">
            <div class="left-product-list">
              <div class="base-product-list">
                <h3 class="base-product-list__title">
                  Your Collections
                </h3>
                <ul class="base-product-list__items-wrap"></ul>
              </div>
              <div class="base-product-list">
                <h3 class="base-product-list__title">
                  Recently viewed
                </h3>
                <ul class="base-product-list__items-wrap"></ul>
              </div>
            </div>
            <div class="right-menu">
              <div class="base-menus base-menu">
                <h3 class="base-menus__title">
                  My Account
                </h3>
                <div class="base-menus__inner-wrap">
                  <ul>
                    <li class="base-menus__item" style="display: none">
                      <a href="">Dashboard</a>
                    </li>
                    <li class="base-menus__item" style="display: none">
                      <a href="">My Wallet</a>
                    </li>
                    <li class="base-menus__item" style="display: none">
                      <a href="">
                        My Images
                      </a>
                    </li>
                    <li class="base-menus__item" style="display: none">
                      <a href="">
                        My Products
                      </a>
                    </li>
                    <li class="base-menus__item" style="display: none">
                      <a href="">
                        My Orders
                      </a>
                    </li>
                    <li class="base-menus__item" style="display: none">
                      <a href="">
                        My Profile
                      </a>
                    </li>
                    <li class="base-menus__item" style="display: none">
                      <a href="">
                        My Viewed
                      </a>
                    </li>
                    <li class="base-menus__item" style="display: none">
                      <a href="">
                        My Collection
                      </a>
                    </li>
                    <li class="base-menus__item" style="display: none">
                      <a href="">
                        My Orders
                      </a>
                    </li>
                    <li class="base-menus__item" style="display: none">
                      <a href="">
                        Artist Homepage
                      </a>
                    </li>

                    <li class="base-menus__item" style="display: none">
                      <a href="">
                        Security
                      </a>
                    </li>
                    <li class="base-menus__item" style="display: none">
                      <a href="">
                        Notification Center
                      </a>
                    </li>
                    <li class="base-menus__item" style="display: none">
                      <a href="">
                        Notification Settings
                      </a>
                    </li>
                  </ul>
                  <span class="base-menus__bottom-menu">
                    Log Out
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--登录按钮-->
      <div class="login-btn">
        <nuxt-link to="/login">
          <button class="login-btn__btn">
            Login
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header_right"
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/public/header/right.scss";
  .cart-icon {
    width: 25px;
    height: 25px;
    @include common_img_center-contain;
    background-image: url("../../../assets/images/public/header/购物车.svg");
  }

</style>
