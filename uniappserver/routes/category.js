const router = require('koa-router')()

router.prefix('/api/category')

router.get('/title', async (ctx, next) => {
  ctx.body = {
    code: 0,
    data:[
      {id: 1, name: '手机'},
      {id: 2, name: '男装'},
      {id: 3, name: '女装'},
      {id: 4, name: '首饰'},
      {id: 5, name: '美妆'},
      {id: 6, name: '零食'},
      {id: 7, name: '鞋子'},
      {id: 8, name: '家具'},
      {id: 9, name: '食品'},
      {id: 10, name: '上衣'},
      {id: 11, name: '酒水'},
      {id: 12, name: '酒水'},
      {id: 13, name: '酒水'},
      {id: 14, name: '酒水'},
      {id: 15, name: '酒水'},
      {id: 16, name: '酒水'},
      {id: 17, name: '酒水'},
      {id: 18, name: '酒水'},
    ]
  }
})

router.get('/title/0', async (ctx, next) => {
  ctx.body= {
    code: 0,
    data: [
          {
            title: '高端手机',
            data: 
          [
            {imgUrl: "../../static/brand/huawei.jpg", name: '华为'},
            {imgUrl: "../../static/brand/honor.jpg", name: '荣耀'},
            {imgUrl: "../../static/brand/apple.jpg", name: '苹果'},
            {imgUrl: "../../static/brand/sansang.png", name: '三星'},
          ]
          },
          {
            title: '中高端手机',
            data: 
          [
            {imgUrl: "../../static/brand/mi.png", name: '小米'},
            {imgUrl: "../../static/brand/360.jpg", name: '360'},
            {imgUrl: "../../static/brand/oppo.png", name: 'oppo'},
            {imgUrl: "../../static/brand/vivo.png", name: 'vivo'},
          ]
          },

          {
            title: '中端手机',
            data: 
            [
              {imgUrl: "../../static/brand/meizu.jpg", name: '魅族'},
              {imgUrl: "../../static/brand/oneplus.jpg", name: '一加'},
              {imgUrl: "../../static/brand/nubia.jpg", name: '努比亚'},
              {imgUrl: "../../static/brand/smartisan.jpg", name: '锤子'}
            ]
          }
    ]
  }
})


module.exports = router