<template>
  <div class="join-us">
    <h1>Be an Artist!</h1>
    <div class="descript">
      FORU is a free custom platform that enables thousands of artists, graphic designers, and photographers to sell their artworks /products to new audiences./followers and get high profits. It is easy and FREE!
      <nuxt-link to="">
        More policies and rules >
      </nuxt-link>
    </div>
    <button class="btn-01">
      Join Us
    </button>
  </div>
</template>

<script>
    export default {
        name: "JoinUs"
    }
</script>

<style lang="scss" scoped>
  .join-us {
    width: 100%;
    padding: 74px 0 88px;
    text-align: center;
    border-top: 1px solid #dfdfeb;
    border-bottom: 1px solid #dfdfeb;
    h1 {
      text-transform: uppercase;
      color: #40354e;
      font-size: 30px;
      font-weight: 700;
    }
    .descript {
      margin-top: 18px;
      color: #8c95a5;
      font-size: 16px;
      a {
        text-decoration: underline;
        color: #4292e3;
      }
    }
  }

  .btn-01 {
    width: 300px;
    height: 50px;
    margin-top: 35px;
    text-transform: uppercase;
    border-radius: 25px;
    font-size: 24px;
    display: -webkit-inline-box;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    border: none;
    background: #4292e3;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
  }
</style>
