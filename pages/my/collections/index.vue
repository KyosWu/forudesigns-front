<template>
  <div class="collections-wrapper">
    <!--tabs 切换-->
    <ul class="tabs">
      <li class="active">
        Products
        <span>0</span>
      </li>
      <li class="">
        Images
        <span>0</span>
      </li>
    </ul>
    <div class="collection__content">
      <!--没有数据-->
      <div class="no-data">
        <div class="no-data-warp">
          <div class="img-wrap small-img">
            <div class="img-outer" style="width: 100%; height: 100%;">
              <img src="../../../assets/images/my/data-empty.jpg"
                   alt="No Data Icon Image"
                   class="img-inner"
                   style="object-fit: contain;">
            </div>
          </div>
          <div class="no-data-info">
            <p>
              No collect any products yet.
            </p>
          </div>
        </div>
      </div>
      <ul class="list"></ul>
    </div>
  </div>

</template>

<script>
    export default {
        name: "index",
    }
</script>

<style lang="scss" scoped>
  .collections-wrapper {
    width: 85%;
    .tabs {
      padding: 0 35%;
      border: none;
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      justify-content: space-around;
      border-bottom: 1px solid #dfdfeb;
      .active {
        color: #40354e;
        border-bottom: 2px solid #4292e3;
        font-weight: 700;
      }
      li {
        color: #8c95a5;
        font-size: 18px;
      }
    }
    .collection__content {
      margin-top: 5px;
      padding: 29px 23px;
      border: 3px solid #f5f5fa;
      .no-data {
        width: 100%;
        -webkit-animation: show .5s linear;
        animation: show .5s linear;
        .no-data-warp {
          display: -webkit-box;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          width: 100%;
          padding: 80px 0;
          .small-img {
            width: 148px;
            height: 148px;
          }
          .no-data-info {
            margin-left: 40px;
            color: #8c95a5;
            font-size: 16px;
          }
        }
      }
    }
  }

  .collections-wrapper .tabs li span:before {
    display: inline-block;
    content: "(";
  }
  .collections-wrapper .tabs li span:after {
    display: inline-block;
    content: ")";
  }
</style>
