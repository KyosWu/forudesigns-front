<template>
  <div>
    <Masks/>
    <div id="work">
      <div class="work-model_wrap" style="width: 1000px;">
        <div class="work-model_content">
          <!--大图展示区-->
          <div class="work-img">
            <div class="img-outer" style="width: 100%; height: 100%;">
              <img src="../../assets/images/artworks/content/3.jpeg" alt="" class="img-inner"
                   style="object-fit: contain;">
            </div>
          </div>
          <!--其他作品展示区-->
          <div class="work-info">
            <div class="info">
              <!--收藏按钮-->
              <span class="collect">
              <img src="../../assets/images/public/tools/收藏-书签-1.svg" alt="">
            </span>
              <!--商品文字描述-->
              <span class="work-name">
              Photo Peinture Acrylique Violet/Corail
            </span>
              <!--副描述-->
              <span class="work-descript">
              Lines and dots motif matrix patterned design in red and white colors
            </span>
              <div  class="work-designer-info">
                <div class="work-designer">
                  <nuxt-link to="">
                    <div class="img-outer">
                      <img src="../../assets/images/public/avatar/avatar-1.svg" alt="" class="img-inner">
                    </div>
                    <span class="designer-name">Dflcprints</span>
                  </nuxt-link>
                </div>
                <div class="follow-todo">
                  <button class="following-small btn-01">
                    <i></i>
                    <span @click="Login_or_register">Follow</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="designer-products">
              <ul>
                <!--9个-->
                <li v-for="(item, index) in list" :key="index">
                  <nuxt-link to="">
                    <!--图片-->
                    <div>
                      <div class='img-outer'>
                        <img v-lazy="item.src" alt="" class="imh-inner" style="width: 100%; height: 100%;">
                      </div>
                    </div>
                    <!--点赞转发收藏区-->
                    <div class="tools">
                      <div v-for="(item, index) in tools_logo" :key="index">
                        <!--不懒加载-->
                        <img :src="item.src" alt="" class="img-inner">
                      </div>
                    </div>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
    import Masks from './Masks'
  import WorkModel from './Works-modal'
    export default {
        name: "Works-modal",
      data () {
        return {
          list:[
            {src: require('../../assets/images/artworks/content/2.jpeg')},
            {src: require('../../assets/images/artworks/content/2.jpeg')},
            {src: require('../../assets/images/artworks/content/2.jpeg')},
            {src: require('../../assets/images/artworks/content/2.jpeg')},
            {src: require('../../assets/images/artworks/content/2.jpeg')},
            {src: require('../../assets/images/artworks/content/2.jpeg')},
            {src: require('../../assets/images/artworks/content/2.jpeg')},
            {src: require('../../assets/images/artworks/content/2.jpeg')},
            {src: require('../../assets/images/artworks/content/2.jpeg')},
            {src: require('../../assets/images/artworks/content/2.jpeg')},
            {src: require('../../assets/images/artworks/content/2.jpeg')},
            {src: require('../../assets/images/artworks/content/2.jpeg')},
          ],
          tools_logo: [
            {src: require('../../assets/images/public/tools/收藏-书签-1.svg')},
            {src: require('../../assets/images/public/tools/点赞-大拇指-1.svg')},
          ],
        }
      },
      components: {
        Masks,
        WorkModel
      },
      computed: {
        ...mapGetters([
          'isShowModel',
          'isShowLoginOrRegisterModel'
        ]),
      },
      methods: {
        ...mapActions([
          'ShowModel',
          'ShowModel_LoginOrRegister'
        ]),
        close_model_func () {
          this.ShowModel(!this.isShowModel)
        },
        // follow 如果未登录
        Login_or_register () {
          this.ShowModel_LoginOrRegister(!this.isShowLoginOrRegisterModel)
        }
      }
    }
</script>

<style lang="scss" scoped>
  #work {
    z-index: 9900;
    position: fixed;
    top: 0;
    bottom: 0;
    @include common_center
  }
  .work-model_wrap {
    border-radius: 15px;
    text-align: center;
    position: fixed;
    right: 0;
    left: 0;
    margin: auto;
    background-color: white;
    @include common_center;
    .work-model_content {
      position: relative;
      @include display_flex;
      width: 1000px;
      min-height: 600px;
    }
  }

  .work-img {
    @include common_center;
    width: 600px;
    min-height: 600px;
    background: #f7f7f7;
    .img-outer {
      @include common_center;
      width: 100%;
      height: 100%;
      .img-inner {
        width: 600px;
        vertical-align: middle;
      }
    }
  }
  .work-info {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: -webkit-box;
    display: flex;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    width: 400px;
    min-height: 600px;
    padding: 30px 21px 30px 20px;
  }
  .info {
    max-height: 135px;
    .collect {
      position: absolute;
      top: 32px;
      right: 21px;
      cursor: pointer;
      font-size: 18px;
      img {
        width: 30px;
        height: 30px;
        @include common_img_center-contain
      }
    }
    .work-name {
      display: block;
      overflow: hidden;
      margin-bottom: 15px;
      padding: 5px 30px 5px 0;
      white-space: nowrap;
      text-transform: capitalize;
      text-overflow: ellipsis;
      color: #40354e;
      font-size: 24px;
      font-weight: 700;
      line-height: 16px;
    }
    .work-descript {
      @include display_flex;
      overflow: hidden;
      -webkit-box-orient: vertical;
      width: 361px;
      margin-bottom: 15px;
      text-overflow: ellipsis;
      word-break: keep-all;
      color: #8c95a5;
      font-size: 14px;
      line-height: 16px;
      -webkit-line-clamp: 2;
    }
    .work-designer-info {
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-direction: row;
      -webkit-box-pack: justify;
      justify-content: space-between;
      margin-bottom: 15px;
      .work-designer {
        a {
          display: -webkit-inline-box;
          display: inline-flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          flex-direction: row;
          -webkit-box-pack: start;
          justify-content: flex-start;
          .img-outer {
            width: 30px!important;
            height: 30px!important;
            margin-right: 18px;
            .img-inner {
              width: 100%;
              height: 100%;
              vertical-align: middle
            }
          }
        }
      }
      .follow-todo {

      }
    }
  }
  .designer-products {
    overflow: auto;
    height: 100%;
    ul {
      height: 100%;
      li {
        float: left;
        width: 100px;
        height: 150px;
        margin-right: 12px;
        margin-bottom: 11px;
        text-align: center;
        border: 3px solid #f5f5fa;
        border-radius: 4px;
        a {
          text-decoration: none;
          color: #4292e3;
          .img-wrap {
            position: relative;
            width: 100%;
            height: 111px;
            .img-inner {
              width: 100%;
              height: 100%;
              vertical-align: middle;
            }
          }
          .tools {
            @include common_center;
            div {
              @include common_center;
              .img-inner {
                @include common_center;
                margin-left: 12px;
                margin-right: 12px;
                width: 16px;
                height: 16px;
                @include common_img_center-contain;
              }
            }
          }
        }
      }
    }
  }
</style>
