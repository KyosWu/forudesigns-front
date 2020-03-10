<template>
    <!--注册区域-->
    <div class="register">
      <div class="auth-inner-layout">
        <!--副标题，提示区域-->
        <div class="auth-sub-title">
          <span class="title">Already have an account?</span>
          <nuxt-link to="/login" class="link">Login</nuxt-link>
        </div>
        <form action="" v-model="formData">
          <!--用户名-->
          <div class="field">
            <el-input type="text" autocomplete="off" name="username"
                      placeholder="Enter User Name"
                      v-model="formData.username">
            </el-input>
          </div>
          <!--邮箱-->
          <div class="field">
            <el-input type="text" autocomplete="off" name="email"
                      placeholder="Enter your Email"
                      v-model="formData.email">
            </el-input>
          </div>
          <!--密码-->
          <div class="field">
            <el-input type="password" autocomplete="off" name="password"
                      placeholder="Enter your password"
                      v-model="formData.password1">
            </el-input>
          </div>
          <!--密码二次验证-->
          <div class="field">
            <el-input type="password" autocomplete="off" name="password_confirmation"
                      placeholder="Password Confirmation"
                      v-model="formData.password2">
            </el-input>
          </div>
          <!--注册按钮-->
          <el-button class="btn-01" @click="Register_Func(formData)">Sign Up Now</el-button>
        </form>
      </div>
    </div>
</template>


<script>
  import {Message} from 'element-ui'
  import { mapActions } from 'vuex'
  export default {
        name: "Register-main",
      data () {
          return {
            // 绑定输入框数据
            formData: {
              username: '',
              email: '',
              password1: '',
              password2: ''
            },
            rules: { // 表单验证规则
            }
          }
      },
      methods : {
          ...mapActions([
            'saveToken',
            'saveUserId',
            'saveUserInfo'
          ]),
        Register_Func (params) {
          let {username, email, password1, password2} = params
          if (password1 === password2) {
            this.$axios.post(`/rbac/api/users/`, {username:username, email:email, password:password2})
              .then(
                res => {
                  // 判断是由有错 重复邮箱
                  // 如果注册失败
                  if (res.data.code === 1) {
                    Message.error(res.data.msg)
                  }
                  // 如果注册成功
                  if (res.data.code === 2) {
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
                    console.log(userId)
                    // 请求数据 进行页面跳转
                     this.$axios.get(`/rbac/api/users/${userId}`).then(
                       res => {
                         // 存储用户基本信息
                         this.saveUserInfo(res)
                         // console.log(res)
                         // 跳转页面 建议跳转到来时的路由
                         this.$router.push({path:'/'})
                       }
                     )
                  }
                })
          } else {
            Message.error('password error !!!')
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
  .register {
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
      form {
        .field {
          height: 60px;
          margin-bottom: 3px;
        }
        button {
          width: 100%;
          height: 38px;
        }
      }
    }
  }

  .btn-01 {
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
</style>
