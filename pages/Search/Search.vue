<template>
	<view class="search">
		<lines />
		<view class="search-item">
			<view class="search-title">
				<view class="f-color">最近搜索</view>
				<view class="iconfont icon-lajitong" @click="clearData()" v-if="searchData.length > 0"/>
			</view>

			<view class="search-content" v-if="searchData.length > 0">
				<view class="search-name" v-for="(item, index) in searchData"
				:key="index" @click="tagClick(item)" >{{item}}</view>	
			</view>
			<view class="search-end" v-else>
				暂无搜索记录...
			</view>
		</view>

		<view class="search-item">
			<view class="search-title"><view class="f-color">热门搜索</view></view>

			<view class="search-content">
				<view class="search-name">三件套</view>
				<view class="search-name">面膜</view>
				<view class="search-name">面膜</view>
				<view class="search-name">面膜</view>
				<view class="search-name">面膜</view>
				<view class="search-name">面膜</view>
				<view class="search-name">面膜</view>
				<view class="search-name">面膜</view>
				<view class="search-name">面膜</view>
			</view>
		</view>
	</view>
</template>

<script>
import Lines from '@/components/common/Lines';
export default {
	components: {
		Lines
	},
	data() {
		return {
			// 输入搜索词
			keyWord: '',
			//搜索过的词
			searchData: []
		};
	},
	methods: {
		search(){
			if(this.keyWord !== ''){
				uni.navigateTo({
					url:`../Result/Result?keyword=${this.keyWord}`,
				})
				uni.hideKeyboard()
				this.addSearch()
			}else{
				uni.showToast({
					title:'输入框不能为空',
					icon:'none',
					duration: 1500
				})
			}
			
		},
		addSearch(){
			// 查询 元素 在列表 里的索引 没有 -1
			let idx = this.searchData.indexOf( this.keyWord)
			if(idx < 0){
				this.searchData.unshift( this.keyWord)
			}else{
				this.searchData.unshift(this.searchData.splice(idx,1)[0])
			}
			uni.setStorage({
				key:"searchData",
				data:JSON.stringify(this.searchData)
			})
			
		},
		clearData(){
				uni.showModal({
					title: '重要提示',
					content:'是否清除记录？',
					confirmColor:'#F76260',
					cancelColor:'#333333',
					success: (res) => {
						if(res.confirm){
							uni.removeStorage({
								key:"searchData"
							})
							this.searchData = []
						}
					}
				})
		},
		//tag 点击进入 搜索页面
		tagClick(item){
			uni.navigateTo({
				url: `../Result/Result?keyword=${item} `
			})
		}
	},
	//生命周期
	onLoad() {
		uni.getStorage({
			key:"searchData",
			success: (res) => {
				this.searchData = JSON.parse(res.data)
			}
		})
	},
	onNavigationBarButtonTap(e) {
		this.search()
	},
	onNavigationBarSearchInputChanged(e){
		this.keyWord = e.text
	},
	onNavigationBarSearchInputConfirmed(e){
		this.search()
	}
};
</script>

<style scoped>
.search-title {
	padding: 15rpx 20rpx;
	display: flex;
	justify-content: space-between;
}
.icon-lajitong,
.f-color {
	font-size: 25rpx;
}
.search-content {
	display: flex;
	flex-wrap: wrap;
}
.search-name {
	background: #e4e4e4;
	border-radius: 25rpx;
	font-size: 25rpx;
	box-sizing: border-box;
	padding: 0 25rpx;
	margin: 10rpx;
}
.search-end{
	text-align: center;
	font-size: 25rpx;
}

</style>
