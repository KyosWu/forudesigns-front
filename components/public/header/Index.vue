<template>
  <header class="the-header">
    <div class="the-header__container">
      <Nav/>
      <Search/>
      <HeaderRight/>
    </div>
  </header>

</template>

<script>
  import Nav from './HeaderLeft'
  import Search from './HeaderCenter'
  import HeaderRight from './HeaderRight'
    export default {
      name: "headers",
      components: {
        Nav,
        Search,
        HeaderRight
      }
    }
</script>

<style lang="scss" scoped>
  /*@import "../../../assets/css/public/header/index.scss";*/
  .the-header {
    position: fixed;
    z-index: 2000;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    /*height: 60px;*/
    border-bottom: 1px solid #dfdfeb;
    background: #fff;
    @include common_center;
    .the-header__container {
      width: 1280px;
      -webkit-box-align: center;
      @include common_center;
      height: 100%;
    }
  }
</style>
