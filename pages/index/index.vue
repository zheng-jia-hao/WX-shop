<template>
	<view class="indexContainer">
		<view class="header">
			<image class="logo" src="../../static/images/logo.png" ></image>
			<view class="search">
				<i class="iconfont icon-sousuo"></i>
				<input type="text" value="" placeholder="搜索商品" placeholder-class="placeholder"/>
			</view>
			<button type="default">草年末的</button>
		</view>
		
		<scroll-view v-if="indexData.kingKongModule" class="navScroll" scroll-x="true" enable-flex @click="selectNavItem">
			<view class="navItem" :class="index == currentIndex && 'active'"
			 v-for="(item,index) in indexData.kingKongModule.kingKongList" 
			 :key="item.L1Id" 
			 :data-index="index"
			 :data-id="item.L1Id"
			 >{{item.text}}</view>
		</scroll-view>
		
		<!-- 内容区 -->
		<scroll-view scroll-y="true">
			<recommend v-if="!currentIndex"></recommend>
			<cateList :currentL1Id="currentL1Id" v-else ></cateList>
		</scroll-view>	
	</view>
	
</template>

<script>
	import {mapState} from "vuex"
	import recommend from "../../components/recommend/recommend.vue"
	import cateList from "../../components/cateList/cateList.vue"
	export default {
		data() {
			return {
				currentIndex:0,
				currentL1Id:""
			};
		},
		mounted(){
			this.getIndexData();
		},
		computed:{
			...mapState({
				indexData:state => state.indexData.indexData
			})
		},
		methods:{
			getIndexData() {
				this.$store.dispatch("getIndexDataAction");
			},
			selectNavItem(event) {
				this.currentL1Id = event.target.dataset.id;
				this.currentIndex = event.target.dataset.index;
			}
		},
		components:{
			recommend,
			cateList
		},
		
	}
</script>

<style lang="stylus">
	.indexContainer
		.header
			display flex
			padding 10rpx 0
			.logo
				width 140rpx
				height 40rpx
				margin 10rpx 30rpx
			.search
				position relative
				width 420rpx
				height 60rpx
				background #eee
				.iconfont 
					position absolute
					font-size 30rpx
					top 15rpx
					left 10rpx
				input
					height 60rpx
					width 370rpx
					margin-left 50rpx
					.placeholder
						font-size 26rpx
			button
				width 144rpx
				height 60rpx
				text-align center
				line-height 60rpx
				font-size 24rpx
				color: #BB2C08
				padding 0 4rpx
				margin 0 10rpx
		.navScroll
			white-space nowrap
			.navItem
				display inline-block
				width 140rpx
				height 80rpx
				text-align center
				line-height 80rpx
				box-sizing border-box
				font-size 26rpx
				/* &: 父级引用， 代表所处位置的父级 */
				&.active
					border-bottom 1rpx solid #BB2C08
.test
	font-size 20rpx
</style>
