<template>
    <div class="cards">
      <ul class="clear-both">
        <li v-for="(item, index) in list" :key="index">
          <nuxt-link to="">
            <div class="card">
              <div class="img-wrap">
                <div class="img-outer">
                  <img v-lazy="item.src"
                       :title="item.name"
                       alt="" class="img-inner">
                </div>
              </div>
              <div class="icon">
                <!--点赞-->
                <div class="thumbs-up com"></div>
                <!--收藏-->
                <div class="collection com"></div>
                <!--转发-->
                <div class="forward com"></div>
              </div>
              <span class="card-name">{{item.name}}</span>
              <span class="card-price">{{item.price}}</span>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "cards",
        data () {
          return {
            list: [
              {src: require('../../../assets/images/shop/cards/1.jpg'), name: 'red Mesh Heightening Rocking Shoes', price: 2.5},
              {src: require('../../../assets/images/shop/cards/1.jpg'), name: 'red Mesh Heightening Rocking Shoes', price: 2.5},
              {src: require('../../../assets/images/shop/cards/1.jpg'), name: 'red Mesh Heightening Rocking Shoes', price: 2.5},
              {src: require('../../../assets/images/shop/cards/1.jpg'), name: 'red Mesh Heightening Rocking Shoes', price: 2.5},
              {src: require('../../../assets/images/shop/cards/1.jpg'), name: 'red Mesh Heightening Rocking Shoes', price: 2.5},
              {src: require('../../../assets/images/shop/cards/1.jpg'), name: 'red Mesh Heightening Rocking Shoes', price: 2.5},
              {src: require('../../../assets/images/shop/cards/1.jpg'), name: 'red Mesh Heightening Rocking Shoes', price: 2.5},
              {src: require('../../../assets/images/shop/cards/1.jpg'), name: 'red Mesh Heightening Rocking Shoes', price: 2.5},
            ]
          }
        }
    }
</script>

<style lang="scss" scoped>
  .cards {
    padding-bottom: 13px;
    -webkit-animation: show .5s linear;
    animation: show .5s linear;
    width: 1030px;
    ul {
      display: -webkit-box;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      li {
        margin: auto;
        width: 250px;
        cursor: pointer;
        border-radius: 4px;
        box-shadow: 0 0 11.44px 1.56px rgba(0,0,70,.05);
        a {
          .card {
            position: relative;
            width: 100%;
            text-align: center;
          }
        }
      }
    }
  }

  .img-wrap {
    display: -webkit-inline-box;
    display: inline-flex;
    overflow: hidden;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 304px;
    background-color: #fff;
    .img-outer {
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      .img-inner {
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }
    }
  }

  .icon {
    position: absolute;
    top: 14px;
    right: 14px;
    display: -webkit-box;
    display: flex;
    .com {
      width: 18px;
      height: 18px;
      margin-left: 10px;
      @include common_img_center_contain
    }
    .thumbs-up {
      background-image: url("../../../assets/images/shop/cards/点赞.svg");
    }
    .collection {
      background-image: url("../../../assets/images/shop/cards/收藏.svg");
    }
    .forward {
      background-image: url("../../../assets/images/shop/cards/转发.svg");
    }
  }

  .card-name {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    margin-top: 0;
    padding: 0 15px;
    text-transform: capitalize;
    text-overflow: ellipsis;
    color: #40354e;
    font-size: 14px;
    -webkit-line-clamp: 2;
  }
  .card-price {
    display: block;
    margin: 8px 0;
    color: #40354e;
    font-size: 16px;
  }
</style>
