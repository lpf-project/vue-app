<template>
	<div class='index'>
		<div>
			<swiper :list="demo03_list" style="width:100%;margin:0 auto;" height="150px" dots-class="custom-bottom" dots-position="center" auto loop></swiper>
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
			<h5 class='index_tit'>良心推荐</h5>
			<Item :dataList='dataList'></Item>
		</div>
	</div>
</template>
<script>
	import { Swiper } from 'vux'
	import { Grid, GridItem } from 'vux'
	import { Flexbox, FlexboxItem } from 'vux'
	import Item from '../../components/item.vue'
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
				demo03_list:imgList,
				dataList:null
			}
		},
		components:{
			Swiper,
			Grid,
    		GridItem,
    		Item
		},
		computed: {
		    getDebitList () {
		      return this.$store.getters.getDebitList;
		    }
		},
		methods:{

		},
		created () {
			this.dataList = this.getDebitList
		},
		mounted () {
			//console.info('dayin',this.getDebitList)
			//this.dataList = this.getDebitList;
			//console.info('canshu',this.dataList)
		}
	}
</script>
<style>
@import '../../assets/css/public.css'
	.index-intro{

	}
	.index_tit{
		padding:5px 0;
	}

</style>