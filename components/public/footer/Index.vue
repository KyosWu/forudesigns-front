<template>
  <footer class="the-footer">
    <div class="the-footer__inner-wrap">
      <div class="the-footer__introduction">
        <nuxt-link to="">ABOUT US</nuxt-link>
        <nuxt-link to="">CONTACT US</nuxt-link>
        <nuxt-link to="">HELP CENTER</nuxt-link>
        <nuxt-link to="">PAYMENT</nuxt-link>
        <nuxt-link to="">RETURN POLICY</nuxt-link>
        <nuxt-link to="">TERMS & CONDITIONS</nuxt-link>
        <nuxt-link to="">BUSINESS SERVICE</nuxt-link>
        <nuxt-link to="">PRODUCTION</nuxt-link>
        <nuxt-link to="">INTELLECTUAL PROPERTY RIGHTS</nuxt-link>
        <nuxt-link to="">SHIPPING POLICY</nuxt-link>
        <nuxt-link to="">Privacy Policy</nuxt-link>
        <nuxt-link to="">Copyright</nuxt-link>
        <nuxt-link to="">Blog</nuxt-link>
      </div>
      <div class="the-footer__links">
        <nuxt-link to="" class="myLogo common_hw"></nuxt-link>
        <nuxt-link to="" class="facebook common_hw"></nuxt-link>
        <nuxt-link to="" class="twitter common_hw"></nuxt-link>
        <nuxt-link to="" class="ins common_hw"></nuxt-link>
        <nuxt-link to="" class="youtube common_hw"></nuxt-link>
        <nuxt-link to="" class="pin common_hw"></nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "Index.vue"
    }
</script>

<style lang="scss" scoped>
  .the-footer {
    bottom: 0;
    width: 100%;
    min-width: 1280px;
    padding-top: 40px;
    background: #3c3c3c;
    .the-footer__inner-wrap {
      display: -webkit-box;
      display: flex;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;
      -webkit-box-pack: start;
      justify-content: flex-start;
      width: 1280px;
      margin: 0 auto;
      padding-bottom: 64px;
      .the-footer__introduction {
        display: -webkit-box;
        display: flex;
        flex-wrap: wrap;
        padding-top: 22px;
        padding-bottom: 20px;
        text-align: left;
        border-bottom: 1px solid #505050;
        a {
          display: block;
          min-width: 200px;
          margin-right: 20px;
          cursor: pointer;
          white-space: nowrap;
          text-transform: uppercase;
          color: #b4b4b4;
          font-size: 14px;
          font-weight: 400;
          line-height: 30px;
        }
      }
      .the-footer__links {
        display: -webkit-box;
        display: flex;
        align-content: center;
        margin-top: 29px;
        text-align: left;
        a {
          display: inline-block;
          margin-right: 20px;
          cursor: pointer;
          color: #fff;
          font-size: 22px;
        }
        .common_hw {
          width: 22px;
          height: 22px;
          @include common_img_center;
        }
        .myLogo {
          background-image: url("../../../assets/images/public/my.jpg");
        }
        .facebook {
          background-image: url("../../../assets/images/public/corporation_logo/facebook.svg");
        }
        .twitter {
          background-image: url("../../../assets/images/public/corporation_logo/twitter.svg");
        }
        .ins {
          background-image: url("../../../assets/images/public/corporation_logo/instagram.svg");
        }
        .youtube {
          background-image: url("../../../assets/images/public/corporation_logo/you_tube.svg");
        }
        .pin {
          background-image: url("../../../assets/images/public/corporation_logo/pintrest.svg");
        }
      }
    }
  }
</style>
