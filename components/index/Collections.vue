<template>
  <div class="collections" style="width: 1280px">
    <h2 class="collections-title">
      Collections
    </h2>
    <ul class="collections-content clear-both">
      <!--加style 保证不移动自适配-->
      <li v-for="(item,index) in categoryPri" :key="index" style="width: 310px;height:310px">
        <nuxt-link to="">
          <div class="img-warp">
            <div class="img-outer">
              <img v-lazy="item.category_image" alt="" class="img-inner" style="object-fit: cover;">
            </div>
            <div class="collection-name">
              {{item.name}}
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  export default {
    name: "collcollections-titleections",
    computed: {
      ...mapGetters([
        'categoryPri'
      ])
    },
    created () {
      this.getCat()
    },
    methods: {
      ...mapMutations([
        'SETCATPRIMARY'
      ]),
      ...mapActions([
        'getCatPrimary'
      ]),
      getCat () {
        this.getCatPrimary().then(res => {
          this.SETCATPRIMARY(res.data)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .collections {
    overflow: hidden;
    margin: 72px auto 0;
    background: #fff;
  }

  .collections-title {
    margin-bottom: 25px;
    text-align: center;
    text-transform: uppercase;
    color: #40354e;
    font-size: 45px;
    line-height: 45px;
  }

  .collections-content {
    width: 100%;
    /*解决一像素问题*/
    li:nth-child(4n) {
      margin-right: 0;
    }
    li {
      position: relative;
      float: left;
      overflow: hidden;
      width: 310px;
      height: 310px;
      margin-right: 13px;
      margin-bottom: 12px;
      cursor: pointer;
      .img-wrap {
        display: -webkit-box;
        /*display: flex;*/
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
    }
  }

  .collection-name {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    text-align: center;
    text-transform: uppercase;
    color: #40354e;
    font-size: 16px;
    font-weight: 700;
    line-height: 40px;
  }
</style>
