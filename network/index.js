import { request } from "./request.js"

export function  getData(id, page){
	return request({
		url: `/index_list/${id}/data/${page}`
	})
}

export function getSearchData(keyword, appoint, orderName){
	if(appoint === undefined && orderName === undefined ){
		return request({
			url: `/index_list/goods/search`,
			data: {
				keyword: keyword
			}
		})
	}else{
		return request({
			url: `/index_list/goods/search`,
			data: {
				keyword: keyword,
				appoint: appoint,
				orderName: orderName
			}
		})
	}
	
}



