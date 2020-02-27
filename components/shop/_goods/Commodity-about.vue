<template>
  <div class="commodity-about">
    <div class="about-content clear-both">
      <div class="features">
        <span class="about-title">Features</span>
        <div class="features-content">
          <p>
            <span>* One piece open-toe style sandals, easy to wear and take off</span>
          </p>
          <p>
            <span>* High quality and soft PVC sole for comfort and durability</span>
          </p>
          <p>
            <span>* An entire upper can be designed, make your sandals unique and fashionable</span>
          </p>
          <p>
            <span>* Perfect for home, beach, pool, gym or daily use</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Commodity-about"
    }
</script>

<style lang="scss" scoped>
  .commodity-about {
    width: 100%;
    .about-content {
      padding: 38px 0 34px;
      border-top: 1px solid #dfdfeb;
      border-bottom: 1px solid #dfdfeb;
      .features {
        float: left;
        width: 611px;
        .about-title {
          display: block;
          margin-bottom: 17px;
          text-transform: uppercase;
          color: #40354e;
          font-size: 18px;
          font-weight: 700;
        }
        .features-content {
          color: #8c95a5!important;
        }
      }
    }
  }

  p, span {
    font-family: Arial!important;
    font-size: 14px!important;
  }
</style>
