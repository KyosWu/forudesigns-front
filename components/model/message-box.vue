<template>
  <div class="message-box">
    <div class="message-box-wrap">
      <span class="message-box-close">
        <i class="el-icon-close"></i>
      </span>
      <div class="message-box-title">
        <i class="el-icon-warning-outline"></i>
        Reminder
      </div>
      <div class="message-box-content">
        <p>
          Are you sure you want to delete this address information?
        </p>
        <p>
          You will not be able to recover after deleting!
        </p>
      </div>
      <div class="message-box-botttom">
        <div class="message-box-btns">
          <el-button class="btn-01">
            Confirm
          </el-button>
          <el-button class="btn-02">
            Cancel
          </el-button>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "message-box"
    }
</script>

<style lang="scss" scoped>
  .message-box {
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    line-height: normal;
    .message-box-wrap {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
      -webkit-animation: fadeInOut-data-v-31be0c47 .3s ease;
      animation: fadeInOut-data-v-31be0c47 .3s ease;
      border: 1px solid #dfdfeb;
      border-radius: 4px;
      background: #fff;
      box-shadow: 11px 12px 16px rgba(0,0,0,.1);
      .message-box-close {
        position: absolute;
        z-index: 999;
        top: 10px;
        right: 10px;
        width: 20px;
        height: 20px;
        cursor: pointer;
        text-align: center;
        border-radius: 100%;
        background: #ea0000;
        .el-icon-close:before {
          content: "\e6db";
          font-size: 16px;
          line-height: 20px;
          color: white;
        }
      }
      .message-box-title {
        width: 100%;
        height: 40px;
        padding-left: 20px;
        text-transform: capitalize;
        color: #8c95a5;
        background: #f7f7f7;
        font-size: 16px;
        line-height: 42px;
        i {
          display: inline-block;
          margin-right: 10px;
          font-size: 18px;
        }
        .el-icon-warning-outline:before {
          content: "\e6c9";
          font-size: 20px;
        }
      }
      .message-box-content {
        width: 517px;
        padding: 5px 20px;
        word-wrap: break-word;
        border-top: 1px solid #dfdfeb;
        border-bottom: 1px solid #dfdfeb;
        p {
          margin: 10px 0;
          color: #40354e;
          font-size: 14px !important;
          line-height: 20px;
        }
      }
      .message-box-botttom {
        position: relative;
        width: 100%;
        height: 48px;
        background: #f7f7f7;
        .message-box-btns {
          position: absolute;
          top: 10px;
          right: 15px;
          button {
            height: 30px;
            margin: 0 5px;
            padding: 0 15px;
            text-transform: capitalize;
          }
        }
      }
    }
  }

</style>
