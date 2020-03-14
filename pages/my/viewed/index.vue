<template>
  <div class="viewed-wrapper">
    <h2 class="viewed-title">Viewed</h2>
    <div class="clear-btn">
      <button class="btn-01">Clear all viewed</button>
    </div>
    <div class="cards-wrapper">
      <div class="date">
        <i></i>
        <!--商品加如时间-->
        <span>2020-03-13</span>
      </div>
      <div class="list-panel">
        <ul class="panel-ul clear-both">
          <li>
            <nuxt-link to="">
              <div class="img-outer" style="width: 100%; height: 100%;">
                <img src="../../../assets/images/my/001.jpg" alt=""
                     class="img-inner"
                style="object-fit: contain;">
              </div>
            </nuxt-link>
            <div class="product-info">
              <span>$40.99</span>
              <!--购物车图片-->
              <span>
                <img src="../../../assets/images/public/tools/购物车-加入.svg" alt=""
                     style="height: 22px;width: 22px">
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "index",
    }
</script>

<style lang="scss" scoped>
  .viewed-wrapper {
    width: 85%;
    position: relative;
    .viewed-title {
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
    .clear-btn {
      float: right;
      button {
        padding: 8px 36px;
        text-transform: capitalize;
        font-size: 15px;
      }
    }
    .cards-wrapper {
      width: 100%;
      .date {
        padding-top: 40px;
        font-size: 16px;
        font-weight: 700;
      }
      .list-panel {
        width: 100%;
        padding: 40px 0 41px;
        .panel-ul {
          flex-wrap: wrap;
          width: 100%;
          height: 100%;
          li:nth-child(4n-3) {
            margin-left: 0;
          }
          li {
            position: relative;
            -webkit-box-pack: center;
            justify-content: center;
            width: 249px;
            height: 285px;
            margin-top: 25px;
            margin-left: 25px;
            border: 3px solid #f5f5fa;
            border-radius: 4px;
            background: #fff;
          }
        }
        .product-info {
          position: absolute;
          display: -webkit-box;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          width: 100%;
          bottom: 8px;
          -webkit-box-pack: justify;
          justify-content: space-between;
          padding: 0 30px;
          font-size: 16px;
        }
      }
    }
  }
</style>
