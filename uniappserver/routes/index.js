const router = require('koa-router')()
const { getSearch } = require('../controller/index')
const { SuccessModel, ErrorModel} = require('../model/resModel')

router.prefix('/api/index_list')

router.get('/3/data/1', async (ctx, next) => {
	ctx.body = {
		title: 'clothes'
	}
})
router.get('/4/data/1', async (ctx, next) => {
	ctx.body = {
		title: 'shop'
	}
})
router.get('/5/data/1', async (ctx, next) => {
	ctx.body = {
		title: 'cosmetic'
	}
})
router.get('/6/data/1', async (ctx, next) => {
	ctx.body = {
		title: 'aaa'
	}
})
router.get('/7/data/1', async (ctx, next) => {
	ctx.body = {
		title: 'bbb'
	}
})
router.get('/2/data/1', async (ctx, next) => {
	ctx.body = {
		code: 0,
		data: [
			//banner
			{
				type: "bannerList",
				imgUrl: "../../static/banner/banner1.jpg"
			},
			// icon
			{
				type: "iconsList",
				data: [
					{imgUrl: "../../static/icons/icons1.png", name: "户外运动"},
					{imgUrl: "../../static/icons/icons2.png", name: "户外运动"},
					{imgUrl: "../../static/icons/icons3.png", name: "户外运动"},
					{imgUrl: "../../static/icons/icons4.png", name: "户外运动"},
					{imgUrl: "../../static/icons/icons5.png", name: "户外运动"},
					{imgUrl: "../../static/icons/icons6.png", name: "户外运动"},
					{imgUrl: "../../static/icons/icons7.png", name: "户外运动"},
					{imgUrl: "../../static/icons/icons8.png", name: "户外运动"},
				]
			},
			// brand
			{
				type: "brandList",
				data: [
					{imgUrl: "../../static/brand/huawei.jpg", name: '华为'},
					{imgUrl: "../../static/brand/honor.jpg", name: '荣耀'},
					{imgUrl: "../../static/brand/apple.jpg", name: '苹果'},
					{imgUrl: "../../static/brand/mi.png", name: '小米'},
					{imgUrl: "../../static/brand/360.jpg", name: '360'},
					{imgUrl: "../../static/brand/sansang.png", name: '三星'},
					{imgUrl: "../../static/brand/meizu.jpg", name: '魅族'},
					{imgUrl: "../../static/brand/oneplus.jpg", name: '一加'},
					{imgUrl: "../../static/brand/nubia.jpg", name: '努比亚'},
					{imgUrl: "../../static/brand/oppo.png", name: 'oppo'},
					{imgUrl: "../../static/brand/vivo.png", name: 'vivo'},
					{imgUrl: "../../static/brand/smartisan.jpg", name: '锤子'},
				]
			},
			// host 
			{
				type: "hostList",
				data: [
					{
						id:1,
						imgUrl:"../../static/product/commodity1.jpg",
						name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice:"299",
						oprice:"659",
						discount:"5.2"
					},
					{
						id:2,
						imgUrl:"../../static/product/commodity2.jpg",
						name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice:"299",
						oprice:"659",
						discount:"5.2"
					},
					{
						id:3,
						imgUrl:"../../static/product/commodity3.jpg",
						name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice:"299",
						oprice:"659",
						discount:"5.2"
					},
					{
						id:4,
						imgUrl:"../../static/product/commodity4.jpg",
						name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice:"299",
						oprice:"659",
						discount:"5.2"
					}
				]
			},
			// shop
			{
				type: "shopList",
				data: [
					{
						bigUrl: "../../static/shop/shop.jpg",
						data: [
							{
								id:1,
								imgUrl:"../../static/product/commodity1.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:2,
								imgUrl:"../../static/product/commodity2.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:3,
								imgUrl:"../../static/product/commodity3.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:4,
								imgUrl:"../../static/product/commodity4.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:1,
								imgUrl:"../../static/product/commodity1.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:2,
								imgUrl:"../../static/product/commodity2.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:3,
								imgUrl:"../../static/product/commodity3.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:4,
								imgUrl:"../../static/product/commodity4.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:1,
								imgUrl:"../../static/product/commodity1.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:2,
								imgUrl:"../../static/product/commodity2.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:3,
								imgUrl:"../../static/product/commodity3.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:4,
								imgUrl:"../../static/product/commodity4.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:1,
								imgUrl:"../../static/product/commodity1.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:2,
								imgUrl:"../../static/product/commodity2.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:3,
								imgUrl:"../../static/product/commodity3.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:4,
								imgUrl:"../../static/product/commodity4.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							}
						]
					},
					{
						bigUrl: "../../static/shop/shop1.jpg",
						data: [
							{
								id:1,
								imgUrl:"../../static/product/commodity1.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:2,
								imgUrl:"../../static/product/commodity2.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:3,
								imgUrl:"../../static/product/commodity3.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:4,
								imgUrl:"../../static/product/commodity4.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:1,
								imgUrl:"../../static/product/commodity1.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:2,
								imgUrl:"../../static/product/commodity2.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:3,
								imgUrl:"../../static/product/commodity3.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:4,
								imgUrl:"../../static/product/commodity4.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:1,
								imgUrl:"../../static/product/commodity1.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:2,
								imgUrl:"../../static/product/commodity2.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:3,
								imgUrl:"../../static/product/commodity3.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							},
							{
								id:4,
								imgUrl:"../../static/product/commodity4.jpg",
								name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
								pprice:"299",
								oprice:"659",
								discount:"5.2"
							}
						]
					}
					
				]
			},
			// product list
			{
				type:"productList",
				data:[
					{
						id:1,
						imgUrl:"../../static/product/commodity1.jpg",
						name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice:"299",
						oprice:"659",
						discount:"5.2"
					},
					{
						id:2,
						imgUrl:"../../static/product/commodity2.jpg",
						name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice:"299",
						oprice:"659",
						discount:"5.2"
					},
					{
						id:3,
						imgUrl:"../../static/product/commodity3.jpg",
						name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice:"299",
						oprice:"659",
						discount:"5.2"
					},
					{
						id:4,
						imgUrl:"../../static/product/commodity4.jpg",
						name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice:"299",
						oprice:"659",
						discount:"5.2"
					}
				]
			}
			
			]
		}
	})



router.get('/1/data/1', async (ctx, next) => {
  ctx.body = {
		code: 0,
		data: {
			topBar:[
							{id:1,name:'推荐'},
							{id:2,name:'运动户外'},
							{id:3,name:'服饰内衣'},
							{id:4,name:'鞋靴箱包'},
							{id:5,name:'美妆个护'},
							{id:6,name:'家居数码'},
							{id:7,name:'食品母婴'}
						],
						data:[
							{
								type:"swiperList",
								data:[
									{imgUrl:'../../static/banner/swiper1.jpg'},
									{imgUrl:'../../static/banner/swiper2.jpg'},
									{imgUrl:'../../static/banner/swiper3.jpg'}
								]
							},
							{
								type:"recommendList",
								data:[
									{
										bigUrl:"../../static/recommend/Children.jpg",
										data:[
											{imgUrl:"../../static/recommend/Children1.jpg"},
											{imgUrl:"../../static/recommend/Children2.jpg"},
											{imgUrl:"../../static/recommend/Children3.jpg"}
										]
									},
									{
										bigUrl:"../../static/recommend/Furnishing.jpg",
										data:[
											{imgUrl:"../../static/recommend/Furnishing1.jpg"},
											{imgUrl:"../../static/recommend/Furnishing2.jpg"},
											{imgUrl:"../../static/recommend/Furnishing3.jpg"}
										]
									}
								]
							},
							{
								type:"productList",
								data:[
									{
										id:1,
										imgUrl:"../../static/product/commodity1.jpg",
										name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
										pprice:"299",
										oprice:"659",
										discount:"5.2"
									},
									{
										id:2,
										imgUrl:"../../static/product/commodity2.jpg",
										name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
										pprice:"299",
										oprice:"659",
										discount:"5.2"
									},
									{
										id:3,
										imgUrl:"../../static/product/commodity3.jpg",
										name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
										pprice:"299",
										oprice:"659",
										discount:"5.2"
									},
									{
										id:4,
										imgUrl:"../../static/product/commodity4.jpg",
										name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
										pprice:"299",
										oprice:"659",
										discount:"5.2"
									}
								]
							}
						]
					}
	}
})

router.get('/1/data/2', async (ctx, next) => {
	ctx.body = {
		code: 0,
		data: [
			{
				type:"productList",
				data:[
					{
						id:1,
						imgUrl:"../../static/product/commodity1.jpg",
						name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice:"299",
						oprice:"659",
						discount:"5.2"
					},
					{
						id:2,
						imgUrl:"../../static/product/commodity2.jpg",
						name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice:"299",
						oprice:"659",
						discount:"5.2"
					},
					{
						id:3,
						imgUrl:"../../static/product/commodity3.jpg",
						name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice:"299",
						oprice:"659",
						discount:"5.2"
					},
					{
						id:4,
						imgUrl:"../../static/product/commodity4.jpg",
						name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						pprice:"299",
						oprice:"659",
						discount:"5.2"
					}
				]
			}
		]
	}
	
})

router.get('/goods/search',async (ctx, next) => {
	const { keyword, appoint, orderName } = ctx.query 
	if(appoint === undefined && orderName === undefined ){
		const data = await getSearch(keyword)
		return ctx.body = new SuccessModel(data)
	}else{
		const data = await getSearch(keyword, appoint, orderName)
		return ctx.body = new SuccessModel(data)
	}
	
	

})


module.exports = router
