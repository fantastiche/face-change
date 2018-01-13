<template>
  <scroll ref="wrapper">
    <div>
      <main-body></main-body>
      <main-body></main-body>
      <main-body></main-body>
      <main-body></main-body>
      <div>
        <load-more :tip="'正在加载'"></load-more>
        <load-more :show-loading="false" :tip="'暂无数据'" background-color="#fbf9fe"></load-more>
        <load-more :show-loading="false" background-color="#fbf9fe"></load-more>
      </div>
    </div>
  </scroll>
</template>

<script>
  import MainBody from '../../components/MainBody/MainBody.vue'
  import Scroll from '../../components/Scroll/Scroll'
  import {LoadMore} from 'vux'

  export default {
    components: {
      MainBody,
      Scroll,
      LoadMore
    },
    data: function () {
      return {}
    },
    methods: {
    },
    created: function () {
      this.listenScroll = true
    },
    mounted: function () {
    }
  }

</script>

<style lang="less" type="text/less" scoped>
  @import "../../common/less/mixin";

</style>
