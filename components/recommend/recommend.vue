<template>
	<view class="recommendContainer">
		<swiper class="banners" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image class="bannersImg" src="https://yanxuan.nosdn.127.net/3dd10ad77b58ba6a02ad24558c2c2b4f.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="bannersImg" src="https://yanxuan.nosdn.127.net/4676616f41d78ad77c1228c16f491769.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="bannersImg" src="https://yanxuan.nosdn.127.net/85edfb40d25724b309cb00bfee0b344f.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
	
		<!-- 图标  policyDescList-->
		<view class="policyList">
			<view class="policyItem" v-for="(item,index) in indexData.policyDescList" :key="index">
				<image class="policyImg" :src="item.icon" mode=""></image>
				<text class="content">{{item.desc}}</text>
			</view>
		</view>
		
		<!-- 图片 kingKongModule -->
		<view class="kingKongList" v-if="indexData.kingKongModule">
			<view class="kingKongItem" v-for="(item) in indexData.kingKongModule.kingKongList.slice(1)" :key="item.L1Id">
				<image class="kingImg" :src="item.picUrl" mode=""></image>
				<text class="kingContent">{{item.text}}</text>
			</view>
		</view>
		
		<!-- categoryModule  -->
			<view class="categoryModuleContainer">
				<view class="categoryItem" v-for="item in indexData.categoryModule" :key="item.titlePicUrl">
					<image class="titlePic" :src="item.titlePicUrl" mode=""></image>
					<scroll-view scroll-x="true" class="shopListScroll" enable-flex>
						<view class="shopItem" v-for="shopItem in item.itemList" :key="shopItem.id">
							<image class="shopImg" :src="shopItem.showPicUrl" mode=""></image>
							<view class="shopInfo">{{shopItem.name}}</view>
						</view>
						<view class="shopItem more">
							查看更改>
						</view>
					</scroll-view>
				</view>
			</view>
	</view>
</template>

<script>
	import {mapState} from "vuex"
	export default {
		data() {
			return {
				
			}
		},
		computed:{
			...mapState({
				indexData: state => state.indexData.indexData
			})
		}
	}
</script>

<style lang="stylus">
	.recommendContainer
		.banners
			width 100%
			height 350rpx
			.bannersImg
				width 100%
				height 350rpx
		.policyList
			display flex
			padding 10rpx
			.policyItem
				flex 1
				.policyImg
					width: 32rpx;
					height: 32rpx;
					vertical-align middle
					margin-right 8rpx
				.content
					font-size 24rpx
					text-align center
					vertical-align middle
		.kingKongList
			display flex
			flex-wrap wrap
			.kingKongItem
				width 20%
				display flex
				flex-direction column
				align-items center
				.kingImg
					width: 110rpx;
					height: 110rpx;
					margin 20rpx 0
				.kingContent
					font-size 26rpx
					
				
			
		.categoryModuleContainer
			.categoryItem
				margin-bottom 20rpx
				.titlePic
					width: 100%;
					height 370rpx
				.shopListScroll
					// display flex
					white-space nowrap
					.shopItem
						width: 200rpx;
						display inline-block
						vertical-align top
						margin-right 20rpx
						&.more
							width: 200rpx;
							height: 200rpx;
							background #EEEEEE
							font-size 28rpx
							text-align center
							line-height 200rpx
						.shopImg
							width: 200rpx;
							height: 200rpx;
							background #eee
						.shopInfo
							font-size 26rpx
							white-space pre-wrap;
							display -webkit-box;
							-webkit-line-clamp 2
							-webkit-box-orient vertical
							text-overflow ellipsis
							overflow hidden
.test
	font-size 0
</style>
