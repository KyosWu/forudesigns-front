<template>
  <div class="full-screen-as-min-layout">
    <nuxt />
    <MyFooter/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import MyFooter from '../components/public/footer/Index.vue'
  export default {
    computed: {
      ...mapGetters([
        'isModelShow'
      ]),
    },
    components:{
      MyFooter
    }
  }
</script>

<style lang="scss">
  .full-screen-as-min-layout {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    min-height: 100vh;
  }
  .the-header+div, .the-header+main {
    margin-top: 60px!important;
  }
</style>
