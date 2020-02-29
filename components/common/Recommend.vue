<template>
	<view class="recommend bg-color">
		
		<view class="recommend-item">
		<image class="item-big" src="../../static/recommend/Children.jpg" mode=""></image>
		<view class="item-samll">
			<image class="item-img" src="../../static/recommend/Children1.jpg" mode=""></image>
			<image class="item-img" src="../../static/recommend/Children2.jpg" mode=""></image>
			<image class="item-img" src="../../static/recommend/Children3.jpg" mode=""></image>
		</view>
	</view>
	
	
	<view class="recommend-item">
		<image class="item-big" src="../../static/recommend/Furnishing.jpg" mode=""></image>
		<view class="item-samll">
			<image class="item-img" src="../../static/recommend/Furnishing1.jpg" mode=""></image>
			<image class="item-img" src="../../static/recommend/Furnishing2.jpg" mode=""></image>
			<image class="item-img" src="../../static/recommend/Furnishing3.jpg" mode=""></image>
		</view>
	</view>
	
	
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
	.recommend{
		padding: 20rpx;
	}
	.recommend-item{
		display: flex;
		flex-direction: column;
		border-radius: 20rpx;
		border: 2rpx solid #49bdfb;
		overflow: hidden;
		margin: 20rpx 0;
	}
	.item-big{
		width: 100% ;
		height: 300rpx;
	}
	.item-samll{
		width: 100%;
		height: 240rpx;
	}
	.item-img{
		width: 33.3333%;
		height: 240rpx;
		
	}
</style>
