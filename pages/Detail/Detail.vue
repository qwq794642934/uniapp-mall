<template>
	<view class="detail">
		<DetailSwiper :img="data.imgUrl" />
		<view class="product-info">
			
			<!-- 价格 -->
			<view class="price">
				<view class="new-price margin">
					{{data.pprice}}
				</view>
				<view class="old-price margin">
					原价￥{{data.oprice}}.00
				</view>
			</view>
			<!-- 商品名称 -->
			<view class="title margin">
				{{data.name}}
			</view>
			<view class="tags margin">
				<view class="tag-item">
					<image src="../../static/common/icon1.png" mode="">
					<text>七天无理由</text>
				</view>
				<view class="tag-item">
					<image src="../../static/common/icon1.png" mode="">
					<text>七天无理由</text>
				</view>
			</view>
		</view>
		
		<view class="aa">
			<ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
				<li>6</li>
				<li>7</li>
				<li>8</li>
				<li>9</li>
				<li>10</li>
				<li>11</li>
				<li>12</li>
				<li>13</li>
				<li>14</li>
				<li>15</li>
				<li>16</li>
				<li>17</li>
				<li>18</li>
				<li>19</li>
				<li>20</li>
				<li>21</li>
				<li>22</li>
				<li>23</li>
				<li>24</li>
				<li>25</li>
				<li>26</li>
				<li>27</li>
				<li>28</li>
				<li>29</li>
				<li>30</li>
				<li>31</li>
				<li>32</li>
				<li>33</li>
				<li>34</li>
				<li>35</li>
				<li>36</li>
				<li>37</li>
				<li>38</li>
				<li>39</li>
				<li>40</li>
				<li>41</li>
				<li>42</li>
				<li>43</li>
				<li>44</li>
				<li>45</li>
				<li>46</li>
				<li>47</li>
				<li>48</li>
				<li>49</li>
				<li>50</li>
				<li>51</li>
				<li>52</li>
				<li>53</li>
				<li>54</li>
				<li>55</li>
				<li>56</li>
				<li>57</li>
				<li>58</li>
				<li>59</li>
				<li>60</li>
				<li>61</li>
				<li>62</li>
				<li>63</li>
				<li>64</li>
				<li>65</li>
				<li>66</li>
				<li>67</li>
				<li>68</li>
				<li>69</li>
				<li>70</li>
				<li>71</li>
				<li>72</li>
				<li>73</li>
				<li>74</li>
				<li>75</li>
				<li>76</li>
				<li>77</li>
				<li>78</li>
				<li>79</li>
				<li>80</li>
				<li>81</li>
				<li>82</li>
				<li>83</li>
				<li>84</li>
				<li>85</li>
				<li>86</li>
				<li>87</li>
				<li>88</li>
				<li>89</li>
				<li>90</li>
				<li>91</li>
				<li>92</li>
				<li>93</li>
				<li>94</li>
				<li>95</li>
				<li>96</li>
				<li>97</li>
				<li>98</li>
				<li>99</li>
				<li>100</li>
			</ul>
		</view>
		<Bottombar @goTocart="goTocart" :count="num" @buyClick="buyClick()" @addClick="addClick()"/>
		<!-- 底部滑块 -->
		<view class="pop" v-if="isShow" @touchmove.stop.prevent="">
			<view class="mask" @click="hiddenClick"/>
			<view class="option" :animation="animationData">
				
				<view class="info">
					<image :src="data.imgUrl" mode=""/>
					<view class="info-item">
						<span class="sel-price">${{data.pprice}}</span>
						<view class="select">
							<span class="count">可购110件</span>
							<view class="select-item">
								<text class="sel">请选择</text>
								<text class="sel">颜色分类</text>
								<text class="sel">尺寸</text>
							</view>
						</view>
					</view>
				</view>
				
				<view class="category">
					<span>颜色分类</span>
				</view>
				
				<view class="size">
					<span>尺码</span>
				</view>
				
				<view class="count">
					<span>购买数量</span>
					<number-box min="1" :value="count" @change="changeNumber"/>
				</view>
				
				<view class="btn" @click="addCart">
					确定
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import DetailSwiper from "@/components/detail/DetailSwiper"
	import Bottombar from "@/components/detail/BottomBar"
	import NumberBox from "@/components/uni-app/uni-number-box/uni-number-box"
	import {getDetail} from "@/network/detail.js"
	import {mapMutations} from "vuex"
	export default {
		components:{
			DetailSwiper,
			Bottombar,
			NumberBox},
		data() {
			return {
				isShow: false,
				animationData: {},
				data: {},
				count: 1,
				num: 0
			}
		},
		onBackPress(e){
			if(this.isShow){
				this.hiddenClick()
				return true;
			}
		},
		onNavigationBarButtonTap(e) {
			if(e.type === 'share'){
				uni.share({
					provider:'weixin',
					type:0,
					title: this.data.name,
					scene: 'WXSenceTimeline',
					summary: this.data.name,
					href:'http://192.168.3.13:8000/api/detail?id='+ this.data.id,
					imageUrl:'',
					success(res) {
						uni.showTabBar({
							title:'分享成功'
						})
					},
					fail(err) {
						uni.showTabBar({
							title: JSON.stringify(err)
						})
					}
					
				})
			}
		},
		methods: {
			// 底部购物车按钮跳转
			goTocart(){
				uni.switchTab({
					url:'../cart/cart'
				})
			},
			// vuex actions 添加购物车方法
			...mapMutations('cart', ['addToCart']),
			// 网络请求
			_getDetail(id){
				getDetail(id).then(res => {
					this.data = res.data[0]
				})
			},
			//商品数量改变
			changeNumber(value){
				this.count = value
			},
			// 添加商品到购物车
			addCart(){
				let product = {}
				product.id = this.data.id
				product.price = this.data.pprice
				product.count = this.count
				product.imgUrl = this.data.imgUrl
				product.name = this.data.name
				this.num +=  parseInt(this.count)
				this.addToCart(product)
				uni.showToast({
					title:'购物车添加成功',
					icon:'none'
				})
				this.hiddenClick()
			},
			buyClick(){
				var animation = uni.createAnimation({
				     duration: 200
				   })
				this.animation = animation
				animation.translateY(800).step();
				this.animationData = animation.export()
				this.isShow = true
				setTimeout(() => {
					animation.translateY(0).step()
					this.animationData = animation.export()
				}, 200)
			},
			addClick(){
				var animation = uni.createAnimation({
				     duration: 200
				   })
				this.animation = animation
				animation.translateY(800).step();
				this.animationData = animation.export()
				this.isShow = true
				setTimeout(() => {
					animation.translateY(0).step()
					this.animationData = animation.export()
				}, 200)
			},
			hiddenClick(){
			var animation = uni.createAnimation({
			     duration: 200
			   })
			this.animation = animation
			animation.translateY(600).step();
			this.animationData = animation.export()
			this.isShow = true
			setTimeout(() => {
				animation.translateY(0).step()
				this.isShow = false
			}, 200)
			}
		},
		onLoad(e) {
			console.log(e.id);
			this._getDetail(e.id)
		}
		
		
		
	}
</script>

<style scoped>

.product-info{
	text-align: center;
	box-sizing: border-box;
	}

	.new-price{
		position: relative;
		font-size: 40rpx;
	}
	.new-price::after{
		position: absolute;
		top: 20rpx;
		content: ".00";
		font-size: 27rpx;
	}
	.new-price::before{
		content: "￥";
		font-size: 40rpx;
		
	}
	.old-price{
		font-size: 25rpx;
		text-decoration: line-through;
	}
	.margin{
		margin-top: 30rpx;
	}
	.tags{
		display: flex;
		justify-content: space-evenly;
	}

	.tag-item{
		font-size: 25rpx
	}
	.tag-item image{
		width: 30rpx;
		height: 30rpx;
		padding: 0 10rpx;
	}
	.pop {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 999;
		height: 100%;
		width: 100%;
	}
	.mask{
		position: absolute;
		left: 0;
		right: 0;
		height: 100%;
		width: 100%;
		background: rgba(0,0,0,.3);
	}
.option{
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 820rpx;
	background: #FFFFFF;
}

.info{
	position: relative;
	width: 100%;
	height: 210rpx;
}
.info image{
	position: absolute;
	width: 220rpx;
	height: 220rpx;
	border: 2px #F1F1F1 solid;
	box-shadow: 0 0 10px rgba(240, 240, 240, .3);
	left: 15px;
	top: -15px;
}
.info-item{
	position: absolute;
	left: 270rpx;
	padding-top: 30rpx;
}

.sel-price{
	color: #00A2F3;
	font-size: 35rpx;
}
.select{
	margin-left: 15rpx;
}
.count{
	font-size: 30rpx;
}
.select-item{
	font-size: 30rpx;
}
.sel{
	padding: 0 10rpx 0 0;
}

.btn{
	position: absolute;
	bottom: 0;
	height: 80rpx;
	width: 100%;
	color: #FFFFFF;
	background: #00A2F3;
	line-height: 80rpx;
	text-align: center;
}
.count {
	display: flex;
	justify-content: space-between;
}
.count span{
	font-size: 30rpx
}


	

</style>
