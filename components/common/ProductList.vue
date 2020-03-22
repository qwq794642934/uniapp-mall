<template>
	<view class="product-list">
		<product-item :prdItemList="productList"/>
	</view>
</template>

<script>
	import ProductItem from "./ProductItem"
	export default {
		components:{
			ProductItem
		},
		props:{
			productList: {
				type: Array,
				default(){
					return []
				}
			},
		},
		}
</script>

<style scoped>
</style>