const router = require('koa-router')()

router.prefix('/api')

router.post('/test/:id/data', async(ctx, next) => {
  const params = ctx.params
  const body = ctx.request.body
  const query = ctx.request.query
  const headers = ctx.request.headers
  console.log(body)

  ctx.body = {
    params,
    query,
    body
  }
})

module.exports = router