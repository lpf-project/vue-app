<template>
	<div>
		<x-header :left-options="{showBack: false}" title="借款"></x-header>
		<div class='options'>
			<button-tab v-model="selOptions">
		        <button-tab-item @on-item-click="consoleIndex()">利率高</button-tab-item>
		        <button-tab-item selected @on-item-click="consoleIndex()">额度大</button-tab-item>
		        <button-tab-item @on-item-click="consoleIndex()">申请快</button-tab-item>
        	</button-tab> 
		</div>
		<Item :dataList='dataList'></Item>	
	</div>
</template>
<script>
import { XHeader,ButtonTab,ButtonTabItem } from 'vux'
import Item from '../../components/item.vue'
	export default {
		data () {
			return {
				selOptions:1,
				dataList:null
			}
		},
		components:{
			XHeader,
			ButtonTab,
    		ButtonTabItem,
    		Item
		},
		computed: {
		    getDebitList () {
		      return this.$store.getters.getDebitList1;
		    }
		},
		methods:{
			consoleIndex () {
				console.log('click demo01',this.selOptions)
				this.getList();
			},
			getList () {
				if(this.selOptions==0){
					this.dataList = this.getDebitList.selRate;
				}
				if(this.selOptions==1){
					this.dataList = this.getDebitList.selMoney;
				}
				if(this.selOptions==2){
					this.dataList = this.getDebitList.selShort;
				}

			}
		},
		mounted () {
			
		},
		created () {
			//console.info('model',this.selOptions)
			//this.dataList = this.getDebitList
			console.info('shenqing',this.getDebitList)
			this.getList();
		}
	}
</script>
<style>
	.options{
		margin:5px 0;
	}
</style>