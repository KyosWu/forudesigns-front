<template>
  <div class="base-popover__content"
       @mouseenter="enter_content_func"
       @mouseleave="leave_content_func">
    <div class="base-popover__content__loading" style="display: none">
      <i></i>
    </div>
    <!--主面板-->
    <div class="user-dropdown__popover">
      <div class="left-product-list">
        <!--我的收藏-->
        <div class="base-product-list" style="display: none">
          <h3 class="base-product-list__title">
            Your Collections
          </h3>
          <ul class="base-product-list__items-wrap"></ul>
        </div>
        <!--我的最近浏览-->
        <div class="base-product-list" style="display: none">
          <h3 class="base-product-list__title">
            Recently viewed
          </h3>
          <ul class="base-product-list__items-wrap"></ul>
        </div>
      </div>
      <!--主页菜单-->
      <div class="right-menu">
        <div class="base-menus base-menu">
          <h3 class="base-menus__title">
            My Account
          </h3>
          <div class="base-menus__inner-wrap">
            <ul>
              <li class="base-menus__item" v-for="(item, index) in routeList" :key="index">
                <nuxt-link :to="item.to">
                  {{item.name}}
                </nuxt-link>
              </li>
            </ul>
            <div class="base-menus__bottom-menu">
              Log Out
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
    export default {
        name: "User",
      data () {
          return {
            routeList: [
              {name: 'Dashboard', to: '/dashboard'},
              {name: 'My Wallet', to: '/wallet'},
              {name: 'My Images', to: '/images'},
              {name: 'My Products', to: '/products'},
              {name: 'My Profile', to: '/my'},
              {name: 'My Viewed', to: '/my/viewed'},
              {name: 'My Collection', to: '/my/collections'},
              {name: 'My Orders', to: '/my/orders'},
              {name: 'Artist Homepage', to: '/my/artist_homepage'},
              {name: 'Security', to: '/my/security'},
              {name: 'Notification Center', to: '/my/message'},
              {name: 'Notification Settings', to: '/my/setting'}
            ]
          }
      },
      methods: {
        ...mapActions([
          'set_content',
          'set_user'
        ]),
        handleClick(tab, event) {
          console.log(tab, event);
        },
        enter_content_func () {
          this.set_user(true)
          this.set_content(true)
        },
        // 鼠标离开content
        leave_content_func () {
          this.set_user(false)
          this.set_content(false)
        },
      }
    }
</script>

<style lang="scss" scoped>
  .base-popover__content {
    position: absolute;
    top: 100%;
    margin-top: 10px;
    right: 0;
    left: auto;
    border: 1px solid #dfdfeb;
    border-radius: 4px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
    background-color: white;
  }
  .user-dropdown__popover {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 25px 19px;
    .left-product-list {
      .base-product-list {
        margin-bottom: 29px;
        padding-right: 50px;
        .base-product-list__title {
          margin: 0 0 10px;
          white-space: nowrap;
          text-transform: uppercase;
          color: #40354e;
          font-size: 16px;
          font-weight: 700;
        }
        .base-product-list__items-wrap {
          display: -webkit-box;
          display: flex;
        }
      }
    }
    .right-menu {
      display: -webkit-box;
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      .base-menus  {
        display: -webkit-box;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        align-content: flex-start;
        .base-menus__title {
          margin: 0 25px 10px 0;
          white-space: nowrap;
          text-transform: capitalize;
          color: #40354e;
          font-size: 16px;
          font-weight: 700;
        }
        .base-menus__inner-wrap {
          -webkit-box-pack: justify;
          justify-content: space-between;
          height: 100%;
          min-height: 200px;
          .base-menus__item {
            margin-bottom: 8px;
            font-size: 14px;
            a {
              white-space: nowrap;
              color: #8c95a5;
            }
            a:hover {
              font-weight: bold;
              color: #40354e;
            }
          }
          .base-menus__bottom-menu {
            margin-top: 20px;
            cursor: pointer;
            color: #4292e3;
            font-size: 14px;
          }
        }
      }
    }
  }
</style>
