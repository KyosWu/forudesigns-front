<template>
  <main class="defalut-layout__main">
    <div>
      <!--首页轮播图区域-->
      <Carousel/>
      <!--collections-->
      <Collections/>
      <!--feed-->
      <Feed/>
      <!--design-wrapper-->
      <Hotproducts/>
    </div>
  </main>
</template>

<script>
import Carousel from '../components/index/Carousel'
import Collections from '../components/index/Collections'
import Feed from '../components/index/Feed'
import Hotproducts from '../components/index/Hotproducts'

export default {
  components: {
    Carousel,
    Collections,
    Feed,
    Hotproducts
  }
}
</script>

<style lang="scss">
  .defalut-layout__main {
    padding-bottom: 20px;
  }
</style>
