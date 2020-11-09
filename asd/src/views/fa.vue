<template>
	<div>
			<img src="../../img/damai.png" id="damai" />
			<router-link to="/index" class="shouye">首页 </router-link>
			<router-link to="/fenlei" class="fenlei">分类 </router-link>
			<Input search enter-button="搜索" placeholder="搜索明星,演出,体育赛事" style="width: 300px;position: absolute;left: 500px; top: 30px;" />
			<Avatar icon="ios-person" style="position: absolute;left: 900px; top: 30px;" />
			<router-link to="/women" class="denglu">登录 </router-link>
			<Icon type="md-cloud-download" style="font-size: 30px; position: absolute; left: 1050px; top: 30px;" />
			<router-link to="" class="xiazai">下载 </router-link>
	
			<!-- 布局 -->
			<Layout style="height: 5000px;width: 100%; position: absolute; top: 100px;">
				<Content style="position: absolute;left: 50px; top: 50px;"><img src="https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i1/2251059038/O1CN01dt57cu2GdSH1S9in1_!!2251059038.png" /></Content>
				<Icon type="md-cube" style="font-size: 40px; position: absolute;top: 50px; left: 430px;" />
				<div style="font-size: 20px; position: absolute;top: 50px; left: 480px;">【重庆】 2020重庆长江草莓音乐节</div>
				<div style="position: absolute;top: 100px;left: 430px;font-size: 15px;">时间:&nbsp;&nbsp;2020.11.07—11.08</div>
				<div style="font-size: 15px;position: absolute;top: 130px; left: 430px;">场馆:&nbsp;&nbsp;重庆市|大渡口区建桥大道万达广场南侧空地</div>
				<Icon type="md-pin" style="font-size: 15px;position: absolute;top: 134px;left: 770px;" />
				<div style="font-size: 15px;position: absolute;top: 180px;left: 430px;">城市</div>
				<router-link to="/women" style="position: absolute; top: 175px;left: 470px;">
					<RadioGroup v-model="buttonSize" type="button">
						<Radio label="large">重庆站</Radio>
					</RadioGroup>
				</router-link>
				<router-link to="/women" style="position: absolute; top: 175px;left: 550px;">
					<RadioGroup v-model="buttonSize" type="button">
						<Radio label="large">杭州站</Radio>
					</RadioGroup>
				</router-link>
				<router-link to="/women" style="position: absolute; top: 175px;left: 630px;">
					<RadioGroup v-model="buttonSize" type="button">
						<Radio label="large">陵水站</Radio>
					</RadioGroup>
				</router-link>
				<div style="width: 1000px; height: 50px;" id="div">
					<Carousel autoplay v-model="value2" loop style="width: 400px;">
						<CarouselItem>
							<div class="demo-carousel"><img src="https://img.alicdn.com/imgextra/i2/2251059038/O1CN01ZNio812GdSHD0xInP_!!2251059038.png_q60.jpg_.webp" style="width: 400px; height: 290px;" /> </div>
						</CarouselItem>
						<CarouselItem>
							<div class="demo-carousel"><img src="https://img.alicdn.com/imgextra/i2/2251059038/O1CN01Ywhnib2GdSH6TQhOD_!!2251059038.png_q60.jpg_.webp" style="width: 400px; height: 290px;" />
							</div>
						</CarouselItem>
						<CarouselItem>
							<div class="demo-carousel"><img src="https://img.alicdn.com/imgextra/i2/2251059038/O1CN014e0owF2GdSHC2aDf9_!!2251059038.png_q60.jpg_.webp" style="width: 400px; height: 290px;" />
							</div>
						</CarouselItem>
						<CarouselItem>
							<div class="demo-carousel"><img src="https://img.alicdn.com/imgextra/i1/2251059038/O1CN01PGFCdK2GdSH84FrPi_!!2251059038.png_q60.jpg_.webp" style="width: 400px; height: 290px;" />
							</div>
						</CarouselItem>
					</Carousel>
				</div>
				<!-- 右侧布局 -->
				<Layout style="position: absolute;left: 840px;top: 50px; width: 300px;">
					<Footer style="height: 600px;">
						<Alert type="error" show-icon style="position: absolute;top: 20px; left: 20px;">不支持退换</Alert>
						<div style="position: absolute;top: 55px; left: 20px;">票品为有价证券，非普通商品，其背后承载的文化服务具有时效性，稀缺性等特征，不支持退换。</div>
					</Footer>
					<Alert type="success" show-icon style="position: absolute;top: 120px; left: 20px;">快递票、自助取票</Alert>
					<div style="position: absolute;top: 155px; left: 20px;">快递票：纸质票会在开票后快递到您留下的收货地址，需您承担邮寄费用。注：离开演时间仅3天时，不再寄送快递票，支持在指定取票地点取票（具体以下单后票夹信息为准）</div>
					<div style="position: absolute;top: 255px; left: 20px;">自助取票：需要您在指定的取票地点取票，下单后可通过票夹中的二维码或身份证换取纸质票（具体以下单后票夹信息为准）</div>
					<Alert type="success" show-icon style="position: absolute;top: 320px; left: 20px;">纸质发票</Alert>
					<div style="position: absolute;top: 355px; left: 20px;">该项目支持开具纸质发票，请您在演出开始前通过订单页补开，发票将在演出结束后1个月左右，统一由主办方提供</div>
					<div style="width: 250px; height: 80px; border: 1px solid; position: absolute; top: 430px; left: 20px;">
						<div style="position: absolute;left: 40px; top: 20px;">手机扫一扫<br />下单更快捷</div>
						<img src="https://damai-item.oss-cn-beijing.aliyuncs.com/projQcode/6293812133/2/629381213334.jpg" height="80px"
						 style="position: absolute;left: 170px;" />
					</div>
	
				</Layout>
				<BackTop :height="100" :bottom="200">
					<div class="top">返回顶端</div>
				</BackTop>
	
	
	
	
				<!-- 选项卡设置 -->
				<div style="position: absolute; top: 560px;">
					<Tabs value="name1" style="width: 800px; height: 4450px; ">
						<TabPane label="项目详情 " name="name1">
							<h2 style="position: absolute;left: 10px;">演出介绍</h2>
							<h3 style="position: absolute;left: 10px; top: 40px;">温馨提示:</h3>
							<p style="position: absolute;left: 10px; top: 60px; font-size: 15px;">1、演出当日请携带本人有效身份证原件或支付宝电子身份证核验有效后入场</p>
							<p style="position: absolute;left: 10px; top: 80px; font-size: 15px;">2、实名制门票仅限一次性使用，出场后无法再次进场</p>
							<p style="position: absolute;left: 10px; top: 100px; font-size: 15px;">3、最早入场时间：12:00，最晚入场时间：19:30</p>
							<p style="position: absolute;left: 10px; top: 120px; font-size: 15px;">4、严禁携带打火机、宠物、非密封食品、易燃易爆危险品、管制刀具、毒品及精神类药品等其他违规物品入场。</p>
							<h3 style="position: absolute;left: 10px; top: 180px;">提示:</h3>
							<h3 style="position: absolute;left: 10px; top: 200px;">购买学生票入场需凭学生证和身份证电子票核对无误后入场。「科罗娜·2020杭州草莓音乐节」全阵容</h3>
							<p style="position: absolute;left: 30px; top: 220px; font-size: 15px;">连续三天，三大舞台，科罗娜·2020杭州草莓音乐节将于11月13-11月15日在滨江区塘子堰胜利桥西草坪举办！</p>
							<p style="position: absolute;left: 10px; top: 260px; font-size: 15px;">大家需要特别留意的是，杭州草莓应要求实行实名制购票、无纸化入场。入场时，需持本人购票时所使用的身份证原</p>
							<p style="position: absolute;left: 10px; top: 280px; font-size: 15px;">件，一人一证，入场人与购票身份信息需一致，一张票对应一个身份证号，故门票无法转售，双十一马上要到了，请</p>
							<p style="position: absolute;left: 10px; top: 300px; font-size: 15px;">大家理性购票。</p>
							<img src="https://img.alicdn.com/imgextra/i1/2251059038/O1CN01FdmiN42GdSH6tmO0z_!!2251059038.jpg_q60.jpg_.webp"
							 width="597px" height="97px" style="position: absolute;top: 350px; left: 80px;" />
							<img src="https://img.alicdn.com/imgextra/i4/2251059038/O1CN01Q9ag512GdSHA0yGzZ_!!2251059038.png_q60.jpg_.webp"
							 width="600px" height="800px" style="position: absolute;top: 450px; left: 80px;" />
							<div style="position: absolute; top:1280px; left:280px; font-size: 15px;">Vision by：MVM design label _</div>
							<h3 style="position: absolute; top:1320px; left:320px; ">多形式，多风格</h3>
							<h3 style="position: absolute; top:1350px; left:305px; ">共计45组音乐人参演</h3>
							<h3 style="position: absolute; top:1380px; left:325px; ">你想看的都有</h3>
							<p style="position: absolute; top:1430px; font-size: 15px;">为了让更多人可以享受音乐，杭州草莓由往年的2天延长为3天，除了熟悉的科罗娜·草莓舞台、碧桂园·爱舞台，还特</p>
							<p style="position: absolute; top:1450px; font-size: 15px;">别设立科罗娜·日落舞台以乐队和DJ交错的形式呈现。</p>
							<img src="https://img.alicdn.com/imgextra/i3/2251059038/O1CN01ObewQF2GdSH4MFOOi_!!2251059038.jpg_q60.jpg_.webp"
							 width="820px" height="178px" style="position: absolute; top: 1500px; left: 0px;" />
							<img src="https://img.alicdn.com/imgextra/i2/2251059038/O1CN014e0owF2GdSHC2aDf9_!!2251059038.png_q60.jpg_.webp"
							 style="position: absolute; top: 1700px; left: 0px;" />
							<img src="https://img.alicdn.com/imgextra/i1/2251059038/O1CN01PGFCdK2GdSH84FrPi_!!2251059038.png_q60.jpg_.webp"
							 style="position: absolute; top: 2550px; left: 0px;" />
							<img src="https://img.alicdn.com/imgextra/i4/2251059038/O1CN011l2Gdh2GdSH9ocgBg_!!2251059038.png_q60.jpg_.webp"
							 style="position: absolute; top: 3400px; left: 0px;" />
						</TabPane>
						<TabPane label="购票须知 " name="name2">
							<h2>购票须知</h2>
							<br />
							<br />
							<p>限购规则</p>
							<p style="font-size: 15px;">每笔订单最多购买2张、每个账号最多购买2张。</p>
							<br />
							<br />
							<p>退票/换票规则</p>
							<p style="font-size: 15px;">票品为有价证券，非普通商品，其背后承载的文化服务具有时效性，稀缺性等特征，不支持退换。</p>
							<br />
							<br />
							<p>配送信息说明</p>
							<p style="font-size: 15px;">不支持修改配送电话、地址等信息</p>
							<br />
							<br />
							<p>入场规则</p>
							<p style="font-size: 15px;">须携带购票时对应证件验证入场。</p>
							<br />
							<br />
							<p>儿童购票</p>
							<p style="font-size: 15px;">1.2米以上凭成人票入场，1.2米以下谢绝入场</p>
							<br />
							<br />
							<p>发票说明</p>
							<p style="font-size: 15px;">演出开始前，去【APP-订单详情页】提交发票申请。演出结束后1个月左右邮寄给你，需自付邮费。</p>
							<br />
							<br />
							<p>实名购票规则</p>
							<p style="font-size: 15px;">一张门票对应一个证件；证件支持：身份证</p>
							<br />
							<br />
							<p>异常排单说明</p>
							<p style="font-size: 15px;">对于异常订购行为，大麦网有权在订单成立或者生效之后取消相应订单。异常订购行为包括但不限于以下情形： （1）通过同一ID订购超出限购张数的订单。 （2）经合理判断认为非真实消费者的下单行为，包括但不限于通过批量相同或虚构的支付账号、收货地址（包括下单时填写及最终实际收货地址）、收件人、电话号码订购超出限购张数的订单。</p>
						</TabPane>
						<TabPane label="观演须知" name="name3">
							<h2>观演须知</h2>
							<br />
							<br />
							<p>演出时长</p>
							<p style="font-size: 15px;">约500分钟，仅供参考，最终以现场实际时长为准</p>
							<br />
							<br />
							<p>入场时间</p>
							<p style="font-size: 15px;">提前60分钟，仅供参考，最终以现场实际入场时间为准</p>
							<br />
							<br />
							<p>禁止携带物品</p>
							<p style="font-size: 15px;">由于安保和版权的原因，大多数演出、展览及比赛场所禁止携带食品、饮料、专业摄录设备、打火机等物品，请您注意现场工作人员和广播的提示，予以配合。</p>
							<br />
							<br />
							<p>寄存说明</p>
							<p style="font-size: 15px;">无寄存处,请自行保管携带物品，谨防贵重物品丢失。</p>
						</TabPane>
					</Tabs>
				</div>
	
	
	
				<div class="hello">
					<div style="width: 100%; height: 200px; position: absolute;top: 4800px;">
						<Layout style="width: 100%; height: 200px;">
							<Footer>
								<router-link to="/women" style="position: absolute;left: 150px;">帮助中心 </router-link>
								<div style="position: absolute;left: 250px;">|</div>
								<router-link to="/women" style="position: absolute;left: 310px;">公司介绍 </router-link>
								<div style="position: absolute;left: 410px;">|</div>
								<router-link to="/women" style="position: absolute;left: 460px;">品牌识别 </router-link>
								<div style="position: absolute;left: 560px;">|</div>
								<router-link to="/women" style="position: absolute;left: 620px;">公司大事记 </router-link>
								<div style="position: absolute;left: 720px;">|</div>
								<router-link to="/women" style="position: absolute;left: 760px;">协议及隐私权政策 </router-link>
								<div style="position: absolute;left: 920px;">|</div>
								<router-link to="/women" style="position: absolute;left: 950px;">廉政举报 </router-link>
								<div style="position: absolute;left: 1040px;">|</div>
							</Footer>
						</Layout>
					</div>
					<img src="https://img.alicdn.com/tfs/TB1otMASmzqK1RjSZPxXXc4tVXa-167-60.png" style="position: absolute; left: 30px; top: 4850px;" />
					<img src="https://img.alicdn.com/tfs/TB1TBEJSkvoK1RjSZFNXXcxMVXa-280-280.jpg" style="position: absolute; left: 250px; top: 4850px; width: 70px;" />
					<div style="position: absolute; left: 250px; top: 4930px;">App下载</div>
					<router-link to="/women" style="position: absolute; left: 420px; top: 4850px;"><Button type="warning">客服中心</Button>
					</router-link>
					<div style="position: absolute; left: 420px; top: 4890px;">京ICP证031057号|京ICP备11043884号|京公网安备11010502037341号|广播电视节目制作经营许可证(京)字第02253号<br />
						网络文化经营许可证 京网文[2019]4082-420号|营业性演出许可证京市演587号<br />
						北京红马传媒文化发展有限公司 版权所有大麦网Copyright 2003-2020 All Rights Reserved<br />
						举报投诉：damai_tousu@member.alibaba.com 浙江省杭州市余杭区文一西路969号<br />
						违法不良信息举报电话：020-62108294</div>
				</div>
			</Layout>
		</div>
	</template>
	
	<script>
		export default {
			name: "Women",
			data() {
				return {
	
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
			top: 220px;
			left: 400px;
	
		}
	
		.top {
			padding: 10px;
			background: rgba(0, 153, 229, .7);
			color: #fff;
			text-align: center;
			border-radius: 2px;
		}
	</style>
	