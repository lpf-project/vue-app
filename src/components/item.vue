<template>
	<div>
		<div class='box' v-for='o in dataList' @click="todetail(o.id)">
			<div class='box-item1'>
				<img :src="o.src">
			</div>
			<div class='box-item2'>
				<div class='item-title'>
					<span class='item-tit fl'>{{o.title}}</span>
					<span class='item-rate fr'>{{o.rate}}最低月费 |<i> {{o.money}}</i></span>
				</div>
				<p class='item-intro'>{{o.intro}}</p>
				<div>
					<div class='fl'>
						<span class='tag' v-for='i in o.tag'>{{i}}</span>
					</div>
					<span class='fr apply'>{{o.appPeople}}人申请</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

	export default {
		data () {
			return {
				
			}
		},
		methods:{
			todetail(data){
				console.info('dianji',data)
				//
				this.$router.push({ path: '/applyDetail', query: { id: data }})

		    	//this.$router.push({path:'/userDetails',query:{"_id":_id}})
				//跳转到详情页面
			}

		},
		props:['dataList'],
		created () {
			//console.info('父组件给子组件传递参数',this.dataList)
		}
	}
</script>
<style>
	.box{
		display: flex;
		border-top:1px solid #ccc;
		border-bottom:1px solid #ccc;
		padding:5px 0;
		margin:4px;
	}
	.box-item1{
		flex:1;
		padding-left:3px;
	}
	.box-item2{
		flex:3;
	}
	img{
		display:block;
	}
	.item-title{
		overflow:hidden;
	}
	.item-tit{
		font-size:14px;
		padding-right:16px;
		padding-top:2px;
	}
	.item-rate{
		font-size:8px;

	}
	.item-rate i{
		font-style:normal;
		color:#f00;
	}
	.fl{
		float:left;
	}.
	.fr{
		float:right;
	}
	.item-intro{
		font-size:12px;
		text-align: left;
	}
	.tag{
		display:inline-block;
		border:1px solid blue;
		font-size:8px;
		color:blue;
		margin-right:1px;
		padding:2px;
	}
	.apply{
		font-size:12px;
	}
</style>