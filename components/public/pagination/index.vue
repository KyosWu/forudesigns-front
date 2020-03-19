<template>
  <div class="pagination showTop">
    <ul class="pagination-content">
      <!--回到顶部-->
      <li>
        <el-button class="back-to-top-button"
                   @click="to_Top_func">
          <i class="el-icon-arrow-up"></i>
        </el-button>
        <span class="back-to-top">Back-to-top</span>
      </li>
      <!--左 加-->
      <li>
        <button @click="left_second()">
          <i class="el-icon-d-arrow-left">
          </i>
        </button>
      </li>
      <!--左-->
      <li>
        <button @click="left_first()">
          <i class="el-icon-arrow-left">
          </i>
        </button>
      </li>
      <!--页数-->
      <li class="pagination-input">
        <input :max="total" min="1" type="number" class="page-to"
               @click="choose_page"
        @blur="lose_choose_page">
        <span class="pagination-info" v-show="!choosepage">{{page}} of {{total}}</span>
      </li>
      <!--右-->
      <li>
        <button @click="right_first()">
        <i class="el-icon-arrow-right">
        </i>
      </button>
      </li>
      <!--右 加-->
      <li>
        <button @click="right_second()">
          <i class="el-icon-d-arrow-right">
          </i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: "index",
    data () {
      return {
        //总页数
        total: 15,
      //  当前页数
        page: 2,
      //  一页数目
        pagesize: 16,
        choosepage: false
      }
    },
    methods: {
      ...mapActions([
        'is_Top'
      ]),
      // 回到顶部
      to_Top_func () {
        let timer = setInterval(function(){
          let Top = document.documentElement.scrollTop || document.body.scrollTop;
          // console.log(Top)
          let speed = Math.floor(Top / 3);
          // console.log(speed)
          document.documentElement.scrollTop = document.body.scrollTop = Top - speed;
          if(Top <= 50){
            clearInterval(timer);
          }
        },50)
      },
      //页面按钮左右
      left_second () {
        this.to_Top_func()
      },
      left_first() {
        this.to_Top_func()
      },
      right_first () {
        this.to_Top_func()
      },
      right_second () {
        this.to_Top_func()
      },
      // 选择页数
      choose_page () {
        this.choosepage = !this.choosepage
      },
      //失去选择页面焦点
      lose_choose_page () {
        this.choosepage = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pagination {
    display: -webkit-inline-box;
    display: inline-flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    width: 100%;
    .pagination-content {
      display: -webkit-inline-box;
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      margin: 0;
      li {
        margin-left: 11px;
        .back-to-top-button {
          border-radius: 19px;
          width: 37px;
          height: 37px;
          padding: 0;
          color: #8c95a5;
          border: 1px solid #dfdfeb;
          background: #fff;
          line-height: 37px;
        }
        .back-to-top {
          margin-left: 11px;
          color: #40354e;
          font-size: 14px;
          font-weight: 700;
        }
        button {
          width: 37px;
          height: 37px;
          padding: 0;
          color: #8c95a5;
          border: 1px solid #dfdfeb;
          border-radius: 0;
          background: #fff;
          line-height: 37px;
        }
        button:hover {
          background-color: #4292e3;
          color: white;
        }
      }
      .pagination-input {
        position: relative;
        display: inline-block;
        background: #fff;
        .page-to {
          z-index: 9999;
          width: 140px;
          height: 37px;
          /*padding: 12px 0 12px 12px;*/
          cursor: pointer;
          text-align: center;
          vertical-align: middle;
          color: #40354e;
          /*border: 1px solid #dfdfeb;*/
          border-radius: 0;
          outline: none;
          background: transparent;
          font-size: 14px;
          line-height: 37px;
        }
        .pagination-info {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 140px;
          height: 37px;
          text-align: center;
          pointer-events: none;
          color: #40354e;
          border: 1px solid #dfdfeb;
          outline: none;
          background: transparent;
          font-size: 14px;
          line-height: 37px;
        }
      }
    }
  }
</style>

