<template>

  <!--购物车提示面板-->
  <div class="base-popover__content">
    <!--加载效果-->
    <div class="base-popover__content__loading">
      <i></i>
    </div>
    <!--主面板内容-->
    <div class="">
      <div class="the-cart__popover">
        <!--无订单，空的情况下-->
        <div class="cart-empty" style="display: block">
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
        <div class="cart-list" style="display: none">
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
</template>

<script>
    export default {
        name: "Cart"
    }
</script>

<style lang="scss" scoped>
  .cart-icon {
    width: 25px;
    height: 25px;
    @include common_img_center-contain;
    background-image: url("../../../../assets/images/public/tools/购物车.svg");
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
  .base-popover__content {
    top: 100%;
    right: 0;
    left: auto;
    border: 1px solid #dfdfeb;
    border-radius: 4px;
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
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
  }
  .base-popover__content {
    position: absolute;
    top: 100%;
    width: 500px;
    right: 0;
    left: auto;
    border: 1px solid #dfdfeb;
    border-radius: 4px;
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
    background-color: white;
    .the-cart__popover {
      padding: 12px 10px 30px;
      .cart-empty {
        padding: 50px 0 26px;
        text-align: center;
        color: #40354e;
        .cart-empty__title {
          font-size: 18px;
          font-weight: 700;
        }
        .cart-empty__notice {
          margin-top: 24px;
          font-size: 14px;
        }
        .cart-empty__link {
          .cart-empty__link__btn {
            color: #fff;
            background: #4292e3;
          }
        }
      }
      .cart-list {
        .cart-list__content {
          overflow-y: auto;
          max-height: 360px;
        }
        .cart-list__btns {
          display: -webkit-box;
          display: flex;
          justify-content: space-around;
          margin-top: 32px;
          text-align: center;
          .cart-list__btns__left{
            color: #fff;
            background: #4292e3;
          }
          .cart-list__btns__right {
            color: #4292e3;
            background: #fff;
          }
        }
      }
    }
  }

  .btn_01 {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    border: none;
    border-radius: 4px;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    width: 212px;
    height: 50px;
    margin-right: 4px;
    font-size: 18px;
    line-height: 25px;
  }

  .btn_02 {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    border: none;
    border-radius: 4px;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    width: 212px;
    height: 50px;
    margin-top: 28px;
    font-size: 18px;
  }
</style>
