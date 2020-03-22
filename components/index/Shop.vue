<template>
	<view class="shop" >
			<view class="shop-item" v-for="(item, index) in shopList" :key="index">
				<view class="big-img">
					<image class="big-img" :src="item.bigUrl" mode=""></image>
				</view>
				<scroll-view scroll-x="true" class="scroll-content">
					<view class="scroll-item">
						<ProductItem :prdItemList="item.data" :ItemW="ItemW" :ImgH="ImgH" :title="title" isWrap="no-wrap"/>
					</view>
				</scroll-view>
			</view>
	</view>
</template>

<script>
	import ProductItem from "@/components/common/ProductItem"
	export default {
		components:{
			ProductItem
		},
		props:{
			shopList: {
				type: Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				ItemW: 200,
				ImgH: 200,
				title: 20
			}
		}
	}
</script>

<style scoped>
.big-img{
	height: 350rpx;
	width: 100%;
}
.scroll-content{
	width: 100%;
	white-space: nowrap;
}
.scroll-item{
	display: inline-block;
}

</style>