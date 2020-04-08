const { escape, exec } = require('../db/mysql')
const xss = require('xss')

const getDetail = async(id) => {
	sql = `SELECT * FROM uniapp.product where id=${id}`
	 return await exec(sql)
}

module.exports = {
	getDetail
}