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
      <div class="waterfall"  style="display: flex;flex-wrap: wrap">

        <div v-for="(el,i) in newWaterfallData" :key="i" style="width: 320px;">
          <div class="list-image" v-for="(item,index) in el" :key="index">
            <div class="img-outer" @click="ShowModel_ArtworkDetail_Func(item)">
              <img v-lazy="item.src" alt="" class="img-inner">
            </div>
            <div class="work-info">
              <span class="work-name">The gnomes visit paradise places on earth</span>
              <div class="work-designer">
                <nuxt-link to="">
                  Pepita Selles
                </nuxt-link>
              </div>
              <span class="toggle-collect-image-button collect"></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
    export default {
        name: "Artworks",
        data () {
          return {
            newWaterfallData: '',
            waterfallDataNumber:'',
            list: [
              {id: 1, name: 'hah', src: require("../../assets/images/artworks/content/1.jpeg"),width:320,height:456},
              {id: 2, name: 'hah', src: require("../../assets/images/artworks/content/2.jpeg"),width:320,height:426},
              {id: 3, name: 'hah', src: require("../../assets/images/artworks/content/3.jpeg"),width:320,height:303},
              {id: 4, name: 'hah', src: require("../../assets/images/artworks/content/4.jpeg"),width:320,height:456},
              {id: 5, name: 'hah', src: require("../../assets/images/artworks/content/5.jpeg"),width:320,height:456},
              {id: 6, name: 'hah', src: require("../../assets/images/artworks/content/6.png"),width:320,height:426},
              {id: 7, name: 'hah', src: require("../../assets/images/artworks/content/7.jpeg"),width:320,height:303},
              {id: 8, name: 'hah', src: require("../../assets/images/artworks/content/8.jpeg"),width:320,height:456},
            ]
          }
        },
      computed: {
        ...mapGetters([
          'isShowModel'
        ]),
      },
      created() {
        //  瀑布流组件
        let [ ...waterfallData ]  = this.list
        let [ ...newWaterfallData ]= [[],[],[],[]]
        waterfallData.forEach((el,i) => {
          // console.log(i)
          switch( i%4 ) {
            case 0 : newWaterfallData[0].push(el)
              break
            case 1: newWaterfallData[1].push(el)
              break
            case 2: newWaterfallData[2].push(el)
              break
            case 3: newWaterfallData[3].push(el)
              break
          }
        });
        this.newWaterfallData = newWaterfallData
      },
      methods: {
          ...mapActions([
           'ShowModel'
          ]),
        //  显示艺术作者详细内容
        ShowModel_ArtworkDetail_Func (index) {
            // 根据点击的图片ID值，向后端发送那个请求，得到的数据，存储到model渲染
            console.log(index)
          this.ShowModel(!this.isShowModel)
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

  .list-image {
    /*position: absolute;*/
    top: 0;
    overflow: hidden;
    width: 310px;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;
    box-shadow: 0 0 11.44px 1.56px rgba(0,0,70,.05);
    .img-outer {
      width: 290px;
      margin: 10px;
      cursor: pointer;
      border-radius: 4px;
      .img-inner {
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }
    }
    .work-info {
      position: relative;
      height: 55px;
      padding: 0 13px 0 8px;
      text-align: left;
      .work-name {
        display: block;
        overflow: hidden;
        width: 195px;
        white-space: nowrap;
        text-transform: capitalize;
        text-overflow: ellipsis;
        color: #40354e;
        font-size: 14px;
      }
      .work-designer {
        cursor: pointer;
        text-decoration: underline;
        text-transform: capitalize;
        color: #8c95a5;
        font-size: 12px;
      }
      .toggle-collect-image-button {
        display: -webkit-inline-box;
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        cursor: pointer;
        color: #8c95a5;
        border-radius: 100%;
        background: #fff;
        font-size: 18px;
      }
      .collect {
        position: absolute;
        top: 5px;
        right: 13px;
        @include common_img_center-contain;
        width: 20px;
        height: 20px;
        background-image: url("../../assets/images/artworks/content/收藏.svg");
      }
    }
  }
</style>
