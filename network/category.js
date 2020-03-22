import {request} from "./request.js"


export function getTitle(){
	return request({
		url: '/category/title'
	})
}

export function getContent(id){
	return request({
		url: `/category/title/${id}`
	})
}