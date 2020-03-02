<template>
  <div>
    <header class="header-wrapper">
      <div class="header-inner-wrapper">
        <div class="the-logo">
          <nuxt-link to="" class="logo-link">
            <img src="../../../assets/images/public/my.jpg" alt="">
          </nuxt-link>
          <h1 class="web-name">
            |
            <nuxt-link to="/">
              Business
            </nuxt-link>
          </h1>
        </div>
        <!--语言选择 登录-->
        <div class="right-dropdown">
          <div class="language-swicher">
            <el-dropdown>
            <span class="el-dropdown-link">
              English<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>English</el-dropdown-item>
                <el-dropdown-item>中外文</el-dropdown-item>
                <el-dropdown-item>日本语</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="login-btn">
            <nuxt-link to="/login">
              <button class="btn-04-active">Login</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </header>
    <main>
      <!--主体区域-->
      <div>
        <!--banner-->
        <div class="jumbotron">
          <div class="screen">
            <div class="welcome">
              <button class="btn-join" style="margin-top: 900px;">
                Join Us
              </button>
            </div>
          </div>
        </div>
        <!--about-->
        <div class="about">
          <div class="container">
            <h2>About Dropshipping</h2>
            <p>
              Whether you are a Distributor, Wholesaler, Retailer, or Agency, if you want to start or improve your business, just Join Us ! Sync Our FORUDESIGNS platform to your store in seconds, to take advantage of our products, designs & templates. FORUDESIGNS uploads new artworks daily for you to choose from, and no matter how many products you design or how many you sell, you will not encounter any expenses. Never worry about inventory or purchase minimums , and always keep 100% of the profit.
            </p>
            <ul class="clear-both">
              <li>
                <img src="../../../assets/images/business/p1.png" alt="">
                <p>No stock No stress</p>
              </li>
              <li>
                <img src="../../../assets/images/business/p2.png" alt="">
                <p>We manufacture</p>
              </li>
              <li>
                <img src="../../../assets/images/business/p3.png" alt="">
                <p>We shipping</p>
              </li>
              <li>
                <img src="../../../assets/images/business/p4.png" alt="">
                <p>Your high profits</p>
              </li>
            </ul>
          </div>
        </div>
        <!--process-->
        <div class="process">
          <div class="screen">
            <div class="process-con">
              <h2>Your Dropship/Wholesale Process</h2>
              <ul class="con">
                <li>
                  <div class="num">
                    01
                  </div>
                  <h4>Join Us</h4>
                  <p>Take the first step to join us, you will enjoy thousands of artists ideas & designs .</p>
                </li>
                <li>
                  <div class="num">
                    02
                  </div>
                  <h4>CHOOSE YOUR MARKET- PRODUCTS</h4>
                  <p>Create or choose products to sell in a marketplace of your choosing, (etsy, amazon, shopify, website, etc).</p>
                </li>
                <li>
                  <div class="num">
                    03
                  </div>
                  <h4>SYNC ORDERS WITH FORUDESIGNS</h4>
                  <p>Sync your orders with us, and we will take care of the production and shipping.</p>
                </li>
                <li>
                  <div class="num">
                    04
                  </div>
                  <h4>RECIEVE PROFITS</h4>
                  <p>Finally collect the profits at the margins you set. All win, no loss!</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--How Dropshipping Works-->
        <div class="img-outer" style="width: 1000px; height: auto; margin: 0px auto;">
          <img src="../../../assets/images/business/3.png" alt="" style="object-fit: cover;" class="img-inner">
        </div>

        <!--Why Choose Us-->
        <div class="recommend clear-both">
          <div class="container">
            <h2>WHY CHOOSE US</h2>
            <div class="recommend-con">
              <dl class="clear-both">
                <dd>
                  <h4>0 RISK 0 COST TO START BUSINESS</h4>
                  <div class="line"></div>
                  <p>
                    FORUDESIGNS is an online E-commerce trading platform with a $0 RISK / $0 COST TO START BUSINESS model. You can list and sell products online without ever having to buy inventory or pack and ship anything. We offer our distributors, retailers, and wholesalers a new print-on-demand service that will help them reach the highest level of business satisfaction.
                  </p>
                </dd>
                <dt>
                  <img src="../../../assets/images/business/banner2.jpg" alt="">
                </dt>
              </dl>
              <dl class="clear-both">
                <dt>
                  <img src="../../../assets/images/business/banner2.jpg" alt="">
                </dt>
                <dd>
                  <h4>0 RISK 0 COST TO START BUSINESS</h4>
                  <div class="line"></div>
                  <p>
                    FORUDESIGNS is an online E-commerce trading platform with a $0 RISK / $0 COST TO START BUSINESS model. You can list and sell products online without ever having to buy inventory or pack and ship anything. We offer our distributors, retailers, and wholesalers a new print-on-demand service that will help them reach the highest level of business satisfaction.
                  </p>
                </dd>
              </dl>
              <dl class="clear-both">
                <dd>
                  <h4>0 RISK 0 COST TO START BUSINESS</h4>
                  <div class="line"></div>
                  <p>
                    FORUDESIGNS is an online E-commerce trading platform with a $0 RISK / $0 COST TO START BUSINESS model. You can list and sell products online without ever having to buy inventory or pack and ship anything. We offer our distributors, retailers, and wholesalers a new print-on-demand service that will help them reach the highest level of business satisfaction.
                  </p>
                </dd>
                <dt>
                  <img src="../../../assets/images/business/banner2.jpg" alt="">
                </dt>
              </dl>
            </div>
          </div>
        </div>

        <!--how-it-work-->
        <div class="how-it-work">
          <h2 class="how-it-work__title">
            How does FORUDESIGNS work?
          </h2>
          <ul>
            <li>
              <h3>
                STEP 1
              </h3>
              <h4>
                Join us and find the products on FORUDESIGNS that you want to sell
              </h4>
              <p>
                Search our catalog  for products that fit your niche and organize them in custom lists that you can export to your e-commerce platform.
              </p>
            </li>
            <li>
              <h3>
                STEP 2
              </h3>
              <h4>
                Export products to your online store
              </h4>
              <p>
                Easily upload products to popular e-commerce platforms and marketplaces (Etsy, Amazon, Shopify, website, etc). You can add hundreds of products in just a few minutes.
              </p>
            </li>
            <li>
              <h3>
                STEP 3
              </h3>
              <h4>
                Sell to your customer first, only then buy the product from FORUDESIGNS.
              </h4>
              <p>
                You sell the products at retail price, then pay the wholesale price to the manufacturer through FORUDESIGNS platform.
              </p>
            </li>
            <li>
              <h3>
                STEP 4
              </h3>
              <h4>
                We ship the order directly to your customer.
              </h4>
              <p>
                When you place the order, simply enter your customer’s shipping address, pay the wholesale /dropshipping price, and that’s it! FORUDESIGNS will manufacture and ship the product directly to your customer.
              </p>
            </li>
            <li>
              <h3>
                STEP 5
              </h3>
              <h4>
                Keep selling. Keep getting profits.
              </h4>
              <p>
                Instead of wasting your time and money on warehousing and fulfillment, focus on what your customers want and sell more products to them!
              </p>
            </li>
          </ul>
        </div>

        <!--access-->
        <div class="access">
          <div class="container">
            <h2>Access platform</h2>
            <div class="access-con">
              <ul class="clear-both">
                <li>
                  <img src="../../../assets/images/business/Amazon.jpg" alt="">
                </li>
                <li>
                  <img src="../../../assets/images/business/Ebay.jpg" alt="">
                </li>
                <li>
                  <img src="../../../assets/images/business/Shopify.jpg" alt="">
                </li>
                <li>
                  <img src="../../../assets/images/business/Bigcommerce.jpg" alt="">
                </li>
                <li>
                  <img src="../../../assets/images/business/Wordpress.jpg" alt="">
                </li>
              </ul>
              <p>
                Contact us for guidance. We are happy to discuss your specific needs, goals and objectives.
              </p>
              <button class="btn-05">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>


</template>

<script>
  import HeaderLeft from './HeaderLeft'
  import HeaderCenter from './HeaderCenter'
  import HeaderRight from './HeaderRight'
    export default {
      name: "Index_Business",
    }
</script>

<style lang="scss" scoped>
  .header-wrapper {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #dfdfeb;
    background: #fff;
    box-shadow: 5px 4px 6px rgba(0,0,0,.05);
    .header-inner-wrapper {
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      justify-content: space-between;
      width: 1280px;
      height: 100%;
      margin: 0 auto;
      padding: 0 5px;
      .the-logo {
        display: -webkit-box;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: start;
        justify-content: flex-start;
        height: 100%;
        white-space: nowrap;
        a {
          text-decoration: none;
          color: #4292e3;
          img {
            width: 33px;
            height: 33px;
          }
        }
        .logo-link {
          margin-right: 5px;
        }
        .web-name {
          a {
            color: #40354e!important;
            font-size: 22px;
            font-weight: 700;
          }
        }
      }
      .right-dropdown {
        display: -webkit-box;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 100%;
        .login-btn {
          button {
            padding: 5px 9px;
          }
        }
      }
    }
  }

  /*banner*/
  .jumbotron {
    width: 100%;
    height: 1020px;
    padding: 0;
    background-size: cover;
    background: url("../../../assets/images/business/1.jpeg") center center no-repeat;
    .screen {
      position: relative;
      width: 100%;
      height: 100%;
      .welcome {
        position: absolute;
        top: 50%;
        left: 50%;
        display: -webkit-box;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-pack: center;
        justify-content: center;
        width: 880px;
        height: 500px;
        margin: -272px 0 0 -440px;
        padding-top: 25px;
        text-align: center;
        color: #fff;
      }
      .btn-join {
        text-align: center;
        color: #fff;
        border: 1px solid #dfdfeb;
        border-radius: 4px;
        outline: none;
        background: none;
        font-size: 32px;
      }
      button {
        width: 283px;
        height: 60px;
        color: #4292e3;
        font-size: 34px;
      }
    }
  }
  /*about*/
  .about {
    width: 100%;
    .container {
      position: relative;
      width: 1000px;
      margin: 0 auto;
      padding: 50px 0;
      text-align: center;
      h2 {
        margin: 0;
        font-weight: 500;
        margin-bottom: 40px;
        font-size: 50px;
      }
      p {
        margin-bottom: 60px;
        color: #8c95a5;
        font-size: 16px;
      }
      ul {
        width: 1000px;
        li {
          float: left;
          width: 250px;
          text-align: center;
          img {
            height: 116px;
          }
          p {
            margin-top: 30px;
            color: #000;
            font-size: 20px;
          }
        }
      }
    }
  }
  /**/
  .process {
    width: 100%;
    height: 776px;
    padding: 0;
    background: url('../../../assets/images/business/2.jpg') 50% no-repeat;
    background-size: cover;
    .screen {
      position: relative;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.72);
      .process-con {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 400px;
        margin: -200px 0 0 -500px;
        text-align: center;
        h2 {
          margin-bottom: 50px;
          color: #fff;
          font-size: 50px;
        }
        .con {
          width: 1100px;
          height: 296px;
          margin-left: -50px;
          padding: 40px 50px 0;
          border-radius: 4px;
          background: #4292e3;
          li {
            float: left;
            width: 231px;
            margin-right: 19px;
            .num {
              overflow: hidden;
              width: 40px;
              height: 40px;
              margin-bottom: 20px;
              text-align: center;
              color: #4292e3;
              border-radius: 20px;
              background: #fff;
              font-size: 26px;
            }
            h4 {
              display: block;
              margin-block-start: 1.33em;
              margin-block-end: 1.33em;
              margin-inline-start: 0px;
              margin-inline-end: 0px;
              font-weight: bold;
            }
            p {
              text-align: left;
              color: #fff;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  /**/
  .recommend {
    width: 100%;
    .container {
      position: relative;
      width: 1000px;
      background: #fff;
      border-radius: 4px;
      margin: 0 auto;
      h2 {
        font-size: 50px;
        margin: 70px 0 50px;
        text-align: center;
      }
      .recommend-con {
        dl {
          display: flex;
          width: 100%;
          margin-bottom: 84px;
          dd {
            padding: 0 20px;
            h4 {
              font-size: 20px;
              text-align: left;
              margin-bottom: 10px;
            }
            .line {
              width: 140px;
              height: 6px;
              margin-bottom: 24px;
              background: #000;
            }
            p {
              font-size: 16px;
              text-align: left;
              color: #8c95a5;
            }
          }
          dt {
            float: left;
            width: 480px;
            img {
              vertical-align: middle;
              border: 0;
            }
          }
        }
      }
    }
  }

  /**/
  .how-it-work {
    width: 1000px;
    margin: 0 auto;
    text-align: left;
    color: #40354e;
    h3 {
      text-align: center;
      font-size: 30px;
    }
    h4 {
      font-size: 20px;
      display: block;
    }
    p {
      font-size: 18px;
    }
    .how-it-work__title {
      text-align: center;
      font-size: 50px;
    }
  }

  .access {
    width: 1000px;
    margin: 0 auto;
    padding: 110px 0;
    .container {
      h2 {
        margin-bottom: 40px;
        font-size: 50px;
      }
      .access-con, h2 {
        text-align: center;
      }
      .access-con ul {
        display: -webkit-box;
        display: flex;
        margin-bottom: 25px;
        li {
          -webkit-box-flex: 1;
          flex: 1;
        }
      }
      .access-con p {
        margin-bottom: 70px;
        color: #8c95a5;
        font-size: 16px;
      }
      .access-con button {
        width: 495px;
        height: 66px;
        color: #fff;
        font-size: 40px;
      }
    }
  }
</style>
