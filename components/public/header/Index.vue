<template>
  <header class="the-header">
    <div class="the-header__container">
      <Nav/>
      <Search/>
      <HeaderRight/>
    </div>
  </header>

</template>

<script>
  import Nav from './HeaderLeft'
  import Search from './HeaderCenter'
  import HeaderRight from './HeaderRight'
    export default {
      name: "headers",
      components: {
        Nav,
        Search,
        HeaderRight
      }
    }
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/public/header/index.scss";
</style>
