<template>
	<view class="cart">
		<!-- 自定义导航栏 -->
		<template v-if="productList.length> 0">
			<nav-bar title="购物车" :rightText=" isNav ? '完成' : '编辑'  " fixed="true" statusBar="true" @clickRight=" isNav = !isNav "/>
				
				<!-- 商品内容 -->
				<view class="shop-list">
					
					<view class="shop-item" v-for="(item,index) in productList" :key="index">
						<label class="radio">
							<radio :checked="item.ischeck" @click="checked(index)" color="#FF3333"/>
						</label>
						<view class="image">
							<image :src="item.imgUrl"/>
						</view>
						<view class="shop-profile">
							<view class="shop-name">
								{{item.name}}
							</view>
							<view class="category f-color">
								{{item.category}}
							</view>
							<view class="price">
								<view class="money">
									￥{{item.price}}
								</view>
								<template v-if="isNav">
									<number-box :value="item.count" @change="countChange($event, index)" :min="1"/>
								</template>
								<template v-else>
									<view class="count">
											x{{item.count}}
									</view>
								</template>
								
							</view>
						</view>
					</view>
				</view>
				
				<!-- 底部栏-->
				<view class="bottom-bar">
					<label class="radio" >
						<radio :checked="isAllSelect" @click="checkedAll" color="#FF3333" /><text>全选</text>
					</label>
					<template v-if="isNav">
					<view class="button">
						<view class="btn black">移入收藏夹</view>
						<view class="btn blue" @click="delItem">删除</view>
					</view>
					</template>
					
					<template v-else>
						<view class="total-price">
							<text>总计:￥{{totalPrice}}</text>
						</view>
						<view class="btn blue">
							结算({{totalSelect}})
						</view>
					</template>
					
				</view>	
		</template>
		
		<template v-else>
			<nav-bar title="购物车"  fixed="true" statusBar="true"/>
			<view class="is-none">
				<text>囧~购物车还是空的~</text>
			</view>
		</template>
	
	</view>

</template>


<script>
	import NavBar from "@/components/uni-app/uni-nav-bar/uni-nav-bar"
	import Icon from "@/components/uni-app/uni-icons/uni-icons"
	import StatusBar from "@/components/uni-app/uni-status-bar/uni-status-bar"
	import {mapState, mapActions, mapGetters} from "vuex"
	import NumberBox from "@/components/uni-app/uni-number-box/uni-number-box"
	export default {
		components:{
			NavBar,
			Icon,
			StatusBar,
			NumberBox
		},
		data() {
			return {
				isNav: false,
			}
		},
		methods: {
			checked(index){
				this.productList[index].ischeck = !this.productList[index].ischeck
			},
			checkedAll(){
				if(this.isAllSelect){
					this.productList.forEach(item => item.ischeck = false)
				}else{
					this.productList.forEach(item => item.ischeck = true)
				}
			},
			countChange(val,index){
				this.productList[index].count = val
			},
			delItem(){
			uni.showModal({
				title:'提示',
				content:'是否删除商品',
				cancelText:'放弃',
				cancelColor:'#1AAD19',
				confirmColor:'#FF3333',
				confirmText:'确定',
				success(res) {
					if(res.confirm){
						this.productList.filter(item => item.ischeck).forEach(item => {
								 let index = this.productList.indexOf(item)
								this.productList.splice(index, 1)
							})
						console.log('aaa');
					}
				}
			})
			
			}
			
		},
		computed:{
			...mapGetters('cart', ['productList', 'totalPrice','isAllSelect', 'totalSelect'])
		}
		
	}
</script>

<style scoped>
.shop-list{
	padding-bottom: 120rpx;
}
 .shop-item{
	 height: 240rpx;
	 width: 100%;
	 display: flex;
	 align-items: center;
	 background-color: #ebebeb;
	 border-bottom: #fff 10px solid;
 }
 .scroll-item .image{
	 width: 200rpx;
	 height: 200rpx;
 }
 
 .shop-item image{
	 margin-top: 20rpx;
	 width: 200rpx;
	 height: 200rpx;
 }
 .shop-item .shop-profile{	
	 margin-left: 20rpx;
 }
 .shop-profile .shop-name{
	 line-height: 1;
 }
 
 .shop-profile .category{
	 font-size: 28rpx;
	 margin-top: 10rpx;
 }
 .price{
	width: 440rpx;
	 display: flex;
	 justify-content: space-between;
 }

 .bottom-bar{
	 height: 120rpx;
	 width: 100%;
	 position: fixed;
	 bottom: 0;
	 left: 0;
	 right: 0;
	 display: flex;
	 background-color: #fff;
	 justify-content: space-between;
	 align-items: center;
	 
 }
 .shop-list .radio{
	 margin-left: 20rpx;
 }
 .bottom-bar .radio{
	 margin-left: 20rpx;
	 font-size: 40rpx;
	 color: #333333;
 }
 .btn{
	 width: 200rpx;
	 color: #fff;
	 font-size: 30rpx;
	 line-height: 120rpx;
	 text-align: center;
 }
 .blue{
	 background: #00A2F3;
 }
 .black{
	 background: #000000;
 }
 .total-price text{
	 font-size: 40rpx;
	 color: #00A2F3;
 }
 
 .is-none{
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		margin-top: 50%;
		
 }
	 
 .button{
	 display: flex;
 }
</style>
