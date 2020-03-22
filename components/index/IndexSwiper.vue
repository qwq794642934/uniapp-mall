<template>
		<swiper :indicator-dots="true" circular :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item, index) in swiperData" :key="index">
				<view class="swiper-item">
					<image class="swiper-img" :src="item.imgUrl" mode=""/>
				</view>
			</swiper-item>
		</swiper>
</template>

<script>
	export default {
		//数据 属性
		props:{
			swiperData: {
				type: Array,
				default(){
					return []
				}
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
