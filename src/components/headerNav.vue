<template>
  <div class="headerNavWrapper">
    <div id="headerNav">
      <div class="search">
        <i class="iconfont icon-micro"></i>
        <div class="search-box">
          <label class="iconfont icon-glass" for="searchBox">
                <span>搜索音乐,歌词,电台</span>
                </label>
          <input type="text" id="searchBox">
        </div>
        <i class="iconfont icon-music"></i>
      </div>
      <tab :line-width="2" bar-active-color="#f33" active-color='#f33' class="tabNaver">
        <tab-item :selected="tabIndex ==0">个性推荐</tab-item>
        <tab-item :selected="tabIndex == 1">歌单</tab-item>
        <tab-item :selected="tabIndex == 3">排行榜</tab-item>
      </tab>
    </div>
  </div>
</template>

<script>
import {
  Tab,
  TabItem
} from 'vux'

export default {
  name: 'headerNav',
  components: {
    Tab,
    TabItem
  },
  props: ['tabIndex']
}
</script>

<style lang="less">
  @import '../assets/style/mixin';
  .headerNavWrapper {
    height: .88rem;
  }
  #headerNav {
    font-size: .12rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    .mx_wh(100%, .88rem);
    .search {
      position: relative;
      .mx_whlh(100%, .48rem, .48rem);
      .backgroundRed;
      text-align: center;
      .icon-micro {
        .mx_fc(.22rem, #fff);
        .mx_postl(0, 5%);
      }
      .icon-music {
        .mx_fc(.22rem, #fff);
        .mx_postl(.03rem, 90%);
      }
      .cancelSearch {
        .mx_fc(.14rem, #fff);
        .mx_postl(0, 90%);
      }
      .search-box {
        position: relative;
        display: inline-block;
        width: 70%;
        label {
          color: #dedede;
          .mx_hlh(.32rem, .34rem);
          .mx_fc(.14rem, #dedede);
          .mx_postl(.08rem, 22%);
          span {
            font-size: .13rem;
          }
        }
        label:before {
          margin-right: .05rem;
        }
        input {
          .mx_whlh(100%, .32rem, .24rem);
          .mx_fc(.12rem, #666);
          .mx_bdrs(.2rem);
          text-indent: 5%;
          border: none;
        }
      }
    }
    .tabNaver {
      .mx_flex;
      .mx_fc(.14rem, #666);
      background-color: #fff;
      span {
        .mx_flex_item(1);
        text-align: center;
      }
    }
    .vux-tab-item {
      .mx_fc(.14rem, #666);
      .mx_hlh(.4rem, .4rem);
    }
  }
</style>
