import { request} from "./request.js"

export function getDetail(id){
	return request({
		url: `/detail?id=${id}`
	})
}