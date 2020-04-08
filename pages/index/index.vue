<template>
	<view class="content">
		<!-- #ifdef MP-WEIXIN || H5 -->
			<nav-bar/>
		<!-- #endif -->
		<!-- <show-img></show-img> -->
		 <!-- scroll view x轴开始 -->
		 <scroll-view 
		 scroll-x="true" 
		  class="scroll-content"
			 :scroll-into-view="topBarIntoId">
			 
			 <!-- scroll view 子项 -->
		 <view class="scroll-item" v-for="(item, index) in topBar" 
		 :key="index"
			:id="'top' + index"
			@click="itemClick(index)">
			<!-- 文本 -->
		 	<text  :class="{active : topBarIndex == index}">{{item.name}}</text>
		 </view>
		 </scroll-view>
		 <!-- scroll view x轴结束 -->
		 
		 <!-- 滑块功能 -->
			<swiper  @change="changeTopbar" :current="topBarIndex" :style="{height: pageHeight  + 'px' }">
				
				<!-- 滑块1 开始 -->
		 <swiper-item v-for="(item, index) in scrollitem"
		 :key="index">
					<!-- y轴滑动模块 -->
					<scroll-view scroll-y="true" :style="{height: pageHeight  + 'px' }" @scrolltolower="loadMore(index)" >
						<block v-if="item.data.length > 0">
							<block v-for="(k, i) in item.data" :key="i">
								<!-- 推荐板块 -->
								<!-- 轮播图 -->
								<index-swiper v-if="k.type ==='swiperList'" :swiperData="k.data"/>
								 <!-- 推荐商品 -->
								<template v-if="k.type ==='recommendList'">
									<recommend  :recommendData="k.data"/>
									<card cardTitle="猜你喜欢"/>
								</template>
								<!-- 运动户外板块 -->
								<banner v-if="k.type === 'bannerList'" :banner="k.imgUrl"/>
								<template v-if="k.type === 'iconsList'">
									<gride-icon :dataList="k.data"/>
								<card cardTitle="超级大牌"/>
								</template>
								
								<template v-if="k.type === 'brandList'">
									<brand :brandList="k.data"/>
									<card cardTitle="热销爆品"/>
								</template>
								
								<template v-if="k.type === 'hostList'">
									<ProductItem :prdItemList="k.data" :ItemW="ItemW" :ImgH="ImgH" />
									<card cardTitle="推荐店铺"/>
								</template>
								
								<template v-if="k.type === 'shopList'">
									<shop :shopList="k.data" />
									<card cardTitle="为您推荐"/>
								</template>
								
								<!-- 商品展示 -->
								<produc-list v-if="k.type ==='productList'"
								:productList="k.data" 
								/>
							</block>
						</block>
						<view v-else>
							<h1 style="font-size: 50rpx;">暂无数据。。。。</h1>
						</view>
					</scroll-view>
					<!-- y轴滑动模块 结束 -->
					</swiper-item>
					<!-- 滑块1 结束 -->
			</swiper>
		
	</view>
	
</template>

<script>
	import Shop from "@/components/index/Shop"
	import Card from "@/components/common/Card"
	import Brand from "@/components/index/Brand"
	import Banner from "@/components/index/Banner"
	import NavBar from "@/components/common/NavBar"
	import ShowImg from "@/components/index/ShowImg"
	import Recommend from "@/components/index/Recommend"
	import GrideIcon from "@/components/index/GrideIcon"
	import IndexSwiper from "@/components/index/IndexSwiper"
	import ProducList from "@/components/common/ProductList"
	import ProductItem from "@/components/common/ProductItem"
	
	// mixin
	import {pageHeight} from '@/common/mixins'
	
	import { getData } from "@/network/index"
export default {
	name: 'index',
	//混入
	mixins:[pageHeight ],
	// 组件
	components:{
		Card,
		Shop,
		Brand,
		Banner,
		NavBar,
		ShowImg,
		GrideIcon,
		Recommend,
		ProducList,
		ProductItem,
		IndexSwiper,
	},
	// 数据 传入属性
	data(){
		return {
			topBar: [],
			topBarIndex: 0,
			topBarIntoId: 'top0',
			scrollitem: [],
			ItemW: 250,
			ImgH: 250
		}
	}
	,
	// 生命周期
	onLoad() {
		this.getIndexData(1)
	},
	// 页面状态栏按钮事件监听
	onNavigationBarButtonTap(e) {
		console.log(e)
		if(e.index === 0){
			uni.navigateTo({
				url:'../Search/Search'
			})
		}
	},
	// 事件
	methods: {
		itemClick(index){
			this.topBarIndex = index
			this.topBarIntoId = 'top' + index
			if(this.scrollitem[index].scrollX){
				this.SwitchData(this.topBar[index].id)
			}
			
		},
		changeTopbar(e){
			this.itemClick(e.detail.current)
			},
			getIndexData(id){
				getData(id, 1).then(res => {
					console.log(res)
					let title = res.data.topBar
					let data = res.data.data
					this.topBar = title
					this.scrollitem = this.initData(data)
					this.scrollitem[0].scrollX = false
				})
			},
			initData(res){
				let arr = []
				for(let i =0;i<this.topBar.length; i++){
					let obj = {
						data: [],
						scrollX: true,
						page: 1
					}
					if(i==0){
						obj.data = res
					}
					arr.push(obj)
				}
				return arr
			},
			// 获取切换topbar 数据
			SwitchData(id){
				getData(id, 1).then(res => {
					console.log(res);
					let index = this.topBarIndex
					if(!res.data){
						return 
					}
					this.scrollitem[index].data.push(...res.data)				
				})
				this.scrollitem[this.topBarIndex].scrollX = false
			}
			,
			// 下拉加载更多
			loadMore(index){
			uni.showLoading({
				title:"加载中...",
				duration: 2000
			}) 
		},
		
				
},
//计算属性

};
</script>
<style scoped>
	.scroll-content{
		width: 100%;
		white-space: nowrap;
	}
	.scroll-item{
		font-size: 40rpx;
		padding: 10rpx 30rpx;
		display: inline-block;
	}

	.active{
		padding-bottom: 10rpx;
		color: #0A98D5;
		border-bottom: #0A98D5 solid 6rpx;
	}
	.load-text{
		border-top: 1px #333333 solid;
		text-align: center;
		font-size: 26rpx;
		line-height: 60rpx;
		}
</style>
