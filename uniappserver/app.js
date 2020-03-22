const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

// 路由导入 自动高阶
require('./core/init').initCore(app)

// const Router = require('koa-router')

// 普通路由导入
// const index = require('./routes/index')
// const users = require('./routes/users')
// const category = require('./routes/category')

// 路由导入自动化
// const requireDirectory = require('require-directory')

// 跨域 
const cors = require('koa2-cors')

// 跨域 配置

app.use(cors({
  origin: (ctx) => {
    if(ctx.url === '/test'){
      return false
    }
    return '*'
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


// 路由导入自动 基础使用
// const modules = requireDirectory(module, './routes', {
//   visit: whenLoadModule
// })

// function whenLoadModule(router){
//   if(router instanceof Router){
//     app.use(router.routes(), router.allowedMethods())
//   }
// }


// routes
// app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())
// app.use(category.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
