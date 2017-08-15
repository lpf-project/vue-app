<template>
	<div>
		<x-header :left-options="{showBack: true}" title="申请借款"></x-header>

	</div>
</template>
<script>
import { XHeader } from 'vux'
	export default {
		data () {
			return {
				selOptions:0
			}
		},
		components:{
			XHeader
		},
		methods:{

		},
		mounted () {
			//console.info('shenqing',this.$route.query.id)
		}
	}
</script>
<style>

</style>