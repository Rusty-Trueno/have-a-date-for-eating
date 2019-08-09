<template>
	<view>
		<view class="warpper">
			<view class="header">
				请您选座位
			</view>
			<view class="btn-warpper">
				<button type="primary" @click="chooseSeat">
					选择座位
				</button>
				<button type="primary" @click="seatReset">
					重置座位
				</button>
			</view>
			<view class="seat-warpper">
				<view v-for="row in seatRow" :key="row">
					<view v-for="col in seatCol" 
					class="seat"
					v-if="seatArray.length>0"
					:style="{width:seatSize+'rpx',height:seatSize+'rpx'}"
					:key="col">
						<image v-if="seatArray[row][col]!==-1" 
						:src="seatArray[row][col]===0 ? '../../static/unselected.png':'../../static/selected.png'" 
						class="site-pic"
						@click="handleSelect(row,col)"></image>
					</view>
				</view>
			</view>
			<view class="footer-center" v-if="alreadySelected">
				当前选中的位置为：{{currentRow}}行，{{currentCol}}列
			</view>
		</view>
		<uni-popup :show="confirmed" :type="center" :custom="true" :mask-click="false" ref="tip">
			<view class="uni-tip">
				<view class="uni-tip-content" v-if="alreadySelected">您选择的是第{{currentRow}}行，第{{currentCol}}列，ok么？</view>
				<view class="uni-tip-content" v-else-if="!alreadySelected">您还没有选择~</view>
				<view class="uni-tip-group-button" v-if="alreadySelected">
					<view class="uni-tip-button" @click="cancel">取消</view>
					<view class="uni-tip-button" @click="confirm">确定</view>
				</view>
				<view v-else-if="!alreadySelected">
					<view class="uni-tip-button" @click="cancel">返回</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	import {mapState,mapMutations} from 'vuex';
	export default{
		components:{
			uniPopup
		},
		data(){
			return {
				//影院座位的二维数组，0为未选择位置，1为已选择位置，-1为非座位
				seatArray:[],
				//影院座位的行数
				seatRow:10,
				//影院座位的列数
				seatCol:20,
				//影院座位的尺寸
				seatSize:35,
				//是否已经选择座位的标志
				alreadySelected:false,
				//当前选中的行
				currentRow:0,
				//当前选中的列
				currentCol:0,
				//确定选中
				confirmed:false,
			}
		},
		computed:{
			
		},
		methods:{
			...mapMutations(['selected','selectResult']),
			//初始化座位数组
			initSearArray(){
				let seatArray = new Array(this.seatRow);
				for(let i=0;i<this.seatRow;i++){
					seatArray[i] = new Array(this.seatCol);
					for(let j=0;j<this.seatCol;j++){
						seatArray[i][j] = 0;
					}
				}
				this.seatArray = seatArray;
				this.initNonSeatPlace()
			},
			//初始化非座位的地方
			initNonSeatPlace(){
				
			},
			//处理座位的选中
			handleSelect(row,col){
				this.seatReset();
				this.alreadySelected = true;
				let newArray = this.seatArray;
				if(newArray[row][col]===0){
					newArray[row][col] = 1
				}else{
					newArray[row][col] = 0
				}
				this.seatArray = newArray.slice();
				this.currentRow = row+1;
				this.currentCol = col+1;
			},
			//座位重置
			seatReset(){
				let newArray = this.seatArray;
				for(let i=0;i<this.seatRow;i++){
					for(let j=0;j<this.seatCol;j++){
						newArray[i][j] = 0
					}
				}
				this.alreadySelected = false;
				this.seatArray = newArray.slice();
			},
			//选择座位
			chooseSeat(){
				this.confirmed = true;
				this.$refs.tip.open();
			},
			//取消选择
			cancel() {
				this.$refs.tip.close();
			},
			//确认选择
			confirm(){
				this.$refs.tip.close();
				this.selected(true);
				this.selectResult(this.seatArray);
				wx.navigateBack();
			}
		},
		onReady() {
			this.initSearArray()
		}
	}
</script>

<style>
	.warpper{
		display: flex;
		flex-direction: column;
	}
	.header{
		background-color:#00BFFF;
		width:100%;
		height:45px;
		text-align: center;
		flex-direction: column;
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
	.btn-warpper{
		margin: 20rpx auto;
		width: 100vw;
		height: 30rpx;
		text-align: center;
		flex-direction: row;
	}
	/* 提示窗口 */
	.uni-tip {
		padding: 15px;
		width: 300px;
		background: #fff;
		box-sizing: border-box;
		border-radius: 10px;
		flex-direction: column;
	}
	
	.uni-tip-title {
		text-align: center;
		font-weight: bold;
		font-size: 16px;
		color: #333;
	}
	
	.uni-tip-content {
		padding: 15px;
		font-size: 14px;
		color: #666;
	}
	
	.uni-tip-group-button {
		margin-top: 10px;
		display: flex;
		flex-direction: column;
	}
	
	.uni-tip-button {
		width: 100%;
		text-align: center;
		font-size: 14px;
		color: #3b4144;
	}
</style>
