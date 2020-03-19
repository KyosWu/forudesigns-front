<template>
  <div class="cards">
    <ul class="box clear-both animated fadeIn" v-if="isMultiple">
      <!--multiple-->
      <li v-for="(item, index) in list" :key="index">
        <nuxt-link :to="`/shop/`+ urlreplace(item.name)">
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
            <span class="card-price">${{item.price}}</span>
          </div>
        </nuxt-link>
      </li>
    </ul>

    <ul class="product clear-both animated fadeIn" v-if="isSingle">
      <!--single-->
      <li v-for="(item, index) in list" :key="index">
        <div class="product-about">
          <nuxt-link :to="`/shop/`+item.name">
            <div class="img-wrap">
                <div class="img-outer">
                  <img v-lazy="item.src"
                       :title="item.name"
                       alt="" class="img-inner">
                </div>
              </div>
          </nuxt-link>
          <div>
            <span class="product-name">{{item.name}}</span>
            <span class="product-price">${{item.price}}</span>
            <div class="buttons">
              <nuxt-link to="">
                <el-button class="btn-01">View Detail</el-button>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="product-operate">
          <!--点赞-->
          <span class="thumbs-up com2"></span>
          <!--收藏-->
          <span class="collection com2"></span>
          <!--转发-->
          <span class="forward com2"></span>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'
    export default {
        name: "cards",
        data () {
          return {
            list: [
              {
                id: 1,
                src: require('../../../assets/images/shop/list/cards/1.jpg'),
                name: 'red Mesh Heightening Rocking Shoes',
                price: 2.5
              },
              {
                id: 2,
                src: require('../../../assets/images/shop/list/cards/1.jpg'),
                name: 'red Mesh Heightening Rocking Shoes',
                price: 2.5
              },
              {
                id: 3,
                src: require('../../../assets/images/shop/list/cards/1.jpg'),
                name: 'red Mesh Heightening Rocking Shoes',
                price: 2.5
              },
              {
                id: 4,
                src: require('../../../assets/images/shop/list/cards/1.jpg'),
                name: 'red Mesh Heightening Rocking Shoes',
                price: 2.5
              },
              {
                id: 5,
                src: require('../../../assets/images/shop/list/cards/1.jpg'),
                name: 'red Mesh Heightening Rocking Shoes',
                price: 2.5
              },
              {
                id: 6,
                src: require('../../../assets/images/shop/list/cards/1.jpg'),
                name: 'red Mesh Heightening Rocking Shoes',
                price: 2.5
              },
              {
                id: 7,
                src: require('../../../assets/images/shop/list/cards/1.jpg'),
                name: 'red Mesh Heightening Rocking Shoes',
                price: 2.5
              },
              {
                id: 8,
                src: require('../../../assets/images/shop/list/cards/1.jpg'),
                name: 'red Mesh Heightening Rocking Shoes',
                price: 2.5
              },
            ]
          }
        },
      computed: {
          ...mapGetters([
            'isMultiple',
            'isSingle'
          ])
      },
      methods: {
        //  url 修改
        urlreplace (value) {
          return value.split(' ').join('-')
        }
      }
    }
</script>

<style lang="scss" scoped>
  .cards {
    padding-bottom: 13px;
    -webkit-animation: show .5s linear;
    animation: show .5s linear;
    /*multiple*/
    .box {
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
    /*single*/
    .product {
      li {
        display: -webkit-box;
        display: flex;
        flex-wrap: nowrap;
        -webkit-box-pack: justify;
        justify-content: space-between;
        width: 100%;
        padding: 0 0 25px;
        .product-about {
          display: -webkit-box;
          display: flex;
          -webkit-box-pack: start;
          justify-content: flex-start;
          .product-name {
            display: block;
            overflow: hidden;
            width: 652px;
            white-space: nowrap;
            text-transform: capitalize;
            text-overflow: ellipsis;
            color: #40354e;
            font-size: 14px;
            line-height: 30px;
          }
          .product-price {
            color: #40354e;
            font-size: 20px;
            font-weight: 700;
            line-height: 30px;
          }
          .buttons {
            margin-top: 125px;
            button {
              display: block;
              width: 155px;
              height: 35px;
              margin-bottom: 6px;
            }
            button:hover {
              background-color: #e3430f;
            }
          }
        }
        .product-operate {
          display: -webkit-box;
          display: flex;
          -webkit-box-align: start;
          align-items: flex-start;
          color: #8c95a5;
          span {
            margin-right: 10px;
            cursor: pointer;
            font-size: 25px;
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
  }

  .icon {
    position: absolute;
    top: 14px;
    right: 14px;
    display: -webkit-box;
    display: flex;
  }
  .com {
    width: 18px;
    height: 18px;
    margin-left: 10px;
    @include common_img_center_contain
  }
  .com2 {
    width: 25px;
    height: 25px;
    margin-left: 10px;
    @include common_img_center_contain
  }
  .thumbs-up {
    background-image: url("../../../assets/images/shop/list/cards/点赞.svg");
  }
  .collection {
    background-image: url("../../../assets/images/shop/list/cards/收藏.svg");
  }
  .forward {
    background-image: url("../../../assets/images/shop/list/cards/转发.svg");
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
