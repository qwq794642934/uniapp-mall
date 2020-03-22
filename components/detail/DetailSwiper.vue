<template>
<view >
	<swiper :indicator-dots="true" >
		<swiper-item>
			<view class="swiper-item">
				<image src="../../static/product/commodity4.jpg" mode=""></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image src="../../static/product/commodity2.jpg" mode=""></image>
			</view>
		</swiper-item>
	</swiper>
</view>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
swiper {
	width: 100%;
	height: 850rpx;
}

.swiper-item image{
	width: 100%;
	height: 800rpx;
}
</style>