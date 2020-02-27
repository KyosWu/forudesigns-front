<template>
    <div id="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/shop' }">Shop</el-breadcrumb-item>
        <el-breadcrumb-item>{{goods}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: "Breadcrumb",
      props:['goods']
    }
</script>

<style lang="scss" scoped>
  .breadcrumb {
    position: fixed;
    z-index: 998;
    top: 0;
    left: 0;
    width: 100%;
    min-width: 1000px;
    height: 30px;
    list-style: none;
    background: #fff;
  }
  .el-breadcrumb {
    display: -webkit-box;
    display: flex;
    width: 1280px;
    margin: 0 auto;
    padding: 0 15px;
    font-size: 14px;
    line-height: 30px;
  }
</style>
