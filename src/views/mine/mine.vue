<template>
	<div id='mine-info'>
		<x-header :left-options="{showBack: false}" title="我的"></x-header>
		<group>
	      <cell title="我的信息" @click.native="onClick">
	      	<img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/imgs/info.png">
	      </cell>
	      <cell title="我的资料" @click.native="onClick">
	      	<img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/imgs/invite.png">
	      </cell>
	      <cell title="帮助" is-link>
	      	<img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/imgs/help.png">
	      </cell>
	    </group>

	    <group title="">
	      <cell is-link>
	        <span slot="title" style="color:green;"><span style="vertical-align:middle;">关注公众号</span> <badge text="1"></badge></span>
	        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/imgs/invite.png">
	      </cell>
	      <cell title="邀请好友" is-link>
	      	<img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/imgs/help.png">
	      </cell>
	      <cell title="联系电话" is-link>
	      	<img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/imgs/invite.png">
	      </cell>
	      <cell title="这是真的" is-link>
	        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/imgs/help.png">
	      </cell>
        </group>

       <group>
	      <cell is-link title="设置">
	      <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/imgs/set.png">
	      </cell>
        </group>

	</div>
</template>
<script>
import { XHeader,Cell,Group,Badge  } from 'vux'
	export default {
		data () {
			return {

			}
		},
		components:{
			XHeader,
			Cell,
			Badge,
			Group
		},
		methods:{
			onClick () {

			}
		}
	}
</script>
<style>
	#mine-info .vux-label{
		text-align: left;
		font-size:16px;
	}
</style>
