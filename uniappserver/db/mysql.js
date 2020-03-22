const { MYSQL_CONF } = require('../conf/db')

const mysql = require('mysql')

// 连接数据库配置
const con =  mysql.createConnection(MYSQL_CONF)

//建立练级

con.connect()



// 增删改查操作

function exec(sql){
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if(err){
        reject(err)
        return
      }
      resolve(result)
    })
  })
  return promise
}


module.exports = {
  exec,
  escape: mysql.escape
}