<template>
  <div role="tablist" class="sidebar-categories fl">
    <el-collapse v-model="activeName"  :accordion="true">
      <el-collapse-item title="All Categories" name="0" class="all">
      </el-collapse-item>

      <el-collapse-item :title="item.title" :name="item.name" v-for="(item, index) in list" :key="index"
                        @click="chooseitem(index)"
      :class="{isactive: chooseindex === index}">
        <div v-for="(item2, index2) in item.child" :key="index2">
          <div class="item row">{{item2.name}}</div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>

</template>

<script>
  export default {
    props: [],
    name: "index",
    data() {
      return {
        activeName: '0',
        list: [
          {title: "Men's", name: '1', child: [
              {name: "Men's All Over Print Board Shorts"},
              {name: "Men's All Over Print Board Shorts"}
            ]},
          {title: "Men's", name: '2', child: [
              {name: "Men's All Over Print Board Shorts"},
              {name: "Men's All Over Print Board Shorts"}
            ]}
        ],
        chooseindex: -1
      };
    },
    methods: {
      chooseitem (index) {
        this.chooseindex = index
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar-categories {
    width: 250px;
    padding-right: 50px;
    border: none;
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
  .row {
    cursor: pointer;
    color: #8c95a5;
    font-size: 14px;
    line-height: 40px;
  }
</style>

<style scoped>
  .sidebar-categories >>> .all .el-icon-arrow-right:before {
    content: "";
  }
  .sidebar-categories >>> .el-collapse-item__header.is-active {
    color: #40354e!important;
    font-weight: 700!important;
  }
  .sidebar-categories >>> .el-collapse-item__header {
    cursor: pointer;
    color: #8c95a5;
    font-size: 14px;
    line-height: 40px;
  }
  .sidebar-categories >>> .all .el-collapse-item__content {
    padding-bottom: 0;
    line-height: 0;
  }
</style>
