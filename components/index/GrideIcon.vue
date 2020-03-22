<template>
	<view class="gride to-gride">
		<view class="gride-item" v-for="(item, index) in dataList" :key="index" >
			<image class="item-img" :src="item.imgUrl" mode=""/>
				<text class="title">{{item.name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			dataList: {
				type: Array,
				default (){
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.gride{
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);
		justify-content: center;
		grid-gap: 1%;
	}
	
.gride-item{
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