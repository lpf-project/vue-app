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
			<h5 class='index_tit'>良心推荐</h5>
			<div v-for='item in getDebitList'>
				<flexbox>
					<flexbox-item :span="3">
				      <div class="flex-demo">
				      	<img :src="item.src" alt="">
				      </div>
					</flexbox-item>
					<flexbox-item>
					   <div class="flex-demo">
					   		<div class="info_tit">
					   			<span class='fl'>{{item.title}}</span>
					   			<span class='fr'></span>
					   		</div>
					   		<p class="info_intro">{{item.intro}}</p>
					   		<div class="info_tag">
					   			<div></div>
					   			<div></div>
					   		</div>
					   </div>
					</flexbox-item>
				</flexbox>
			</div>
			
			
		</div>
	</div>
</template>
<script>
	import { Swiper } from 'vux'
	import { Grid, GridItem } from 'vux'
	import { Flexbox, FlexboxItem } from 'vux'
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
    		GridItem,
    		Flexbox,
    		FlexboxItem
		},
		computed: {
		    getDebitList () {
		      return this.$store.getters.getDebitList;
		    }
		},
		methods:{
		
		},
		mounted () {
			console.info('dayin',this.getDebitList)
			//this.cardList = this.getDebitLisst;
		}
	}
</script>
<style>
	.index-intro{

	}
	.index_tit{
		height:20px;
		padding:5px 0;
	}
	.info_tit{
		height:15px;
	}
</style>