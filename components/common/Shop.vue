<template>
	<view class="shop">
		<view class="big-img">
			<image class="big-img" src="../../static/bannner/swiper1.jpg" mode=""></image>
		</view>
		<scroll-view scroll-x="true" class="scroll">
			<view class="scroll-item">
				<product-list 
				:productList="data" 
				isWrap="nowrap" 
				itemW="250rpx" 
				imgH="250rpx"
				namefs="25rpx"
				npricefs="20rpx"
				onpricefs="17rpx"
				dicfs="19rpx"
				/>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import ProductList from "@/components/common/ProductList"
	export default {
		components:{
			ProductList
		},
		data(){
			return {
				data: [
					{
						id: 2,
						name: "LOFTSHINE珞炫潮牌女装2019秋专柜正品带帽绑结撞色卫衣28309102",
						image: "../../static/product/59.jpg",
						nprice: "100",
						oprice: "999",
						discount: "5.2"
					},
					{
						id: 2,
						name: "LOFTSHINE珞炫潮牌女装2019秋专柜正品带帽绑结撞色卫衣28309102",
						image: "../../static/product/59.jpg",
						nprice: "100",
						oprice: "999",
						discount: "5.2"
					},
					{
						id: 2,
						name: "LOFTSHINE珞炫潮牌女装2019秋专柜正品带帽绑结撞色卫衣28309102",
						image: "../../static/product/59.jpg",
						nprice: "100",
						oprice: "999",
						discount: "5.2"
					},
					{
						id: 2,
						name: "LOFTSHINE珞炫潮牌女装2019秋专柜正品带帽绑结撞色卫衣28309102",
						image: "../../static/product/59.jpg",
						nprice: "100",
						oprice: "999",
						discount: "5.2"
					},
					{
						id: 2,
						name: "LOFTSHINE珞炫潮牌女装2019秋专柜正品带帽绑结撞色卫衣28309102",
						image: "../../static/product/59.jpg",
						nprice: "100",
						oprice: "999",
						discount: "5.2"
					},
					{
						id: 2,
						name: "LOFTSHINE珞炫潮牌女装2019秋专柜正品带帽绑结撞色卫衣28309102",
						image: "../../static/product/59.jpg",
						nprice: "100",
						oprice: "999",
						discount: "5.2"
					},
					{
						id: 2,
						name: "LOFTSHINE珞炫潮牌女装2019秋专柜正品带帽绑结撞色卫衣28309102",
						image: "../../static/product/59.jpg",
						nprice: "100",
						oprice: "999",
						discount: "5.2"
					},
					{
						id: 2,
						name: "LOFTSHINE珞炫潮牌女装2019秋专柜正品带帽绑结撞色卫衣28309102",
						image: "../../static/product/59.jpg",
						nprice: "100",
						oprice: "999",
						discount: "5.2"
					},
					{
						id: 2,
						name: "LOFTSHINE珞炫潮牌女装2019秋专柜正品带帽绑结撞色卫衣28309102",
						image: "../../static/product/59.jpg",
						nprice: "100",
						oprice: "999",
						discount: "5.2"
					},
					{
						id: 2,
						name: "LOFTSHINE珞炫潮牌女装2019秋专柜正品带帽绑结撞色卫衣28309102",
						image: "../../static/product/59.jpg",
						nprice: "100",
						oprice: "999",
						discount: "5.2"
					},
					{
						id: 2,
						name: "LOFTSHINE珞炫潮牌女装2019秋专柜正品带帽绑结撞色卫衣28309102",
						image: "../../static/product/59.jpg",
						nprice: "100",
						oprice: "999",
						discount: "5.2"
					},
					{
						id: 2,
						name: "LOFTSHINE珞炫潮牌女装2019秋专柜正品带帽绑结撞色卫衣28309102",
						image: "../../static/product/59.jpg",
						nprice: "100",
						oprice: "999",
						discount: "5.2"
					}
				]
			}
		}
	}
</script>

<style scoped>
.shop{
	width: 100%;
	height: 600rpx;
}
.big-img{
	height: 300rpx;
	width: 100%;
}
.scroll{
	width: 100%;
	white-space: nowrap;
}
.scroll-item{
	display: inline-block;
}

</style>