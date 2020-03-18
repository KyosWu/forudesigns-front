<template>
  <div class="collections" style="width: 1280px">
    <h2 class="collections-title">
      Collections
    </h2>
    <ul class="collections-content clear-both">
      <!--加style 保证不移动自适配-->
      <li v-for="(item,index) in list" :key="index" style="width: 310px;height:310px">
        <nuxt-link to="">
          <div class="img-warp">
            <div class="img-outer">
              <img v-lazy="item.src" alt="" class="img-inner">
            </div>
            <span class="collection-name">
              {{item.name}}
            </span>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "collcollections-titleections",
        data () {
          return {
            list: [
              {name: 'animals', src: require("../../assets/images/index/collections/1.jpeg")},
              {name: 'art styles', src: require("../../assets/images/index/collections/1.jpeg")},
              {name: 'colors', src: require("../../assets/images/index/collections/1.jpeg")},
              {name: 'countries', src: require("../../assets/images/index/collections/1.jpeg")},
              {name: 'food', src: require("../../assets/images/index/collections/1.jpeg")},
              {name: 'funny', src: require("../../assets/images/index/collections/1.jpeg")},
              {name: 'big day', src: require("../../assets/images/index/collections/1.jpeg")},
              {name: 'home decor', src: require("../../assets/images/index/collections/1.jpeg")},
              {name: 'love', src: require("../../assets/images/index/collections/1.jpeg")},
              {name: 'nature', src: require("../../assets/images/index/collections/1.jpeg")},
              {name: 'pop culture', src: require("../../assets/images/index/collections/1.jpeg")},
              {name: 'view all collections', src: require("../../assets/images/index/collections/1.jpeg")}
            ]
          }
        }
    }
</script>

<style lang="scss" scoped>
  .collections {
    overflow: hidden;
    margin: 72px auto 0;
    background: #fff;
    .collections-title {
      margin-bottom: 25px;
      text-align: center;
      text-transform: uppercase;
      color: #40354e;
      font-size: 45px;
      line-height: 45px;
    }
    .collections-content {
      width: 100%;
      /*解决一像素问题*/
      li:nth-child(4n) {
        margin-right: 0;
      }
      li {
        position: relative;
        float: left;
        overflow: hidden;
        width: 310px;
        height: 310px;
        margin-right: 13px;
        margin-bottom: 12px;
        cursor: pointer;
        .img-wrap {
          display: -webkit-box;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .collection-name {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    text-align: center;
    text-transform: uppercase;
    color: #40354e;
    font-size: 16px;
    font-weight: 700;
    line-height: 40px;
  }
</style>
