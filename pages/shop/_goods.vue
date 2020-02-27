<template>
  <!--id 是艺术家id-->
  <div>
    <Breadcrumb :goods="title" />

    <div class="defalut-layout__main">
      <div class="commodity-main">
        <!--商品主页面区 轮播图-->
        <CommodityContent/>
        <!--商品特性描述-->
        <CommodityAbout/>
        <!--商品作者的其他作品-->
        <CommodityAuthor/>
      </div>
    </div>
  </div>

</template>

<script>
  import Breadcrumb from '../../components/shop/_goods/Breadcrumb'
  import CommodityContent from '../../components/shop/_goods/Commodity-content'
  import CommodityAbout from '../../components/shop/_goods/Commodity-about'
  import CommodityAuthor from '../../components/shop/_goods/Commodity-author'
    export default {
        name: "goods_name",
      data () {
          return {
            title: this.$route.params.goods
          }
      },
      components: {
        Breadcrumb,
        CommodityContent,
        CommodityAbout,
        CommodityAuthor
      },
      created () {
        //  需要判断是否是客户端
        if (process.client) {
          // 今入前创造title
          document.title = this.title
        }
      },
      destroyed() {
        if (process.client) {
          //  离开时销毁title
          document.title = ''
        }
      }
    }
</script>

<style lang="scss" scoped>
  .defalut-layout__main {
    padding-bottom: 20px;
    .commodity-main {
      position: relative;
      width: 1280px;
      margin: 0 auto;
      background: #fff;
    }
  }
</style>
