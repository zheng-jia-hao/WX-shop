<template>
	<view class="categoryContainer">
		<!-- 头部 -->
		<view class="header">
			<view class="search">搜索商品</view>
		</view>
		
		<!-- 主体部分 -->
		<view class="contentContainer">
			
			<!-- //左边滑块 -->
			<view class="leftContainer">
				<scroll-view scroll-y="true" class="navScroll" v-if="categoryData" @click="selectedNavItem">
					<view class="navItem"
						v-for="(leftItem,index) in categoryData" 
						:data-index="index" 
						:class="{active:navIndex===index}"
						:key="leftItem.id">{{leftItem.name}}</view>
				</scroll-view>
			</view>
			
			<!-- //右边滑块 -->
			<view class="rightContainer">
				<scroll-view scroll-y="true" class="shopScroll">
					<view v-if="selectedNav">
						<image class="cateImg" :src="selectedNav.imgUrl" mode=""></image>
						<view class="shopList">
							<view class="shopitem" v-for="(subCate,index) in selectedNav.subCateList" :ket="subCate.superCategoryId">
								<image class="shopImg" :src="subCate.wapBannerUrl" mode=""></image>
								<text class="shopName">{{subCate.name}}</text>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			
		</view>
	</view>
	
</template>

<script>
	import request from "../../utils/index.js"
	export default {
		data() {
			return {
				categoryData:[],
				navIndex:0
			}
		},
		mounted() {
			this.getCategoryData();
		},
		computed:{
			selectedNav(){return this.categoryData[this.navIndex]}
		},
		methods: {
			async getCategoryData() {
				this.categoryData = await request("/getCategoryData")
			},
			selectedNavItem(event) {
				this.navIndex = event.target.dataset.index;
			}
		},
			
	}
</script>

<style lang="stylus">
	.categoryContainer
		.header
			padding 10rpx 0
			.search
				width: 92%;
				height: 60rpx;
				text-align center
				line-height 60rpx
				font-size 26rpx
				background #EEE
				margin 0 auto
				
		.contentContainer
			display flex
			border-top 1rpx solid #999999
			.leftContainer
				width 20%
				.navScroll
					height calc(100vh - 82rpx)
					.navItem
						position relative
						font-size 26rpx
						height 80rpx
						text-align center
						line-height 80rpx
						&.active:before
							position absolute
							top: 10rpx;
							content ""
							left 6rpx
							width 2rpx
							height 60rpx
							background #BB2C08
							
					
			.rightContainer
				width: 80%;
				border-left 1rpx solid #808080
				box-sizing border-box
		.shopScroll
			height calc(100vh - 82rpx)
			.cateImg
				width: 520rpx;
				height: 190rpx;
				margin 10rpx auto
				display block
			.shopList
				display flex
				flex-wrap wrap
				.shopitem
					width 33.33%
					text-align center
					.shopImg
						height 144rpx
						width 90%
					.shopName
						font-size 24rpx
.test
	font-size 0
</style>
