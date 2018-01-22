<template>
  <scroll ref="wrapper" @scroll="scroll" @touchEnd="touchEnd">
    <div>
      <div class="refresh-wrap" v-if="flag">
        <span class="weui-loading" v-if="onFresh"></span>
        {{text}}
      </div>
      <main-body v-for="(item, index) in list" :headImg="item.logo" :images="item.Imglist" :address="item.address"
                 :createTime="item.createtime" :nickname="item.nickname" :praise="item.praiseType" :word="item.word"></main-body>
      <div>
        <load-more :tip="'正在加载'" v-if="!noData"></load-more>
        <load-more v-if="!list" :show-loading="false" :tip="'暂无数据'" background-color="#fbf9fe"></load-more>
        <load-more v-if="noData" :show-loading="false" background-color="#fbf9fe"></load-more>
      </div>
    </div>
  </scroll>
</template>

<script>
  import MainBody from '../../components/MainBody/MainBody.vue'
  import Scroll from '../../components/Scroll/Scroll'
  import {LoadMore} from 'vux'
  import commonModel from '../../models/common-model'

  export default {
    name: 'Page',
    components: {
      MainBody,
      Scroll,
      LoadMore
    },
    props: {
      mainType: {
        type: Number,
        default: null
      }
    },
    data: function () {
      return {
        page: 1,
        list: [],
        noData: false,
        text: '下拉刷新',
        flag: false,
        onFresh: false
      }
    },
    methods: {
      scroll: function (pos) {
        if (pos.y > 10) {
          this.flag = true
        }
        if (pos.y > 30) {
          this.text = '释放立即刷新'
        }
      },
      touchEnd: function (pos) {
        if (pos.y > 30) {
          setTimeout(() => {
            this.onFresh = true
            this.text = '正在刷新'
            this.page = 1
            let params = {
              type: this.mainType,
              PAGE: this.page
            }
            commonModel.list(params, (res) => {
              this.list = res.pd
              if (this.list.length < 10) {
                this.noData = true
              }
              setTimeout(() => {
                this.onFresh = false
                this.text = '刷新成功'
                setTimeout(() => {
                  this.flag = false
                  this.text = '下拉刷新'
                }, 100)
              }, 100)
            }, () => {
            })
          }, 100)
        } else {
          setTimeout(() => {
            this.flag = false
          }, 700)
        }
      },
      getList: function (params) {
        commonModel.list(params, (res) => {
          this.list = res.pd
          if (this.list.length < 10) {
            this.noData = true
          }
        }, () => {
        })
      }
    },
    created: function () {
      this.listenScroll = true
      this.page = 1
      let params = {
        type: this.mainType,
        PAGE: this.page
      }
      this.getList(params)
    },
    mounted: function () {
    },
    watch: {
      mainType: function () {
        this.listenScroll = true
        this.page = 1
        let params = {
          type: this.mainType,
          PAGE: this.page
        }
        this.getList(params)
      }
    }
  }

</script>

<style lang="less" type="text/less" scoped>
  @import "../../common/less/mixin";

</style>
