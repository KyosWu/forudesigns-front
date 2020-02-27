<template>

</template>

<script>
  import { mapGetters } from 'vuex'
    export default {
        name: "business",
      computed: {
        ...mapGetters([
          'Business_Head_Title'
        ])
      },
      created () {
        //  需要判断是否是客户端
        if (process.client) {
          // 进入前创造title
          document.title = this.Business_Head_Title
        }
      },
      destroyed() {
        //  需要判断是否是客户端
        if (process.client) {
          //  离开时销毁title
          document.title = ''
        }
      }
    }
</script>

<style scoped>

</style>
