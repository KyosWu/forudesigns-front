<template>
  <div>
    哈哈哈
    <!--商品作者详情-->
    <div class="commodity-author">
      <!--作者信息-->
      <div class="autor-info clear-both">
        <div class="author clear-both">
          <nuxt-link to="" class="author-headimg">
            <div class="img-outer">
              <img src="../../../assets/images/shop/_goods/11.jpeg" alt=""
                   class="img-inner">
            </div>
          </nuxt-link>
          <!--关于作者-->
          <div class="about-author">
            <span class="author-name">Kettukas</span>
            <span class="author-follow">
              <span>
                <span class="design">8</span>
                Images
              </span>
              <span>
                <span class="follower">18</span>
                 Products
              </span>
              <span>
                <span class="following">28</span>
                 Followers
              </span>
            </span>
          </div>
        </div>
        <div class="following-button">
          <button class="following-big btn-01">
            <i></i>
            <span>Follow</span>
          </button>
        </div>
      </div>
    </div>

    <!--作者的文件夹-->
    <Portfolio/>

    <!--相似类容-->
    <Similar/>
  </div>

</template>

<script>
  import Portfolio from './commodity-author/Portfolio'
    import Similar from './commodity-author/Similar'
    export default {
        name: "Commodity-author",
      components: {
        Portfolio,
        Similar
      },
    }
</script>

<style lang="scss" scoped>
  .commodity-author {
    width: 1280px;
    margin: 0 auto;
    padding: 26px 0 0;
  }

  .autor-info {
    width: 100%;
    .author {
      float: left;
      .author-headimg {
        float: left;
        width: 90px;
        height: 90px;
        margin-right: 16px;
        .img-outer {
          display: -webkit-box;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          border-radius: 100%;
          .img-inner {
            width: 100%;
            height: 100%;
            vertical-align: middle;
            border-radius: 100%;
          }
        }
      }
      .about-author {
        float: left;
        .author-name {
          margin-bottom: 14px;
          color: #40354e;
          font-size: 18px;
          font-weight: 700;
        }
        .author-follow {
          color: #8c95a5;
          font-size: 14px;
          font-weight: 400;
          display: flex;
          span {
            display: flex;
            span {
              color: #40354e
            }
          }
          .design {
            margin-right: 10px;
          }
          .follower {
            margin: 0 10px 0 20px
          }
          .following {
            margin: 0 10px 0 20px;
          }
        }
      }
    }
    .following-button {
      float: right;
      margin-top: 35px;
      button {
        width: 500px;
        height: 50px;
        border-radius: 25px;
        font-size: 14px;
      }
      .following-big {
        min-width: 120px;
        height: 38px;
        text-transform: capitalize;
      }
    }
  }

</style>
