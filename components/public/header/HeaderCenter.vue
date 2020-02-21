<template>
  <form action="" class="the-search">
    <div class="el-input" style="display: block;">
      <input type="text" autocomplete="off"
             placeholder="Enter the keyword of product likes High Top Shoes、Bottle Carrier Bag"
             class="el-input__inner">
      <!--<input type="text" autocomplete="off"-->
             <!--placeholder=""-->
             <!--class="el-input__inner">-->
    </div>
    <div class="the-search_right">
      <div class="the-search__button"></div>
    </div>

  </form>
</template>

<script>
    export default {
        name: "Header_center"
    }
</script>


<style lang="scss" scoped>
  @import "../../../assets/css/public/header/center.scss";
  .the-search_right {
    width: 40px;
    .the-search__button {
      cursor: pointer;
      color: #40354e;
      @include common_img_center-contain;
      height: 25px;
      width: 25px;
      background-image: url("../../../assets/images/public/header/搜索.svg");
    }
  }
</style>
