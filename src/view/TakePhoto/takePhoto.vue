<template>
  <div class="take-photo">
    <div class="take-area">
      <div class="take-button">
        <img src="./upload.png" alt="">
        <span>0/4</span>
      </div>
    </div>
    <div class="take-type">
      <div class="take-type-wrap">
        <div class="take-type-item" v-for="(item, itemIndex) in list" @click="choose(itemIndex)">{{item}}
          <span class="choose-icon" v-if="index===itemIndex"></span>
        </div>
      </div>
    </div>
    <div class="choose-word">
      <div class="choose-word-title">选择一句话：</div>
      <div v-for="(item, index) in wordList" class="choose-word-word">
        <img :src="item.icon" alt="" @click="check(index)">
        <span :class="{'checked':item.checked===true}">{{item.word}}</span>
      </div>
      <div class="choose-word-title mt-103">或&nbsp&nbsp&nbsp&nbsp自己输入</div>
      <div class="choose-word-input">
        <input type="text">
      </div>
    </div>
    <div class="take-photo-button">
      <button>提交</button>
    </div>
  </div>
</template>

<script>
  import {uncheck, checked} from '../../common/icon/icon-base64'

  export default {
    data: function () {
      return {
        list: ['约会', '逛街', '上班', '聚会', '中式新娘妆', '西式新娘妆', '儿童表演妆'],
        index: 0,
        wordList: [
          {
            word: '见证幸福瞬间，我就是如此美丽',
            checked: false,
            icon: uncheck
          },
          {
            word: '你会娶我么？',
            checked: false,
            icon: uncheck
          },
          {
            word: '带着美丽一块出嫁',
            checked: false,
            icon: uncheck
          },
          {
            word: '幸福！幸福！幸福！',
            checked: false,
            icon: uncheck
          }
        ]
      }
    },
    methods: {
      choose: function (index) {
        let that = this
        that.index = index
      },
      check: function (index) {
        let that = this
        if (!that.wordList[index].checked) {
          for (let i = 0; i < that.wordList.length; i++) {
            that.wordList[i].checked = false
            that.wordList[i].icon = uncheck
          }
          that.wordList[index].checked = true
          that.wordList[index].icon = checked
        } else {
          that.wordList[index].checked = false
          that.wordList[index].icon = uncheck
        }
      }
    },
    created: function () {
    }
  }
</script>

<style lang="less" type="text/less" scoped>
  @import "../../common/less/mixin";

  .take-photo {
    background: url("./bg.png") repeat center;
    background-size: 14/@rem 14/@rem;
    .take-area {
      height: 271/@rem;
      padding: 50/@rem;
      .take-button {
        width: 140/@rem;
        height: 140/@rem;
        position: relative;
        img {
          width: 140/@rem;
          height: 140/@rem;
        }
        span {
          .dpr-font(12px);
          position: absolute;
          bottom: 12/@rem;
          color: #919191;
          left: 0;
          right: 0;
          margin: 0 auto;
          text-align: center;
        }
      }
    }
    .take-type {
      width: 100%;
      overflow: scroll;
      border-bottom: 1/@rem solid #e8e8e8;
      .take-type-wrap {
        display: flex;
        flex-wrap: nowrap;
        .take-type-item {
          position: relative;
          margin-left: 35/@rem;
          padding-bottom: 40/@rem;
          .dpr-font(14px);
          font-weight: bold;
          color: #323232;
          white-space: nowrap;
        }
      }
    }
    .choose-word {
      padding: 60/@rem 30/@rem 119/@rem 30/@rem;
      .choose-word-title {
        color: #919191;
        .dpr-font(14px);
        margin-bottom: 40/@rem;
      }
      .choose-word-word {
        display: flex;
        align-items: center;
        margin-top: 56/@rem;
        &:nth-child(1) {
          margin-top: 0;
        }
        img {
          width: 34/@rem;
          height: 34/@rem;
        }
        span {
          color: #323232;
          .dpr-font(14px);
          margin-left: 40/@rem;
        }
      }
      .choose-word-input {
        input {
          height: 66/@rem;
          width: 538/@rem;
          outline: none;
          .dpr-font(14px);
          border: 1px solid #fe007f;
        }
      }
    }
    .take-photo-button {
      width: 100%;
      height: 90/@rem;
      button {
        width: 100%;
        height: 90/@rem;
        line-height: 90/@rem;
        background: #fe007f;
        .dpr-font(15px);
        color: #ffffff;
        text-align: center;
        border: none;
      }
    }
  }

  .choose-icon {
    position: absolute;
    bottom: 0;
    left: calc(~"50% - 0.08rem");
    width: 0;
    height: 0;
    border-left: 12/@rem solid transparent;
    border-right: 12/@rem solid transparent;
    border-bottom: 12/@rem solid #ff4a83;
  }

  .checked {
    color: #ff4a83 !important;
  }

  .mt-103 {
    margin-top: 103/@rem;
  }
</style>
