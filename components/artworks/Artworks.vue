<template>
  <div class="artworks">
    <div class="artworks-total-and-pagination">
      <div class="artworks-total">
        <p class="total-info">
          Results:
          <span>8888</span>
        </p>
      </div>
      <div class="list-style-wrap">
        <div class="list-style">
          <button class="multiple"></button>
          <button class="single"></button>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="waterfall">
        <waterfall :line-gap="200" :watch="list" style="height: 1910.52px; overflow: hidden;">
          <!-- each component is wrapped by a waterfall slot -->
          <waterfall-slot
            v-for="(item, index) in list"
            :width="item.width"
            :height="item.height"
            :order="index"
            :key="item.id"
          >
            {{item.name}}
            <!--
              your component
            -->
          </waterfall-slot>
        </waterfall>
      </div>
    </div>
  </div>
</template>

<script>
  import Waterfall from '../../node_modules/vue-waterfall/lib/waterfall'
  import WaterfallSlot from '../../node_modules/vue-waterfall/lib/waterfall-slot'
    export default {
        name: "Artworks",
      components: {
        'waterfall': Waterfall.waterfall,
        'waterfall-slot': Waterfall.waterfallSlot
      },
        data () {
          return {
            list: [
              {id: 1, name: 'hah',width: '30px',height:'60px'}
            ]
          }
        }
    }
</script>

<style lang="scss" scoped>
  .artworks {
    width: 1280px;
    min-height: 420px;
    margin: 0 auto;
  }
  .artworks-total-and-pagination {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-between;
    .artworks-total {
      .total-info {
        color: #40354e;
        font-size: 14px;
        font-weight: 700;
        line-height: 14px;
      }
    }
    .list-style-wrap {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      .list-style {
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        .multiple {
          margin-right: 5px;
          width: 25px;
          height: 25px;
          @include common_img_center_contain;
          background-image: url("../../assets/images/artworks/list/多行展开.svg");
        }
        .single {
          margin-right: 5px;
          width: 25px;
          height: 25px;
          @include common_img_center_contain;
          background-image: url("../../assets/images/artworks/list/单行展开2-未.svg");
        }
      }
    }
  }

  .content {
    .waterfall {
      width: 1280px;
      margin: 0 auto;
      -webkit-animation: show .5s linear;
      animation: show .5s linear;
    }
  }

</style>
