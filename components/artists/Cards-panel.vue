<template>
    <div class="cards-panel">
      <h3 class="cards-panel__title">
        Recently viewed
      </h3>
      <div class="cards-panel__inner-wrap">
        swiper 组件
      </div>
    </div>
</template>

<script>
    export default {
        name: "Cards-panel"
    }
</script>

<style lang="scss" scoped>
  .cards-panel {
    width: 100%;
    margin: 0 auto!important;
    padding: 40px 0 41px;
    .cards-panel__title {
      display: block;
      width: 100%;
      margin-bottom: 24px;
      text-align: left;
      text-transform: capitalize;
      color: #40354e;
      font-size: 20px;
      font-weight: 700;
    }
  }
</style>
