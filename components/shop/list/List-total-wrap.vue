<template>
  <div class="list-total-wrap">
    <!--左边-->
    <div class="total-products">
      <p class="total">
        Results:
        <span>233</span>
      </p>
      <div class="sort-by">
        <div class="hot active">
          <div class="hot-icon"></div>
          Hot
        </div>
        <div class="new">
          <div class="new-icon"></div>
          New
        </div>
        <span class="price">
            <el-tooltip content="Click and price are sort by lowest to highest" placement="bottom" effect="light">
              <span class="price-wrapper">
                <span class="title">price</span>
                <span class="icon">
                  <i class="el-icon-caret-top"></i>
                  <i class="el-icon-caret-bottom"></i>
                </span>
              </span>

            </el-tooltip>
          </span>
      </div>
    </div>
    <!--右边-->
    <div class="list-style-wrap">
      <div class="list-style">
        <button class="multiple"></button>
        <button class="single"></button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "List-total-wrap"
    }
</script>

<style lang="scss" scoped>
  .list-total-wrap {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
    margin: 12px auto 19px;
  }
  .total-products {
    .total {
      margin-top: 13px;
      color: #40354e;
      font-size: 14px;
      font-weight: 700;
      line-height: 14px;
    }
    .sort-by {
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: start;
      justify-content: flex-start;
      padding-top: 11px;
    }
    .hot, .new {
      margin-right: 24px;
      cursor: pointer;
      text-transform: uppercase;
      color: #8c95a5;
      font-size: 14px;
      font-weight: 700;
      @include common_center
    }
    .hot .hot-icon {
      margin-right: 5px;
      width: 20px;
      height: 20px;
      @include common_img_center_contain;
      background-image: url("../../../assets/images/shop/list/火.svg");
    }
    .new .new-icon {
      margin-right: 5px;
      width: 20px;
      height: 20px;
      @include common_img_center_contain;
      background-image: url("../../../assets/images/shop/list/上架-未选.svg");
    }
    .price {
      display: -webkit-inline-box;
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      width: 59px;
      height: 24px;
      cursor: pointer;
      color: #40354e;
      border: 1px solid #dfdfeb;
      .price-wrapper {
        display: flex;
        align-items: center;
        padding: 5px;
        .title {
          font-size: 14px;
          height: 24px;
        }
        .icon {
          display: -webkit-inline-box;
          display: inline-flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          flex-direction: column;
          margin-left: 5px;
          color: #8c95a5;
          font-size: 12px;
          line-height: 7px;
        }
      }
    }
  }
  .list-style-wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    .list-style {
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      .multiple {
        margin-right: 5px;
        width: 25px;
        height: 25px;
        @include common_img_center_contain;
        background-image: url("../../../assets/images/shop/list/多行展开.svg");
      }
      .single {
        margin-right: 5px;
        width: 25px;
        height: 25px;
        @include common_img_center_contain;
        background-image: url("../../../assets/images/shop/list/单行展开2-未.svg");
      }
    }
  }
</style>
