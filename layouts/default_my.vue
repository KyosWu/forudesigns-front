<template>
  <div class="full-screen-as-min-layout">
    <MyHeader/>
    <div class="default-layout__main">
      <div class="my">
        <!--menu菜单-->
        <div class="my__sidebar-wrap">
          <div class="sidebar" style="width: 189px;height: 350px;">
            <div class="sidebar__inner-wrap" style="width: 189px; top: 80px;">
              <div class="menu-list">
                <h2 class="menu-list__title">My Account</h2>
                <ul class="menu-list__list">
                  <!--一共13个li display none 为artist 才拥有 -->
<!--                  <li style="display: none;"><nuxt-link to="/my/dashboard">dashboard</nuxt-link></li>
                  <li style="display: none;"><nuxt-link to="/my/wallet">My Wallet</nuxt-link></li>
                  <li style="display: none;"><nuxt-link to="/my/images">My Images</nuxt-link></li>
                  <li style="display: none;"><nuxt-link to="/my/products">My Products</nuxt-link></li>
                  <li style="display: none;"><nuxt-link to="/my/orders">My Orders</nuxt-link></li>
                  <li><nuxt-link to="/my">My Profile</nuxt-link></li>
                  <li><nuxt-link to="/my/viewed">My Viewed</nuxt-link></li>
                  <li><nuxt-link to="/my/collections">My Collection</nuxt-link></li>
                  <li><nuxt-link to="/my/orders">My Orders</nuxt-link></li>
                  <li style="display: none"><nuxt-link to="/my/homepage">Artist Homepage</nuxt-link></li>
                  <li><nuxt-link to="/my/security">Security</nuxt-link></li>
                  <li><nuxt-link to="/my/message">Notification Center</nuxt-link></li>
                  <li><nuxt-link to="/my/setting">Notification Settings</nuxt-link></li>-->
                  <li  v-for="(item, index) in list" :key="index"
                       @click="chooseitem(index)">
                    <nuxt-link :to="item.to"
                               class="all"
                               :class="{active: chooseindex === index}">
                      {{item.name}}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!--主面板-->
        <nuxt></nuxt>

      </div>
    </div>

    <MyFooter/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import MyHeader from '../components/public/header/Index.vue'
  import MyFooter from '../components/public/footer/Index.vue'
  export default {
    // 中间件测试
    middleware: 'test',
    data () {
      return {
        list: [
          {to: '/my', name: 'My Profile'},
          {to: '/my/viewed', name: 'My Viewed'},
          {to: '/my/collections', name: 'My Collection'},
          {to: '/my/orders', name: 'My Orders'},
          {to: '/my/security', name: 'Security'},
          {to: '/my/message', name: 'Notification Center'},
          {to: '/my/setting', name: 'Notification Settings'},
        ],
        chooseindex: 0
      }
    },
    computed: {
      ...mapGetters([
        'isModelShow'
      ]),
    },
    components:{
      MyHeader,
      MyFooter
    },
    methods: {
      chooseitem (index) {
        this.chooseindex = index
      }
    }
  }
</script>

<style lang="scss">
  .full-screen-as-min-layout {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    min-height: 100vh;
  }
  .the-header+div, .the-header+main {
    margin-top: 60px!important;
  }

  .my {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 1280px;
    margin: 0 auto;
    padding-top: 20px;
    /*menu菜单*/
    .my__sidebar-wrap {
      position: relative;
      width: 15%;
      margin-right: 20px;
      .sidebar {
        position: fixed;
        width: 100%;
        -webkit-transition: all .1s ease-in-out;
        transition: all .1s ease-in-out;
        .menu-list {
          display: -webkit-box;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          flex-direction: column;
          color: #40354e;
          .menu-list__title {
            margin: 0 0 24px;
            font-size: 18px;
            font-weight: 700;
          }
          .menu-list__list {
            font-size: 14px;
            li a {
              display: block;
              margin-bottom: 23px;
              color: #40354e;
            }
          }
        }
      }
    }
  }

  .active {
    color: #4292e3!important;
    font-weight: 700!important;
  }
  .all:hover {
    color: #4292e3!important;
    font-weight: 700!important;
  }
</style>
