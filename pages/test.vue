<template>
    <div>
sf
    </div>
</template>

<script>
    export default {
        name: "test",
      created () {
        this.get()
      },
      methods: {
          get () {
            this.$axios.post('/rbac/api/auth/login/').then(
              res => console.log(res)
            )
          }
      }
    }
</script>

<style scoped>

</style>
