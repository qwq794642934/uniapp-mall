<template>
	<view class="banner">
		<image class="banner-img" :src="banner" mode=""></image>
	</view>
</template>

<script>
	export default {
		name: 'banner',
		props:{
			banner: {
				type: String
			}
		}
	}
</script>

<style scoped>

.banner-img{
	width: 100%;
	height: 375rpx;
}
</style>