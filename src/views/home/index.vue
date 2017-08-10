<template>
	<div>
		<div>
			<swiper :list="demo03_list" style="width:100%;margin:0 auto;" height="150px" dots-class="custom-bottom" dots-position="center"></swiper>
		</div>
		<div>
			 <grid class="index-intro">
		      <grid-item>
		        <img slot="icon" src="../../assets/imgs/index.png">
		        <span slot="label">快速</span>
		      </grid-item>
		      <grid-item>
		        <img slot="icon" src="../../assets/imgs/index.png">
		        <span slot="label">安全</span>
		      </grid-item>
		      <grid-item>
		        <img slot="icon" src="../../assets/imgs/index.png">
		        <span slot="label">稳定</span>
		      </grid-item>
		    </grid>
		</div>
		<div>
			<div></div>
		</div>

	</div>
</template>
<script>
	import { Swiper } from 'vux'
	import { Grid, GridItem } from 'vux'
	import {debitList} from '../../assets/js/database.js'
	const imgList =	[{
		  url: 'https://www.baidu.com',
		  img: 'https://static.vux.li/demo/1.jpg',
		  title: ''
		}, {
		  url: 'javascript:',
		  img: 'https://static.vux.li/demo/2.jpg',
		  title: ''
		}, {
		  url: 'javascript:',
		  img: 'https://static.vux.li/demo/3.jpg',
		  title: ''
		}]
	export default {
		data () {
			return {
				demo03_list:imgList
			}
		},
		components:{
			Swiper,
			Grid,
    		GridItem
		},
		mounted () {
			console.info('dayin',this.debitList)
		}
	}
</script>
<style>
	.index-intro{

	}
</style>