<template>
  <div class="order-wrapper">
    <h2 class="order-title">
      Orders
      <el-button class="btn-01">
        Address Management
      </el-button>
    </h2>
    <div class="tab">
      <div>
        <!--订单nav-->
        <div class="order-nav">
          <ul>
            <li class="btn-01 active">All</li>
            <li class="btn-01">Pending</li>
            <li class="btn-01">In Production</li>
            <li class="btn-01">Partially Shipped</li>
            <li class="btn-01">Completed</li>
            <li class="btn-01">Canceled</li>
            <li class="btn-01">others</li>
          </ul>
        </div>
        <!--订单搜索-->
        <div class="order-search">
          <!--输入订单号-->
          <el-input placeholder="Enter Order Number" class="text-search"></el-input>
          <!--日期选择器-->
          <el-date-picker
            v-model="value1"
            type="datetimerange"
            range-separator="-"
            start-placeholder="Start Date"
            end-placeholder="End Date"
            class="date-search block">
          </el-date-picker>
          <!--搜索按钮-->
          <el-button class="btn-01">Search</el-button>
        </div>
      </div>
    </div>
    <!--点单详情-->
    <div class="order-list">
      <div class="scroll-bar">
        <ul>
          <li>
            <div class="order-list">
              <!--订单详情-->
              <div class="order-info">
                <p>
                  <!--订单时间-->
                  <span>2020-03-13 07:19:05</span>
                  <!--订单号=订单时间+序列码-->
                  Order Number:
                  <span>20200313071905889941</span>
                  <!--姓名-->
                  <span>
                    <el-tooltip placement="bottom" effect="light">
                        <div slot="content">
                          姓名<br/>
                          电话号码<br/>
                          邮箱<br/>
                          详细地址<br/>
                        </div>
                        <div class="user-name">
                          <i></i>
                          lascode,
                          majmin
                        </div>
                      </el-tooltip>
                  </span>
                  <!--订单倒计时自动取消-->
                  <span class="transaction-no red">
                    <i class="countdown">
                       00h : 55m : 02s Automatically Cancel
                    </i>
                  </span>
                  <!--去详情-->
                  <span>
                    <nuxt-link to="" class="btn__detail fr">
                      Detail
                      <i></i>
                    </nuxt-link>
                  </span>
                </p>
              </div>
              <!--商品详情-->
              <div class="clear-both">
                <div class="order-content" style="height: 158px;">
                  <div>
                    <div class="product-list-info clear-both">
                      <div class="product-list-info__info">
                        <!--商品图片-->
                        <div class="product-list-info__info__image">
                          <nuxt-link to="">
                            <div class="img-outer" style="width: 100%; height: 100%;">
                              <img src="../../../assets/images/my/001.jpg" alt="" class="img-inner" style="object-fit: cover;">
                            </div>
                          </nuxt-link>
                        </div>
                        <!--商品文字详情-->
                        <div>
                          <h3>
                            Happy Easter Motif Print Pattern Kids Snow Boots
                          </h3>
                          <p class="product-list-info__info__variant">
                            White
                            <span>|</span>
                            Children
                            <span>|</span>
                            US CHILD 11.5 (EU 29)
                          </p>
                          <p class="product-list-info__info__status" style="color: rgb(233, 78, 82);">
                            <span>Unpaid</span>
                          </p>
                        </div>
                      </div>
                      <div class="product-list-info__price">$40.99 x 1</div>
                      <div class="product-list-info__total">$40.99</div>
                    </div>
                  </div>
                </div>
                <!--订单统计-->
                <div class="order-footer">
                  <p class="order-footer__content">
                    <span class="order-footer__text">
                      <b>Items</b>
                    </span>
                    <span class="order-footer__text">
                      Total
                      <span class="el-tooltip total-text">$40.99</span>
                    </span>
                    <nuxt-link to="/my/orders" class="btn-02 btn-receipt nuxt-link-exact-active nuxt-link-active">
                      Cancel order
                    </nuxt-link>
                    <nuxt-link to="/cart/repay/111" class="btn-01 btn-receipt">
                      Pay Order
                    </nuxt-link>
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!--分页-->
      <div class="page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage1"
          layout="prev, pager, next, jumper"
          :total="10">
        </el-pagination>
      </div>
      <!--最近添加的 感兴趣的 如果列表没有数据则体现-->
      <div class="recently-and-interested" style="display: none;">
        <div class="cards-panel"></div>
        <div class="cards-panel" style="display: none;"></div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "index",
        data () {
          return {
            pickerOptions: {
              shortcuts: [{
                text: '最近一周',
                onClick(picker) {
                  const end = new Date();
                  const start = new Date();
                  start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                  picker.$emit('pick', [start, end]);
                }
              }, {
                text: '最近一个月',
                onClick(picker) {
                  const end = new Date();
                  const start = new Date();
                  start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                  picker.$emit('pick', [start, end]);
                }
              }, {
                text: '最近三个月',
                onClick(picker) {
                  const end = new Date();
                  const start = new Date();
                  start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                  picker.$emit('pick', [start, end]);
                }
              }]
            },
            value1: '',
            value2: '',
            currentPage1: 1,
          }
        },
        methods: {
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
          }
        },
    }
</script>

<style lang="scss" scoped>
  .order-wrapper {
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    padding: 0;
    background: #fff;
    width: 85%;
    .order-title {
      display: -webkit-box;
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      margin: 0 0 12px;
      text-transform: uppercase;
      color: #40354e;
      font-size: 20px;
      font-weight: 700;
    }
    .tab {
      .order-nav {
        height: 40px;
        ul {
          display: -webkit-box;
          display: flex;
          flex-wrap: nowrap;
          -webkit-box-pack: justify;
          justify-content: space-between;
          -webkit-transition: all .1s ease-in-out;
          transition: all .1s ease-in-out;
          background: #fff;
          li {
            -webkit-box-flex: 1;
            flex: 1;
            text-transform: capitalize;
            height: 40px;
            margin-right: 5px;
            cursor: pointer;
            color: #40354e;
            border-radius: 4px 4px 0 0;
            background: #f7f7f7;
            font-size: 14px;
            line-height: 40px;
          }
        }
      }
      .order-search {
        display: -webkit-box;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        width: 100%;
        margin: 20px 0;
        .text-search {
          width: 500px;
          height: 38px;
          margin-right: 14px;
          /*padding: 15px 0 10px 13px;*/
          color: #8c95a5;
          font-size: 12px;
          line-height: 30px;
        }
        .date-search {
          width: 645px;
          height: 38px;
          color: #40354e;
          border-radius: 4px;
          outline: none;
          background: #fff;
          font-size: 14px;
          line-height: 30px;
        }
        button {
          width: 100px;
          height: 38px;
          margin-left: 14px;
          vertical-align: bottom;
          font-size: 12px;
        }
      }
    }
    .order-list {
      .scroll-bar {
        width: 100%;
        margin-top: 20px;
        .order-list {
          margin-bottom: 30px;
          border: 1px solid #dfdfeb;
          border-radius: 4px;
          background: #fff;
          .order-info {
            width: 100%;
            height: 38px;
            color: #40354e;
            border-bottom: 1px solid #dfdfeb;
            border-radius: 4px 4px 0 0;
            background: #f7f7f7;
            font-size: 12px;
            font-weight: 700!important;
            line-height: 38px;
            p {
              display: -webkit-box;
              display: flex;
              margin: 0 14px;
              span {
                -webkit-box-flex: 2;
                flex: 2;
              }
              span:last-child {
                -webkit-box-flex: 1;
                flex: 1;
              }
              span {
                -webkit-box-flex: 2;
                flex: 2;
              }
              .transaction-no {
                float: right;
                margin-right: 23px;
              }
              .red {
                color: #ea0000!important;
              }
              .countdown {
                display: block;
                width: 250px;
                margin-left: 10px;
                font-style: normal;
              }
              i {
                font-weight: 700!important;
              }
            }
          }
          .order-content {
            overflow: hidden;
            width: 100%;
            -webkit-transition: height .5s ease;
            transition: height .5s ease;
            .product-list-info:first-child {
              border-top: 0;
            }
            .product-list-info {
              display: -webkit-box;
              display: flex;
              -webkit-box-pack: justify;
              justify-content: space-between;
              width: 100%;
              padding: 17px 15px;
              border-bottom: 1px solid #dfdfeb;
              .product-list-info__info {
                display: -webkit-inline-box;
                display: inline-flex;
                -webkit-box-flex: 9;
                flex: 9;
                padding: 5px 0;
                text-align: left!important;
                .product-list-info__info__image {
                  position: relative;
                  a {
                    display: inline-block;
                    width: 110px;
                    height: 110px;
                    margin-right: 25px;
                  }
                }
              }
              .product-list-info__price {
                -webkit-box-flex: 3;
                flex: 3;
                margin-top: 20px;
                text-align: center;
                font-size: 16px;
              }
              .product-list-info__total {
                -webkit-box-flex: 1;
                flex: 1;
                margin-top: 20px;
                text-align: center;
                font-size: 16px;
              }
            }
          }
          .order-footer {
            display: -webkit-box;
            display: flex;
            padding: 15px 5px;
            border-top: 1px solid #dfdfeb;
            .order-footer__content {
              width: 100%;
              text-align: right;
              .order-footer__text {
                margin-right: 20px;
                color: #8c95a5;
                .order-footer__text b {
                  color: #40354e;
                }
              }
            }
          }
        }
      }
      .page {
        margin-bottom: 72px;
        text-align: right;
      }
      .recently-and-interested {

      }
    }
  }


  .active {
    color: #fff!important;
    background: #4292e3!important;
  }
  .el-range-editor.is-active, .el-range-editor.is-active:hover {
    border-color: #000!important;
  }
  p {
    display: block;
    -webkit-margin-before: 1em;
    margin-block-start: 1em;
    -webkit-margin-after: 1em;
    margin-block-end: 1em;
    -webkit-margin-start: 0;
    margin-inline-start: 0;
    -webkit-margin-end: 0;
    margin-inline-end: 0;
  }
  .fr {
    float: right;
  }
  .total-text {
    text-decoration: underline;
    font-weight: 700;
    color: #40354e;
    margin: 0 10px;
    font-size: 14px;
    line-height: 27px;
  }
  .btn-receipt {
    margin-right: 15px;
    padding: 5px 10px;
    text-transform: capitalize;
    line-height: 18px;
  }
</style>
