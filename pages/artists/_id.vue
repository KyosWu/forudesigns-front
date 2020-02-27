<template>
  <!--id 是艺术家id-->
  <div>
    <h1>{{id}}</h1>
    fsf
  </div>

</template>

<script>
    export default {
        name: "id",
      data () {
          return {
            id: this.$route.params.id
          }
      },
      created() {
          console.log(this.id)
      }
    }
</script>

<style scoped>

</style>
