<template>
  <div class="login-btn">
    <nuxt-link to="/login">
      <button class="login-btn__btn">
        Login
      </button>
    </nuxt-link>
  </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style lang="scss" scoped>
  .login-btn {
    line-height: 1px;
    margin-left: 10px;
    .login-btn__btn {
      margin: 0;
      padding-top: 3px;
      padding-bottom: 3px;
      padding-left: 8px;
      padding-right: 8px;
      cursor: pointer;
      text-align: center;
      color: #fff;
      border: none;
      border-radius: 4px;
      background: #1a1a1a;
      box-shadow: 1px 1px 2px rgba(0,0,0,.1);
      font-size: 14px;
      font-weight: 400;
      -webkit-transition: all .2s ease;
      transition: all .2s ease;
    }
  }
</style>
