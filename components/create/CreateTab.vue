<template>
    <div class="create-tab">
      <ul class="tab-wrap">
        <li class="current-selected-tab">
          <img src="../../assets/images/create/createTab/卫衣.svg" alt="">
          <span>Single Design</span>
        </li>
        <li>
          <img src="../../assets/images/create/createTab/手提包.svg" alt="">
          <span>Bulk Design</span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "CreateTab"
    }
</script>

<style lang="scss" scoped>
  .create-tab {
    width: 100%;
    margin: 44px 0 30px;
    .tab-wrap {
      display: -webkit-box;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-direction: row;
      -webkit-box-pack: center;
      justify-content: center;
      width: 100%;
      li {
        display: -webkit-inline-box;
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: start;
        justify-content: flex-start;
        margin-right: 41px;
        padding: 5px 2px;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 16px;
        img {
          width: 55px;
          height: 55px;
        }
        span {
          display: inline-block;
          box-sizing: border-box;
          margin: 0 5px;
          padding: 5px;
          color: #8c95a5;
          font-weight: 700;
        }
      }
    }
  }
</style>
