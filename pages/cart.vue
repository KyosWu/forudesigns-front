<template>
    <main class="defalut-layout__main">
      <div class="cart-main">
        <!--mianbaox-->
        <div class="breadcrumb">
          <!--面包屑导航-->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item>cart</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <!--步骤条-->
        <div class="cart-steps">
          <el-steps :active="active" align-center>
            <el-step title="STEP 1" icon="el-icon-edit" description="SHOPPING CART"></el-step>
            <el-step title="STEP 2" icon="el-icon-edit" description="ENTER ORDER INFO"></el-step>
            <el-step title="STEP 3" icon="el-icon-edit" description="ORDER SUBMISSION"></el-step>
          </el-steps>
        </div>

        <div v-if="active===1">
          <!--购物车具体信息-->
          <div class="cart-content">
            <!--如果是空购物车-->
            <div class="empty" style="display: none">
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
            <!--如果购物车内有商品-->
            <form action="" class="cart-list">
              <table class="cart-list-table">
                <thead>
                  <tr>
                    <th class="selection">
                      <label for="" class="el-checkbox is-checked">
                        <span class="el-checkbox__input is-checked">
                          <span class="el-checkbox__inner"></span>
                          <input type="text" class="el-checkbox__original">
                        </span>
                      </label>
                      <span class="product-title">Products Info</span>
                    </th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="selection">
                      <!--选择框-->
                      <label for="" class="el-checkbox is-checked">
                        <span class="el-checkbox__input is-checked">
                          <span class="el-checkbox__inner"></span>
                          <input type="text" class="el-checkbox__original">
                        </span>
                      </label>
                      <!--商品图片-->
                      <span class="goods-img">
                        <nuxt-link to="">
                          <div class="img-outer" style="width: 100%; height: 100%;">
                            <img src="../assets/images/cart/001.jpg" alt=""
                                 style="object-fit: cover;width: 84px;height: 84px"
                                 class="img-inner">
                          </div>
                        </nuxt-link>
                      </span>
                      <!--商品名称-->
                      <span class="goods-name">
                        <h3>
                          Happy Easter Motif Print Pattern Kids Snow Boots
                        </h3>
                        <p class="goods-size">
                          White
                          <span>|</span>
                          Children
                          <span>|</span>
                          US CHILD 11.5 (EU 29)
                          <span>|</span>
                        </p>
                      </span>
                    </td>
                    <td class="goods-price">
                      $40.99
                    </td>
                    <td class="goods-quantity">
                      <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字">
                      </el-input-number>
                    </td>
                    <td class="clear-both">
                      <p class="total-price">$40.99</p>
                      <span class="goods-delete">

                      </span>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td></td>
                    <td class="all-quantity">
                      <span>1</span>
                      items have been selected
                    </td>
                    <td class="all-price">
                      Total Price
                      <span>$40.99</span>
                    </td>
                    <td class="clear-both">
                      <el-button class="check-out btn-01" @click="check_out">
                        Check Out
                      </el-button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </form>
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

        <div v-if="active===2">
          <div class="order-info__content">
            <div class="order-info__content__left">
              <div class="personal-info">
                <h2 class="base-title">
                  Personal Info
                </h2>
                <!--如果没有添加发货地址-->
                <div class="add-address-button-wrap" style="display: none">
                  <button class="add-address-btn">
                    <i></i>
                    <p>Click here to add a new address</p>
                  </button>
                </div>
                <!--如果已添加了发货地址-->
                <div class="personal-info__content">
                  <!--默认发货地址-->
                  <div class="info-card" style="display: none">
                    <table>
                      <tbody>
                        <!--用户名称 name-->
                        <tr>
                          <td class="info-card__key">Name</td>
                          <td class="info-card__value">rick and morty</td>
                        </tr>
                        <!--电话号码-->
                        <tr>
                          <td class="info-card__key">Phone Number</td>
                          <td class="info-card__value">911</td>
                        </tr>
                        <!--Zip Code-->
                        <tr>
                          <td class="info-card__key">Zip Code</td>
                          <td class="info-card__value">362100</td>
                        </tr>
                        <!--Email-->
                        <tr>
                          <td class="info-card__key">Email</td>
                          <td class="info-card__value">123@qq.com</td>
                        </tr>
                        <!--地址-->
                        <tr>
                          <td class="info-card__key">Address</td>
                          <td class="info-card__value">rick and morty</td>
                        </tr>
                      </tbody>
                    </table>
                    <span class="info-card__more foruicon-angle-right"></span>
                  </div>
                  <!--地址列表-->
                  <div class="info-list">
                    <!--功能区-->
                    <div class="info-list__tools">
                      <el-button class="btn-01 info-list__tools__add-new-address">Add New Address</el-button>
                      <div>
                        <el-button class="btn-02">Cancel</el-button>
                        <el-button class="btn-01">Save</el-button>
                      </div>
                    </div>
                    <!--列表地址-->
                    <ul class="info-list__list">
                      <li>
                        <label for="" class="el-radio is-checked"></label>
                        <div class="info-card">
                          <table>
                            <tbody>
                              <!--用户名称 name-->
                              <tr>
                                <td class="info-card__key">Name</td>
                                <td class="info-card__value">rick and morty</td>
                              </tr>
                              <!--电话号码-->
                              <tr>
                                <td class="info-card__key">Phone Number</td>
                                <td class="info-card__value">911</td>
                              </tr>
                              <!--Zip Code-->
                              <tr>
                                <td class="info-card__key">Zip Code</td>
                                <td class="info-card__value">362100</td>
                              </tr>
                              <!--Email-->
                              <tr>
                                <td class="info-card__key">Email</td>
                                <td class="info-card__value">123@qq.com</td>
                              </tr>
                              <!--地址-->
                              <tr>
                                <td class="info-card__key">Address</td>
                                <td class="info-card__value">rick and morty</td>
                              </tr>
                            </tbody>
                          </table>
                          <span class="info-card__edit">Edit</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="product-list-info">
                <h2 class="base-title">
                  Personal Info
                </h2>
                <table class="product-list-info__table">
                  <thead>
                    <tr>
                      <th>Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="product-list-info__tr">
                      <td class="product-list-info__info">
                        <!--商品图片-->
                        <div class="product-list-info__info__image">
                          <nuxt-link to="">
                            <div class="img-outer" style="width: 100%; height: 100%;">
                              <img src="../assets/images/cart/001.jpg" alt=""
                                   style="object-fit: cover;width: 84px;height: 84px"
                                   class="img-inner">
                            </div>
                          </nuxt-link>
                        </div>
                        <!--商品名称-->
                        <div>
                          <h3 class="product-list-info__info__name">
                            Happy Easter Motif Print Pattern Kids Snow Boots
                          </h3>
                          <p class="product-list-info__info__variant">
                            White
                            <span>|</span>
                            Children
                            <span>|</span>
                            US CHILD 11.5 (EU 29)
                            <span>|</span>
                          </p>
                        </div>
                      </td>
                      <td class="goods-price">
                        $40.99
                      </td>
                      <td class="goods-quantity">
                        1
                      </td>
                      <td class="clear-both">
                        <p class="total-price">$40.99</p>
                        <span class="goods-delete">

                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="order-info__content__right">
              <!--优惠券码-->
              <div class="coupons">
                <h2 class="base-title">
                  Coupons
                </h2>
                <div class="coupons__content">
                  <div class="coupons__input">
                    <el-input placeholder="Enter Promo Code"></el-input>
                    <el-button class="btn-01">Apply</el-button>
                  </div>
                </div>
              </div>
              <!--运送方式-->
              <div class="shipping-method">
                <h2 class="base-title">
                  Shipping Method
                </h2>
                <!--邮寄方式-->
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <!--发票详情-->
              <div class="bill-info">
                <h2 class="base-title">
                  Bill Info
                </h2>
                <div class="bill-info__content">
                  <!--账单详情-->
                  <ul class="bill-info__info">
                    <!--商品价格-->
                    <li>
                      Product Price
                      <span class="bill-info__info__price">
                        $40.99
                      </span>
                    </li>
                    <!--运费-->
                    <li>
                      Shipping fee
                      <span class="bill-info__info__price">
                        $0.00
                      </span>
                    </li>
                    <!--如果使用了优惠券-->
                    <li style="display: none">
                      Coupons
                      <span class="bill-info__info__price">
                        -$0.00
                      </span>
                    </li>
                  </ul>
                  <div class="bill-info__total">
                    Total
                    <span class="bill-info__total__price">
                      $40.99
                    </span>
                  </div>
                  <!--用户同意协议条款-->
                  <div class="bill-info__service">
                    <label for="" class="el-checkbox is-checked">
                      <span class="el-checkbox__input is-checked">
                        <span class="el-checkbox__inner"></span>
                        <input type="text" class="el-checkbox__original">
                      </span>
                      <span class="el-checkbox__label">
                        I agree with
                      </span>
                      <nuxt-link to="" class="bill-info__service__info">
                        Service Agreement
                      </nuxt-link>
                    </label>
                    <nuxt-link to="" class="bill-info__service__info">
                      Service Agreement
                    </nuxt-link>
                  </div>
                  <!--确认支付按钮 或 取消-->
                  <div class="bill-info__tools">
                    <button class="btn-02">
                      Cancel
                    </button>
                    <button class="continue-to-billing btn-01">
                      Confirm Order & Pay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>


      <!--添加地址弹框-->
      <div class="modal-wrap address-modal" style="display: none">
        <div class="modal">
          <h2>Add New Address</h2>
          <form action="" class="address-modal__form">
            <ul class="clear-both">
              <!--First Name-->
              <li class="item-group field">
                <label for="first_name" class="personal-label">
                  First Name
                  <span class="red">*</span>
                </label>
                <el-input id="first_name"></el-input>
              </li>
              <!--Last Name-->
              <li class="item-group field">
                <label for="last_name" class="personal-label">
                  Last Name
                  <span class="red">*</span>
                </label>
                <el-input id="last_name"></el-input>
              </li>
              <!--Phone-->
              <li class="item-group field">
                <label for="phone-number" class="personal-label">
                  Phone Number
                  <span class="red">*</span>
                </label>
                <el-input id="phone-number"></el-input>
              </li>
              <!--email-->
              <li class="item-group field">
                <label for="email" class="personal-label">
                  Email
                  <span class="red">*</span>
                </label>
                <el-input id="email"></el-input>
              </li>
              <!--Country-->
              <li class="item-group field">
                <label for="" class="personal-label">
                  Country
                  <span class="red">*</span>
                </label>
                <el-select v-model="country_value" placeholder="请选择">
                  <el-option
                    v-for="item in countries"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </li>
              <!--state-->
              <li class="item-group field">
                <label for="state" class="personal-label">
                  State
                  <span class="red">*</span>
                </label>
                <el-input id="state"></el-input>
              </li>
              <!--city-->
              <li class="item-group field">
                <label for="city" class="personal-label">
                  City
                  <span class="red">*</span>
                </label>
                <el-input id="city"></el-input>
              </li>
              <!--zip code-->
              <li class="item-group field">
                <label for="zip-code" class="personal-label">
                  Email
                  <span class="red">*</span>
                </label>
                <el-input id="zip-code"></el-input>
              </li>
              <!--Address-->
              <li class="item-group field">
                <label for="address" class="personal-label">
                  Email
                  <span class="red">*</span>
                </label>
                <el-input id="address" type="textarea"></el-input>
              </li>
            </ul>
          </form>
          <div class="tools">
            <el-button class="btn-02">Cancel</el-button>
            <el-button class="btn-01">Confirm</el-button>
          </div>
        </div>
      </div>

      <!--支付方式选择-->
      <div class="to-pay">
        <div class="foru-modal payment-method">
          <div class="foru-modal-wrap">
            <div class="foru-modal-content">
              <!--关闭按钮-->
              <span class="foru-modal-close"></span>
              <div>
                <div class="choose-payment-method">
                  <div class="info clear-both">
                    <div class="method">
                      <div class="title">title</div>
                      <div class="method-form">
                        <!--paypal-->
                        <div class="paypal">
                          <label for="" class="el-checkbox">
                            <span>
                              <el-checkbox v-model="checked">备选项</el-checkbox>
                            </span>
                            <span class="el-checkbox__label">
                              <!--paypal-->
                              <img src="" alt="">
                            </span>
                          </label>
                        </div>
                        <!--信用卡-->
                        <div class="credit-card">
                          <label for="" class="el-checkbox is-checked">
                            <span>
                              <el-checkbox v-model="checked">备选项</el-checkbox>
                            </span>
                            <span class="el-checkbox__label">
                              <span class="title-span">
                                Credit Card:
                              </span>
                              <div class="cards">
                                <img src="" alt="" class="Credit Card">
                              </div>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <!--订单详情-->
                    <div class="order">
                      <div class="title">Order Summary</div>
                      <div class="order-info">
                        <span class="subtotal">
                          <span>
                            Product Price
                          </span>
                          <span class="value">$40.99</span>
                        </span>
                        <span class="tax">
                          <span>
                            Shipping fee
                          </span>
                          <span class="value">$0.00</span>
                        </span>
                        <span class="shipping">
                          <span>
                            Coupons
                          </span>
                          <span>-$0.00</span>
                        </span>
                      </div>
                      <div class="total">
                        <span class="name">Total</span>
                        <span class="value">$40.99</span>
                      </div>
                    </div>
                  </div>
                  <div class="info clear-both">
                    <el-button class="btn-01">
                      Complete Order
                    </el-button>
                  </div>
                </div>
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
            active: 1,
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
            options: [
              {value: 'EMS', label: 'EMS'},
              {value: 'DHL', label: 'DHL'}
            ],
            value: '',
            countries: [
              {value: 'Select A Country', label: 'default'},
              {value: 'Aland Islands', label: 'Aland'}
            ],
            country_value: ''
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
      },
      methods: {
        check_out () {
          this.active = 2
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
      .cart-list {
        .cart-list-table {
          width: 100%;
          .selection {
            text-align: left;
            .el-checkbox {
              position: relative;
              display: inline-block;
              cursor: pointer;
              vertical-align: middle;
              white-space: nowrap;
            }
            .product-title {
              padding-left: 112px;
            }
          }
        }
      }
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


  .cart-list-table tfoot tr, .cart-list-table thead tr {
    height: 58px;
    font-weight: 200;
    line-height: 58px;
  }
  /*步骤条-订单详情*/
  .order-info__content {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
    margin-top: 49px;
    animation: 1s linear 0s 1 normal none running show;
    .order-info__content__left {
      width: 852px;
    }
    .order-info__content__right {
      width: 384px;
    }
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
