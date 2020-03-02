<template>
    <div class="contact-us-wrap">
      <div>
        <h2>Contact us</h2>
        <p class="introduce">
          If you have any questions, please send us a message via Facebook, following the link below. We will also be happy to assist you on the phone or via email.
        </p>
        <div class="contact-us">
          <ul>
            <li>
              <p class="title">
                Office Phone Number
              </p>
              <p><i>0086-595-22892199</i></p>
            </li>
            <li>
              <p class="title">
                Official Mail-Box
              </p>
              <p><i>business@forudesigns.com</i></p>
            </li>
            <li>
              <p class="title">
                Official Page
              </p>
              <p><i></i></p>
              <nuxt-link to="https://business.facebook.com/forudesignsteam">https://business.facebook.com/forudesignsteam</nuxt-link>
            </li>
            <li>
              <p class="title">
                How to place an order :
              </p>
              <p><i></i></p>
              <nuxt-link to="https://blog.forudesigns.com/2020/01/06/how-to-place-an-order-on-business-forudesigns/">...</nuxt-link>
            </li>
            <li>
              <p class="title">Working hours:</p>
              <p>08:30am–12:00am (Monday-Friday)</p>
              <p>14:00pm–18:00pm (Monday-Friday)</p>
            </li>
            <li>
              Please note that there might be a delay during weekends or holidays. If you experience an urgent issue you can also contact ForUdesigns customer service May Wilson via
              <span>phone number /WhatsApp /skype: +86 15905998229</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="feedback-wrap">
        <h3>Message</h3>
        <form action="" class="feedback-form">
          <ul>
            <li>
              <p>
                Your Email Address
                <i class="require">*</i>
              </p>
              <el-input type="text" name="email" placeholder="Enter your Email"></el-input>
            </li>
            <li>
              <p>
                Your Main Question
                <i class="require">*</i>
              </p>
              <el-select v-model="value" placeholder="Choose at least one option">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </li>
            <li>
              <p>
                Your Order Number
                <i></i>
                <el-input></el-input>
              </p>
            </li>
            <li>
              <p>
                Description
                <i class="require">*</i>
              </p>
              <textarea name="" id="description"
                        placeholder="Please enter a description"
                        cols="30" rows="10"></textarea>
            </li>
            <li>
              <p>
                Your Detail Image
                <span class="max-info">(Up to three)*</span>
              </p>
              <div class="image-uploader clear-both">
                <ul class="clear-both"></ul>
                <span class="clear-both">
                  <label for="file-input" class="upload-button"></label>
                  <input id="file-input" type="file" style="display: none;">
                </span>
              </div>
            </li>
          </ul>
          <div class="tool-button">
            <button class="btn-02">
              Cancel
            </button>
            <button class="btn-01">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
    export default {
        name: "inndex",
      data () {
          return {
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            value: ''
          }
      }
    }
</script>

<style lang="scss" scoped>
  .contact-us-wrap {
    width: 1280px;
    min-height: 600px;
    margin: 0 auto;
    padding: 0 15px;
    h2 {
      margin: 0;
      text-align: center;
      text-transform: uppercase;
      border-bottom: 1px solid #dfdfeb;
      font-size: 20px;
      font-weight: 700;
      line-height: 117px;
    }
    h3 {
      padding-left: 25px;
      text-align: left;
      color: #40354e;
      font-size: 18px;
      font-weight: 700;
    }
    .introduce {
      margin: 35px 0 68px;
      color: #40354e;
      font-size: 18px;
      line-height: 30px;
    }
    .contact-us {
      width: 100%;
      height: 707px;
      margin: 20px 0 65px;
      padding: 30px 616px 30px 20px;
      background: url('../../assets/images/contact-us/contact-us.png') 0 0 no-repeat;
      ul li .title {
        font-size: 18px;
        font-weight: 700;
      }
      ul li p {
        font-size: 16px;
        line-height: 35px;
      }
    }

    .feedback-wrap {
      .feedback-form {
        width: 100%;
        margin-bottom: 50px;
        padding: 25px;
        border: 1px solid #dfdfeb;
        border-radius: 4px;
        .tool-button {
          width: 100%;
          padding-top: 20px;
          text-align: right;
          button {
            width: 90px;
            height: 38px;
            margin-left: 20px;
          }
        }
        ul li p {
          margin-bottom: 12px;
          color: #40354e;
          font-size: 14px;
          font-weight: 700;
        }
        ul li textarea {
          width: 100%;
          min-height: 200px;
          margin-bottom: 17px;
          resize: vertical;
        }
        ul li .max-info, .feedback-wrap .feedback-form ul li .require {
          color: #ea0000;
        }
        .require {
          color: #ea0000;
        }
        li input {
          width: 100%;
          margin-bottom: 17px;
        }
      }
    }
  }

  .image-uploader {
    width: 100%;
    padding: 30px 18px 23px;
    background: #f5f5fa;
    .upload-button {
      display: -webkit-box;
      display: flex;
      float: left;
      width: 90px;
      height: 90px;
      margin: 0 0 7px;
      text-align: center;
      color: #fff;
      background: #4292e3;
      font-size: 50px;
    }
    ul {
      float: left;
    }
  }

  textarea {
    padding: 12px;
    text-align: left;
    color: #40354e;
    border: 1px solid #dfdfeb;
    border-radius: 4px;
    outline: none;
    background: #fff;
    box-shadow: none!important;
    font-family: inherit;
    font-size: 14px;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
  }
</style>
