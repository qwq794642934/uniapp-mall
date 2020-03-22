<template>
	<view class="card">
		<view class="card-side">
			
		</view>
		<slot name="center">
			<view class="card-title">{{cardTitle}}</view>
			</slot>
			<view class="card-side">
				
			</view>
	</view>
</template>

<script>
	export default {
		props:{
			cardTitle: String,
		}
	}
</script>

<style scoped>
	.card{
		padding: 10rpx 0;
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
	}
	.card-side{
		width: 50rpx;
		height: 10rpx;
		border-radius: 5rpx;
		background: #333333;
		
	}
	.card-title{
		padding: 0 20rpx;
		font-size: 35rpx;
		font-weight: 700;
	}
</style>