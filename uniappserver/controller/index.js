const { escape, exec } = require('../db/mysql')
const xss = require('xss')


// sql 查询语句  select * from uniapp.product  where 1=1 and name like '%大%' order by pprice desc

const getSearch = async (keyword, appoint, orderName) => {
  let sql = `SELECT * FROM uniapp.product where 1=1 and name like '%${keyword}%' `
  if(appoint){
    sql += ` order by ${appoint} ${orderName}` 
  }

  return await exec(sql)
}

module.exports = {
  getSearch
}