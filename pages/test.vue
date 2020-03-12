<template>
  <div>
    <div class="waterfall px-container clearfix" v-cloak>
      <ul class="px-waterfall left" v-for="(el,i) in newWaterfallData" :key="i">
        <li v-for="(item,index) in el" :key="index">
          <div style="position: relative;"  >
            <router-link to="">
              <img v-lazy="item.src" class="bg-img" alt="" v-loading="true">
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        newWaterfallData: '',
        waterfallDataNumber:'',
        list: [
          {id: 1, name: 'hah', src: require("../assets/images/artworks/content/1.jpeg"),width:320,height:456},
          {id: 2, name: 'hah', src: require("../assets/images/artworks/content/2.jpeg"),width:320,height:426},
          {id: 3, name: 'hah', src: require("../assets/images/artworks/content/3.jpeg"),width:320,height:303},
          {id: 4, name: 'hah', src: require("../assets/images/artworks/content/4.jpeg"),width:320,height:456},
          {id: 5, name: 'hah', src: require("../assets/images/artworks/content/1.jpeg"),width:320,height:456},
          {id: 6, name: 'hah', src: require("../assets/images/artworks/content/2.jpeg"),width:320,height:426},
          {id: 7, name: 'hah', src: require("../assets/images/artworks/content/3.jpeg"),width:320,height:303},
          {id: 8, name: 'hah', src: require("../assets/images/artworks/content/4.jpeg"),width:320,height:456},
        ]
      }
    },
    created() {
      let [ ...waterfallData ]  = this.list
      let [ ...newWaterfallData ]= [[],[],[],[]]
      waterfallData.forEach((el,i) => {
        console.log(i)
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
  }
</script>

<style lang="scss" scoped>
  .px-container {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
  }
  .clearfix:before,
  .clearfix:after {
    content: "";
    display: block;
    clear: both;
  }
  .clearfix {
    zoom: 1;
  }
  .left {
    float: left;
  }
  .color-fff {
    color:#fff;
  }
  .fh {
    overflow:hidden;
  }
  [v-cloak]{
    display: none!important;
  }
  .waterfall {
    margin-top: 20px;
  }
  .px-waterfall {
    width: calc(380px);
    &:nth-child(3n+2) {
      margin: 0 30px;
    }
    img.bg-img {
      border-radius: 8px;
    }
    h3 {
      text-overflow:ellipsis;
      white-space: nowrap;
      height:30px;
      font-weight:600;
      line-height:30px;
      letter-spacing:6px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      z-index: 999;
    }
    li{
      background: #fff;
      border-radius: 8px;
      margin-bottom: 20px;
    }
  }

  .px-hot-tag {
    position: absolute;
    top: 0;
    border-radius: 8px;
    width: 71px;
    height: 30px;
    img {
      border-radius: 8px 0 8px 0;
    }
  }
  .photo{
    position: relative;
    height: 25px;
    .keywordbox {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      height: 25px;
    }
  }
  .keyword {
    height: 25px;
    line-height: 25px;
    padding: 0 22px;
    text-align: center;
    .color-666-line {
      border-bottom:2px solid #666666;
    }
    .red-line {
      border-bottom:2px solid #F65050;
    }
  }
</style>
