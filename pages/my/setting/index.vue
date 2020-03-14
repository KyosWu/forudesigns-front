<template>
  <div class="setting-wrapper">
    <h2 class="setting-title">Notification Settings</h2>
    <div>
      <table class="message-setting-wrapper">
        <thead>
          <tr class="message-setting-title">
            <th class="message-setting__category">
              Message category
            </th>
            <th class="message-setting__content">
              Message content
            </th>
            <th class="message-setting__station-prompt">
              Station prompt
            </th>
            <th class="message-setting__mail-push">
              Mail push
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="message-setting-content">
            <td class="message-setting__category">Promotion News</td>
            <td class="message-setting__content">
              <ul>
                <li>
                  <span class="round"></span>
                  Promotional Discount News
                </li>
              </ul>
            </td>
            <td class="message-setting__station-prompt">
              <div class="message-setting__mail-push">
                <el-checkbox v-model="checked"></el-checkbox>
              </div>
            </td>
            <td class="message-setting__mail-push">
              <div class="message-setting__mail-push">
                <el-checkbox v-model="checked"></el-checkbox>
              </div>
            </td>
          </tr>
          <tr class="message-setting-content">
            <td class="message-setting__category">Public Announcement</td>
            <td class="message-setting__content">
              <ul>
                <li>
                  <span class="round"></span>
                  Detailed Important Announcement
                </li>
              </ul>
            </td>
            <td class="message-setting__station-prompt">
              <div class="message-setting__mail-push">
                <el-checkbox v-model="checked"></el-checkbox>
              </div>
            </td>
            <td class="message-setting__mail-push">
              <div class="message-setting__mail-push">
                <el-checkbox v-model="checked"></el-checkbox>
              </div>
            </td>
          </tr>
          <tr class="message-setting-content">
            <td class="message-setting__category">System News</td>
            <td class="message-setting__content">
              <ul>
                <li>
                  <span class="round"></span>
                  Important System News
                </li>
              </ul>
            </td>
            <td class="message-setting__station-prompt">
              <div class="message-setting__mail-push">
                <el-checkbox v-model="checked"></el-checkbox>
              </div>
            </td>
            <td class="message-setting__mail-push">
              <div class="message-setting__mail-push">
                <el-checkbox v-model="checked"></el-checkbox>
              </div>
            </td>
          </tr>
          <tr class="message-setting-content">
            <td class="message-setting__category">Product News</td>
            <td class="message-setting__content">
              <ul>
                <li>
                  <span class="round"></span>
                  Artists’ Updating Notification
                </li>
              </ul>
            </td>
            <td class="message-setting__station-prompt">
              <div class="message-setting__mail-push">
                <el-checkbox v-model="checked"></el-checkbox>
              </div>
            </td>
            <td class="message-setting__mail-push">
              <div class="message-setting__mail-push">
                <el-checkbox v-model="checked"></el-checkbox>
              </div>
            </td>
          </tr>
          <tr class="message-setting-content">
            <td class="message-setting__category">Order News</td>
            <td class="message-setting__content">
              <ul>
                <li>
                  <span class="round"></span>
                  Payment Confirmation Notification
                </li>
                <li>
                  <span class="round"></span>
                  Pending Reminder
                </li>
                <li>
                  <span class="round"></span>
                  Shipping Notification
                </li>
                <li>
                  <span class="round"></span>
                  Order Product Infringement Notification
                </li>
              </ul>
            </td>
            <td class="message-setting__station-prompt">
              <div class="message-setting__mail-push">
                <el-checkbox v-model="checked"></el-checkbox>
              </div>
            </td>
            <td class="message-setting__mail-push">
              <div class="message-setting__mail-push">
                <el-checkbox v-model="checked"></el-checkbox>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="btn-01 restore-default-settings">
        Restore default settings
      </button>
    </div>
  </div>

</template>

<script>
    export default {
        name: "index",
      data () {
          return {
            checked: true
          }
      }
    }
</script>

<style lang="scss" scoped>
  .setting-wrapper {
    width: 85%;
    .setting-title {
      margin: 0 0 12px;
      text-transform: uppercase;
      color: #40354e;
      font-size: 20px;
      font-weight: 700;
    }
  }

  .message-setting-wrapper {
    border: 1px solid #dfdfeb;
    width: 100%;
    background: #fff;
    font-size: 14px;
    color: #40354e;
    border-radius: 4px;
  }
  .message-setting-wrapper > tr {
    width: 100%;
    display: -webkit-box;
    display: flex;
    th {
      font-weight: 700;
      height: 40px;
      line-height: 25px;
      padding: 10px 20px;
      text-transform: capitalize;
    }
  }
  .message-setting-title {
    background: #f5f5fa!important;
  }

  .message-setting__category {
    padding: 10px 20px;
    -webkit-box-flex: 1.2;
    flex: 1.2;
    font-weight: 700;
  }
  .message-setting__content {
    -webkit-box-flex: 4;
    flex: 4;
    padding: 10px;
    td {
      text-transform: capitalize;
      padding: 10px 20px;
    }
    ul {
      /*display: -webkit-box;*/
      /*display: flex;*/
      flex-wrap: wrap;
      li {
        margin-right: 19px;
        line-height: 25px;
        display: -webkit-box;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        min-width: 230px;
        .round {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #40354e;
          margin-right: 6px;
        }
      }
    }
  }
  .message-setting__station-prompt {
    padding: 10px 20px;
    -webkit-box-flex: 1;
    flex: 1;
    text-align: center;
  }
  .message-setting__mail-push {
    padding: 10px 20px;
    -webkit-box-flex: 1;
    flex: 1;
    text-align: center;
  }


  .restore-default-settings {
    margin-top: 28px;
    padding: 10px 20px;
  }

</style>
