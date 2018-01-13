<template>
  <div class="main-body border-1px">
    <div class="title">
      <img src="./头像@2x.png" alt="">
      <span>李丸子没有路</span>
    </div>
    <div class="main-body-detail">
      <div class="photo">
        <img src="./1@2x.png" alt="">
        <img src="./1@2x.png" alt="">
        <img src="./1@2x.png" alt="">
        <img src="./1@2x.png" alt="">
      </div>
      <span>上海.上海浦东国际机场1号航站楼</span>
      <span>13小时前</span>
    </div>
    <div class="good">
      <img src="./zan.png" alt="">
      <span>233人喜欢</span>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    name: 'MainBody',
    data: function () {
      return {}
    },
    methods: {},
    created: function () {
    }
  }
</script>

<style lang="less" type="text/less" scoped>
  @import "../../common/less/mixin";

  .main-body {
    padding: 30/@rem 30/@rem 40/@rem 30/@rem;
    position: relative;
    .good {
      position: absolute;
      right: 25/@rem;
      top: 29/@rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 44/@rem;
        height: 44/@rem;
      }
      span {
        .dpr-font(9px);
        color: #ff4a83;
      }
    }
    .title {
      display: flex;
      align-items: center;
      img {
        width: 78/@rem;
        height: 78/@rem;
      }
      span {
        color: #323232;
        .dpr-font(14px);
        font-weight: bold;
        margin-left: 30/@rem;
      }
    }
    .main-body-detail {
      margin-left: 104/@rem;
      margin-top: 30/@rem;
      margin-right: 180/@rem;
      img {
        margin-left: 5/@rem;
        width: 169/@rem;
        height: 169/@rem;
      }
      span {
        color: #323232;
        .dpr-font(10px);
        margin-top: 10/@rem;
        display: block;
      }
      span:last-child {
        color: #919191;
      }
    }
  }
</style>
