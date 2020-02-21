<template>
  <header class="the-header">
    <div class="the-header__container">
      <HeaderLeft/>
      <HeaderCenter/>
      <HeaderRight/>
    </div>
  </header>

</template>

<script>
  import HeaderLeft from './HeaderLeft'
  import HeaderCenter from './HeaderCenter'
  import HeaderRight from './HeaderRight'
    export default {
      name: "headers",
      components: {
        HeaderLeft,
        HeaderCenter,
        HeaderRight
      }
    }
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/public/header/index.scss";
</style>
