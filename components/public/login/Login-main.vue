<template>
    <!--登录区域-->
    <div class="login-form">
      <div class="auth-inner-layout">
        <div class="auth-sub-title">
          <span class="title">Need an account?</span>
          <nuxt-link to="/register" class="link">
            Sign up>
          </nuxt-link>
        </div>
        <div class="">
          <!--提示信息-->
          <div class="inline-message info-message" style="display: none">
            <div class="remind-wrap">
              <div class="remind"></div>
            </div>
            <div class="info">
              <div>
                If you haven't received the email, please check your spam folder first. You could request another one in
              </div>
              <span> 60</span>
              "s."
            </div>
          </div>
          <!--信息填写和确认区域-->
          <form action="">
            <!--邮箱和密码输入框-->
            <div class="input" v-model="formData">
              <div class="field">
                <el-input type="text" autocomplete="off" name="email" v-model="formData.email"
                          placeholder="Enter your Email">
                </el-input>
              </div>
              <div class="field">
                <el-input type="password" autocomplete="off" name="password" v-model="formData.password"
                          placeholder="Enter your password">
                </el-input>
              </div>
            </div>
            <!--信息确认区域-->
            <div class="check">
              <div>
                <el-checkbox v-model="checked">Remember Me</el-checkbox>
                <el-tooltip :content="el_tooltip_content" placement="bottom" effect="light"
                            class="size-guide">
                  <i class="el-icon-warning-outline"></i>
                </el-tooltip>
              </div>
              <!--忘记密码-->
              <label for="" class="forget">
                <nuxt-link to="">
                  Forget Password?
                </nuxt-link>
              </label>
            </div>
            <!--登录按钮-->
            <div class="sign btn-01" @click="Login_Func(formData)">
              Login
            </div>
          </form>
        </div>
        <!--第三方登录-->
        <div class="login-with">
          <div class="login-with__title">
            <div class="login-with__title__line"></div>
            <div class="login-with__title__content">
              Or Login With
            </div>
            <div class="login-with__title__line"></div>
          </div>
          <div class="login-with__content">
            <div v-for="(item, index) in login_with_logo" :key="index">
              <!--不懒加载-->
              <img :src="item.src" alt="" class="img-inner">
            </div>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { Message } from 'element-ui'
  import { mapGetters, mapActions } from 'vuex'
    export default {
        name: "Login-main",
      data () {
        return {
          // 绑定输入框数据
          formData: {
            email: '',
            password: ''
          },
          // 条款确认框
          checked: false,
          login_with_logo: [
            {src: require('../../../assets/images/public/corporation_logo/facebook.svg')},
            {src: require('../../../assets/images/public/corporation_logo/google.svg')},
          ],
          // tooltip文字提示
          el_tooltip_content: 'To keep your account secure, use this option only on your personal devices.'
        }
      },
      computed: {
        ...mapGetters([
          'Token'
        ])
      },
      methods: {
          ...mapActions([
            'toLogin',
            'saveToken',
            'saveUserId',
            'saveUserInfo'
          ]),
          async Login_Func(params) {
            let email = params.email
            let password = params.password
            // await this.toLogin(params).then(res => console.log(res))
          //  存储token
          this.$axios.post(`/rbac/auth/login/`, {email:email,password:password})
            .then(res => {
              // console.log(res.data)
              let code = res.data.code
              // 表示登录成功
              if (code === 2) {
                Message.success(res.data.msg)
                let token = res.data.token
                let raw_userId = res.data.user_id
                let userId = ''
                for (let i in raw_userId) {
                  userId = raw_userId[i][i]
                }
                // 存储用户ID
                this.saveUserId(userId)
                this.saveToken(token)
                // console.log(token,userId)
                // this.$axios.get('/rbac/api/users/', {id: userId}).then(
                //   res => {
                //     console.log(res)
                //     // 存储用户基本信息
                //     this.saveUserInfo(res)
                //     // console.log(res)
                //     // 跳转页面
                //     this.$router.push({path:'/'})
                //   }
                // )
              }
            })
        }
      }
    }
</script>

<style lang="scss" scoped>
  .login-form {
    .auth-inner-layout {
      .auth-sub-title {
        margin: 34px 0 26px;
        text-align: center;
        .title {
          color: #000;
          font-size: 16px;
        }
        .link {
          text-decoration: underline;
          color: #4292e3;
          font-size: 16px;
        }
      }
      /*综合区域*/
      div {
        /*提示信息区域*/
        .inline-message {
          flex-wrap: nowrap;
          -webkit-box-pack: center;
          justify-content: center;
          margin: 15px 0;
          padding: 5px 10px;
          text-align: center;
          border-radius: 4px;
          font-size: 16px;
          .remind-wrap {
            width: 100%;
            @include common_center;
            .remind {
              @include common_img_center-contain;
              width: 60px;
              height: 60px;
              margin: 5px;
              background-image: url("../../../assets/images/public/login/提醒.svg");
            }
          }
        }
        .info-message {
          background: #c8ecff;
          box-shadow: 0 2px 6.86px 0.14px rgba(36,168,238,.14);
        }
        /*表单区域*/
        form {
          /*邮箱和密码输入框*/
          .input {
            .field {
              height: 60px;
              margin-bottom: 10px;
              .el-input {
                position: relative;
                font-size: 14px;
                display: inline-block;
                width: 100%;
                height: 40px;
              }
            }
          }
          /*确认按钮*/
          .check {
            width: 100%;
            display: flex;
            justify-content: space-between;
            div {
              .el-checkbox {
                margin-right: 0!important;
              }
              .size-guide {
                margin: 0 3px;
                color: #8c95a5;
                font-size: 16px!important;
              }
            }
            /*忘记密码*/
            .forget {
              float: right;
              color: #8c95a5;
              font-weight: 400;
              a {
                font-size: 16px;
                color: #4292e3;
              }
            }
          }
          .sign {
            margin-top: 32px;
          }
          .btn-01 {
            width: 100%;
            height: 38px;
            display: -webkit-inline-box;
            display: inline-flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            text-align: center;
            color: #fff;
            border: none;
            border-radius: 4px;
            background: #4292e3;
            font-size: 14px;
            -webkit-transition: all .2s ease;
            transition: all .2s ease;
          }
        }
      }
      /*第三方登录*/
      .login-with {
        width: 100%;
        margin: 20px 0 30px;
        .login-with__title {
          display: -webkit-box;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          justify-content: space-around;
          width: 100%;
          text-align: center;
          .login-with__title__line {
            width: 100%;
            height: 1px;
            border: 1px solid #dfdfeb;
          }
          .login-with__title__content {
            margin: 0 10px;
            white-space: nowrap;
            color: #8c95a5;
            font-size: 12px;
          }
        }
        .login-with__content {
          display: -webkit-box;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          height: 30px;
          margin-top: 20px;
          .img-inner {
            @include common_center;
            margin-left: 12px;
            margin-right: 12px;
            width: 30px;
            height: 30px;
            @include common_img_center-contain;
          }
        }
      }
    }
  }
</style>
