<template>
  <div id="recommend">
    <headerNav tabIndex="0"></headerNav>
    <!--轮播开始-->
    <swiper loop auto :aspect-ratio="350/800" dots-position="center">
      <swiper-item v-for="(item,i) in bannerList" :key="i">
        <img width="100%" height="100%" v-lazy="item.picUrl">
      </swiper-item>
    </swiper>
    <!--轮播结束-->
    <!--推荐歌单开始-->
    <div class="re-songList">
      <h1 class="list-item">
        <b></b> 推荐歌单
        <i class="iconfont icon-right"></i>
      </h1>
      <ul>
        <router-link v-for="(item,i) in prSongList" :key="i" tag="li" :to="{name:'songListDetails',params:{id:item.id}}">
          <i class="iconfont icon-headset">{{format.formatPlayCount(item.playCount)}}</i>
          <img v-lazy="item.picUrl">
          <p>{{item.name}}</p>
        </router-link>
      </ul>
    </div>
    <!--推荐歌单结束-->
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
      bannerList: state => state.recommend.bannerList,
      // 获取推荐歌单
      prSongList: state => state.recommend.PrSongList
    })
  }
}
</script>
<style lang="less">
  @import '../../assets/style/mixin';
  #recommend {
    .list-item {
      position: relative;
      .mx_fc(.15rem, #333);
      .mx_whlh(100%, .45rem, .45rem);
      font-weight: normal;
      b {
        .mx_hlh(.15rem, .45rem);
        .mx_bd(.01rem, #f33);
        margin-right: .05rem;
      }
    }
    ul {
      .mx_flex;
      .mx_flex_content;
      li {
        position: relative;
        padding-bottom: .1rem;
        overflow: hidden;
        img {
          display: block;
          width: 100%;
        }
        p {
          .mx_hlh(.3rem, .16rem);
          padding: .05rem .06rem 0;
          .mx_fc(.12rem, #666);
        }
      }
    }
    .re-songList,
    .re-BCStation {
      font-size: 0;
      li {
        .mx_flex_item(0 0 33%);
        p {
          .mx_more_ellipsis;
        }
      }
    }
    .re-songList {
      li {
        i {
          .mx_postr(.03rem, .05rem);
          .mx_fc(.12rem, #fff);
        }
      }
    }
    .re-PrivateContxt {
      font-size: 0;
      li {
        .mx_flex_item(0 0 49.5%);
        p {
          .mx_more_ellipsis;
        }
      }
      li:nth-child(3) {
        .mx_flex_item(0 0 100%);
      }
    }
    .re-PrMV {
      font-size: 0;
      li {
        .mx_flex_item(0 0 49.5%);
        i {
          .mx_postr(.03rem, .05rem);
          .mx_fc(.12rem, #fff);
        }
        p {
          .mx_fc(.12rem, #333);
          .mx_single_ellipsis;
          .mx_hlh(.2rem, .2rem);
          padding-top: 0;
        }
        span {
          .mx_fc(.12rem, #666);
          padding: 0 .03rem;
        }
      }
    }
    .re-BCStation {
      li {
        span {
          .mx_fc(.12rem, #fff);
          .mx_posbl(.48rem, .05rem);
        }
        .icon-play {
          .mx_fc(.14rem, #fff);
          .mx_posbr(.48rem, .05rem);
        }
      }
    }
    .vux-indicator {
      font-size: 0;
    }
  }

</style>
