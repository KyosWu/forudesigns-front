<template>
  <Index_Business/>
</template>

<script>
  import Index_Business from '../components/public/header/Index_Business.vue'
  import { mapGetters } from 'vuex'
    export default {
        name: "business",
      layout: 'default_business',
      components: {
        Index_Business,
      },
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
