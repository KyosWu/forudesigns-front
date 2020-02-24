<template>
  <div id="login-model">
    <div class="login-model" style="width: 667px;">
      <LoginMain/>
    </div>
  </div>

</template>

<script>
  import LoginMain from './Login-main'
    export default {
        name: "Login-model",
      components: {
          LoginMain
      }
    }
</script>

<style lang="scss" scoped>
  #login-model {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
    .login-model {
      border-radius: 15px;
      text-align: center;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      background-color: white;
      height: 660px;
    }
  }
</style>
