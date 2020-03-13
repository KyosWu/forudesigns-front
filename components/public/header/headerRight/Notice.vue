<template>
  <div>
    haha
    <div class="notify-wrapper__header"
      style="width: 350px; transform-origin: center top; z-index: 2014; display: none;">
      <div class="mark-all-read">
        Mark All Read
      </div>
      <!--主面板-->
      <div class="el-tabs el-tabs--top">
        <!--头-->
        <div class="el-tabs__header is-top">
          <div class="el-tabs__nav-wrap is-top">
            <div class="el-tabs__nav-scroll">
              <div class="el-tabs__nav is-top">
                <div class="el-tabs__active-bar is-top"
                style="width: 72px; transform: translateX(0px);">

                </div>

                <div class="el-tabs__item is-top is-active">
                  All Notices
                </div>
                <div class="el-tabs__item is-top">
                  Unread (0)
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--主-->
        <div class="el-tabs__content">
          <!--ALL Notices-->
          <div role="tabpanel" class="el-tab-pane">
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
            <div class="el-loading-mask" style="display: none;">
              <div class="el-loading-spinner"></div>
            </div>
          </div>
          <!--Unread-->
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
        </div>
      </div>
      <div class="popper__arrow"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Notice"
    }
</script>

<style lang="scss" scoped>
  .notify-wrapper__header {
    position: relative;
    .mark-all-read {
      position: absolute;
      z-index: 9999;
      top: 14px;
      right: 11px;
      cursor: pointer;
      color: #4292e3;
      font-size: 12px;
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
</style>
