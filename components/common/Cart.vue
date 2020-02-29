<template>
	<view class="cart">
		<view class="cart-side">
			
		</view>
		<slot name="center">
			<view class="cart-title">{{cartTitle}}</view>
			</slot>
			<view class="cart-side">
				
			</view>
	</view>
</template>

<script>
	export default {
		props:{
			cartTitle: String,
		}
	}
</script>

<style scoped>
	.cart{
		padding: 20rpx 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.cart-side{
		width: 50rpx;
		height: 10rpx;
		border-radius: 5rpx;
		background: #333333;
		
	}
	.cart-title{
		padding: 0 20rpx;
		font-size: 35rpx;
		font-weight: 700;
	}
</style>