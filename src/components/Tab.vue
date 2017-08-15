<template>
  <div v-show="isshow">
  	<tabbar id="weui-tabbar">
        <tabbar-item selected link="/">
          <img slot="icon-active" src="../assets/imgs/indexT.png">
          <img slot="icon" src="../assets/imgs/index.png">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item link="/item">
          <img slot="icon" src="../assets/imgs/item.png">
          <img slot="icon-active" src="../assets/imgs/itemT.png">
          <span slot="label" active-color="#1296db">借款</span>
        </tabbar-item>
        <tabbar-item badge="0" link="/news">
         <img slot="icon" src="../assets/imgs/news.png">
         <img slot="icon-active" src="../assets/imgs/newsT.png">
          <span slot="label">资讯</span>
        </tabbar-item>
        <tabbar-item link="/mine">
          <img slot="icon" src="../assets/imgs/mine.png">
          <img slot="icon-active" src="../assets/imgs/mineT.png">
          <span slot="label">我的</span>
        </tabbar-item>
    </tabbar>
    <div style='width:100%;height:53px;'></div>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'
import { mapGetters } from 'vuex';
export default {
  data () {
    return {

    }
  },
  name:'Tab',
  components: {
    Tabbar,
    TabbarItem
  },
  computed: {
    ...mapGetters([
      'getIsShow'
    ])
  },
/*  watch:{
    '$route':this.$route
  },*/
  methods:{

  },
  created () {
    this.isshow = this.getIsShow;
    //console.info('isShow',this.$route)
  }
}
</script>
<style type='text/css' midia="screen">
  #weui-tabbar .weui-bar__item_on .weui-tabbar__label{
    color:#1296db;
  }
  #weui-tabbar{
    position:fixed;
  }
</style>