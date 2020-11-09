<template>
	<div>
		<img src="../../img/damai.png" id="damai" />
		<router-link to="/index" class="shouye">首页 </router-link>
		<router-link to="/fenlei" class="fenlei">分类 </router-link>
		<Input search enter-button="搜索" placeholder="2019-2020赛季CBA联赛" style="width: 300px;position: absolute;left: 500px; top: 30px;" />
		<Avatar icon="ios-person" style="position: absolute;left: 900px; top: 30px;" />
		<router-link to="/women" class="denglu">登录 </router-link>
		<Icon type="md-cloud-download" style="font-size: 30px; position: absolute; left: 1050px; top: 30px;" />
		<router-link to="" class="xiazai">下载 </router-link>
		<!-- 布局 -->
		<img src="https://damai-mx-partner-admin.oss-cn-beijing.aliyuncs.com/710eb0a6-ab7e-4777-8b97-28df800809ec.jpeg?x-oss-process=image/quality,q_60/format,webp" width="270px" height="370px" style="position: absolute; top: 80px; left: 50px;"/>
		<h3 style="position: absolute;left: 350px; top: 100px;">【呼和浩特】戏胞有艺思超级飞侠《多多帮帮忙》豪华亲子舞台剧</h3>
		<p style="position: absolute;left: 350px; top: 130px; font-size: 15px;">时间：待定</p>
		<p style="position: absolute;left: 350px; top: 160px; font-size: 15px;">场馆： | 待定</p>
		<p style="position: absolute;left: 350px; top: 250px;">项目开售时，我们会以大麦APP消息或给登录账号手机号发送短信通知您，请留意信息~</p>
		<router-link to="/women" class="shouye"><Button type="warning" style="position: absolute;left: 150px; top: 300px; width: 300px; height: 40px;">开售提醒</Button> </router-link>
		<h1 style="position: absolute;left: 80px; top: 490px;">项目详情</h1>
		<h2 style="position: absolute;left: 100px; top: 540px;">演出介绍</h2>
		<p style="font-size: 15px;position: absolute;left: 120px; top: 600px;">《超级飞侠》系列舞台剧</p>
		<p style="font-size: 15px;position: absolute;left: 100px; top: 630px;">连续三年国内儿童舞台剧票房冠军</p>
		<p style="position:absolute; left: 120px; top: 660px;">第一部：《乐迪的秘密任务》</p>
		<p style="position:absolute; left: 120px; top: 690px;">首演前一个月票房完售，儿童剧市场的爆款；</p>
		<p style="position:absolute; left: 120px; top: 720px;">零负评，一再加演；</p>
		<p style="position:absolute; left: 120px; top: 750px;">演出累计超过178场，走过57个以上城市！</p>
		<p style="position:absolute; left: 120px; top: 780px;">第二部：《小爱的奇幻旅程》</p>
		<p style="position:absolute; left: 120px; top: 810px;">票房亮眼，入围2018年儿童剧十佳；</p>
		<p style="position:absolute; left: 120px; top: 840px;">演出累计超过104场，走过48个以上城市，持续创造好口碑；</p>
		<p style="position:absolute; left: 120px; top: 870px;">观众评论：超级飞侠系列是最棒的儿童剧系列作品！</p>
		<p style="position:absolute; left: 120px; top: 900px;">第三部：《多多帮帮忙》|2019，精彩继续！</p>
		<p style="position:absolute; left: 120px; top: 980px;font-size: 15px;">剧情简介</p>
		<p style="position:absolute; left: 120px; top: 1010px;">超级飞侠总部中，安琪正在公布这一季乐迪跟小爱收到的感谢状与小礼物，</p>
		<p style="position:absolute; left: 120px; top: 1040px;">这些来自世界各地的感谢，都是基于他们之前的包裏快递与救援。在一旁的多多看</p>
		<p style="position:absolute; left: 120px; top: 1070px;">了，心中漾起羨慕，他也想要跟乐迪小爱一样，受到人们的欢迎及爱戴。</p>
		<p style="position:absolute; left: 120px; top: 1100px;">于是多多偷偷地接下小爱的任务，到美国犹他州的【布菜斯峡谷国家公园】执行救援，</p>
		<p style="position:absolute; left: 120px; top: 1130px;">结果因为错估距离，油料不足，多多在石柱群中迷路，差一点就救援失</p>
		<p style="position:absolute; left: 120px; top: 1160px;">败，还好小爱紧急赶来才惊险的完成任务。</p>
		<p style="position:absolute; left: 120px; top: 1190px;">一次失败并没有浇熄多多心中的渴望，多多还是很想有更多表现，他相信自己这次一定可以帮助乐迪，</p>
		<p style="position:absolute; left: 120px; top: 1220px;">完成将包裏快速运送到英国伦敦的任务；怎知途中受暴风雨影响，包裏竟然弄丢了！</p>
		<p style="position:absolute; left: 120px; top: 1250px;">这下事情麻烦了！多多不知道该怎么办，又不敢回超级飞侠总部……</p>
		<p style="position:absolute; left: 120px; top: 1280px;">热心助人的多多很想帮超级飞侠好朋友们的忙，但，好像……到底多多帮帮忙真的帮上忙了吗？又帮了什么忙呢？</p>
		<!-- 尾部 -->
		<div class="hello">
			<div style="width: 100%; height: 200px; position: absolute;top: 1500px;">
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
			<img src="https://img.alicdn.com/tfs/TB1otMASmzqK1RjSZPxXXc4tVXa-167-60.png" style="position: absolute; left: 30px; top: 1560px;" />
			<img src="https://img.alicdn.com/tfs/TB1TBEJSkvoK1RjSZFNXXcxMVXa-280-280.jpg" style="position: absolute; left: 250px; top: 1560px; width: 70px;" />
			<div style="position: absolute; left: 250px; top: 1650px;">App下载</div>
			<router-link to="" style="position: absolute; left: 420px; top:1560px;"><Button type="warning">客服中心</Button>
			</router-link>
			<div style="position: absolute; left: 420px; top: 1590px;">京ICP证031057号|京ICP备11043884号|京公网安备11010502037341号|广播电视节目制作经营许可证(京)字第02253号<br />
				网络文化经营许可证 京网文[2019]4082-420号|营业性演出许可证京市演587号<br />
				北京红马传媒文化发展有限公司 版权所有大麦网Copyright 2003-2020 All Rights Reserved<br />
				举报投诉：damai_tousu@member.alibaba.com 浙江省杭州市余杭区文一西路969号<br />
				违法不良信息举报电话：020-62108294</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Tiyu",
		data() {
			return {
				// active: ''
			}
		},
		components: {

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
