<template>
    <main class="defalut-layout__main">
      <div class="auth">
        <div class="auth-container">
          <div class="auth-content">
            <h2 class="auth-title">
              WELCOME TO FORUDESIGNS
            </h2>

            <LoginMain/>
            <!--政策条款详细-->
            <div class="policy-info">
              <span class="light">
                Login and Create your account ,you agree with
                <nuxt-link to="" class="bold">
                FORUDESIGNS Term of Service
                </nuxt-link>
                and
                <nuxt-link to="" class="bold">
                  Privacy Policy
                </nuxt-link>
                ,Thanks
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
</template>

<script>
  import LoginMain from '../components/public/login/Login-main'
    export default {
        name: "login",
        components: {
            LoginMain
        },
      methods: {

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
      .auth-content {
        width: 500px;
        margin: 0 auto;
        padding: 82px 0 92px;
        .auth-title {
          margin: 0;
          text-align: center;
          text-transform: uppercase;
          color: #000;
          font-size: 34px;
          line-height: 34px;
        }
      }
    }
  }
  .policy-info {
    margin-top: 20px;
    text-align: center;
    .light {
      color: #8c95a5;
      font-size: 14px;
      line-height: 16px;
      .bold {
        font-size: 16px;
        margin-bottom: 36px;
        color: #40354e;
      }
    }

  }
</style>
