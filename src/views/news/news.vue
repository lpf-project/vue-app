<template>
	<div id='news'>
		<x-header :left-options="{showBack: false}" title="资讯"></x-header>
		 <div>
		    <panel header="最新资讯" :footer="footer" :list="list" :type="type"></panel>
		 </div>
	</div>
</template>
<script>
import { XHeader,Panel} from 'vux'
	export default {
		data () {
			return {
				type: '1',
				footer: {
			        title: '查看更多',
			        url: 'http://www.baidu.com'
			    },
			    list: [{
			        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
			        title: '标题一',
			        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
			        url: '/component/cell'
			      }, {
			        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
			        title: '标题二',
			        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
			        url: {
			          path: '/component/radio',
			          replace: false
			        },
			        meta: {
			          source: '来源信息',
			          date: '时间',
			          other: '其他信息'
			        }
			      }],
			}
		},
		components:{
			XHeader,
			Panel
		}
	}
</script>
<style>
	#news .weui-panel__hd{
		text-align: left;
	}
	#news .weui-media-box__desc{
		text-align: left;
	}
	#news .weui-media-box__title{
		text-align: left;
	}	
</style>
