<template>
    <div class="my__right">
      <div class="profile">
        <div class="profile__left">
          <div class="profile-photo">
            <div class="profile-photo__cover"></div>
            <div class="img-outer" style="width: 100%; height: 100%;">
              <img src="../../assets/images/my/head.svg" alt=""
                   class="im-inner"
                   style="width: 100%; height: 100%;">
            </div>
            <!--文件上传-->
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
        </div>
        <!--用户信息-->
        <div class="profile__right">
          <div class="profile__right__title-info">
            <h2 class="profile__right__title-info__name">wjk</h2>
            <!--tooltip 提示-->
            <nuxt-link to="/my" class="profile__right__title-info__customer profile__right__title-info__icon">
              <el-tooltip content="Apply to be an artist" placement="bottom" effect="light">
                <img src="../../assets/images/my/奖章.svg" alt="" style="width: 19px; height: 19px;">
              </el-tooltip>
            </nuxt-link>
            <el-button class="btn-01">Edit Profile</el-button>
          </div>
          <!--用户统计-->
          <ul class="profile__right__statistics">
            <!--collections-->
            <li>
              <nuxt-link to="/my/collections">
                <span class="count">
                  0
                </span>
                Collection
              </nuxt-link>
            </li>
            <li>
              <span class="count">
                0
              </span>
              Following
            </li>
            <!--my viewed-->
            <li>
              <nuxt-link to="/my/viewed">
                <span class="count">
                  1
                </span>
                Viewed
              </nuxt-link>
            </li>
          </ul>
          <!--个人信息简介-->
          <div class="profile__right__summary">
            You have not filled in any description yet...
          </div>
        </div>
        <div class="el-dialog__wrapper following-and-follower-modal" style="display: none">

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
  .my__right {
    width: 85%;
    .profile {
      display: -webkit-box;
      display: flex;
      padding: 22px 30px;
      border-radius: 4px;
      background: #fff;
      box-shadow: 0 4px 12px 0 rgba(0,0,0,.15);
      .profile__left {
        .profile-photo {
          position: relative;
          overflow: hidden;
          width: 180px;
          height: 180px;
          border-radius: 4px;
        }
      }
      .profile__right {
        width: 100%;
        margin-left: 60px;
        /*用户信息*/
        .profile__right__title-info {
          display: -webkit-box;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          margin-bottom: 22px;
          button {
            width: 100px;
            height: 22px;
            line-height: 1px;
          }
          .profile__right__title-info__name {
            text-transform: capitalize;
            color: #40354e;
            font-size: 18px;
            font-weight: 700;
          }
          .profile__right__title-info__customer {
            color: #8c95a5;
          }
          .profile__right__title-info__icon {
            margin: 0 18px 0 8px;
            font-size: 19px;
          }
        }
        /*用户统计*/
        .profile__right__statistics {
          display: -webkit-box;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          flex-direction: row;
          margin-bottom: 30px;
          font-size: 14px;
          li {
            margin-right: 32px;
            cursor: pointer;
            color: #40354e;
            a {
              color: #40354e;
              .count {
                margin-right: 10px;
                font-weight: 700;
              }
            }
          }
        }
        /*用户个人信息简介*/
        .profile__right__summary {
          color: #40354e;
          font-size: 14px;
        }
      }
      .el-dialog__wrapper {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        margin: 0;
      }
    }
  }


  /*文件上传*/
  .vue-image-crop-upload {
    position: fixed;
    z-index: 10000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    box-sizing: border-box;
    .vicp-wrap {
      width: 600px;
      height: 330px;
      margin: auto;
      padding: 25px;
      -webkit-animation: vicp .12s ease-in;
      animation: vicp .12s ease-in;
      border-radius: 2px;
      background-color: #fff;
      box-shadow: 0 1px 3px 0 rgba(0,0,0,.23);
    }
  }
</style>
