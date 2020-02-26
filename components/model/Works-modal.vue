<template>
  <div>
    <Masks/>
    <div class="work-model_wrap" style="width: 1000px;">
      <div class="work-model_content">
        <!--大图展示区-->
        <div class="work-img">
          <div class="img-outer">
            <img src="" alt="" class="img-inner">
          </div>
        </div>
        <!--其他作品展示区-->
        <div class="work-info">
          <div class="info">
            <!--收藏按钮-->
            <span class="collect">
              <i></i>
            </span>
            <!--商品文字描述-->
            <span class="work-name">
              Photo Peinture Acrylique Violet/Corail
            </span>
            <!--副描述-->
            <span class="work-descript">
              Photo Peinture Acrylique Violet/Corail
            </span>
            <div  class="work-designer-info">
              <div class="work-designer">
                <nuxt-link to="">
                  <div class="img-outer">
                    <div class="ig-inner"></div>
                  </div>
                  <span class="designer-name"></span>
                </nuxt-link>
              </div>
              <div class="follow-todo">
                <button class="btn-01">
                  <i></i>
                  <span>Follow</span>
                </button>
              </div>
            </div>
          </div>
          <div class="designer-products">
            <ul>
              <!--9个-->
              <li></li>
            </ul>
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
      components: {
        Masks,
        WorkModel
      },
      computed: {
        ...mapGetters([
          'isShowModel'
        ]),
      },
      methods: {
        ...mapActions([
          'ShowModel'
        ]),
        close_model_func () {
          this.ShowModel(!this.isShowModel)
        }
      }
    }
</script>

<style lang="scss" scoped>
  .work-model_wrap {
    z-index: 10000;
    border-radius: 15px;
    text-align: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background-color: white;
    height: 600px;
    .work-model_content {
      position: relative;
      display: -webkit-box;
      display: flex;
      width: 1000px;
      min-height: 600px;
    }
  }

  .work-img {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 600px;
    min-height: 600px;
    background: #f7f7f7;
    .img-outer {
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      .img-inner {
        display: -webkit-box;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        width: 100%;
        height: 100%;
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
      display: block;
      display: -webkit-box;
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

      }
      .follow-todo {

      }
    }
  }
  .designer-products {
    overflow: auto;
    height: 100%;
  }
</style>
