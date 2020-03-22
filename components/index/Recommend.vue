<template>
	<view class="recommend bg-color">
		<view class="recommend-item" v-for="(item, index) in recommendData" :key="index">
			
			<image class="item-big" :src="item.bigUrl" mode=""/>
			<view class="item-samll">
				<block v-for="(k,i) in item.data" :key="i">
					<image class="item-img" :src="k.imgUrl" mode=""/>
				</block>
			</view>
		</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'recommend',
	props: {
		recommendData: {
			type: Array,
			default() {
				return [];
			}
		}
	}
};
</script>

<style scoped>
.recommend {
	padding: 20rpx;
}
.recommend-item {
	display: flex;
	flex-direction: column;
	border-radius: 20rpx;
	border: 2rpx solid #49bdfb;
	overflow: hidden;
	margin: 20rpx 0;
}
.item-big {
	width: 100%;
	height: 300rpx;
}
.item-samll {
	width: 100%;
	height: 240rpx;
}
.item-img {
	width: 33.3333%;
	height: 240rpx;
}
</style>
