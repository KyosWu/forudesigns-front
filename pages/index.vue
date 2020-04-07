<template>
  <main class="defalut-layout__main">
    <div class="home-wrapper clear-both">
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
import { mapGetters } from 'vuex'
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
  },
  computed: {
    ...mapGetters([
      'Index_Head_Title'
    ])
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

<style lang="scss">
  .defalut-layout__main {
    padding-bottom: 20px;
  }
</style>
