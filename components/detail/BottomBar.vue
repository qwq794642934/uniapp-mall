<template>
	<view class="bottom-bar">
		<view class="message  iconfont icon-xiaoxi"/>
		<view class="cart iconfont icon-gouwuche" @click="goTocart">
			<view class="icon" v-if="count > 0">
				+{{count}}
			</view>
		</view>
		<view class="add" @click="addTocart()">加入购物车</view>
		<view class="buy" @click="buy()">立即购买</view>
	</view>
</template>

<script>
	export default {
		methods:{
			buy(){
				this.$emit('buyClick')
			},
			addTocart(){
				this.$emit('addClick')
			},
			goTocart(){
				this.$emit('goTocart')
			}
		},
		props:{
			count: {
				type: Number,
				default: 0
			}
		}
	}
</script>

<style scoped>
/* @import url(//at.alicdn.com/t/font_1706365_rk4vegwnlqq.css); */
.bottom-bar{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 110rpx;
		background: #FFFFFF;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		text-align: center;
		box-shadow: 0 0 10px rgba(0,0,0,.2);
	}
	.iconfont{
		background: #000000;
		color: #FFFFFF;
		border-radius: 50%;
		font-size: 50rpx;
		width: 70rpx;
		height: 70rpx;
		line-height: 70rpx;
		
	}
.add{
	background: #000;
	color: #FFFFFF;
	border-radius: 20px;
	font-size: 30rpx;
	height: 60rpx;
	width: 190rpx;
	line-height: 60rpx;
	
}
.buy{
	background: #00a2f3;
	color: #FFFFFF;
	border-radius: 20px;
	font-size: 30rpx;
	height: 60rpx;
	width: 180rpx;
	line-height: 60rpx;
}
.cart{
	position: relative;
}
.icon{
	position: absolute;
	top: -10rpx;
	right: -10rpx;
	width: 30rpx;
	background: #f00a34;
	color: #fff;
	border-radius: 50%;
	text-align: center;
	line-height: 30rpx;
	font-size: 17rpx
}
</style>