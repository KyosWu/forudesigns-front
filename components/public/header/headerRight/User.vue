<template>
  <div class="user-dropdown" style="display: none">
    <div class="base-popover__target">
      <a href="" class="user-dropdown__avatar">
        <div>
          <img src="" alt="">
        </div>
      </a>
      <span></span>
    </div>
    <div class="base-popover__content" style="display: none">
      <div class="base-popover__content__loading">
        <i></i>
      </div>
      <div class="user-dropdown__popover">
        <div class="left-product-list">
          <div class="base-product-list">
            <h3 class="base-product-list__title">
              Your Collections
            </h3>
            <ul class="base-product-list__items-wrap"></ul>
          </div>
          <div class="base-product-list">
            <h3 class="base-product-list__title">
              Recently viewed
            </h3>
            <ul class="base-product-list__items-wrap"></ul>
          </div>
        </div>
        <div class="right-menu">
          <div class="base-menus base-menu">
            <h3 class="base-menus__title">
              My Account
            </h3>
            <div class="base-menus__inner-wrap">
              <ul>
                <li class="base-menus__item" style="display: none">
                  <a href="">Dashboard</a>
                </li>
                <li class="base-menus__item" style="display: none">
                  <a href="">My Wallet</a>
                </li>
                <li class="base-menus__item" style="display: none">
                  <a href="">
                    My Images
                  </a>
                </li>
                <li class="base-menus__item" style="display: none">
                  <a href="">
                    My Products
                  </a>
                </li>
                <li class="base-menus__item" style="display: none">
                  <a href="">
                    My Orders
                  </a>
                </li>
                <li class="base-menus__item" style="display: none">
                  <a href="">
                    My Profile
                  </a>
                </li>
                <li class="base-menus__item" style="display: none">
                  <a href="">
                    My Viewed
                  </a>
                </li>
                <li class="base-menus__item" style="display: none">
                  <a href="">
                    My Collection
                  </a>
                </li>
                <li class="base-menus__item" style="display: none">
                  <a href="">
                    My Orders
                  </a>
                </li>
                <li class="base-menus__item" style="display: none">
                  <a href="">
                    Artist Homepage
                  </a>
                </li>

                <li class="base-menus__item" style="display: none">
                  <a href="">
                    Security
                  </a>
                </li>
                <li class="base-menus__item" style="display: none">
                  <a href="">
                    Notification Center
                  </a>
                </li>
                <li class="base-menus__item" style="display: none">
                  <a href="">
                    Notification Settings
                  </a>
                </li>
              </ul>
              <span class="base-menus__bottom-menu">
                    Log Out
                  </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "User"
    }
</script>

<style scoped>

</style>
