const baseURLA =  'http://192.168.43.147:8000/api'
const baseURLB = 'http://192.168.3.13:8000/api'
const timeout = 5000

export function request (options){
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseURLB + options.url,
			data: options.data,
			timeout,
			 success (res) {
				 resolve(res.data)
			 } 
		})
	})
}



