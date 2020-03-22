<template>
	<view>
		<lines />
		<view class="category">
			<view class="title">
					<scroll-view scroll-y="true" :style="{ height: pageHeight+ 41  + 'px' }" >
						<view v-for="(item, index) in titleList" 
						:key="index" class="title-name" @click="titleClick(index)" :class="{active : index === currentIndex }">{{item.name}}</view>
					</scroll-view>
			</view>
			
			<view class="content">
				<scroll-view scroll-y="true" :style="{height: pageHeight+ 41  + 'px' }" >
					<!-- 分类图标 副分类 -->
						<view class="content-item" v-for="(item, index) in contentData" :key="index">
							<view class="subtitle">{{item.title}}</view>
							<view class="subcategory" >
								<view class="subcategory-item" v-for="(x, i) in item.data" :key="i">
									<image :src="x.imgUrl" mode=""/>
								<view class="name">{{x.name}}</view>
								
								</view>
							</view>
							<lines class="lines"/>
						</view>
				</scroll-view>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	import { pageHeight} from "@/common/mixins"
	import { getTitle, getContent} from "@/network/category"
	import Lines from '@/components/common/Lines';
	import ProductItem from "@/components/common/ProductItem"
	export default {
		components:{ Lines, ProductItem},
		mixins:[ pageHeight ],
		data() {
			return {
				ItemW: 245,
				imgH: 245,
				titleList: [],
				currentIndex: 0,
				contentList: [],
				contentData: [
          {
            title: '高端手机',
            data: 
          [
            {imgUrl: "../../static/brand/huawei.jpg", name: '华为'},
            {imgUrl: "../../static/brand/honor.jpg", name: '荣耀'},
            {imgUrl: "../../static/brand/apple.jpg", name: '苹果'},
            {imgUrl: "../../static/brand/sansang.png", name: '三星'},
          ]
          },
          {
            title: '中高端手机',
            data: 
          [
            {imgUrl: "../../static/brand/mi.png", name: '小米'},
            {imgUrl: "../../static/brand/360.jpg", name: '360'},
            {imgUrl: "../../static/brand/oppo.png", name: 'oppo'},
            {imgUrl: "../../static/brand/vivo.png", name: 'vivo'},
          ]
          },

          {
            title: '中端手机',
            data: 
            [
              {imgUrl: "../../static/brand/meizu.jpg", name: '魅族'},
              {imgUrl: "../../static/brand/oneplus.jpg", name: '一加'},
              {imgUrl: "../../static/brand/nubia.jpg", name: '努比亚'},
              {imgUrl: "../../static/brand/smartisan.jpg", name: '锤子'}
            ]
          }
    ]
			}
		},
		// 生命周期
		onLoad() {
			this.__getTitle()
		},
		methods: {
			__getTitle(){
				getTitle().then(data => {
					//获取分类数据
					this.titleList = data.data
					
				})
			},
			__getContent(index){
				getContent(index).then(data => {
					this.contentList[index].subCategory = data.data
				})
			},
			titleClick(index){
				this.currentIndex = index
			}
		},
	}
</script>

<style scoped>
	.category{
		display: flex;
		justify-content: space-between;
	}
.content{
	width: 65%;
	height: 100%;
}
.title{
	width: 30%;
	height: 100%;
	background: #f7f7f7;
	text-align: center;
}
.title-name{
	height: 100rpx;
	line-height: 100rpx;
	border-bottom: #FFFFFF 1px solid;
	
}
.active{
	border-left: #00B7FF 3px solid;
	background: #FFFFFF;
	color: #00B7FF;
}
.subtitle{
	font-size: 30rpx;
	padding: 20rpx;
	font-weight: bold;
}
.subcategory{
	display: flex;
	text-align: center;
	flex-wrap: wrap;
}

.subcategory-item{
	width: 33.33%;
}
.subcategory-item image{
	width: 150rpx;
	height: 150rpx;
}
.name{
	font-size: 30rpx;
	font-weight: bold;
}
.lines{
	margin-top: 20rpx;
}

</style>
