<template>
  <div class="message-wrapper">
    <h2 class="message-title">Notifications Center</h2>
    <div class="list-wrapper">
      <!--日期选择器-->
      <div class="date-picker">
        <div class="block">
          <el-date-picker
            v-model="value2"
            type="datetimerange"
            :picker-options="pickerOptions"
            range-separator="-"
            start-placeholder="Start Date"
            end-placeholder="End Date"
            align="right">
          </el-date-picker>
        </div>
      </div>
      <!--消息通知-->
      <div class="notify-wrapper">
        <el-tabs v-model="activeName"
                 type="border-card"
                 @tab-click="handleClick">
          <el-tab-pane label="All Notices" name="first">
            <!--功能组件区域-->
            <div class="design-ctrl">
              <span>
                <el-checkbox v-model="checked"></el-checkbox>
              </span>
              <span>
                <i class="el-icon-delete"></i>
              </span>
              <span>
                <i class="el-icon-edit-outline"></i>
              </span>
            </div>
            <div class="notify-content"></div>
            <!--没有数据-->
            <div class="no-data">
              <div class="no-data-warp">
                <div class="img-wrap small-img">
                  <div class="img-outer" style="width: 100%; height: 100%;">
                    <img src="../../../assets/images/my/message-empty.jpg" alt="" class="img-inner">
                  </div>
                </div>
                <div class="no-data-info">
                  <p>There is no data...</p>
                </div>
              </div>
            </div>
            <!--分页-->
            <div class="page fr">
              <el-pagination
                layout="sizes, prev, pager, next"
                :current-page.sync="currentPage2"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="100"
                :total="10">
              </el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Unread" name="second">

          </el-tab-pane>
        </el-tabs>
      </div>

    </div>
  </div>

</template>

<script>
    export default {
        name: "index",
      data () {
          return {
            pickerOptions: {
            },
            value1: '',
            value2: '',
            activeName: 'first',
            checked: true
          }
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    }
</script>

<style lang="scss" scoped>
  .message-wrapper {
    width: 85%;
    .message-title {
      display: -webkit-box;
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      margin: 0 0 12px;
      text-transform: uppercase;
      color: #40354e;
      font-size: 20px;
      font-weight: 700;
    }
    .list-wrapper {
      position: relative;
      .date-picker {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 100;
      }
      .notify-wrapper {
        border: 1px solid #dfdfeb;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        box-shadow: none;
        .design-ctrl {
          display: block;
          padding-bottom: 12px;
          color: #4292e3;
          line-height: 22px;
          span {
            margin: 0 12px;
            cursor: pointer;
            vertical-align: top;
            font-size: 20px;
          }
        }
        .notify-content {
          background: #fff;
        }
      }
    }
  }

  .no-data {
    width: 100%;
    -webkit-animation: show .5s linear;
    animation: show .5s linear;
    .no-data-warp {
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      width: 100%;
      padding: 80px 0;
      .no-data-info {
        margin-left: 40px;
        color: #8c95a5;
        font-size: 16px;
      }
      .small-img {
        width: 148px;
        height: 148px;
      }
      /*.img-wrap {*/
        /*width: 205px;*/
        /*height: 205px;*/
      /*}*/
    }
  }
</style>

<style scoped>
  .message-wrapper >>> .el-tabs__header {
  }
  .message-wrapper >>> .el-tabs--border-card {
    background: #FFF;
    border: 0;
    box-shadow: none;
  }
</style>
