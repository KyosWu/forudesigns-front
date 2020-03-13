<template>
  <div class="default-layout__main">
    <div class="my">
      <!--menu菜单-->
      <div class="my__sidebar-wrap">
        <div class="sidebar" style="height: 350px;">
          <div class="sidebar__inner-wrap" style="width: 189px; top: auto;">
            <div class="menu-list">
              <h2 class="menu-list__title">My Account</h2>
              <ul class="menu-list__list">
                <!--一共13个li display none 为artist 才拥有 -->
                <li style="display: none;"><nuxt-link to="/my/dashboard">dashboard</nuxt-link></li>
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
                <li><nuxt-link to="/my/setting">Notification Settings</nuxt-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--主面板-->
      <div class="my__right">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "My"
  }
</script>

<style lang="scss" scoped>
  .default-layout__main {
    padding-bottom: 20px;
    .my {
      display: -webkit-box;
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      width: 1280px;
      margin: 0 auto;
      padding-top: 20px;
    }
  }
</style>
