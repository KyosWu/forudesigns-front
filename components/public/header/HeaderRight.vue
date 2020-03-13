<template>
  <div class="the-header__right">
    <div class="the-header__right__inner-warp">
      <!--通知-->
      <Notice/>
      <!--购物车-->
      <Cart/>
      <!--用户登录状态显示-->
      <User/>
      <!--登录按钮-->
      <Login/>
    </div>
  </div>
</template>

<script>
  import Notice from './headerRight/Notice'
  import Cart from './headerRight/Cart'
  import User from './headerRight/User'
  import Login from './headerRight/Login'
  export default {
    name: "Header_right",
    components: {
      Notice,
      Cart,
      User,
      Login
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/public/header/right.scss";
</style>
