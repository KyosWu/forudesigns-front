<template>
    <div class="pagination">
      <ul class="pagination-content">
        <!--回到顶部-->
        <li>
          <el-button class="back-to-top-button">
            <i class="el-icon-arrow-up"></i>
          </el-button>
          <span class="back-to-top">Back-to-top</span>
        </li>
        <!--左 加-->
        <li><button><i class="el-icon-d-arrow-left"></i></button></li>
        <!--左-->
        <li><button><i class="el-icon-arrow-left"></i></button></li>
        <!--页数-->
        <li class="pagination-input">
          <input max="15" min="1" type="number" class="page-to">
          <span class="pagination-info">2 of 15</span>
        </li>
        <!--右-->
        <li><button><i class="el-icon-arrow-right"></i></button></li>
        <!--右 加-->
        <li><button><i class="el-icon-d-arrow-right"></i></button>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "pagination"
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
