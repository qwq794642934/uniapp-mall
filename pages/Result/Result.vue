<template>
	<view class="result">
		<show-list :keyword="keyword"/>
	</view>
</template>

<script>
	import ShowList from "@/components/common/ShowList"
	export default {
		components:{
			ShowList
		},
		data() {
			return {
				keyword: ''
			}
		},
		methods: {
			
		},
		//页面生命周期
		onLoad(e) {
	//	#ifdef APP-PLUS 
			let webView = this.$mp.page.$getAppWebview();
			webView.setTitleNViewSearchInputText(e.keyword)
		// #endif
			this.keyword = e.keyword
		}
	}
</script>

<style>

</style>
