<template>
  <div class="content">
    <div class="top-pic">
      <img src="./top.png" alt="" width="100%">
    </div>
    <div class="tab border-1px">
      <div class="tab-item" v-for="(item,itemIndex) in list2" :class="{'active':index===itemIndex}"
           @click="switchTabItem(itemIndex)">{{item.name}}
      </div>
      <div class="active-flag" ref="activeFlag"></div>
    </div>
    <transition class="swiper" name="slide-fade">
      <router-view></router-view>
    </transition>
    <div class="bottom">
      <div class="bottom-button">
        <img src="./tp.png" alt="">
        <span>我要上传/拍照</span>
      </div>
      <div class="bottom-button">
        <img src="./mine.png" alt="">
        <span>我的美拍</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {Tab, TabItem, Swiper, SwiperItem} from 'vux'

  const list = () => [
    {name: '全部', src: 'pageAll'},
    {name: '约会', src: 'pageDate'},
    {name: '逛街', src: 'pageAll'},
    {name: '上班', src: 'pageAll'},
    {name: '聚会', src: 'pageAll'},
    {name: '新娘妆', src: 'pageAll'},
    {name: '儿童表演妆', src: 'pageAll'}
  ]
  export default {
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem
    },
    data: function () {
      return {
        index01: 0,
        list2: list(),
        demo2: '美食',
        item: [],
        index: 0,
        totalWidth: 0,
        flagLeft: 0
      }
    },
    methods: {
      switchTabItem: function (index) {
        const that = this
        that.index = index
        that.totalWidth = 0
        for (let i = 0; i < that.index; i++) {
          that.totalWidth += that.item[i].offsetWidth
        }
        that.flagLeft = that.totalWidth + that.item[index].offsetWidth / 2 - that.$refs.activeFlag.offsetWidth / 2
        that.$refs.activeFlag.style.left = this.flagLeft + 'px'
        that.$router.push({
          path: `/index/${that.list2[index].src}`
        })
      }
    },
    created: function () {
    },
    mounted: function () {
      const that = this
      this.$nextTick(function () {
        that.item = document.getElementsByClassName('tab-item')
        that.flagLeft = that.item[0].offsetWidth / 2 - that.$refs.activeFlag.offsetWidth / 2
        that.$refs.activeFlag.style.left = this.flagLeft + 'px'
      })
    }
  }
</script>

<style lang="less" type="text/less" scoped>
  @import "../../common/less/mixin";

  .content {
    position: relative;
    height: 100%;
  }

  .bottom {
    height: 120/@rem;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    background: url("./bg.png") repeat center;
    .bottom-button {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      &:after {
        position: absolute;
        content: "";
        height: 1px;
        background: #e8e8e8;
        width: 100%;
        top: 0;
        left: 0;
        transform: scaleY(.5);
      }
      img {
        width: 45/@rem;
        height: 45/@rem;
      }
      span {
        .dpr-font(14px);
        color: #5b5b5b;
        margin-left: 14/@rem;
      }
    }
  }

  .tab {
    display: flex;
    padding: 40/@rem 0;
    position: relative;
    .tab-item {
      flex-grow: 1;
      text-align: center;
      .dpr-font(14px);
      color: #323232;
    }
    .active-flag {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 0;
      border-left: 12/@rem solid transparent;
      border-right: 12/@rem solid transparent;
      border-bottom: 12/@rem solid #ff4a83;
      transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s;
    }
  }

  .swiper {
    height: 724/@rem;
    overflow: scroll;
  }

  .active {
    color: #ff4a83 !important;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(-100px);
    opacity: 0;
  }
</style>
