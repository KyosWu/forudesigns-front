<template>
  <div role="tablist" class="sidebar-categories fl">
    <el-collapse v-model="activeName"  :accordion="true">
      <div class="title row">All Categories Consistency</div>
      <el-collapse-item title="Men's" name="1">
        <div>
          <div class="item row">Men's All Over Print Board Shorts</div>
          <div class="item row">Men's All Over Print Board Shorts</div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>

</template>

<script>
    export default {
        name: "Collapse",
      data() {
        return {
          activeName: '1'
        };
      }
    }
</script>

<style lang="scss" scoped>
  .sidebar-categories {
    width: 250px;
    padding-right: 50px;
    border: none;
    .title {
      display: flex;
      align-items: center;
      height: 0.25rem;
      line-height: 0.25rem;
      background-color: #FFF;
      /*color: #303133;*/
      cursor: pointer;
      border-bottom: 0.005208rem solid #EBEEF5;
      font-size: 0.067708rem;
      font-weight: 500;
      transition: border-bottom-color .3s;
      outline: 0;
    }
    .el-collapse-item__wrap {
      user-select: none;
      border: 0;
      will-change: height;
      overflow: hidden;
      box-sizing: border-box;
      .el-collapse-item__content {
        padding-bottom: 0;
        .item {
          margin-bottom: 18px;
          padding-left: 9px;
          font-weight: 400;
          line-height: 20px;
        }
      }
    }
  }
  .f1 {
    float: left;
  }
  .row,.el-collapse-item__header {
    cursor: pointer;
    color: #8c95a5;
    font-size: 14px;
    line-height: 40px;
  }


</style>
