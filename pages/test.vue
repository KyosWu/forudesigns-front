<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">

      <el-tab-pane label="用户管理" name="first">
        <nuxt-link to="/my/viewed">
        用户管理
        </nuxt-link>
      </el-tab-pane>

    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        activeName: 'second',
        list: []
      };
    },
    mounted() {
      this.getImage()
    },
    created() {
      this.getData()
    },
    methods: {
      ...mapActions([
        'getArtistFeatured'
      ]),
      getData () {
        this.getArtistFeatured().then(res => console.log(res.data))
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
