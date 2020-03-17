<template>
  <div class="notify-wrapper__header"
       style="width: 350px; transform-origin: center top; z-index: 2033; position: fixed; top: 47px; left: 1011px;">
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
              <div class="img-outer">
                <img src="" alt="" class="ing-inner">
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
        <li class="message__entrance">
                <span class="message__entrance-name">
                  message__entrance-name
                </span>
        </li>
        <div class="el-loading-mask" style="display: none;">
          <div class="el-loading-spinner"></div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Unread" name="second">
        <div role="tabpane1" class="el-tab-pane">
          <ul>
            <!--没有数据-->
            <div class="no-data">
              <div class="no-data-wrap">
                <!--没有数据的图片提示-->
                <div class="img-wrap small-img">
                  <div class="img-outer">
                    <img src="" alt="" class="ing-inner">
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
            <li class="message__entrance">
                <span class="message__entrance-name">
                  message__entrance-name
                </span>
            </li>
          </ul>
        </div>
      </el-tab-pane>
    </el-tabs>


    <div class="popper__arrow"></div>
  </div>
</template>

<script>
    export default {
        name: "Notice",
      data () {
          return {
            activeName: 'first'
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
  .notify-wrapper__header {
    position: relative;
    background-color: white;
    .mark-all-read {
      position: absolute;
      z-index: 9999;
      top: 14px;
      right: 11px;
      cursor: pointer;
      color: #4292e3;
      font-size: 12px;
    }
    .mark-all-read:hover {
      text-decoration: underline;
    }
    .el-tabs__header {
      margin: -10px 0 10px;
      .el-tabs__nav-wrap {
        overflow: hidden;
        margin-bottom: -1px;
        position: relative;
        .el-tabs__nav-scroll {
          overflow: hidden;
          .el-tabs__nav {
            white-space: nowrap;
            position: relative;
            -webkit-transition: -webkit-transform .3s;
            transition: -webkit-transform .3s;
            transition: transform .3s;
            transition: transform .3s,-webkit-transform .3s;
            float: left;
            z-index: 2;
          }
        }
      }
    }
  }


  /* 没有数据 */
  .no-data {
    .no-data-warp {
      display: -webkit-box;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;
      padding: 30px 0!important;
    }
  }
</style>
