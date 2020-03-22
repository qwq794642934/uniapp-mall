<template>
	<view class="show-list">
		<view class="show-title f-color">
			<view class="show-item" v-for="(item, index) in showList.data" :key="index" @click="chanegTab(index)">
				<view :class="showList.currentIndex === index ? 'f-active-color' : '' ">{{ item.name }}</view>
				<view class="show-icon">
					<view class="iconfont icon-xiajiantou1 up"
								:class="item.status === 1 ? 'f-active-color': '' "
					></view>
					<view class="iconfont icon-xiajiantou donw"
								:class="item.status === 2 ? 'f-active-color': '' "
						></view>
				</view>
			</view>
		</view>
		<lines />
		<ProductItem :prdItemList="dataList" v-if="dataList.length > 0"/>
		<view v-else class="no-product">
			抱歉，没有你心仪的商品哦，亲！
		</view>
	</view>
</template>

<script>
import Lines from '@/components/common/Lines';
import ProductItem from "@/components/common/ProductItem"
import { getSearchData } from "@/network/index"
export default {
	components: {
		Lines,
		ProductItem
	},
	props:{
		keyword: String
	},
	data(){
		return {
			showList:{
				currentIndex: 0,
				data:[
				{name:'价格',status: 0, appoint: 'pprice'},
				{name:'折扣',status: 0, appoint:'discount'},
				{name:'品牌',status: 0},
				]
			},
			dataList: []
		}
	},
	computed:{
		orderBY(){
			//拿到当前对象
			let obj = this.showList.data[this.showList.currentIndex]
			let val = obj.status === 1 ? 'desc': 'asc'
			 return {
				 [obj.key]: val
			 }
					}
	},
	//事件监听
	methods:{
		chanegTab(index){
			// 引索值
			let idx = this.showList.currentIndex
			//
			let item = this.showList.data[idx];
			if(idx === index){
				return item.status = item.status == 1 ? 2 : 1;
			}
			item.status = 0
			let newItem = this.showList.data[index]
			newItem.status = 1
			this.showList.currentIndex = index
		},
	},
	//组件生命周期
	mounted() {
	getSearchData(this.keyword).then(data => {
		this.dataList.push(...data.data)
	})
	}

}
</script>

<style scoped>
.show-title {
	position: sticky;
	top: 0;
	z-index: 1;
	background-color: #ffffff;
	display: flex;
}
.show-item {
	flex: 1;
	display: flex;
	justify-content: center;
	justify-items: center;
}
.show-icon {
	position: relative;
	margin-left: 10rpx;
}
.iconfont {
	position: absolute;
	font-size: 25rpx;
}
.up {
	top: 7rpx;
}
.donw {
	top: 20rpx;
}
.no-product{
	text-align: center;
	font-weight: 900;
	padding-top: 50rpx;
}
</style>
