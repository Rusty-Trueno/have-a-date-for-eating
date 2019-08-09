<template>
	<view class="content">
		<image class="login-pic" src="../../static/food.png"></image>
		<input class="telephone" type="text" placeholder="手机号"/>
	</view>
</template>

<script>
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}
	.login-pic{
		width: 100vw;
		height: 20vh;
		flex-direction: row;
		align-items: center;
	}
	.telephone{
		margin-top: 10rpx;
	}
</style>
