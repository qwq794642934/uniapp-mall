class BaseModel{
  constructor (data, message) {
    // 如 data 为字符串 都设置为空
    if(typeof data === 'string'){
      this.message = data
      data = null
      message = null
    }
    // 不是字符串 为json 
    if(data){
      this.data = data
    }
    if(message){
      this.message = message
    }

  }
}



class SuccessModel extends BaseModel {
  constructor(data, message){
    super(data, message)
    this.errno = 0
  }
}

class ErrorModel extends BaseModel{
  constructor(data, message){
    super(data, message)
    this.errno = -1
  }
}



module.exports = {
  SuccessModel,
  ErrorModel
}