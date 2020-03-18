<template>
  <div class="notify-wrapper__header"
       @mouseenter="enter_content_func"
       @mouseleave="leave_content_func"
       style="width: 350px; transform-origin: center top; z-index: 2015; position: fixed; top: 58px; left: 1350px;">
    <div class="mark-all-read">
      Mark All Read
    </div>

    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="All Notices" name="first">
        <!--没有数据-->
        <div class="no-data">
          <div class="no-data-wrap">
            <!--没有数据的图片提示-->
            <div class="img-wrap small-img">
              <div class="img-outer" style="width: 100%; height: 100%;">
                <img src="../../../../assets/images/public/no-data/message-empty.jpg"
                     style="object-fit: contain;"
                     alt="No Data Icon Image" class="img-inner">
              </div>
            </div>
            <div class="no-data-info">
              <p>
                There is no data...
              </p>
            </div>
          </div>
        </div>
        <!--信息-->
        <div class="message__entrance">
          <span class="message__entrance-name">
            See All Notifications
          </span>
        </div>

        <div class="el-loading-mask" style="display: none;">
          <div class="el-loading-spinner"></div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="Unread" name="second">
        <!--没有数据-->
        <div class="no-data">
          <div class="no-data-wrap">
            <!--没有数据的图片提示-->
            <div class="img-wrap small-img">
              <div class="img-outer" style="width: 100%; height: 100%;">
                <img src="../../../../assets/images/public/no-data/message-empty.jpg"
                     style="object-fit: contain;"
                     alt="No Data Icon Image" class="img-inner">
              </div>
            </div>
            <div class="no-data-info">
              <p>
                There is no data...
              </p>
            </div>
          </div>
        </div>
        <!--信息-->
        <div class="message__entrance">
      <span class="message__entrance-name">
        See All Notifications
      </span>
        </div>

        <div class="el-loading-mask" style="display: none;">
          <div class="el-loading-spinner"></div>
        </div>
      </el-tab-pane>
    </el-tabs>


    <div class="popper__arrow"></div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
    export default {
        name: "Notice",
      data () {
          return {
            activeName: 'first'
          }
      },
      methods: {
        ...mapActions([
          'set_content',
          'set_notice'
        ]),
        handleClick(tab, event) {
          console.log(tab, event);
        },
        enter_content_func () {
          this.set_notice(true)
          this.set_content(true)
        },
        // 鼠标离开content
        leave_content_func () {
          this.set_notice(false)
          this.set_content(false)
        },
      }
    }
</script>

<style lang="scss" scoped>
  .notify-wrapper__header {
    position: relative;
    background-color: white;
    .mark-all-read {
      position: absolute;
      z-index: 9999;
      top: 14px;
      /*top: 100%;*/
      right: 11px;
      cursor: pointer;
      color: #4292e3;
      font-size: 12px;
    }
    .mark-all-read:hover {
      text-decoration: underline;
    }
  }


  /* 没有数据 */
  .no-data {
    width: 100%;
    -webkit-animation: show .5s linear;
    animation: show .5s linear;
    .no-data-wrap {
      /*display: -webkit-box;*/
      /*display: flex;*/
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;
      padding: 30px 0!important;
      display: flex;
      /*display: -webkit-box;*/
      .small-img {
        /*width: 148px;*/
        height: 148px;
      }
      .no-data-info {
        margin: 20px 0 0!important;
        /*margin-left: 40px;*/
        color: #8c95a5;
        font-size: 16px;
        text-align: center;
      }
    }
  }
  .message__entrance {
    text-align: center;
    color: #8c95a5;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 10px;
    .message__entrance-name {
      cursor: pointer;
      text-align: center;
      color: #8c95a5;
      font-size: 14px;
      line-height: 16px;
    }
  }
</style>
