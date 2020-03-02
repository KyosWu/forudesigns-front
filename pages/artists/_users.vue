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

      <!--个人中心主要区域-->
      <main class="artist-homepage__content">
        <!--用户头像-->
        <div class="avatar">
          <div class="avatar__inner-wrap">
            <div class="img-outer">
              <img src="../../assets/images/artists/_users/2.jpeg" alt="" class="img-inner">
            </div>
          </div>
        </div>
        <!--用户名 和 订阅按钮-->
        <div class="name-and-follow-button">
          <h3 class="name-and-follow-button__name">
            Disnimo
          </h3>
          <button class="following-big btn-01">
            <span>Follow</span>
          </button>
        </div>
        <!--用户链接-->
        <div class="links-and-summary">
          <ul class="links-and-summary__links">
            <!--facebook-->
            <li class="display: block;"><nuxt-link to=""><span class=""></span></nuxt-link></li>
            <!--instagram-->
            <li class="display: block;"><nuxt-link to=""><span class=""></span></nuxt-link></li>
            <!--twitter-->
            <li class="display: block;"><nuxt-link to=""><span class=""></span></nuxt-link></li>
            <!--pinterest-->
            <li class="display: block;"><nuxt-link to=""><span class=""></span></nuxt-link></li>
          </ul>
          <p class="links-and-summary__summary">
            Disnimo
          </p>
        </div>
        <!--用户tab 标签-->
        <ul class="tabs">
          <!--图片作品数量-->
          <li :class="{active: clickIndex === 0}" @click="Switch_Tabs_Func">
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
        <!--<el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="`Images" name="first">
            &lt;!&ndash;商品切换面板&ndash;&gt;
            <div style="display: flex">
              <Collapse/>
              <List/>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Products:13.5k" name="second">
            &lt;!&ndash;商品切换面板&ndash;&gt;
            <div style="display: flex">
              <Collapse/>
              <List/>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Followers:6" name="third">
            &lt;!&ndash;商品切换面板&ndash;&gt;
            <div style="display: flex">
              <Collapse/>
              <List/>
            </div>
          </el-tab-pane>
        </el-tabs>-->

        <!--商品切换面板-->
        <div style="display: flex">
          <Collapse/>
          <List/>
        </div>

      </main>
    </div>

  </main>

</template>

<script>
  import { mapGetters } from 'vuex'

  import List from '../../components/artists/_users/list'
  import Collapse from '../../components/artists/_users/list/Collapse'
    export default {
        name: "users_name",
      components: {
        List,
        Collapse
      },
      data () {
          return {
            image: 19,
            activeName: 'second',
            users: this.$route.params.users,
            clickIndex: 0
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
      },
    //  tabs 标签页切换
    methods: {
      // handleClick(tab, index) {
      //   console.log(index.toElement.innerText);
      // }
      Switch_Tabs_Func(index) {
        this.clickIndex = index
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
    .avatar {
      margin-top: -83px;
      background: #fff;
      position: relative;
      display: -webkit-box;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      width: 100%;
      height: 83px;
      border-radius: 4px 4px 0 0;
      .avatar__inner-wrap {
        width: 166px!important;
        height: 166px!important;
        padding: 8px;
        border-radius: 100%;
        margin-top: -83px;
        background: #fff;
        .img-outer {
          border-radius: 100%;
          .img-inner {
            border-radius: 100%;
            width: 150px;
            height: 150px;
          }
        }
      }
    }
    .name-and-follow-button {
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;
      -webkit-box-pack: center;
      justify-content: center;
      margin-bottom: 20px;
      .name-and-follow-button__name {
        margin: 15px 0 20px;
        text-transform: capitalize;
        color: #40354e;
        font-size: 18px;
        font-weight: 700;
      }
    }
    .links-and-summary {
      width: 100%;
      .links-and-summary__links {
        display: -webkit-box;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        padding-bottom: 21px;
        li {
          margin-left: 18px;
          font-size: 25px;
          a {
            color: inherit;
          }
        }
      }
      .links-and-summary__summary {
        margin-bottom: 44px;
        padding: 0 180px;
        text-align: center;
        color: #8c95a5;
        font-size: 14px;
      }
    }
    .tabs {
      padding: 0 400px;
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      justify-content: space-around;
      border-bottom: 1px solid #dfdfeb;
      li {
        font-size: 16px;
        /*font-weight: 700;*/
      }
    }
  }

  .active {
    border-bottom: 2px solid #4292e3;
    font-weight: 700;
  }
</style>


<style scoped>
  .artist-homepage >>> .el-tabs__nav-scroll {
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
</style>
