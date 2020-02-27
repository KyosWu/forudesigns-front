<template>
  <div id="Masks" @click="close_model_func" v-if="isShowLoginOrRegisterModel">
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
    export default {
        name: "Login-mask",
      computed: {
        ...mapGetters([
          'isShowLoginOrRegisterModel'
        ]),
      },
      methods: {
        ...mapActions([
          'ShowModel_LoginOrRegister'
        ]),
        close_model_func () {
          this.ShowModel_LoginOrRegister(!this.isShowLoginOrRegisterModel)
        }
      }
    }
</script>

<style lang="scss" scoped>
  #Masks {
    z-index: 9991;
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
