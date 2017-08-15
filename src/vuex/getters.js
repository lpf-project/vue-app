export default {
	//首页借款app列表
  getDebitList: (state) => state.debitList,
  //借款页面列表
  getDebitList1: (state) => state.debitList1,
  //是否显示底部导航
  getIsShow: (state) => state.isShow,
  //是否登录
  getLogin: (state) =>  state.isLogin,
  //用户名
  getuname: (state) => state.username,
  //密码
  getpwd: (state) => state.password
};
