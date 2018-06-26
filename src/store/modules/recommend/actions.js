import getData from '../../../api/getData'
export default {

  // 初始化个性推荐页面
  async initRecommendPage (context) {
    // 获取banner
    context.dispatch('get_Recommend_Banner')
  },
  // 获取banner
  async get_Recommend_Banner (context) {
    let res = await getData('queryBanner')
    context.commit('set_Recommend_Banner', res.data.banners)
  }
}
