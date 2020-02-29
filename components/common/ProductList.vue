<template>
	<view class="product-list" :style="listStyle" >
		<view class="product-item" :style="{'width': itemW }" v-for="(item, index) in productList" 
		:key="index" >
			<image :style="{'height':imgH}" class="product-img" :src="item.image" mode=""/>
				<view class="product-content" >
					<text class="product-name" :style="{'font-size': namefs }" >{{item.name}}</text>
					<view class="price">
						<text class="price new" :style="{'font-size': npricefs }" >${{item.nprice}}</text>
						<text class="price old" :style="{'font-size': onpricefs}">${{item.oprice}}</text>
					</view>
					<text class="discount" :style="{'font-size': dicfs}">{{item.discount}}折</text>
				</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		components:{
		},
		computed:{
			listStyle(){
				return {'justify-content': this.justifycontent ,'flex-wrap': this.isWrap  }
			}
		},
		props:{
			productList: {
				type: Array,
				default(){
					return []
				}
			},
			imgH: {
				type:  String,
				default: '375rpx'
			},
			itemW: {
				type:  String,
				default: '375rpx'
			},
			isWrap: {
				type: String,
				default: 'wrap'
			},
			justifycontent: {
				type: String,
				default: 'flex-start'
			},
			namefs: {
				type: String,
				default: '30rpx'
			},
			npricefs: {
				type: String,
				default: '30rpx'
			},
			onpricefs: {
				type: String,
				default: '23rpx'
			},
			dicfs: {
				type: String,
				default: '27rpx'
			}
		},
		data(){
			return {
				
				}
			}
		}
</script>

<style scoped>
.product-list{
		display: flex;
	}
	.product-item{
		padding-bottom: 20rpx;
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
		padding: 10rpx 20rpx;
		}
		.price{
			padding: 0 3rpx;
		}

		.price .old{
			color: #b6b6b6;
			text-decoration: line-through;
		}
		.discount{
			font-size: 20rpx;
			border: 1rpx solid #ff2003;
			color: #ff2003;
			border-radius: 7rpx;
			padding: 2rpx 6rpx;
		}
</style>