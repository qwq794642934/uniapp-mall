<template>
	<view class="content">
		<!-- #ifdef MP-WEIXIN || H5 -->
			<nav-bar/>
		<!-- #endif -->
		<!-- <show-img></show-img> -->
	<!-- 	
		<shop />
		 -->
		 <scroll-view 
		 scroll-x="true" 
		  class="scroll-content"
			 :scroll-into-view="topBarIntoId">
			 
		 <view class="scroll-item" v-for="(item, index) in topBar" 
		 :key="index"
			:id="'top' + index"
			@click="itemClick(index)">
		 	<text :class="{active : topBarIndex == index}">{{item.name}}</text>
		 </view>
		 </scroll-view>
			<swiper @change="changeTopbar" :current="topBarIndex" :style="{height: pageHeight * 2 + 'rpx' }">
				<swiper-item  >
						<view class="recommend-page">
							<index-swiper/>
							<recommend></recommend>
							<cart cartTitle="猜你喜欢"/>
							<produc-list :product-list="data" itemW="250rpx"/>
						</view>	
				</swiper-item>
				
				<swiper-item>
					<view class="recommend-page">
						<banner/>
						<gride-icon/>
						<gride-img/>
					</view>
				</swiper-item>
<!-- 				v-for="(item, index) in topBar" 
		 :key="index" -->
			</swiper>
		
	</view>
</template>

<script>
	import NavBar from "@/components/common/NavBar"
	import IndexSwiper from "@/components/IndexSwiper/IndexSwiper"
	import Recommend from "@/components/common/Recommend"
	import Cart from "@/components/common/Cart"
	import ProducList from "@/components/common/ProductList"
	import Banner from "@/components/common/Banner"
	import GrideIcon from "@/components/common/GrideIcon"
	import GrideImg from "@/components/common/GrideImg"
	import ShowImg from "@/components/common/ShowImg"
	import Shop from "@/components/common/Shop"
export default {
	data(){
		return {
			topBar: [
				{
					name: '家居'
				},
				{
					name: '潮牌'
				},
				{
					name: '电器'
				},
				{
					name: '母婴'
				},
				{
					name: '食品'
				},
				{
					name: '户外'
				}
			],
			topBarIndex: 0,
			topBarIntoId: 'top0',
			pageHeight: 0,
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
	,
	onLoad() {
		uni.request({
			url: 'http://47.105.218.103:3000/api/index_list/data',
			success: (res) => {
				console.log(res);
			}
		})
	},
	onReady() {
	 const view = uni.createSelectorQuery().select('.recommend-page')
	  view.boundingClientRect(data => {
			// console.log(data)
			this.pageHeight = data.height
		}).exec();
		
		
	},
	methods: {
		itemClick(index){
			this.topBarIndex = index
			this.topBarIntoId = 'top' + index
		},
		changeTopbar(e){
			this.itemClick(e.detail.current)
			},
},
	components:{
		NavBar,
		IndexSwiper,
		Recommend,
		Cart,
		ProducList,
		Banner,
		GrideIcon,
		GrideImg,
		ShowImg,
		Shop
	}
};
</script>
<style scoped>
	.scroll-content{
		width: 100%;
		white-space: nowrap;
	}
	.scroll-item{
		font-size: 50rpx;
		padding: 10rpx 30rpx;
		display: inline-block;
	}

	.active{
		padding-bottom: 10rpx;
		color: #0A98D5;
		border-bottom: #0A98D5 solid 6rpx;
	}
</style>
