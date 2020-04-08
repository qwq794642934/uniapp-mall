const router = require('koa-router')()
const { getDetail } =  require('../controller/detail.js')
const { SuccessModel, ErrorModel} = require('../model/resModel')

router.prefix('/api')


router.get('/detail', async (ctx, next) => {
	const {id} = ctx.query
	let data = await getDetail(id)
	return ctx.body = new SuccessModel(data)
})


module.exports = router