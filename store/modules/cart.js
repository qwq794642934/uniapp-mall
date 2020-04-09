const state = {
	list: [
		// {
		// 	id: 1,
		// 	ischeck: true,
		// 	imgUrl: '../../static/product/59.jpg',
		// 	name: '能调动波纹wdad板打不动我不懂',
		// 	category: '颜色分类：黑色 尺寸：37.5',
		// 	price: 100,
		// 	count: 2
		// },
		// {
		// 	id: 2,
		// 	ischeck: true,
		// 	imgUrl: '../../static/product/59.jpg',
		// 	name: '能调动波纹板wdad打不动我不懂',
		// 	category: '颜色分类：黑色 尺寸：37.5',
		// 	price: 100,
		// 	count: 2
		// },
		// {
		// 	id: 3,
		// 	ischeck: true,
		// 	imgUrl: '../../static/product/59.jpg',
		// 	name: '能调动波纹dwadw板打不动我不懂',
		// 	category: '颜色分类：黑色 尺寸：37.5',
		// 	price: 100,
		// 	count: 2
		// },
		// {
		// 	id: 4,
		// 	ischeck: true,
		// 	imgUrl: '../../static/product/59.jpg',
		// 	name: '能调动波wdadw纹板打不动我不懂',
		// 	category: '颜色分类：黑色 尺寸：37.5',
		// 	price: 100,
		// 	count: 2
		// },
		// {
		// 	id: 5,
		// 	ischeck: true,
		// 	imgUrl: '../../static/product/59.jpg',
		// 	name: '能调动波纹板dwada打不动我不懂',
		// 	category: '颜色分类：黑色 尺寸：37.5',
		// 	price: 100,
		// 	count: 2
		// },
		// {
		// 	id: 6,
		// 	ischeck: true,
		// 	imgUrl: '../../static/product/59.jpg',
		// 	name: '能调动dadw波纹板打不动我不懂',
		// 	category: '颜色分类：黑色 尺寸：37.5',
		// 	price: 100,
		// 	count: 3
		// },
		// {
		// 	id: 7,
		// 	ischeck: true,
		// 	imgUrl: 'https://img10.360buyimg.com/mobilecms/s600x600_jfs/t19228/240/1002681097/46202/60988bc5/5ab8c0b5N45b23c0d.jpg!q70.jpg',
		// 	name: '初弎潮牌时尚鸭舌帽时尚潮搭经典复古嘻哈刺绣运动弯沿帽初三潮帽46114 黑-紫字善恶',
		// 	category: '颜色分类：黑色 尺寸：37.5',
		// 	price: 100,
		// 	count: 3
		// }
	]
}


const getters = {
	
	productList(state){
			return state.list
		},
		
	// 所有价格计算
	totalPrice(state, getters){
		return state.list.filter(item => item.ischeck).reduce((pre, item) => {
			return pre + item.price * item.count
		}, 0).toFixed(2)
	},
	
	// 购物车列表 长度
	productListLen(state){
		return getters.productList.length
	},
	
	// 为true 的数量
	totalSelect(state, getters){
		return getters.productList.filter(item => item.ischeck).length
	},
	
	// 判断是否全选 
	isAllSelect(state, getters){
		if(getters.productListLen === 0) return false
		return !state.list.find(item => !item.ischeck)
	}
	
}
const actions = {
}
const mutations = {
	addToCart(state, payload){
		//首先 找出购物车id 相同的商品
		let index = state.list.findIndex(item => item.id === payload.id)
		// 如果大于负一 说明商品已在
		if(index > -1){
			state.list[index].count += parseInt(payload.count)
		}else{
			payload.ischeck = true
			state.list.push(payload)
		}
		// 否则不在
		
		
		
			// let old = state.list.find(item => item.id === payload.id)
			// if(old){
			// 	let index	 = state.list.indexOf(old)
			// 	state.list[index].count = parseInt(state.list[index].count) + parseInt(payload.count) 
			// }else{
			// 	payload.ischeck = true
			// 	state.list.push(payload)
			// }
			
	}
}




export default{
	namespaced: true,
	state,
	getters,
	actions,
	mutations
	
}