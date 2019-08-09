<template>
	<view class="index">
		<block>
			<view class="card" @click="chooseSite">
				<image class="picture-size" src="../../static/dating-select.png"></image>
				<text class="card-num-view">老食堂一层</text>
			</view>
			<view class="card" @click="chooseSite">
				<image class="picture-size" src="../../static/dating-unselect.png"></image>
				<text class="card-num-view">老食堂二层</text>
			</view>
			<view class="card" @click="chooseSite">
				<image class="picture-size" src="../../static/user-select.png"></image>
				<text class="card-num-view">教工食堂</text>
			</view>
			<view class="card" @click="chooseSite">
				<image class="picture-size" src="../../static/index-select.png"></image>
				<text class="card-num-view">新食堂一层</text>
			</view>
		</block>
	</view>
</template>

<script>
	import uniGrid from 	'@dcloudio/uni-ui/lib/uni-grid/uni-grid.vue'
	import uniGridItem from '@dcloudio/uni-ui/lib/uni-grid-item/uni-grid-item.vue'
	export default {
		components:{uniGrid,uniGridItem},
		methods:{
			chooseSite(){
				wx.navigateTo({
					url:"../site/site"
				})
			}
		}
	}
</script>

<style>
	.picture-size{
		width: 40vmax;
		height: 30vmax;
	}
</style>
