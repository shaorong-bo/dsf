<template>
	<div>
		<Layout>
		        <Content style="width: 100%; height: 100px;"><img src="https://img.alicdn.com/tfs/TB19yBbRSzqK1RjSZFLXXcn2XXa-230-104.png" width="100px" style="position: absolute;top: 20px; left: 20px;"/></Content>
		        <Footer style="position: absolute;top: 120px; width: 100%; height: 600px;"><img src="https://img.alicdn.com/tfs/TB1NkOydrus3KVjSZKbXXXqkFXa-720-400.png_q75.jpg" width="100%" height="600px"/> 
				<!-- 选项卡制作 -->
				<div style="position: absolute; left: 750px; top: 100px;">
				<Input  type="text" placeholder="请输入用户名" v-model="newUsername" style="width: 300px"
				      @on-blur="check_username" />
				
				      <br />
				      <br />
				      <Input type="text" placeholder="请输入邮箱" v-model="email" style="width:300px"
				       @on-blur="check_email"/>
				      <br />
				      <br />
				      <Tooltip content="至少6位，只能为字母数字.@#$-" placement="left" theme='light'>
				        <Input
				          type="password"
				          placeholder="请输入密码"
				          v-model="newPassword1"
				          style="width: 300px"
				          password
				          @on-blur="check_password"
				        />
				      </Tooltip>
				      <br />
				      <br />
				      <Input
				          type="password"
				          placeholder="确认密码"
				          v-model="newPassword2"
				          style="width: 300px"
				          password
				          @on-blur="check_password"
				
				      />
				      <br>
				      <br>
				      <Input type="text" placeholder="请输入收到的验证码" v-model="captcha" style="width:190px"
				      @on-enter="register"/>
				      <Button  v-if="butt1" type="info" style="width:110px" ghost @click="send_captcha" >发送验证码</Button>
				      <Button  v-if="butt2" type="info" style="width:110px" ghost disabled>{{time_count}}秒后可重发</Button>
				      <br>
				      <br>
				      <Button type="primary" v-on:click="register" >注册</Button>
					  </div>
				</Footer>
		    </Layout>
			<!-- 尾部 -->
			<div class="hello">
				<div style="width: 100%; height: 200px; position: absolute;top: 800px;">
					<Layout style="width: 100%; height: 200px;">
						<Footer>
							<router-link to="" style="position: absolute;left: 150px;">帮助中心 </router-link>
							<div style="position: absolute;left: 250px;">|</div>
							<router-link to="" style="position: absolute;left: 310px;">公司介绍 </router-link>
							<div style="position: absolute;left: 410px;">|</div>
							<router-link to="" style="position: absolute;left: 460px;">品牌识别 </router-link>
							<div style="position: absolute;left: 560px;">|</div>
							<router-link to="" style="position: absolute;left: 620px;">公司大事记 </router-link>
							<div style="position: absolute;left: 720px;">|</div>
							<router-link to="" style="position: absolute;left: 760px;">协议及隐私权政策 </router-link>
							<div style="position: absolute;left: 920px;">|</div>
							<router-link to="" style="position: absolute;left: 950px;">廉政举报 </router-link>
							<div style="position: absolute;left: 1040px;">|</div>
						</Footer>
					</Layout>
				</div>
				<img src="https://img.alicdn.com/tfs/TB1otMASmzqK1RjSZPxXXc4tVXa-167-60.png" style="position: absolute; left: 30px; top: 860px;" />
				<img src="https://img.alicdn.com/tfs/TB1TBEJSkvoK1RjSZFNXXcxMVXa-280-280.jpg" style="position: absolute; left: 250px; top: 860px; width: 70px;" />
				<div style="position: absolute; left: 250px; top: 950px;">App下载</div>
				<router-link to="" style="position: absolute; left: 420px; top:860px;"><Button type="warning">客服中心</Button>
				</router-link>
				<div style="position: absolute; left: 420px; top: 890px;">京ICP证031057号|京ICP备11043884号|京公网安备11010502037341号|广播电视节目制作经营许可证(京)字第02253号<br />
					网络文化经营许可证 京网文[2019]4082-420号|营业性演出许可证京市演587号<br />
					北京红马传媒文化发展有限公司 版权所有大麦网Copyright 2003-2020 All Rights Reserved<br />
					举报投诉：damai_tousu@member.alibaba.com 浙江省杭州市余杭区文一西路969号<br />
					违法不良信息举报电话：020-62108294</div>
			</div>
	</div>
</template>
 <script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
<script>
	export default {
		name: "Women",
		    data () {
		      return {
		        
		      }
		    },
			 methods: {
			              
			            }
		
	}
</script>

<style>
#damai {
		position: absolute;
		left: 30px;
		top: 20px;
		width: 80px;
		height: 45px;
	}
	
	.shouye {
		color: red;
		position: absolute;
		left: 200px;
		top: 30px;
		font-size: 20px;
	}
	
	.fenlei {
		position: absolute;
		left: 320px;
		top: 30px;
		font-size: 20px;
	}
	
	.denglu {
		position: absolute;
		left: 940px;
		top: 30px;
		font-size: 20px;
	}
	
	.xiazai {
		position: absolute;
		left: 1080px;
		top: 30px;
		font-size: 20px;
	}
	
	
	#div {
		position: absolute;
		top: 100px;
		left: 80px;
		}
</style>
