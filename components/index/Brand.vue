<template>
	<view class="brand to-brand">
		<view class="brand-item" v-for="(item, index) in brandList" :key="index">
			<image class="item-img" :src="item.imgUrl"/>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			brandList: {
				type: Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.brand{
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(3, 1fr);
		justify-content: center;
		grid-gap: 1%;
	}
	
.brand-item{
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