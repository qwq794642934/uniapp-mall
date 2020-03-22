<template>
	<view class="show">
		<image class="show-big" src="../../static/showimg/dianqi.jpg" mode=""></image>
		<view class="show-small">
			<image class="small-img" src="../../static/showimg/dianqi2.jpg" mode=""></image>
			<image class="small-img" src="../../static/showimg/dianqi3.jpg" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
.show{
	width: 100%;
	display: flex;
	justify-content: space-around;
}
.show-big{
	width: 49%;
	height: 600rpx;
}
.show-small{
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 49%;
	height: 600rpx;
}
.small-img{
	width: 100%;
	height: 49%;
}
</style>