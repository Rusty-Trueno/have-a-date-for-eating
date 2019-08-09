<template>
	<view class="center">
		<view class="login-logo">
			<image class="logo-img" src="../../static/unlogin.png"></image>
			<view class="logo-title" @click="login">
				<text class="uer-name" v-if="!iflogin">登录/注册</text>
				<text class="uer-name" v-if="iflogin">Hi,{{username}}</text>
				<text class="go-login navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe60c;</text>
				<text class="list-text">个人信息</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item">
				<text class="list-icon">&#xe60d;</text>
				<text class="list-text">好友列表</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<button type="primary" v-if="iflogin">退出登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '个人信息',
				iflogin:false,
				username:"荣帅",
			}
		},
		onLoad() {

		},
		methods: {
			login(){
				wx.navigateTo({
					url:"../login/login"
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}

	.logo {
		height: 30vh;
		width: 100vw;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
