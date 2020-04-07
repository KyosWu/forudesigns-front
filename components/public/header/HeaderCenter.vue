<template>
  <form action="" class="the-search" @mouseleave="leave_func">
    <transition
      name="search"
      enter-active-class="animated fadeIn">
        <el-input type="text" autocomplete="off"
                  style="display: block;"
                  v-if="issearch"
                  :class="{active: issearch2}"
               placeholder="Enter the keyword of product likes High Top Shoes、Bottle Carrier Bag">
        </el-input>
    </transition>

    <div class="the-search_right">
      <div class="the-search__button" @click="search_func"></div>
    </div>

  </form>
</template>

<script>
    export default {
        name: "Header_center",
      data () {
          return {
            issearch: false,
            issearch2: false
          }
      },
      methods: {
        search_func () {
          this.issearch = !this.issearch
        },
        leave_func () {
          this.issearch = false
        }
      }
    }
</script>


<style lang="scss" scoped>
  @import "../../../assets/css/public/header/center.scss";
  .the-search {
    position: relative;
    width: 30%;
    height: 40px;
    border-radius: 25px;
    overflow: hidden;
    @include common_center;
  }

  .the-search_right {
    width: 40px;
    position: absolute;
    float: right;
    right: 0;
    .the-search__button {
      cursor: pointer;
      background-repeat: no-repeat;
      background-size: contain;
      width: 25px;
      height: 25px;
      background-image: url("../../../assets/images/public/tools/搜索框.svg");
    }
  }

  .search-leave-active {
    margin-left: 600px;
    transition: margin-left 1s ease-in-out;
  }
  .active {
    margin-left: 600px;
    transition: margin-left 0.3s ease-in-out;
  }
</style>

<style scoped>
  .the-search >>> .el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
    .el-input__inner {
      padding-right: 50px;
      border-radius: 25px;
    }
  }
</style>
