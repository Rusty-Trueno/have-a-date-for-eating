<template>
	<view class="index">
		<block>
			<view class="content" v-if="!isSelected">
				<image class="backgroundlogo" src="/static/food.png"></image>
				<view class="text-area">
					<text class="title">{{title}}</text>
				</view>
				<button type="primary">发起约饭</button>
			</view>
			<view v-else class="column">
				<view>当前约饭状态~</view>
				<view class="seat-warpper">
					<view v-for="row in seatRow" :key="row">
						<view v-for="col in seatCol" 
						class="seat"
						v-if="seatArray.length>0"
						:style="{width:35+'rpx',height:35+'rpx'}"
						:key="col">
							<image v-if="seatArray[row][col]!==-1" 
							:src="seatArray[row][col]===0 ? '../../static/unselected.png':'../../static/selected.png'" 
							class="site-pic"></image>
						</view>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	export default {
		data() {
			return {
				title: '尚无约饭信息'
			}
		},
		onLoad() {

		},
		methods: {
			
		},
		computed:{
			...mapState(['isSelected','seatArray','seatRow','seatCol'])
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}

	.logo {
		height: 80vh;
		width: 100vw;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color:#BBBBBB;
	}
	.seat{
		float:left;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.seat-warpper{
		display: flex;
		align-content: center;
		flex-direction: column;
		margin: 60rpx auto;
		width:100vw;
	}
	.site-pic{
		width:30rpx;
		height: 30rpx;
	}
</style>
