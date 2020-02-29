<template>
		<swiper :indicator-dots="true" circular :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-img" src="../../static/bannner/swiper1.jpg" mode=""></image></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-img" src="../../static/bannner/swiper2.jpg" mode=""></image></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="swiper-img" src="../../static/bannner/swiper3.jpg" mode=""></image></view>
			</swiper-item>
		</swiper>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	
	swiper{
		width: 100%;
		height: 400rpx;
	}
	.swiper-img{
		width: 100%;
		height: 400rpx;
	}
</style>
