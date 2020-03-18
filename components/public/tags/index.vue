<template>
  <div class="tags-wrap">
    <div class="tags first-tags">
      <swiper :options="swiperOption">

        <swiper-slide class="swiper-slide" v-for="(item,index) in list" :key="index">
          <div class="tag" v-for="(item2,index) in item.list1" :key="index">
            <ul class="btn-03 btn"
                @click="choose_btn_func(index)"
                :class="{active_btn: chooseindex === index}">
                <li>
                  <span class="tag_name">{{item2.name}}</span>
                  <i :class="[{'el-icon-close': chooseindex === index},{'animated flipInX':  chooseindex === index}]"
                     style="margin-left: 7px"
                  @click.stop="cancel_choose_btn_func"></i>
                </li>
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
    name: "index",
    data(){
      return {
        chooseindex: '',
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
    },
    methods: {
      //选中btn
      choose_btn_func (index) {
        this.chooseindex = index
      },
      //取消选中btn
      cancel_choose_btn_func () {
        this.chooseindex = -1
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

  /*每个btn tag标签*/
  .tag {
    display: inline-block;
    margin: 4px;
    .btn {
      border-radius: 2px;
      background: #f5f5f5;
      .tag-name {
        cursor: pointer;
      }
    }
  }
  /*鼠标经过*/
  .btn:hover {
    color: white;
    background: #1a68e3;
    cursor: pointer;
  }
  /*选中 btn 激活*/
  .active_btn {
    color: white!important;
    background: #4292e3!important;
  }
  /*swiper 左右箭头*/
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

<style scoped>
  .tags-wrap >>> .swiper-container {
    margin-left: 20px;
    margin-right: 20px;
  }
</style>
