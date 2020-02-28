<template>
  <div class="tags-wrap">
    <div class="tags first-tags">
      <swiper :options="swiperOption">

        <swiper-slide class="swiper-slide" v-for="(item,index) in list" :key="index">
            <div class="tag" v-for="(item2,index) in item.list1" :key="index">
              <ul class="btn">
                <li class="tag_name">{{item2.name}}</li>
              </ul>
            </div>
        </swiper-slide>

      </swiper>

      <!-- 分页器 -->
      <!--<div class="swiper-pagination"  slot="pagination"></div>-->
      <!-- 左右箭头 -->
      <div class="swiper-button-prev" slot="button-prev">
        <i class="el-icon-caret-left pre"></i>
      </div>
      <div class="swiper-button-next" slot="button-next">
        <i class="el-icon-caret-right next"></i>
      </div>
      <!-- 如果需要滚动条 -->
      <!--<div class="swiper-scrollbar"></div>-->

    </div>
  </div>

</template>

<script>
    export default {
        name: "Tags",
        data(){
          return {
            list: [
              {
                list1: [
                  {name: 'haha'},
                  {name: 'haha'},
                  {name: 'haha'},
                  {name: 'haha'},
                  {name: 'haha'},
                  {name: 'haha'},
                  {name: 'haha'},
                  {name: 'haha'},
                  {name: 'haha'},
                  {name: 'dgdgdh'},
                  {name: '45'},
                  {name: 'ha56ha'},
                  {name: 'haha'},
                  {name: 'haha'},
                  {name: 'dgdgdh'},
                  {name: '45'},
                  {name: 'ha56ha'},
                  {name: 'ha56ha'},
                ],
              },
              {
                list1: [
                  {name: 'haha'},
                  {name: 'haha'},
                  {name: 'haha'},
                  {name: 'haha'},
                  {name: 'haha'},
                  {name: 'haha'},
                  {name: 'haha'},
                  {name: 'haha'},
                  {name: 'haha'},
                  {name: 'dgdgdh'},
                  {name: '45'},
                  {name: 'ha56ha'},
                  {name: 'haha'},
                  {name: 'haha'},
                  {name: 'dgdgdh'},
                  {name: '45'},
                  {name: 'ha56ha'},
                  {name: 'ha56ha'},
                ],
              }
            ],
            // 注意， swiper 定义的数值必须有对应，否则会报错
            swiperOption:{
              //显示分页
              // pagination: {
              //   el: '.swiper-pagination'
              // },
              //设置点击箭头
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              },
              // 如果需要滚动条
              // scrollbar: {
              //   el: '.swiper-scrollbar',
              // },
              //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
              // notNextTick: true,
              //设定初始化时slide的索引
              // initialSlide: 0,
              //滑动速度
              speed: 800,
              //滑动方向
              // direction: "horizontal",
              // 小手掌抓取滑动
              // grabCursor: true,
              // 自动轮播
              autoplay: false,
              // autoplay: {
              //   delay: 2000,
              //   stopOnLastSlide: false,
              //   //当用户滑动图片后继续自动轮播
              //   disableOnInteraction: false,
              // },
              // 循环模式
              loop: false
            }
          }
      }
    }
</script>

<style lang="scss" scoped>
  .tags-wrap {
    display: flex;
    -webkit-box-align: stretch;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    width: 1280px;
    max-width: 1280px;
    height: 58px;
    margin: 10px auto;
    background: #fff;
    .tags {
      display: flex;
      position: relative;
      width: 100%;
      height: 38px;
      margin: 10px 0;
      padding: 0 25px;
    }
  }

  .tag {
    display: inline-block;
    margin: 4px;
    .btn {
      border-radius: 2px;
      height: 30px;
      padding: 0 14px;
      text-align: center;
      text-transform: capitalize;
      color: #8c95a5;
      font-size: 14px;
      font-weight: 400;
      line-height: 28px;
      -webkit-transition: all .2s ease;
      transition: all .2s ease;
      .tag-name {
        cursor: pointer;
      }
    }
    .btn:active {
      color: white;
      background: #4292e3;
    }
  }

  .swiper-button-next, .swiper-button-prev {
    position: absolute;
    top: 23px;
    width: auto;
    height: auto;
    color: #bdbfc5;
    outline: none;
    background: none;
    font-size: 25px;
  }
  .next , .pre {
    color: #000;
  }
</style>
