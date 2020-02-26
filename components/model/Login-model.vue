<template>
  <div>
    <Masks/>
    <div class="login-model_wrap" style="width: 667px;">
      <div class="login-model_content">
        <span class="login-modal-close" @click="close_model_func">
          <i class="el-icon-close"></i>
        </span>
        <div class="login-model_form">
          <h2 class="auth-title">
            WELCOME TO FORUDESIGNS
          </h2>
          <LoginMain/>
        </div>
      </div>

    </div>
  </div>


</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Masks from './Masks'
  import LoginMain from '../public/login/Login-main'
    export default {
        name: "Login-model",
      components: {
        Masks,
          LoginMain
      },
      computed: {
        ...mapGetters([
          'isShowModel'
        ]),
      },
      methods: {
          ...mapActions([
            'ShowModel'
          ]),
        close_model_func () {
          this.ShowModel(!this.isShowModel)
        }
      }
    }
</script>

<style lang="scss" scoped>
  .auth-title {
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    color: #000;
    font-size: 34px;
    line-height: 34px;
  }
  .login-model_wrap {
    z-index: 10000;
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
    .login-model_content {
      position: relative;
      .login-modal-close {
        position: absolute;
        z-index: 999;
        top: -10px;
        right: -10px;
        width: 26px;
        height: 26px;
        cursor: pointer;
        text-align: center;
        border-radius: 100%;
        background: #ea0000;
        i {
          color: #fff;
          line-height: 26px;
          @include common_center
        }
      }
      .login-model_form {
        position: relative;
        width: 500px;
        margin: 0 auto;
        padding: 82px 0 92px;
      }
    }
  }
</style>
