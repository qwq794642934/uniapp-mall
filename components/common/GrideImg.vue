<template>
	<view class="gride to-gride">
		<view class="gride-item ">
			<image class="item-img" src="../../static/recommend/Children3.jpg" mode=""></image>
		</view>
		
		<view class="gride-item">
			<image class="item-img" src="../../static/recommend/Children3.jpg" mode=""></image>
		</view>
		<view class="gride-item">
			<image class="item-img" src="../../static/recommend/Children3.jpg" mode=""></image>
		</view>
		
		<view class="gride-item">
			<image class="item-img" src="../../static/recommend/Children3.jpg" mode=""></image>
		</view>
		
		<view class="gride-item">
			<image class="item-img" src="../../static/recommend/Children3.jpg" mode=""></image>
		</view>
		
		<view class="gride-item">
			<image class="item-img" src="../../static/recommend/Children3.jpg" mode=""></image>
		</view>
		
		<view class="gride-item">
			<image class="item-img" src="../../static/recommend/Children3.jpg" mode=""></image>
		</view>
		
		<view class="gride-item">
			<image class="item-img" src="../../static/recommend/Children3.jpg" mode=""></image>
		</view>
		<view class="gride-item">
			<image class="item-img" src="../../static/recommend/Children3.jpg" mode=""></image>
		</view>
		<view class="gride-item">
			<image class="item-img" src="../../static/recommend/Children3.jpg" mode=""></image>
		</view>
		<view class="gride-item">
			<image class="item-img" src="../../static/recommend/Children3.jpg" mode=""></image>
		</view>
		<view class="gride-item">
			<image class="item-img" src="../../static/recommend/Children3.jpg" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
	.gride{
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(3, 1fr);
		justify-content: center;
		grid-gap: 1%;
	}
	
.gride-item{
	/* width: 25%; */
	/* height: 200rpx; */
	text-align: center;
}
.title{
	font-size: 35rpx;
}
.item-img{
	border-radius: 10rpx;
	height: 140rpx;
	width: 160rpx;
}
</style>