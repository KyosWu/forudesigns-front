<template>
  <div class="feed" style="width: 1280px;">
    <h2 class="feed-title">Featured Artists</h2>
    <div class="feed-line">
      <el-carousel direction="vertical" :autoplay="false"
                   style="height: 680px">
        <el-carousel-item v-for="(item,index) in list" :key="index" class="carousel-wrapper" style="height: 680px;">
          <ul v-for="(item1,j) in item.all" :key="j" style="width: 308.75px;">
              <li v-for="(item2, k) in item1.all2" :key="k"
                  @mouseenter="enter_feature_func(j)"
                  @mouseleave="leave_feature_func"
                  style="width: 308.75px;">
                <div class="img-list" v-for="(item3,f) in item2.conner" :key="f" style="width: 152px; height: 152px;">
                  <div style="width: 98px; height: 98px;">
                    <img v-lazy="item3.src" alt="" class="img_inner">
                  </div>
                </div>
                <div class="head-img" v-for="(item4,z) in item2.center" :key="z" style="width: 70px; height: 70px;">
                  <div class="img_avatar">
                    <img v-lazy="item4.src" alt="" class="img_inner">
                  </div>
                </div>
                <div class="bg_hover" v-if="chooseitem === j">
                  <nuxt-link to="">
                    <button class="btn-01 get-it-now"
                            style="width: 170px;height: 48px;font-size: 20px;">
                      Get it now
                    </button>
                  </nuxt-link>
                </div>
              </li>
            </ul>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: "feed",
  data () {
    return {
      list: [
        {
          all: [
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]}
          ],
        },
        {
          all: [
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
          ],
        },
        {
          all: [
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
            {all2: [
                {conner: [
                    {src: require("../../assets/images/index/feed/1.jpeg")},
                    {src: require("../../assets/images/index/feed/2.jpeg")},
                    {src: require("../../assets/images/index/feed/3.jpeg")},
                    {src: require("../../assets/images/index/feed/4.jpeg")}
                  ],
                  center: [
                    {src: require("../../assets/images/index/feed/5.jpeg")},
                  ]}
              ]},
          ],
        }
      ],
      chooseitem: ''
    }
  },
  computed: {
    ...mapGetters([
      'featured'
    ])
  },
  created () {
    this.getData()
  },
  methods: {
      ...mapMutations([
        'FEATURED'
      ]),
    ...mapActions([
      'getArtistFeatured'
    ]),
    // 获取数据列表
    getData() {
      this.getArtistFeatured().then(res => {
        // console.log(res.data)
        this.FEATURED(res.data)
      })
    },
    //  进入每个li
    enter_feature_func (index) {
      this.chooseitem = index
    },
  //  离开每个li
    leave_feature_func () {
      this.chooseitem = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .feed {
    width: 1280px;
    margin: 72px auto 25px;
    .feed-title {
      width: 100%;
      margin: 0 auto;
      text-align: center;
      text-transform: uppercase;
      color: #40354e;
      font-size: 45px;
      line-height: 45px;
    }
    .feed-line {
      width: 100%;
      .carousel-wrapper {
        width: inherit;
        flex-wrap: wrap;
        display: flex;
        ul:nth-child(4n) {
          margin-right: 0;
        }
        ul {
          order: -15;
          margin-top: 15px;
          width: 308.75px;
          margin-right: 15px;
          flex-wrap: wrap;
          li {
            position: relative;
            display: -webkit-box;
            display: flex;
            align-content: space-between;
            flex-basis: 310px;
            flex-wrap: wrap;
            -webkit-box-pack: justify;
            justify-content: space-between;
            width: 100%;
            height: 100%;
            .img-list {
              display: -webkit-box;
              display: flex;
              -webkit-box-align: center;
              align-items: center;
              -webkit-box-pack: center;
              justify-content: center;
              background: url("../../assets/images/index/feed/artists-artworks-bg.png") 50%, no-repeat;
              .img_inner {
                width: 100%;
                height: 100%;
                vertical-align: middle;
              }
            }
            .head-img {
              position: absolute;
              top: 50%;
              left: 50%;
              overflow: hidden;
              padding: 5px;
              -webkit-transform: translate(-50%,-50%);
              transform: translate(-50%,-50%);
              border-radius: 100%;
              background: #fff;
              box-shadow: 0 0 50px rgba(0,0,0,.4);
              .img_avatar {
                display: block;
                overflow: hidden;
                max-width: 100%;
                max-height: 100%;
                border-radius: 100%;
                .img_inner {
                  width: 100%;
                  height: 100%;
                  vertical-align: middle;
                }
              }
            }
            .bg_hover {
              position: absolute;
              z-index: 999;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0,0,0,.4);
              .get-it-now {
                position: absolute;
                top: 50%;
                left: 50%;
                cursor: pointer;
                -webkit-transform: translate(-50%,-50%);
                transform: translate(-50%,-50%);
                color: #fff;
                background: #4292e3;
              }
              .get-it-now:hover {
                background-color: #1a6aff;
              }
            }
          }
        }
      }

    }
  }


  .btn_01 {
    display: -webkit-inline-box;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    border: none;
    border-radius: 4px;
    background: #4292e3;
    font-size: 14px;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
  }
</style>
