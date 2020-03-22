const requireDirectory = require('require-directory')
const Router = require('koa-router')
const path = require('path')


class InitManager {
  static initCore(app){
    //入口方法
    InitManager.app = app
    InitManager.initLoadRouters()
  }

  static initLoadRouters(){
    // 路由导入自动 基础使用
    // path.resolve(__dirname, '../routes') // 
    // process.cwd() // 项目根目录
    const apiDirectory = `${process.cwd()}/routes`
    requireDirectory(module, apiDirectory, {
    visit: whenLoadModule
      })

    function whenLoadModule(router){
      if(router instanceof Router){
        InitManager.app.use(router.routes(), router.allowedMethods())
      }
    }
  }
}

module.exports = InitManager