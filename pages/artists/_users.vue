<template>

  <main class="defalut-layout__main">
    <div class="artist-homepage">
      <div class="banner">
        <nuxt-link to="">
          <div class="banner-image" style="width: 1920px; height: 245px;">
            <img src="../../assets/images/artists/_users/1.png" alt="" class="img-inner">
          </div>
        </nuxt-link>
      </div>
      <main class="artist-homepage__content">
        <!--用户头像-->
        <div class="avatar"></div>
        <!--用户名 和 订阅按钮-->
        <div class="name-and-follow-button"></div>
        <!--用户链接-->
        <div class="links-and-summary"></div>
        <!--用户tab 标签-->
        <div class="tabs">
          <ul>
            <!--图片作品数量-->
            <li>
              Images
              <span>
                1.9k
              </span>
            </li>
            <!--商品数量-->
            <li>
              Products
              <span>
                13.5k
              </span>
            </li>
            <!--被订阅数量-->
            <li>
              Followers
              <span>
                6
              </span>
            </li>
          </ul>
        </div>
      </main>
    </div>

  </main>

</template>

<script>
  import { mapGetters } from 'vuex'
    export default {
        name: "users_name",
      data () {
          return {
            users: this.$route.params.users
          }
      },
      computed: {
        ...mapGetters([
          'Artist_Users_Head_Title',
        ]),
      },
      created () {
        //  需要判断是否是客户端
        if (process.client) {
          // 进入前创造title
          document.title = this.Artist_Users_Head_Title
        }
      },
      destroyed() {
        //  需要判断是否是客户端
        if (process.client) {
          //  离开时销毁title
          document.title = ''
        }
      }
    }
</script>

<style lang="scss" scoped>
  .banner {
    display: -webkit-box;
    display: flex;
    overflow: hidden;
    -webkit-box-pack: center;
    justify-content: center;
    min-width: 1280px;
    height: 245px;
    text-align: center;
    background-color: #f5f5f5;
    .banner-image {
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
  .banner-layout__main {
    padding-bottom: 20px;
  }
  .artist-homepage__content {
    width: 1280px;
    margin: 0 auto;
  }
</style>
