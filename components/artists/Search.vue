<template>
  <div>

    <form class="search">
      <input type="text" placeholder="Enter the artist name" class="search-input">
      <i class="el-icon-search"></i>
    </form>
    <!--<Tags/>-->
  </div>
</template>

<script>
  import Tags from './search/Tags'
    export default {
        name: "Search",
      components: {
          Tags
      }
    }
</script>

<style lang="scss" scoped>
  .search {
    display: flex;
    align-items: center;
    position: relative;
    padding: 18px 23px 15px 15px;
    .search-input {
      width: 100%;
      display: block;
      height: 50px;
      text-align: center;
      border-radius: 25px;
      outline: none;
      font-size: 18px;
      font-weight: 400;
      border: 1px solid #dfdfeb;
      transition: all .2s ease;
    }
    i {
      position: absolute;
      /*right: 23px;*/
      /*bottom: 10px;*/
      float: right;
      right: 50px;
      cursor: pointer;
      color: #40354e;
      font-size: 22px;
    }
  }
</style>
