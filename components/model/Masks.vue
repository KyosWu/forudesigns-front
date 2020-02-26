<template>
  <div id="Masks" @click="close_model_func" v-if="isShowModel">
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
    export default {
        name: "Masks",
      computed: {
        ...mapGetters([
          'isShowModel'
        ]),
      },
      methods: {
        ...mapActions([
          'ShowModel'
        ]),
        close_model_func () {
          this.ShowModel(!this.isShowModel)
        }
      }
    }
</script>

<style lang="scss" scoped>
  #Masks {
    z-index: 9999;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,0.3);

  }
</style>
