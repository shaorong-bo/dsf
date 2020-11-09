<template>
	<div>
		<img src="../../img/damai.png" id="damai" />
		<router-link to="" class="shouye">首页 </router-link>
		<router-link to="/fenlei" class="fenlei">分类 </router-link>
		<Input search enter-button="搜索" placeholder="搜索明星,演出,体育赛事" style="width: 300px;position: absolute;left: 500px; top: 30px;" />
		<Avatar icon="ios-person" style="position: absolute;left: 900px; top: 30px;" />
		<router-link to="/women" class="denglu">登录 </router-link>
		<Icon type="md-cloud-download" style="font-size: 30px; position: absolute; left: 1050px; top: 30px;" />
		<router-link to="" class="xiazai">下载 </router-link>
		<div style="width: 1000px; height: 100px;" id="div">
			<Carousel autoplay v-model="value2" loop>
				<CarouselItem>
					<div class="demo-carousel"><img src="../../img/damaitupian.png" style="width: 1000px; height: 400px;" /> </div>
				</CarouselItem>
				<CarouselItem>
					<div class="demo-carousel"><img src="../../img/QQ截图20200723152820.png" style="width: 1000px; height: 400px;" />
					</div>
				</CarouselItem>
				<CarouselItem>
					<div class="demo-carousel"><img src="../../../vue1.0/src/assets/图片/wallhaven-vgw1yp.jpg" style="width: 1000px; height: 400px;" />
					</div>
				</CarouselItem>
				<CarouselItem>
					<div class="demo-carousel"><img src="../../../vue1.0/src/assets/图片/亚索西部牛仔.jpg" style="width: 1000px; height: 400px;" />
					</div>
				</CarouselItem>
			</Carousel>
		</div>
		<div id="a2">
			<Layout>
				<Footer style="height: 120px;">
					<Icon type="logo-wordpress" style="font-size: 50px; position: absolute;left: 40px;" />
					<router-link to="/fenlei" class="huaju">演唱会 </router-link>
					<Icon type="logo-tux" style="font-size: 50px; position: absolute;left: 150px;" />
					<router-link to="/fenlei" style="position: absolute;top: 80px; left: 140px;">话剧歌剧 </router-link>
					<Icon type="md-ribbon" style="font-size: 50px; position: absolute;left: 260px;" />
					<router-link to="/fenlei" style="position: absolute;top: 80px; left: 270px;">体育 </router-link>
					<Icon type="ios-star" style="font-size: 50px; position: absolute;left: 350px;" />
					<router-link to="/fenlei" style="position: absolute;top: 80px; left: 350px;">儿童亲子 </router-link>
					<Icon type="ios-rose" style="font-size: 50px; position: absolute;left: 440px;" />
					<router-link to="/fenlei" style="position: absolute;top: 80px; left: 440px;">展览休闲 </router-link>
					<Icon type="logo-sass" style="font-size: 50px; position: absolute;left: 530px;" />
					<router-link to="/fenlei" style="position: absolute;top: 80px; left: 530px;">音乐会 </router-link>
					<Icon type="logo-snapchat" style="font-size: 50px; position: absolute;left: 620px;" />
					<router-link to="/fenlei" style="position: absolute;top: 80px; left: 620px;">曲宛杂坛 </router-link>
					<Icon type="ios-tennisball" style="font-size: 50px; position: absolute;left: 710px;" />
					<router-link to="/fenlei" style="position: absolute;top: 80px; left: 710px;">舞蹈芭蕾 </router-link>
					<Icon type="logo-twitter" style="font-size: 50px; position: absolute;left: 800px;" />
					<router-link to="/fenlei" style="position: absolute;top: 80px; left: 800px;">二次元 </router-link>
					<Icon type="md-trending-down" style="font-size: 50px; position: absolute;left: 890px;" />
					<router-link to="/fenlei" style="position: absolute;top: 80px; left: 890px;">旅游展览 </router-link>
				</Footer>
			</Layout>
		</div>
		
		
		
		<div style="position: absolute;top: 650px;left: 80px;">
			<Layout style="width: 1000px; height: 400px;">
				<Footer>
					<router-link to="/zheng" style="position: absolute;top: 10px; left: 10px;font-size: 30px;">演唱会 </router-link>
					<router-link to="/zheng" style="position: absolute;top: 50px; left: 10px;"><img src="https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i1/2251059038/O1CN01v47qkp2GdSGvzJciF_!!2251059038.jpg" width="250px" height="340px"/> </router-link>
					<router-link to="/search" style="position: absolute;top: 50px; left: 280px;"><img src="https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i3/2251059038/O1CN01jjA2jF2GdSH72I4f5_!!2251059038.jpg" width="118px" height="159px"/> </router-link>
					
					
					<div style="width:118px ; height:159px;position: absolute;top: 50px; left: 400px;">
						<router-link to="/search" >
							2020国潮音乐嘉年华苏州站
						 </router-link><br/>
						 <router-link to="/search" >
						 	苏州太湖园博园景区
						  </router-link><br/>
						  <router-link to="/search" >
						  	2020.11.21-11.22
						   </router-link><br/>
						  <router-link to="/search" style="position: absolute;top: 140px;left: 10px; color: red;">
						   ￥488起
						  </router-link><br/>
					</div>
					
					<router-link to="/fa" style="position: absolute;top: 50px; left: 530px;"><img src="https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i1/2251059038/O1CN01dt57cu2GdSH1S9in1_!!2251059038.png" width="118px" height="159px"/> </router-link>
					<div style="width:118px ; height:159px;position: absolute;top: 50px; left: 650px;">
						<router-link to="/fa" >
							2020谢天笑活力岛特别场——【重聚】
						 </router-link><br/>
						 <router-link to="/fa" >
						 	苏州相城活力岛
						  </router-link><br/>
						  <router-link to="/fa" >
						  	2020.11.21 周六19:30
						   </router-link><br/>
						  <router-link to="/fa" style="position: absolute;top: 140px;left: 10px; color: red;">
						   ￥258起
						  </router-link><br/>
					</div>
					
					<router-link to="/zheng" style="position: absolute;top: 50px; left: 770px;"><img src="https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i4/2251059038/O1CN01fahEC62GdSH8yAES3_!!2251059038.jpg" width="118px" height="159px"/> </router-link>
					<div style="width:118px ; height:159px;position: absolute;top: 50px; left: 885px;">
						<router-link to="/zheng" >
						王晰个人巡回音乐会
						 </router-link><br/>
						 <router-link to="/zheng" >
						 	佛山琼花大剧院
						  </router-link><br/>
						  <router-link to="/zheng" >
						  	2020.11.21 周六20:00
						   </router-link><br/>
						  <router-link to="/zheng" style="position: absolute;top: 140px;left: 10px; color: red;">
						   ￥480起
						  </router-link><br/>
					</div>
					
					<router-link to="/search" style="position: absolute;top: 230px; left: 280px;"><img src="https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i2/2251059038/O1CN01P2u90D2GdSHCYORNx_!!2251059038.jpg" width="118px" height="159px"/> </router-link>
					<div style="width:118px ; height:159px;position: absolute;top: 230px; left: 400px;">
						<router-link to="/search" >
						2020嘉善大云村音乐节
						 </router-link><br/>
						 <router-link to="/search" >
						 	嘉兴嘉善县云澜湾温泉景区
						  </router-link><br/>
						  <router-link to="/search" >
						  	2020.11.21 周六15:00
						   </router-link><br/>
						  <router-link to="/search" style="position: absolute;top: 140px;left: 10px; color: red;">
						   ￥199起
						  </router-link><br/>
					</div>
					
					<router-link to="/fa" style="position: absolute;top: 230px; left: 530px;"><img src="https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i4/2251059038/O1CN01fPhtI32GdSH32DTt7_!!2251059038.png" width="118px" height="159px"/> </router-link>
					<div style="width:118px ; height:159px;position: absolute;top: 230px; left: 650px;">
						<router-link to="/fa" >
						刘令飞音乐会北京站
						 </router-link><br/>
						 <router-link to="/fa" >
						 	糖果TANGO雍和宫店三层
						  </router-link><br/>
						  <router-link to="/fa" >
						  	2020.11.13—11.14
						   </router-link><br/>
						  <router-link to="/fa" style="position: absolute;top: 140px;left: 10px; color: red;">
						   ￥480起
						  </router-link><br/>
					</div>
					
					<router-link to="/zheng" style="position: absolute;top: 230px; left: 770px;"><img src="https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i2/2251059038/O1CN01WkXbBc2GdSGxozau6_!!2251059038.jpg" width="118px" height="159px"/> </router-link>
					<div style="width:118px ; height:159px;position: absolute;top: 230px; left: 885px;">
						<router-link to="/zheng" >
						2020橘子音乐节
						 </router-link><br/>
						 <router-link to="/zheng" >
						 	中澳柑橘风情园
						  </router-link><br/>
						  <router-link to="/zheng" >
						  	2020.11.07-11.08
						   </router-link><br/>
						  <router-link to="/zheng" style="position: absolute;top: 140px;left: 10px; color: red;">
						   ￥120起
						  </router-link><br/>
					</div>
				</Footer>
			</Layout>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'Tou',
		data() {
			return {
				value2: 0
			}
		}
	}
</script>


<style scoped lang="scss">
	@import "../assets/css/navHeader.css";

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
		// background-color: red;
	}

	#a2 {
		width: 1000px;
		height: 120px;
		// background-color:red;
		position: absolute;
		top: 520px;
		left: 80px;
	}

	.huaju {
		position: absolute;
		top: 80px;
		left: 40px;
	}
</style>
