<template>
	<view class="cateListContainer">
		
		<swiper class="banners" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" v-if="selectedCateList.category">
			<swiper-item  v-for="(bannerItem,index) in selectedCateList.category.bannerUrlList" :key="index">
				<view class="swiper-item">
					<image class="bannerImg" :src="bannerItem" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		
		<!-- 轮播下面的文本 -->
		<view class="title">{{selectedCateList.category.name}}</view>
		<view class="desc">{{selectedCateList.category.frontDesc}}</view>
		
		
		<!-- 图片列表 -->
		
		<view class="shopList">
			<view class="shopItem" @click="goShopDetail(shopItem.id)" v-for="(shopItem,index) in selectedCateList.itemList" :key="shopItem.id">
				<image class="shopImg" :src="shopItem.listPicUrl" mode=""></image>
				<view class="shopInfo common">{{shopItem.name}}</view>
				<view class="shopPrice common">￥ {{shopItem.retailPrice}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from "../../utils/index.js"
	export default {
		props:['currentL1Id'],
		data() {
			return {
				cateList:[]
			}
		},
		mounted() {
			this.getIndexCateList();
		},
		computed:{
			selectedCateList() {
				return this.cateList.find(item =>item.category.parentId == this.currentL1Id)
			}
		},
		methods:{
			async getIndexCateList() {
				this.cateList = await request("/getIndexCateList");
			},
			goShopDetail(id) {
				wx.navigateTo({
					url:"/pages/detail/detail?id=" + id
				})
			}
		},
	}
</script>

<style lang="stylus">
	.cateListContainer
		.banners
			width: 100%;
			height: 370rpx;
			.bannerImg
				width: 100%;
				height: 370rpx;
		.title
			font-size 32rpx
			color #333333
			line-height 70rpx
			text-align center
		.desc
			text-align center
			font-size 26rpx
			color #999999
			line-height 40rpx
		.shopList
			display flex
			flex-wrap wrap
			justify-content space-around
			&:after
				content ""
				width: 344rpx;
			.shopItem
				width: 344rpx;
				
				.shopImg
					width: 344rpx;
					height: 344rpx;
				.common
					font-size 24rpx;
					line-height 50rpx
				.shopPrice
					color #BB2C08
					font-weight bold
.test
	font-size 0
</style>
