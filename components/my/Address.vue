<template>
  <div class="modal-wrap address-modal">
    <div class="modal">
      <h2 class="modal-title">Edit Address</h2>
      <form action="" class="address-modal__form">
        <ul class="clear-both">
          <!--First Name-->
          <li class="item-group field">
            <label for="first_name" class="personal-label">
              First Name
              <span class="red">*</span>
            </label>
            <el-input id="first_name"
                      maxlength="50"
                      show-word-limit></el-input>
          </li>
          <!--Last Name-->
          <li class="item-group field">
            <label for="last_name" class="personal-label">
              Last Name
              <span class="red">*</span>
            </label>
            <el-input id="last_name"
                      maxlength="50"
                      show-word-limit></el-input>
          </li>
          <!--Phone-->
          <li class="item-group field">
            <label for="phone-number" class="personal-label">
              Phone Number
              <span class="red">*</span>
            </label>
            <el-input id="phone-number"
                      maxlength="50"
                      show-word-limit></el-input>
          </li>
          <!--email-->
          <li class="item-group field">
            <label for="email" class="personal-label">
              Email
              <span class="red">*</span>
            </label>
            <el-input id="email"
                      maxlength="50"
                      show-word-limit></el-input>
          </li>
          <!--Country-->
          <li class="item-group field">
            <label for="" class="personal-label">
              Country
              <span class="red">*</span>
            </label>
            <el-select v-model="country_value" placeholder="请选择">
              <el-option
                v-for="item in countries"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </li>
          <!--state-->
          <li class="item-group field">
            <label for="state" class="personal-label">
              State
              <span class="red">*</span>
            </label>
            <el-select v-model="country_value" placeholder="请选择">
              <el-option
                v-for="item in countries"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </li>
          <!--city-->
          <li class="item-group field">
            <label for="city" class="personal-label">
              City
              <span class="red">*</span>
            </label>
            <el-input id="city"
                      maxlength="100"
                      show-word-limit></el-input>
          </li>
          <!--zip code-->
          <li class="item-group field">
            <label for="zip-code" class="personal-label">
              Email
              <span class="red">*</span>
            </label>
            <el-input id="zip-code"
                      maxlength="8"
                      show-word-limit></el-input>
          </li>
          <!--Address-->
          <li class="textarea field">
            <label for="address" class="personal-label">
              Email
              <span class="red">*</span>
            </label>
            <el-input id="address" type="textarea"
                      maxlength="255"
                      show-word-limit></el-input>
          </li>
        </ul>
      </form>
      <div class="tools">
        <el-button class="btn-02">Cancel</el-button>
        <el-button class="btn-01">Confirm</el-button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Address"
    }
</script>

<style lang="scss" scoped>
  .modal-wrap {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: -webkit-box;
    display: flex;
    overflow-y: auto;
    -webkit-box-align: center;
    align-items: center;
    width: 100%!important;
    height: 100%!important;
    padding: 50px;
    background: rgba(0,0,0,.5);
  }
  .modal {
    display: block;
    width: 941px;
    margin: auto;
    padding: 39px 62px 31px;
    -webkit-animation: fadeInOut .3s ease;
    animation: fadeInOut .3s ease;
    border-radius: 4px;
    outline: none;
    background: #fff;
    .modal-title {
      margin-bottom: 40px;
      text-align: center;
      color: #40354e;
      font-size: 20px;
    }
    .address-modal__form {
      width: 100%;
      ul {
        display: -webkit-box;
        display: flex;
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        justify-content: space-between;
        width: 100%;
        li {
          width: 49%;
          text-align: left;
          label {
            margin: 5px 0 15px;
            text-align: left;
            color: #8c95a5;
            font-size: 14px;
            font-weight: 400;
            .red {
              color: #ea0000!important;
            }
          }
        }
        .field {
          margin-bottom: 3px;
        }
        .textarea {
          width: 100%!important;
        }
      }
    }
    .tools {
      display: -webkit-box;
      display: flex;
      -webkit-box-pack: end;
      justify-content: flex-end;
      margin-top: 15px;
    }
  }
</style>

<style scoped>
  .address-modal >>> .el-select {
    width: 100%;
  }
</style>
