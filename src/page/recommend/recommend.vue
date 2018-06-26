<template>
  <div id="recommend">
    <headerNav tabIndex="0"></headerNav>
    <!--轮播开始-->
    <swiper loop auto :aspect-ratio="300/800" dots-position="center">
      <swiper-item v-for="(item,i) in bannerList" :key="i">
        <img width="100%" height="100%" v-lazy="item.picUrl">
      </swiper-item>
    </swiper>
    <!--轮播结束-->
  </div>
</template>

<script>
import headerNav from '@/components/headerNav'
import {
  Swiper,
  SwiperItem
} from 'vux'
import {
  mapState
} from 'vuex'

export default {
  name: 'recommend',
  data () {
    return {}
  },
  components: {
    headerNav,
    Swiper,
    SwiperItem
  },
  created () {
    // 页面初始化
    this.$store.dispatch('initRecommendPage')
  },
  computed: {
    ...mapState({
      // 获取banner图
      bannerList: state => state.recommend.bannerList
    })
  }
}
</script>
