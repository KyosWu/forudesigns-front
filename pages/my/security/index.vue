<template>
  <div class="security-wrapper">
    <!--修改头像简介-->
    <div class="base-card">
      <h2 class="my-title"></h2>
      <div class="base-card__content">
        <div class="content">
          <!--头像-->
          <div class="profile-photo">
            <div class="profile-photo__cover"></div>
            <div class="img-outer" style="width: 100%; height: 100%;">
              <img src="../../../assets/images/my/head.svg" alt=""
                   style="object-fit: cover;">
            </div>
            <!--遮罩-->
            <div class="vue-image-crop-upload" style="display: none">
              <div class="vicp-wrap">
                <!--关闭弹框-->
                <div class="vicp-close"></div>
                <!--上传步骤-->
                <div class="vicp-step1">
                  <div class="vicp-drop-area">
                    <i></i>
                    <span class="vicp-hint">
                      Click or drag the file here to upload
                    </span>
                    <span class="vicp-no-supported-hint" style="display: none">
                      Browser is not supported, please use IE10+ or other browsers
                    </span>
                    <input type="file" style="display: none">
                  </div>
                  <div class="vicp-error">
                    <!--错误图标-->
                    <i class="vicp-icon2" style="display: none"></i>
                  </div>
                  <!--取消操作-->
                  <div class="vicp-operate">Cancel</div>
                </div>
                <canvas width="300" style="display: none"></canvas>
              </div>
            </div>
          </div>
          <!--编辑个人信息-->
          <div class="edit-profile">
            <form action="" class="form">
              <table>
                <!--name-->
                <tr>
                  <td>
                    <label for="">Name</label>
                  </td>
                  <td>
                    <div>
                      <el-input v-model="input"
                                maxlength="32"
                                show-word-limit
                                clearable
                                suffix-icon="el-icon-circle-close"
                                placeholder="Enter you name"></el-input>
                    </div>
                  </td>
                </tr>
                <!--summary-->
                <tr>
                  <td>
                    <label for="">Summary</label>
                  </td>
                  <td>
                    <el-input
                      type="textarea"
                      maxlength="255"
                      show-word-limit
                      placeholder="You have not filled in any description yet"
                      v-model="textarea">
                    </el-input>
                  </td>
                </tr>
              </table>
            </form>
            <div class="tools">
              <el-button class="btn-02">Cancel</el-button>
              <el-button class="btn-01">Save</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--修改密码-->
    <div class="base-card">
      <h2 class="my-title">Change Password</h2>
      <div class="base-card__content">
        <div class="change-password">
          <form action="" class="form">
            <table>
              <!--当前密码-->
              <tr>
                <td>
                  <label for="">Current Password</label>
                </td>
                <td>
                  <div class="field">
                    <el-input v-model="input"
                              type="password"
                              suffix-icon="el-icon-view"
                              placeholder="Enter you current password"></el-input>
                  </div>
                </td>
              </tr>
              <!--新密码-->
              <tr>
                <td>
                  <label for="">New Password</label>
                </td>
                <td>
                  <div class="field">
                    <el-input v-model="input"
                              type="password"
                              suffix-icon="el-icon-view"
                              placeholder="Enter you new password"></el-input>
                  </div>
                </td>
              </tr>
              <!--新密码第二-->
              <tr>
                <td>
                  <label for="">Password Confirmation</label>
                </td>
                <td>
                  <div class="field">
                    <el-input v-model="input"
                              type="password"
                              suffix-icon="el-icon-view"
                              placeholder="Password Confirmation"></el-input>
                  </div>
                </td>
              </tr>
            </table>
          </form>
          <div class="tools">
            <el-button class="btn-02">Cancel</el-button>
            <el-button class="btn-01">Save</el-button>
          </div>
        </div>
      </div>
    </div>
    <!--修改email-->
    <div class="base-card">
      <h2 class="my-title">Change Eamil</h2>
      <div class="base-card__content">
        <div class="change-email">
          <form action="" class="form">
            <table>
              <!--当前密码-->
              <tr>
                <td>
                  <label for="">Current Password</label>
                </td>
                <td>
                  <div class="field">
                    <el-input v-model="input"
                              type="password"
                              suffix-icon="el-icon-view"
                              placeholder="Enter you current password"></el-input>
                  </div>
                </td>
              </tr>
              <!--新邮箱-->
              <tr>
                <td>
                  <label for="">New Email</label>
                </td>
                <td>
                  <div class="field">
                    <el-input v-model="input"
                              placeholder="Enter you new Email"></el-input>
                  </div>
                </td>
              </tr>
              <!--新邮箱确认-->
              <tr>
                <td>
                  <label for="">New Email Confirmation</label>
                </td>
                <td>
                  <div class="field">
                    <el-input v-model="input"
                              placeholder="New Email Confirmation"></el-input>
                  </div>
                </td>
              </tr>
            </table>
          </form>
          <div class="tools">
            <el-button class="btn-02">Cancel</el-button>
            <el-button class="btn-01">
              Send validation to the current mailbox
            </el-button>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "index",
      data () {
          return {
            input: '',
            textarea: ''
          }
      }
    }
</script>

<style lang="scss" scoped>
  .security-wrapper {
    width: 85%;
    .base-card {
      width: 100%;
      margin-bottom: 12px;
      .my-title {
        margin: 0 0 12px;
        text-transform: uppercase;
        color: #40354e;
        font-size: 20px;
        font-weight: 700;
      }
      .base-card__content {
        padding: 51px 57px 18px;
        border: 3px solid #dfdfeb;
        .content {
          display: -webkit-box;
          display: flex;
          -webkit-box-pack: justify;
          justify-content: space-between;
          .profile-photo {
            position: relative;
            overflow: hidden;
            width: 180px;
            height: 180px;
            border-radius: 4px;
          }
          .edit-profile {
            display: -webkit-box;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-direction: column;
            width: calc(100% - 230px);
            margin-left: 50px;
          }
        }
      }
    }
  }

  form {
    margin: 0;
    table {
      width: 100%;
    }
    label {
      margin-right: 20px;
      color: #40354e;
      font-size: 16px;
      font-weight: 700;
    }
    td {
      padding-bottom: 41px;
    }
    td:first-child {
      width: 10%;
      text-align: right;
      white-space: nowrap;
    }
    td:last-child {
      padding-bottom: 17px;
    }
  }
  .tools {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    button {
      height: 38px;
      margin-left: 26px;
      padding: 0 22px;
    }
  }
  .change-password {
    width: 100%;
  }
  .field {
     margin-bottom: 3px;
  }
</style>

<style scoped>
  .security-wrapper  >>> .el-textarea {
    position: relative;
    display: inline-block;
    width: 100%;
    vertical-align: bottom;
    font-size: 14px;
  }
  .security-wrapper  >>> .el-textarea__inner {
    height: 126px;
    min-height: 82px;
    margin-top: 0;
    margin-bottom: 0;

    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    color: #606266;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  }
</style>
