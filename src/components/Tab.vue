<template>
	<tabbar>
      <tabbar-item>
        <img slot="icon" src=" ">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src=" ">
        <span slot="label">借款</span>
      </tabbar-item>
      <tabbar-item selected link=" ">
        <img slot="icon" src=" ">
        <span slot="label">资讯</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src=" ">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  name:'Tab',
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>