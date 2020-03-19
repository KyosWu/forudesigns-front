<template>
  <div class="commodity-content">
    <div class="commodity-design clear-both">
      <!--图片区域-->
      <div class="design-show">
        <!--大图展示-->
        <div class="zooming-img-wrap" style="width: 633px; height: 633px;">
          <div class="img-outer"
               v-for="(item,index) in bigList" :key="index"
               :class="[{normal:isNormal},{Large:!isNormal}]"
               @click="enlarge"
               @mouseenter="enter_pic"
               @mousemove="move_pic($event)"
               @mouseleave="leave_pic">
            <img :src="item.src" alt="" class="img-inner img-zooming">
          </div>
        </div>
        <!--小图选择-->
        <div class="design-choose">
          <div class="choose-img-wrap" @click="switch_pic_func(item, index)"
               :class="{active: clickIndex === index}"
               v-for="(item, index) in list" :key="index">
            <div class="img-outer" style="width: 100%; height: 100%;">
              <img :src="item.src" alt="" class="img-inner" style="width: 84px; height: 84px;">
            </div>
          </div>

        </div>
        <!--分享功能-->
        <div class="commodity-share">
          <!--收藏-->
          <div class="collect com" @click="collect"></div>
          <!--点赞-->
          <div class="thumbs-up com"></div>
          <!--转发-->
          <div class="forward com"></div>
        </div>
      </div>
      <!--价格数量区域-->
      <div class="product-options-tools">
        <!--商品头部信息-->
        <div class="commodity-info">
          <!--商品名称-->
          <span class="commodity-name">
            Photo Peinture Acrylic Bleu/Doré Women’s Mini Skirt
          </span>
          <!--商品价格-->
          <div class="commodity-price">
            <p class="price clear-both">
              <span class="integer">$20.99</span>
            </p>
          </div>
        </div>
        <!--购买商品选择-->
        <div class="commodity-choose">
          <!--颜色选择-->
          <div class="commodity-size">
            <div class="size-title">
              Color
              <div class="size-guide">
                <i class="el-icon-warning-outline"></i>
              </div>
            </div>
            <el-select v-model="value" placeholder="">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <!--尺寸选择-->
          <div class="commodity-size">
            <div class="size-title">
              Size
              <div class="size-guide">
                <i class="el-icon-warning-outline"></i>
              </div>
            </div>
            <el-select v-model="value" placeholder="">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <!--数量选择-->
          <div class="commodity-quantity">
            <div class="quantity-title">Quantity</div>
            <div class="quantity">
              <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            </div>
          </div>
          <!--确认添加按钮-->
          <div class="add-cart-button clear-both">
            <button class="add-to-cart btn-01">
              Add To Cart
            </button>
            <button class="redesign btn-02">
              Redesign
            </button>
          </div>
          <!--商品标签-->
          <div class="commodity-tags">
            <span>
              <span class="title">Tag:</span>
              <!--循环遍历的标签-->
              <span class="tag">Illustration</span>
              <span class="comma">,</span>
            </span>
          </div>
          <!--商品描述-->
          <div class="commodity-describe">
            <p>
              <span>Artist Description: </span>
              black
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Commodity-content",
      data () {
          return {
            isNormal: true,
            list: [
              {id: 1, src: require('../../../assets/images/shop/_goods/111.png')},
              {id: 2, src: require('../../../assets/images/shop/_goods/2.jpg')},
              {id: 3, src: require('../../../assets/images/shop/_goods/3.jpg')},
              {id: 4, src: require('../../../assets/images/shop/_goods/4.jpg')},
              ],
            bigList: [],
            // 用来绑定小图class样式
            clickIndex: 0,
            // 购买数量计数器
            num: 1,
            // options 和 values 选择器测试
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            // 设置默认值
            value: '选项1',
          //  鼠标移动x y 值
            x: '',
            y: '',
            // 用来判断已点击查看大图
            isEnlarge: false
          }
      },
      created () {
        //  第一次进入时push 一条数据 作为默认展示图
        this.bigList.push(this.list[0])
      },
      destroyed () {
        //  离开时销毁
        this.bigList = []
      },
      methods: {
        //  点击小图切换大图图片
        switch_pic_func (item, index) {
          this.clickIndex = index
          // console.log(this.clickIndex)
          if(this.bigList.length === 0){
            this.bigList.push(item)
          } else {
            this.bigList = []
            this.bigList.push(item)
          }
        },

      //  收藏 测试
        collect () {
          console.log('收藏了')
        },
      //  购买数量
        handleChange (value) {
          console.log(value);
        },
        // 获取鼠标移动x, y 值
        mouseMoveXY(e) {
          let evt={
            //window.event和事件参数对象e的兼容
            getEvent:function (evt) {
              return window.event||evt;
            },
            //可视区域的横坐标的兼容代码
            getClientX:function (evt) {
              return this.getEvent(evt).clientX;
            },
            //可视区域的纵坐标的兼容代码
            getClientY:function (evt) {
              return this.getEvent(evt).clientY;
            },
            //页面向左卷曲出去的横坐标
            getScrollLeft:function () {
              return window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft||0;
            },
            //页面向上卷曲出去的纵坐标
            getScrollTop:function () {
              return window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0;
            },
            //相对于页面的横坐标(pageX或者是clientX+scrollLeft)
            getPageX:function (evt) {
              return this.getEvent(evt).pageX? this.getEvent(evt).pageX:this.getClientX(evt)+this.getScrollLeft();
            },
            //相对于页面的纵坐标(pageY或者是clientY+scrollTop)
            getPageY:function (evt) {
              return this.getEvent(evt).pageY?this.getEvent(evt).pageY:this.getClientY(evt)+this.getScrollTop();
            }
          }
          // 鼠标混动值除2
          this.x = -evt.getPageX(e)/2+ 250 + "px"
          this.y = -evt.getPageY(e)/2+ 250 + "px"
        },
        // 重置需要放大的图片的值
        resetImgZooming () {
          let imgZoomingValue = document.getElementsByClassName('img-inner img-zooming')[0]
          if (process.client) {
            imgZoomingValue.style.margin= 0
          }
        },
        // 赋值需要放大的图片
        setImgZooming (e) {
          this.mouseMoveXY(e)
          let imgZoomingValue = document.getElementsByClassName('img-inner img-zooming')[0]
          if (process.client) {
            imgZoomingValue.style.marginLeft= this.x
            imgZoomingValue.style.marginTop= this.y
          }
        },
      //  放大大图
        enlarge () {
          this.isNormal = !this.isNormal
          if(this.isNormal === true){
            this.resetImgZooming()
          }
          this.isEnlarge = !this.isEnlarge
        },
        // 鼠标进入
        enter_pic () {
          if(this.isEnlarge === true){
            this.isNormal = false
          }
        },
        // 鼠标离开
        leave_pic () {
          this.isNormal = true
          this.resetImgZooming()
          this.isEnlarge = false
        },
      //  鼠标移动
        move_pic (e) {
          if(this.isNormal === false){
            this.mouseMoveXY(e)
            this.setImgZooming(e)
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
  .commodity-content{
    width: 100%;
    min-width: 1000px;
    .commodity-design {
      width: 1280px;
      margin: 0 auto;
      padding-top: 26px;
    }
  }

  .design-show {
    float: left;
    position: relative;
    .zooming-img-wrap {
      position: relative;
      overflow: hidden;
      /*.zooming-img {
        width: 100%;
        height: 100%;
        margin: auto;
        cursor: -webkit-zoom-in;
        cursor: zoom-in;
        vertical-align: top;
      }*/
      .img-outer {
        cursor: -webkit-zoom-in;
        cursor: zoom-in;
        display: -webkit-box;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        .img-inner {
          width: 100%;
          height: 100%;
          vertical-align: middle;
        }
      }
    }
    .design-choose {
      display: -webkit-box;
      display: flex;
      flex-wrap: wrap;
      width: 660px;
      margin-top: 18px;
      .choose-img-wrap {
        display: -webkit-inline-box;
        display: inline-flex;
        -webkit-box-pack: center;
        justify-content: center;
        width: 90px;
        height: 90px;
        margin-right: 20px;
        margin-bottom: 20px;
        cursor: pointer;
        -webkit-transition: all .05s linear;
        transition: all .05s linear;
        border: 1px solid #dfdfeb;
        background: #fff;
        .img-outer {
          display: -webkit-box;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          .image__inner {
            width: 100%;
            height: 100%;
            vertical-align: middle;
          }
        }
      }
    }
    .commodity-share {
      position: absolute;
      top: 0;
      left: 2px;
      display: flex;
      .com {
        width: 30px;
        height: 30px;
        margin: 10px;
        @include common_img_center_contain;
      }
      .thumbs-up {
        background-image: url("../../../assets/images/public/tools/点赞-大拇指-1.svg");
      }
      .collect {
        background-image: url("../../../assets/images/public/tools/收藏-书签-1.svg");
      }
      .forward {
        background-image: url("../../../assets/images/public/tools/转发.svg");
      }
    }
  }
  .product-options-tools {
    float: right;
    box-sizing: border-box;
    width: 500px;
    .commodity-info {
      position: relative;
      width: 100%;
      .commodity-name {
        display: inline-block;
        width: 100%;
        margin-bottom: 21px;
        text-transform: capitalize;
        word-wrap: break-word;
        color: #40354e;
        font-size: 22px;
        font-weight: 700;
        line-height: 25px;
      }
      .commodity-price {
        width: 100%;
        border: 1px solid #dfdfeb;
        border-radius: 4px;
        background: #fff;
        .price {
          display: block;
          height: 64px;
          margin: 0;
          padding: 13px 0 15px 15px;
          color: #40354e;
          font-weight: 700;
          line-height: 64px;
          .integer {
            float: left;
            font-size: 40px;
            line-height: 47px;
          }
        }
      }
    }
    .commodity-choose {
      width: 100%;
      .commodity-size {
        display: -webkit-box;
        display: flex;
        width: 100%;
        margin-top: 22px;
        border: 1px solid #dfdfeb;
        border-radius: 4px;
        .size-title {
          position: relative;
          display: -webkit-inline-box;
          display: inline-flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          width: 95px;
          height: 50px;
          text-align: center;
          text-transform: capitalize;
          color: #8c95a5;
          border-right: 1px solid #dfdfeb;
          outline: none;
          font-size: 16px;
          line-height: 50px;
          .size-guide {
            display: inline-block;
            margin-left: 5px;
            cursor: pointer;
            color: #8c95a5;
            outline: none;
            font-size: 22px;
          }
        }
      }
      .commodity-quantity {
        display: -webkit-box;
        display: flex;
        width: 100%;
        margin-top: 22px;
        border: 1px solid #dfdfeb;
        border-radius: 4px;
        .quantity-title {
          position: relative;
          display: -webkit-inline-box;
          display: inline-flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          width: 95px;
          height: 50px;
          text-align: center;
          text-transform: capitalize;
          color: #8c95a5;
          border-right: 1px solid #dfdfeb;
          outline: none;
          font-size: 16px;
          line-height: 50px;
        }
        .quantity {
          width: 403px;
          height: 50px;
          border: none;
          border-radius: 0;
        }
      }
      .add-cart-button {
        width: 100%;
        margin-top: 20px;
        .add-to-cart, .redesign {
          width: 100%;
          height: 50px;
          font-size: 18px;
        }
      }
      .commodity-tags {
        width: 100%;
        margin-top: 29px;
        word-break: break-all;
        font-size: 14px;
        .title {
          color: #40354e;
        }
        .tag {
          margin-left: 7px;
          text-transform: capitalize;
          color: #8c95a5;
          line-height: 25px;
        }
        .comma {
          color: #8c95a5;
        }
      }
      .commodity-describe {
        width: 100%;
        margin-top: 21px;
        font-size: 14px;
        p {
          max-width: 100%;
          word-break: break-all;
          color: #8c95a5;
          line-height: 22px;
          span {
            color: #40354e;
          }
        }
      }
    }
  }
  .active {
    border: 3px solid #40354e!important;
  }
</style>


<style scoped>
  /*ele 选择框*/
  .commodity-content >>> .el-select {
    width: 403px;
    height: 50px;
    text-align: center;
    text-transform: capitalize;
    color: #8c95a5!important;
    border: none!important;
    border-radius: 4px;
    background: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 50px;
  }
  /*ele 输入框文字*/
  .commodity-content >>> .el-input__inner {
    padding-right: 0.15625rem;
    text-align: center;
    height: 100%;
  }
  /*ele 计数器*/
  .commodity-content >>> .el-input-number {
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
  }
  .commodity-content >>> .el-input {
    display: block;
    height: 100%;
  }

  /*增加和减少按钮*/
  .commodity-content >>> .el-input-number__increase {
    margin: -1px;
  }
  .commodity-content >>> .el-input-number__decrease {
    margin: -1px;
  }
</style>

<style>
  /*ele 输入框显示的面板文字*/
  .el-select-dropdown__list {
    list-style: none;
    padding: 0.03125rem 0;
    margin: 0;
    box-sizing: border-box;
    text-align: center;
  }


  .normal {
    max-width: 633px;
    max-height: 633px;
    width: 100%;
    height: 100%;
    margin: auto;
  }
  .Large {
    max-width: 1000px;
    max-height: 1000px;
    width: 1000px;
    height: 1000px;
    transform: scale(1.5);
    /*margin-left: -183.5px;*/
    /*margin-top: -183.5px;*/
  }
</style>
