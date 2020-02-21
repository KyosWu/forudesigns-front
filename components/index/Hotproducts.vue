<template>
  <div class="design-wrapper" style="width: 1280px;">
    <h2 class="design-title">Hot Products</h2>
    <ul class="design-ul">
      <li v-for="item in list" :key="item" style="width: 310px;height: 345px;">
        <nuxt-link to="" style="width: 310px;">
          <div class="img-container" style="width: 265px;height: 265px;">
            <div class="image-outer triangle-tag"
                 data-name="Hot"
                 style="width: 265px;height: 265px;">
              <img v-lazy="item.src" alt="" class="image__inner" style="width: 265px;height: 265px;">
            </div>
          </div>
          <div class="card-name">
            {{item.name}}
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Hotproducts",
        data () {
          return {
            list: [
              {src: require("../../assets/images/index/hotproduction/1.jpg"), name:"Black and White Urban Collage Print White EVA Low Top Canvas shoes"},
              {src: require("../../assets/images/index/hotproduction/1.jpg"), name:"Black and White Urban Collage Print White EVA Low Top Canvas shoes"},
              {src: require("../../assets/images/index/hotproduction/1.jpg"), name:"Black and White Urban Collage Print White EVA Low Top Canvas shoes"},
              {src: require("../../assets/images/index/hotproduction/1.jpg"), name:"Black and White Urban Collage Print White EVA Low Top Canvas shoes"},
              {src: require("../../assets/images/index/hotproduction/1.jpg"), name:"Black and White Urban Collage Print White EVA Low Top Canvas shoes"},
              {src: require("../../assets/images/index/hotproduction/1.jpg"), name:"Black and White Urban Collage Print White EVA Low Top Canvas shoes"},
              {src: require("../../assets/images/index/hotproduction/1.jpg"), name:"Black and White Urban Collage Print White EVA Low Top Canvas shoes"},
              {src: require("../../assets/images/index/hotproduction/1.jpg"), name:"Black and White Urban Collage Print White EVA Low Top Canvas shoes"},
              {src: require("../../assets/images/index/hotproduction/1.jpg"), name:"Black and White Urban Collage Print White EVA Low Top Canvas shoes"},
              {src: require("../../assets/images/index/hotproduction/1.jpg"), name:"Black and White Urban Collage Print White EVA Low Top Canvas shoes"},
              {src: require("../../assets/images/index/hotproduction/1.jpg"), name:"Black and White Urban Collage Print White EVA Low Top Canvas shoes"},
              {src: require("../../assets/images/index/hotproduction/1.jpg"), name:"Black and White Urban Collage Print White EVA Low Top Canvas shoes"},
              {src: require("../../assets/images/index/hotproduction/1.jpg"), name:"Black and White Urban Collage Print White EVA Low Top Canvas shoes"},
              {src: require("../../assets/images/index/hotproduction/1.jpg"), name:"Black and White Urban Collage Print White EVA Low Top Canvas shoes"},
              {src: require("../../assets/images/index/hotproduction/1.jpg"), name:"Black and White Urban Collage Print White EVA Low Top Canvas shoes"},
              {src: require("../../assets/images/index/hotproduction/1.jpg"), name:"Black and White Urban Collage Print White EVA Low Top Canvas shoes"},
            ]
          }
        }
    }
</script>

<style lang="scss" scoped>
  .design-wrapper {
    width: 1280px;
    margin: 0 auto;
    .design-title {
      margin: 72px auto 25px;
      text-align: center;
      text-transform: uppercase;
      color: #40354e;
      font-size: 45px;
      line-height: 45px;
    }
    .design-ul {
      display: -webkit-box;
      display: flex;
      flex-wrap: wrap;
      -webkit-box-pack: start;
      justify-content: center;
      li:nth-child(4) {
        margin: 0;
      }
      li:nth-child(8) {
        margin: 0;
      }
      li:nth-child(12) {
        margin: 0;
      }
      li:nth-child(16) {
        margin: 0;
      }
      li {
        flex-basis: 310px;
        width: 310px;
        margin: 0 13px 13px 0;
        padding-bottom: 10px;
        border-radius: 4px;
        background: #f5f5f5;
        a {
          display: -webkit-box;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          flex-direction: column;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .img-container {
    position: relative;
    display: -webkit-inline-box;
    display: inline-flex;
    margin: 20px 0;
    cursor: pointer;
    background-color: #fff;
    .image-outer {
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      .image-inner {
        vertical-align: middle;
      }
    }
    .triangle-tag, .triangle-tag-right {
      position: relative;
      overflow: hidden;
    }
    .design-wrapper .design-ul li .img-container .triangle-tag:before {
      background-color: #4292e3;
    }
    .triangle-tag-right:before, .triangle-tag:before {
      position: absolute;
      top: -38px;
      left: -38px;
      display: block;
      width: 76px;
      height: 76px;
      content: attr(data-name);
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      text-align: center;
      text-transform: uppercase;
      color: #fff;
      background-color: #fa8d14;
      font-size: 14px;
      line-height: 125px;
    }
  }

  .card-name {
    overflow: hidden;
    -webkit-box-orient: vertical;
    width: 100%;
    margin-top: 0;
    padding: 0 15px 0 16px;
    text-align: center;
    text-transform: capitalize;
    text-overflow: ellipsis;
    color: #40354e;
    font-size: 14px;
    -webkit-line-clamp: 2;
  }
</style>
