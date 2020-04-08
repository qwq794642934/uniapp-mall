<template>
	<view class="product" :style="[{'justify-content': JustfyContent, 'flex-wrap': isWrap}]">
		<view class="product-item"
		:style="[{'width' : ItemW + 'rpx'}]"
		v-for="(item, index) in prdItemList" 
		:key="index" 
		@click="goDetail(item.id)">
		
			<image  
			class="product-img"
			:src="item.imgUrl" 
			:style="[{'height': ImgH + 'rpx'}]"/>
				<view class="product-content" >
					<text class="product-name"
					:style="[{'font-size': title + 'rpx'}]"
					>{{item.name}}</text>
					<view >
						<!-- 新价 -->
						<text class="new">${{item.pprice}}</text>
						<!-- 原价 -->
						<text class="old">${{item.oprice}}</text>
					</view>
			<text class="discount">{{item.discount}}折</text>
				</view>
		</view> 

		<!-- 子项  结束-->
		
	</view>
	
</template>

<script>
	export default {
		props:{
			prdItemList: {
				type: Array,
				default(){
					return []
				}
			},
			isWrap:{
				type: String,
				default: 'wrap'
			},
			JustfyContent: {
				type: String,
				default: 'flex-start'
			},
			ItemW:{
				type: Number,
				default: 375
			},
			ImgH: {
				type: Number,
				default: 375
			},
			title: {
				type: Number,
				default: 26
			},
		},
		methods:{
			goDetail(id){
				uni.navigateTo({
					url:"../../pages/Detail/Detail?id="+ id,
					
				})
				
			}
		}
	}
</script>

<style scoped>
.product{
		display: flex;
	}
	.product-item{
		padding-bottom: 20rpx;
		box-sizing: border-box;
	}
	.product-img{
		width: 100%;
	}

	.product-content{
		text-align: center;
	}
	.product-name{
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-all;
		color: #333333;
		padding: 7rpx 20rpx;
		}
		.price{
			padding: 0 5rpx;
		}
		.new{
			font-size: 26rpx;
		}
	.old{
			font-size: 24rpx;
			color: #b6b6b6;
			text-decoration: line-through;
		}
		.discount{
			font-size: 20rpx;
			border: 1rpx solid #ff2003;
			color: #ff2003;
			border-radius: 7rpx;
			padding: 2rpx 4rpx;
		}
</style>