export const pageHeight = {
	data(){
		return {
			pageHeight : 0
		}
	},
	onReady() {
	 this.getPageHeight()
	},
	methods:{
		// 获取可视区兼容
		getPageHeight(){
			// 使用 同步方法判断平台
			const result =  uni.getSystemInfoSync()
			const  platform = result.platform
			const statusBarHeight = result.statusBarHeight
			console.log(result)
			const windowHeight = result.windowHeight
			if(platform === 'ios'){
				this.pageHeight = windowHeight -uni.upx2px(80) - 44 - statusBarHeight
			}else if(platform === 'android'){
				this.pageHeight = windowHeight -uni.upx2px(80) - 30 - statusBarHeight
			}else{
				this.pageHeight = windowHeight
			}
		}
	}
}