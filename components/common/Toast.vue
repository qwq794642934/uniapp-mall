<template>
	<view class="toast">
		<view class="text">
			{{message}}
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			message: {
				type: String,
				default: 'LOADDING...'
			}
		}
	}
</script>

<style scoped>
	.toast{
		position: fixed;
		box-sizing: border-box;
		top: 50%;
		left: 50%;
		width: 300rpx;
		height: 300rpx;
		background: rgba(0,0,0,.3);
		z-index: 9;
		transform: translate(-50%, -50%);
		border-radius: 10px;
	}
	

	.text{
		color: #FFFFFF;
		height: 300rpx;
		font-size: 40rpx;
		line-height: 300rpx;
		font-weight: 600;
		text-align: center;
		}
	
</style>