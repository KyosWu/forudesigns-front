<template>
    <main class="defalut-layout__main">
      <div class="auth">
        <div class="auth-container">
          <LoginMain/>
        </div>
      </div>

    </main>
</template>

<script>
  import LoginMain from '../components/public/login/Login-main'
    export default {
        name: "Login",
      components: {
          LoginMain
      }
    }
</script>

<style lang="scss" scoped>
  .defalut-layout__main {
    padding-bottom: 0;
  }
  .auth {
    overflow: hidden;
    padding: 127px 0;
    background: url(https://assets.forucdn.com/assets/rback.jpg) 50% no-repeat;
    .auth-container {
      width: 1280px;
      margin: 0 auto;
      border-radius: 4px;
      background: #fff;
    }
  }
</style>
