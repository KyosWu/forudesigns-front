<template>
  <div class="artists-list">
    <div class="artists-list-content">
      <ul class="card-ul" style="width: 1280px">
        <li class="artist-card" v-for="(item, index) in list" :key="index" style="width: 413px;height: 228px;">
          <!--创作者用户信息简介-->
          <div class="artist-card__info">
            <div class="artist-info-card">
              <nuxt-link to="">
                <div class="img-outer artist-info-card__avatar" v-for="(item2, p) in item.avatar" :key="p">
                  <img v-lazy="item2.src" alt="" class="img-inner">
                </div>
              </nuxt-link>
              <div class="artist-info-card__info">
                <div class="artist-info-card__info__inner-wrap">
                  <h2 class="name">
                    <span>Disnimo</span>
                    <i></i>
                  </h2>
                  <div class="statistics">
                    <strong>
                      1.9k
                    </strong>
                    Pics |
                    <strong>
                      13.5k
                    </strong>
                    Products
                  </div>
                </div>
                <div class="btn-01">
                  <i></i>
                  <span data-follow="Follow" data-unfollow="Unfollow" @click="ShowModel_LoginOrRegister_Func">Follow</span>
                </div>
              </div>
            </div>
          </div>
          <!--创作者作品图片展示-->
          <div class="artist-card__products">
            <ul>
              <li v-for="(item3, j) in item.cards" :key="j">
                <nuxt-link to="">
                  <div class="img-outer">
                    <img v-lazy="item3.src" alt="" class="img-inner" style="height: 130px;width: 130px">
                  </div>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <!--分页-->
    <Pagination/>

  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Pagination from '../../components/artists/search/Pagination'
    export default {
        name: "List",
      components: {
        Pagination,
      },
      computed: {
        ...mapGetters([
          'isShowLoginOrRegisterModel'
        ]),
      },
      data () {
          return {
            list: [
              {
                avatar: [
                  {src: require('../../assets/images/artists/list/1.jpeg')}
                ],
                cards: [
                  {src: require('../../assets/images/artists/list/2.jpeg')},
                  {src: require('../../assets/images/artists/list/3.png')},
                  {src: require('../../assets/images/artists/list/4.jpeg')},
                ]
              },
              {
                avatar: [
                  {src: require('../../assets/images/artists/list/1.jpeg')}
                ],
                cards: [
                  {src: require('../../assets/images/artists/list/2.jpeg')},
                  {src: require('../../assets/images/artists/list/3.png')},
                  {src: require('../../assets/images/artists/list/4.jpeg')},
                ]
              },
              {
                avatar: [
                  {src: require('../../assets/images/artists/list/1.jpeg')}
                ],
                cards: [
                  {src: require('../../assets/images/artists/list/2.jpeg')},
                  {src: require('../../assets/images/artists/list/3.png')},
                  {src: require('../../assets/images/artists/list/4.jpeg')},
                ]
              },
              {
                avatar: [
                  {src: require('../../assets/images/artists/list/1.jpeg')}
                ],
                cards: [
                  {src: require('../../assets/images/artists/list/2.jpeg')},
                  {src: require('../../assets/images/artists/list/3.png')},
                  {src: require('../../assets/images/artists/list/4.jpeg')},
                ]
              },
              {
                avatar: [
                  {src: require('../../assets/images/artists/list/1.jpeg')}
                ],
                cards: [
                  {src: require('../../assets/images/artists/list/2.jpeg')},
                  {src: require('../../assets/images/artists/list/3.png')},
                  {src: require('../../assets/images/artists/list/4.jpeg')},
                ]
              },
              {
                avatar: [
                  {src: require('../../assets/images/artists/list/1.jpeg')}
                ],
                cards: [
                  {src: require('../../assets/images/artists/list/2.jpeg')},
                  {src: require('../../assets/images/artists/list/3.png')},
                  {src: require('../../assets/images/artists/list/4.jpeg')},
                ]
              },
            ]
          }
      },
      methods: {
          ...mapActions([
            'ShowModel_LoginOrRegister'
          ]),
        //  关注创作者按钮触发
        ShowModel_LoginOrRegister_Func(){
          this.ShowModel_LoginOrRegister(!this.isShowLoginOrRegisterModel)
        }
      }
    }
</script>

<style lang="scss" scoped>
  .artists-list {
    margin-bottom: 48px!important;
  }
  .artists-list-content {
    width: 100%;
    padding: 47px 0 34px;
    .card-ul {
      display: -webkit-box;
      /*display: flex;*/
      flex-wrap: wrap;
      width: 100%;
      .artist-card:nth-child(3n) {
        margin-right: 0;
      }
      .artist-card {
        overflow: hidden;
        width: 416px;
        height: 228px;
        margin: 0 16px 16px 0;
      }
    }
  }

  .artist-card__info {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 1px 10px 0 10px;
    .artist-info-card {
      display: flex;
      width: 100%;
      margin-bottom: 20px;
      a {
        .artist-info-card__avatar {
          width: 50px!important;
          height: 50px!important;
          border: 1px solid #4292e3;
        }
        .img-outer {
          @include common_center;
          width: 100%;
          height: 100%;
          border-radius: 100%;
          .img-inner {
            border-radius: 100%;
            @include common_img_center-contain;
            width: 100%;
            height: 100%;
            vertical-align: middle;
          }
        }
      }
      .artist-info-card__info {
        display: -webkit-box;
        display: flex;
        overflow: hidden;
        -webkit-box-pack: justify;
        justify-content: space-between;
        width: calc(100% - 50px);
        margin-left: 20px;
        .artist-info-card__info__inner-wrap {
          width: 227px;
          .name {
            display: -webkit-box;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            margin-bottom: 5px;
            text-transform: capitalize;
            color: #40354e;
            font-size: 14px;
            font-weight: 700;
          }
          .statistics {
            text-transform: capitalize;
            color: #40354e;
            font-size: 14px;
          }
        }
      }
    }
  }

  .artist-card__products {
    margin: 0 10px 1px 10px;
    ul {
      display: -webkit-box;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-direction: row;
      -webkit-box-pack: start;
      justify-content: flex-start;
      li {
        margin-right: 2px;
        cursor: pointer;
      }
    }
  }

  .btn-01 {
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
    height: 20px;
    width: 100px;
  }
</style>
