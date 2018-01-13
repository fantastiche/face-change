<template>
  <div class="take-photo">
    <div class="take-photo-wrap">
      <div class="take-area">
        <div class="images" v-for="(item, index) in images">
          <img :src="item" alt="">
        </div>
        <div class="take-button-wrap" v-if="!(images.length===4)">
          <input type="file" class="take-button" title="" v-text="" id="file" @change="onUpload"/>
          <img src="./upload.png" alt="">
          <span>{{images.length}}/4</span>
        </div>
      </div>
      <div class="take-type">
        <div class="take-type-wrap">
          <div class="take-type-item" :class="{'checked':item.checked}" v-for="(item, itemIndex) in list"
               @click="choose(itemIndex)">{{item.title}}
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
    </div>
    <div class="take-photo-button">
      <button @click="sub">提交</button>
    </div>
  </div>
</template>

<script>
  import {uncheck, checked} from '../../common/icon/icon-base64'
  import {uploadImg} from '../../models/upload-model'
  import commonModel from '../../models/common-model'

  export default {
    components: {},
    data: function () {
      return {
        list: [
          {
            title: '约会',
            checked: true
          },
          {
            title: '逛街',
            checked: false
          },
          {
            title: '上班',
            checked: false
          },
          {
            title: '聚会',
            checked: false
          },
          {
            title: '中式新娘妆',
            checked: false
          },
          {
            title: '西式新娘妆',
            checked: false
          },
          {
            title: '儿童表演妆',
            checked: false
          }
        ],
        index: 0,
        wordListIndex: 0,
        flag: false,
        imgArray: [],
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
        ],
        fileList: [],
        images: []
      }
    },
    methods: {
      choose: function (index) {
        let that = this
        that.index = index
        if (!that.list[index].checked) {
          for (let i = 0; i < that.list.length; i++) {
            that.list[i].checked = false
          }
          that.list[index].checked = true
        }
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
          that.wordListIndex = index + 1
        } else {
          that.wordList[index].checked = false
          that.wordList[index].icon = uncheck
          that.wordListIndex = 0
        }
      },
      onUpload: function (e) {
        let that = this
        let formData = new FormData()
        let file = e.target.files[0]
        formData.append('name', file.name)
        formData.append('file', file)
        console.log(e.srcElement)
        this.fileList.push(formData)
        let reader = new FileReader()
        reader.readAsDataURL(formData.get('file'))
        reader.onload = function (e) {
          that.images.push(e.target.result)
          console.log(that.images)
        }
      },
      sub: function () {
        let that = this
        let formData = new FormData()
        for (let i = 0; i < that.fileList.length; i++) {
          formData.append('tp', that.fileList[i].get('file'))
          formData.append('memberId', 100)
          formData.append('type', 'change')
          uploadImg(formData, function (res) {
            console.log(res)
            that.imgArray.push(res.fileUrl)
            if ((i + 1) === that.fileList.length) {
              that.flag = true
            }
          })
        }
      }
    },
    created: function () {
    },
    watch: {
      flag: function () {
        var that = this
        if (that.flag === true) {
          let word = ''
          if (!(that.wordListIndex === 0)) {
            word = that.wordList[that.wordListIndex - 1].word
          } else {
            word = ''
          }
          console.log(that.imgArray.join(','))
          let params = {
            openId: 'opeN1wzFSSvEOUDFQjOZ0QBJw2QE',
            address: word,
            type: that.index,
            imgs: that.imgArray.join(',')
          }
          commonModel.add(params, (res) => {
            console.log(res)
          }, () => {
          })
        }
      }
    }
  }
</script>

<style lang="less" type="text/less" scoped>
  @import "../../common/less/mixin";

  .take-photo {
    background: url("./bg.png") repeat center;
    background-size: 14/@rem 14/@rem;
    .take-area {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 50/@rem;
      padding-bottom: 80/@rem;
      position: relative;
      .images {
        width: 140/@rem;
        height: 140/@rem;
        margin-left: 20/@rem;
        &:first-child {
          margin-left: 0;
        }
        img {
          width: 140/@rem;
          height: 140/@rem;
        }
      }
      .take-button-wrap {
        width: 140/@rem;
        height: 140/@rem;
        margin-left: 20/@rem;
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
        .take-button {
          width: 140/@rem;
          height: 140/@rem;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
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
          &:last-child {
            padding-right: 35/@rem;
          }
        }
      }
    }
    .choose-word {
      padding: 60/@rem 30/@rem 119/@rem 30/@rem;
      padding-bottom: 200/@rem;
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
      position: absolute;
      bottom: 0;
      left: 0;
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

  .take-photo-wrap {
    height: 100%;
    overflow: scroll;
  }

  .mt-103 {
    margin-top: 103/@rem;
  }
</style>
