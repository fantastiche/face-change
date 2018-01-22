<template>
  <div class="main-body border-1px">
    <div class="title">
      <img :src="headImg" alt="">
      <span>{{nickname}}</span>
    </div>
    <div class="main-body-detail">
      <div class="word" v-if="word">{{word}}</div>
      <div class="photo">
        <img :src="item.img" alt="" v-for="(item, index) in images">
      </div>
      <span>{{address}}</span>
      <span>{{createTime}}</span>
    </div>
    <div class="good">
      <img src="./zan.png" alt="">
      <span>{{praise}}人喜欢</span>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    name: 'MainBody',
    props: {
      headImg: {
        type: String,
        default: './头像@2x.png'
      },
      images: {
        type: Array,
        default: []
      },
      address: {
        type: String,
        default: ''
      },
      createTime: {
        type: String,
        default: ''
      },
      nickname: {
        type: String,
        default: ''
      },
      praise: {
        type: Number,
        default: ''
      },
      word: {
        type: String,
        default: ''
      }
    },
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
        border-radius: 50%;
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
      .word {
        display: block;
        .dpr-font(14px);
        padding-bottom: 30/@rem;
      }
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
