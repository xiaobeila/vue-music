import getData from '../api/getData'

export default {
  // 获取推荐歌单详情
  async get_songListDetails (context, payload) {
    context.commit('set_isLoading', true)
    let res = await getData('querySongListDetail', payload)
    context.commit('set_songListDetails', res.data.playlist)
    context.commit('set_isLoading', false)
  }
}
