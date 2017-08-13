export default {
  // 改变是否登录状态
  setLogin ({commit}, platform) {
    commit('SET_LOGIN', platform);
  },
  //是否显示底部导航
  isShow ({commit}, platform){
    commit('IS_SHOW',platform);
  }

};