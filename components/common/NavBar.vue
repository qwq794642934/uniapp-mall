<template>
		<view class="wx-nav">
			<slot name="left">
				<view class="iconfont icon-fangdajing1"/>
				</slot>
			<slot name="center">
				<text>百年奥莱</text>
			</slot>
			<slot name="rignt">
				<view class="iconfont icon-xiaoxi2"/>
			</slot>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.wx-nav {
		position: sticky;
		top: 0;
		z-index: 9;
		background: #FFFFFF;
		
		text-align: center;
		height: 150rpx;
		width: 100%;
		line-height: 150rpx;
		font-size: 35rpx;
	
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.iconfont {
		font-size: 50rpx;
	}
	.icon-fangdajing1 {
		margin-left: 15rpx;
	}
	.icon-xiaoxi2 {
		margin-right: 15rpx;
	}
</style>
