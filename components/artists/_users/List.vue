<template>

  <div class="list-wrap">

    <ListTotalWrap/>
    <Cards/>
    <Pagination/>

  </div>
</template>

<script>
  import ListTotalWrap from './list/List-total-wrap'
  import Cards from './list/Cards'
  import Pagination from './list/Pagination'

    export default {
        name: "List",
      components: {
          ListTotalWrap,
        Cards,
        Pagination,
      }
    }
</script>

<style lang="scss" scoped>
  .list-wrap {
    width: 1030px;
    margin: 0 auto;
    float: right;
  }
</style>
