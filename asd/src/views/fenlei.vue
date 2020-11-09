<template>
	<div>
		<img src="../../img/damai.png" id="damai" />
		<router-link to="/index" class="shouye">首页 </router-link>
		<router-link to="" class="fenlei">分类 </router-link>
		<Input search enter-button="搜索" placeholder="搜索明星,演出,体育赛事" style="width: 300px;position: absolute;left: 500px; top: 30px;" />
		<Avatar icon="ios-person" style="position: absolute;left: 900px; top: 30px;" />
		<router-link to="/women" class="denglu">登录 </router-link>
		<Icon type="md-cloud-download" style="font-size: 30px; position: absolute; left: 1050px; top: 30px;" />
		<router-link to="" class="xiazai">下载 </router-link>
		
		<!-- 轮播图 -->
		<div style="width: 1000px; height: 100px;" id="div">
			<Carousel autoplay v-model="value2" loop >
				<CarouselItem>
					<div class="demo-carousel"><img src="https://img.alicdn.com/imgextra/i2/2251059038/O1CN01vDP6KA2GdSGotvSIO_!!2251059038.png_q60.jpg_.webp"  style="width: 1000px; height: 400px;"  /> </div>
				</CarouselItem>
				<CarouselItem>
					<div class="demo-carousel"><img src="https://img.alicdn.com/imgextra/i3/2251059038/O1CN01JwTIYf2GdSH5OTOzZ_!!2251059038.png_q60.jpg_.webp"  style="width: 1000px; height: 400px;"  />
					</div>
				</CarouselItem>
				<CarouselItem>
					<div class="demo-carousel"><img src="https://img.alicdn.com/imgextra/i4/2251059038/O1CN01Lv0L0a2GdSGggXcOy_!!2251059038.png_q60.jpg_.webp"  style="width: 1000px; height: 400px;"  />
					</div>
				</CarouselItem>
				<CarouselItem>
					<div class="demo-carousel"><img src="https://img.alicdn.com/imgextra/i3/2251059038/O1CN014xJcXH2GdSH51QmFp_!!2251059038.png_q60.jpg_.webp"  style="width: 1000px; height: 400px;"  />
					</div>
				</CarouselItem>
			</Carousel>
		</div>
		
		  <Tabs size="small" style="position: absolute; top: 500px; width: 100%; height: 5000px;">
		        <TabPane label="推荐排序">
					<img src="https://damai-mx-partner-admin.oss-cn-beijing.aliyuncs.com/2c8c90c4-2af9-4ed0-a92a-19b9c2443487.jpg?x-oss-process=image/quality,q_60/format,webp" width="153px" height="206px" style="position: absolute; top:10px; left: 0px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 150px; top: 10px;"><h4>【成都】 星·朱星杰2020个人演唱会</h4> </router-link>
				    <Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 50px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 45px; left: 190px;">成都 | 四川大剧院</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 80px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 75px; left: 190px;">2020.03.21 周六</p>
					<h2 style="position: absolute; top: 195px; left: 170px;">价格待定</h2> 
					<p style="font-size: 15px; position: absolute; left: 280px; top: 198px;">未开售</p>
					
					<img src="https://damai-mx-partner-admin.oss-cn-beijing.aliyuncs.com/710eb0a6-ab7e-4777-8b97-28df800809ec.jpeg?x-oss-process=image/quality,q_60/format,webp" width="153px" height="206px" style="position: absolute; top:10px; left: 550px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 700px; top: 10px;"><h4>【呼和浩特】 戏胞有艺思超级飞侠《多多帮帮忙》</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 50px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 45px; left: 740px;">场馆待定</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 80px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 75px; left: 740px;">时间待定</p>
					<h2 style="position: absolute; top: 195px; left: 720px;">价格待定</h2> 
					<p style="font-size: 15px; position: absolute; left: 830px; top: 198px;">未开售</p>
					
					
					
					
					<img src="https://damai-mx-partner-admin.oss-cn-beijing.aliyuncs.com/f7f19541-f35b-4416-8621-020ac9f1a837.jpg?x-oss-process=image/quality,q_60/format,webp" width="153px" height="206px" style="position: absolute; top:300px; left: 0px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 150px; top: 300px;"><h4>【呼和浩特】 【呼和浩特站】“天空之城”</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 340px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 335px; left: 190px;">呼和浩特 | 乌兰恰特大剧院</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 370px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 365px; left: 190px;">2020.03.06 周五</p>
					<h2 style="position: absolute; top: 485px; left: 170px;">价格待定</h2> 
					<p style="font-size: 15px; position: absolute; left: 280px; top: 488px;">未开售</p>
					
					<img src="https://damai-mx-partner-admin.oss-cn-beijing.aliyuncs.com/a0e2978f-3357-45cc-94e6-08b733bbb4c8.jpg?x-oss-process=image/quality,q_60/format,webp" width="153px" height="206px" style="position: absolute; top:300px; left: 550px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 700px; top: 300px;"><h4>【兰州】 德米特里·马斯列耶夫钢琴独奏音乐会</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 340px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 335px; left: 740px;">兰州 | 甘肃大剧院大剧场</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 370px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 365px; left: 740px;">时间待定</p>
					<h2 style="position: absolute; top: 485px; left: 720px;">价格待定</h2> 
					<p style="font-size: 15px; position: absolute; left: 830px; top: 488px;">未开售</p>
					
					
					
					
					<img src="https://damai-mx-partner-admin.oss-cn-beijing.aliyuncs.com/a735ba42-4381-4c67-9f8d-a001c8fc2b78.JPG?x-oss-process=image/quality,q_60/format,webp" width="153px" height="206px" style="position: absolute; top:590px; left: 0px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 150px; top: 590px;"><h4>【武汉】 汉秀</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 630px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 625px; left: 190px;">武汉 | 汉秀剧场</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 660px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 655px; left: 190px;">2020.09.10~2020.12.31</p>
					<h2 style="position: absolute; top: 775px; left: 170px;">价格待定</h2> 
					<p style="font-size: 15px; position: absolute; left: 280px; top: 778px;">未开售</p>
					
					<img src="https://damai-mx-partner-admin.oss-cn-beijing.aliyuncs.com/a652a561-2116-48ef-8c0c-5c5a320cc0f3.jpg?x-oss-process=image/quality,q_60/format,webp" width="153px" height="206px" style="position: absolute; top:590px; left: 550px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 700px; top: 590px;"><h4>【北京】 西班牙|互动多媒体舞蹈旅行剧</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 630px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 625px; left: 740px;">北京 | 天桥艺术中心-多功能厅</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 660px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 655px; left: 740px;">2020.05.28~2020.06.07</p>
					<h2 style="position: absolute; top: 775px; left: 720px;">价格待定</h2> 
					<p style="font-size: 15px; position: absolute; left: 830px; top: 778px;">未开售</p>
					
					
					
					
					<img src="https://damai-mx-partner-admin.oss-cn-beijing.aliyuncs.com/7b6c3337-1fa4-4237-bc73-c03badbacc0d.jpg?x-oss-process=image/quality,q_60/format,webp" width="153px" height="206px" style="position: absolute; top:880px; left: 0px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 150px; top: 880px;"><h4>【【北京】 焦媛实验剧团《长恨歌》</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 920px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 915px; left: 190px;">北京 | 天桥艺术中心-大剧场</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 950px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 945px; left: 190px;">2020.07.25~2020.07.26</p>
					<h2 style="position: absolute; top: 1065px; left: 170px;">价格待定</h2> 
					<p style="font-size: 15px; position: absolute; left: 280px; top: 1068px;">未开售</p>
					
					<img src="https://damai-mx-partner-admin.oss-cn-beijing.aliyuncs.com/a4d24166-94c6-4eb6-a92c-e4a8b67de5ec.jpg?x-oss-process=image/quality,q_60/format,webp" width="153px" height="206px" style="position: absolute; top:880px; left: 550px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 700px; top: 880px;"><h4>【乌鲁木齐】 大型实景神话音乐剧《昆仑之约》</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 920px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 915px; left: 740px;">场馆待定</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 950px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 945px; left: 740px;">时间待定</p>
					<h2 style="position: absolute; top: 1065px; left: 720px;">价格待定</h2> 
					<p style="font-size: 15px; position: absolute; left: 830px; top: 1068px;">未开售</p>
					
					
					
					
					<img src="https://damai-mx-partner-admin.oss-cn-beijing.aliyuncs.com/17c715c0-d307-4b35-9377-c9c8b51ab475.jpg?x-oss-process=image/quality,q_60/format,webp" width="153px" height="206px" style="position: absolute; top:1170px; left: 0px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 150px; top: 1170px;"><h4>【成都】 邓泰山巡演曲目 “肖邦舞曲之夜”</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 1210px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 1205px; left: 190px;">成都 | 四川歌舞大剧院</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 1240px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 1235px; left: 190px;">2020.03.13 周五</p>
					<h2 style="position: absolute; top: 1355px; left: 170px;">价格待定</h2> 
					<p style="font-size: 15px; position: absolute; left: 280px; top: 1358px;">未开售</p>
					
					<img src="https://damai-mx-partner-admin.oss-cn-beijing.aliyuncs.com/6a0c5ff5-35f6-4469-9600-99127ee2650e.jpg?x-oss-process=image/quality,q_60/format,webp" width="153px" height="206px" style="position: absolute; top:1170px; left: 550px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 700px; top: 1170px;"><h4>【上海】 Fantasy on Ice  SHANGHAI 冰上幻想</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 1210px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 1205px; left: 740px;">场馆待定</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 1240px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 1235px; left: 740px;">时间待定</p>
					<h2 style="position: absolute; top: 1355px; left: 720px;">价格待定</h2> 
					<p style="font-size: 15px; position: absolute; left: 830px; top: 1358px;">未开售</p>
					
					
					
					
					
					<img src="https://damai-mx-partner-admin.oss-cn-beijing.aliyuncs.com/dd664db2-3df6-4a94-ad9f-66f050afa073.jpg?x-oss-process=image/quality,q_60/format,webp" width="153px" height="206px" style="position: absolute; top:1460px; left: 0px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 150px; top: 1460px;"><h4>【北京】 音乐剧《白夜行》</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 1500px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 1495px; left: 190px;">北京 | 天桥艺术中心-大剧场</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 1530px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 1525px; left: 190px;">2020.06.05~2020.06.07</p>
					<h2 style="position: absolute; top: 1645px; left: 170px;">价格待定</h2> 
					<p style="font-size: 15px; position: absolute; left: 280px; top: 1648px;">未开售</p>
					
					<img src="https://img.alicdn.com/bao/uploaded/i2/2251059038/O1CN015XpmQJ2GdSH9TFthS_!!2-item_pic.png_q60.jpg_.webp" width="153px" height="206px" style="position: absolute; top:1460px; left: 550px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 700px; top: 1460px;"><h4>【上海】 舞蹈剧场《贪吃蛇会吃掉主板吗？》</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 1500px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 1495px; left: 740px;">上海 | 上海国际舞蹈中心-实验剧场</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 1530px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 1525px; left: 740px;">2020.12.19-12.20</p>
					<h2 style="position: absolute; top: 1645px; left: 720px;">价格待定</h2> 
					<p style="font-size: 15px; position: absolute; left: 830px; top: 1648px;">未开售</p>
					
					
					
					
					
					
					<img src="https://img.alicdn.com/bao/uploaded/i2/2251059038/O1CN01v2DOtU2GdSHCjlmti_!!2-item_pic.png_q60.jpg_.webp" width="153px" height="206px" style="position: absolute; top:1750px; left: 0px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 150px; top: 1750px;"><h4>【上海】 花儿这样红—歌坛歌曲音乐会</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 1790px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 1785px; left: 190px;">上海 | 凯迪拉克·上海音乐厅-大厅</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 1820px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 1815px; left: 190px;">2020.12.28 周一 19:30</p>
					<h2 style="position: absolute; top: 1935px; left: 170px;">160-360 元</h2> 
					<p style="font-size: 15px; position: absolute; left: 280px; top: 1938px;">售票中</p>
					
					<img src="https://img.alicdn.com/bao/uploaded/i2/2251059038/O1CN01eigTET2GdSHDgMAZq_!!2-item_pic.png_q60.jpg_.webp" width="153px" height="206px" style="position: absolute; top:1750px; left: 550px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 700px; top: 1750px;"><h4>【抚州】 “致敬经典”孙砾，王庆爽演唱会-金溪站</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 1790px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 1785px; left: 740px;">抚州 | 陆九渊文化艺术中心(金溪大剧院)</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 1820px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 1815px; left: 740px;">2020.11.27 周五 19:45</p>
					<h2 style="position: absolute; top: 1935px; left: 720px;">60-200 元</h2> 
					<p style="font-size: 15px; position: absolute; left: 830px; top: 1938px;">售票中</p>
					
					
					
					
					
					
					
					<img src="https://img.alicdn.com/bao/uploaded/i1/2251059038/O1CN01wAqMPl2GdSHFyi0Sa_!!2-item_pic.png_q60.jpg_.webp" width="153px" height="206px" style="position: absolute; top:2040px; left: 0px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 150px; top: 2040px;"><h4>【武汉】 国乐天香民族音乐会</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 2080px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 2075px; left: 190px;">武汉 | 520爱剧场</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 2110px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 2105px; left: 190px;">2020.11.09 周一 14:30</p>
					<h2 style="position: absolute; top: 2225px; left: 170px;">30 元</h2> 
					<p style="font-size: 15px; position: absolute; left: 280px; top: 2228px;">售票中</p>
					
					<img src="https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i1/2251059038/O1CN012raDiW2GdSH4bqqBL_!!2251059038.jpg_q60.jpg_.webp" width="153px" height="206px" style="position: absolute; top:2040px; left: 550px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 700px; top: 2040px;"><h4>【昆明】 《我和我的祖国--经典名曲音乐会》-昆明</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 2080px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 2075px; left: 740px;">昆明 | 云南省大剧院音乐厅</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 2110px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 2105px; left: 740px;">2020.12.10 周四 20:00</p>
					<h2 style="position: absolute; top: 2225px; left: 720px;">40-111 元</h2> 
					<p style="font-size: 15px; position: absolute; left: 830px; top: 2228px;">售票中</p>
					
					
					
					
					
					
					
					<img src="https://img.alicdn.com/bao/uploaded/i4/2251059038/O1CN01981h0T2GdSHCkAl5W_!!0-item_pic.jpg_q60.jpg_.webp" width="153px" height="206px" style="position: absolute; top:2330px; left: 0px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 150px; top: 2330px;"><h4>【上海】 品欢文化出品《硬扎喜剧现场》</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 2370px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 2365px; left: 190px;">上海 | 长江剧场-黑匣子</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 2400px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 2395px; left: 190px;">2020.11.14-11.28</p>
					<h2 style="position: absolute; top: 2515px; left: 170px;">150-180 元</h2> 
					<p style="font-size: 15px; position: absolute; left: 280px; top: 2518px;">售票中</p>
					
					<img src="https://img.alicdn.com/bao/uploaded/i2/2251059038/O1CN01SpUQll2GdSHDcQCxu_!!2-item_pic.png_q60.jpg_.webp" width="153px" height="206px" style="position: absolute; top:2330px; left: 550px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 700px; top: 2330px;"><h4>【【台州】 珍珠塔</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 2370px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 2365px; left: 740px;">台州 | 三门剧院</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 2400px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 2395px; left: 740px;">2020.11.14 周六 19:00</p>
					<h2 style="position: absolute; top: 2515px; left: 720px;">20-60 元</h2> 
					<p style="font-size: 15px; position: absolute; left: 830px; top: 2518px;">售票中</p>
					
					
					
					
					
					
					
					<img src="https://img.alicdn.com/bao/uploaded/i2/2251059038/O1CN015RSH8n2GdSHDXTwGt_!!2-item_pic.png_q60.jpg_.webp" width="153px" height="206px" style="position: absolute; top:2620px; left: 0px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 150px; top: 2620px;"><h4>【北京】夜猫俱乐部：志国夜总会蒸汽派对</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 2660px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 2655px; left: 190px;">北京 | MAO Livehouse北京</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 2690px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 2685px; left: 190px;">2020.11.27-11.28</p>
					<h2 style="position: absolute; top: 2805px; left: 170px;">88-200 元</h2> 
					<p style="font-size: 15px; position: absolute; left: 280px; top: 2808px;">售票中</p>
					
					<img src="https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i2/2251059038/O1CN0146kqfK2GdSH991wHX_!!2251059038.png_q60.jpg_.webp" width="153px" height="206px" style="position: absolute; top:2620px; left: 550px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 700px; top: 2620px;"><h4>【太原】 2020年 “国粹鉴赏”京剧《文明太后》</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 2660px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 2655px; left: 740px;">太原 | 太原青年宫演艺中心</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 2690px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 2685px; left: 740px;">2020.11.13 周五 19:30</p>
					<h2 style="position: absolute; top: 2805px; left: 720px;">30-120 元</h2> 
					<p style="font-size: 15px; position: absolute; left: 830px; top: 2808px;">售票中</p>
					
					
					
					
					
					
					
					<img src="https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i4/2251059038/O1CN01pBwhak2GdSHEnhs1I_!!2251059038.jpg_q60.jpg_.webp" width="153px" height="206px" style="position: absolute; top:2910px; left: 0px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 150px; top: 2910px;"><h4>【苏州】唯美浪漫经典名曲视听音乐会</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 2950px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 2945px; left: 190px;">苏州 | 苏州独墅湖影剧院</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 2980px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 2975px; left: 190px;">2021.01.02 周六 19:30</p>
					<h2 style="position: absolute; top: 3095px; left: 170px;">50-660 元</h2> 
					<p style="font-size: 15px; position: absolute; left: 280px; top: 3098px;">售票中</p>
					
					<img src="https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i2/2251059038/O1CN01JHOueH2GdSHFzJGhF_!!2251059038.png_q60.jpg_.webp" width="153px" height="206px" style="position: absolute; top:2910px; left: 550px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 700px; top: 2910px;"><h4>【杭州】 互动独角戏《另一只海鸥》</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 2950px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 2945px; left: 740px;">杭州 | 丰马in剧场</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 2980px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 2975px; left: 740px;">2021.01.09-01.10</p>
					<h2 style="position: absolute; top: 3095px; left: 720px;">128 元</h2> 
					<p style="font-size: 15px; position: absolute; left: 830px; top: 3098px;">售票中</p>
					
					
					
					
					
					
					
					<img src="https://img.alicdn.com/bao/uploaded/i4/2251059038/O1CN01SA4YHz2GdSHEyqouG_!!0-item_pic.jpg_q60.jpg_.webp" width="153px" height="206px" style="position: absolute; top:3200px; left: 0px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 150px; top: 3200px;"><h4>【杭州】 LIGHT IN艺术现场 | 光影艺术展</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 3240px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 3235px; left: 190px;">杭州 | 湖滨银泰in77(D区负二楼)</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 3270px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 3265px; left: 190px;">2020.11.18-2021.01.10</p>
					<h2 style="position: absolute; top: 3385px; left: 170px;">58-128 元</h2> 
					<p style="font-size: 15px; position: absolute; left: 280px; top: 3388px;">售票中</p>
					
					<img src="https://img.alicdn.com/bao/uploaded/i1/2251059038/O1CN01wRHgr32GdSHFoJzM4_!!0-item_pic.jpg_q60.jpg_.webp" width="153px" height="206px" style="position: absolute; top:3200px; left: 550px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 700px; top: 3200px;"><h4>【杭州】 welcome to Hangzhou 萌兔乐园体验馆</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 3240px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 3235px; left: 740px;">杭州 | 湖滨银泰E区2楼</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 3270px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 3265px; left: 740px;">2020.11.03-2021.02.03</p>
					<h2 style="position: absolute; top: 3385px; left: 720px;">48-108 元</h2> 
					<p style="font-size: 15px; position: absolute; left: 830px; top: 3388px;">售票中</p>
					
					
					
					
					
					
					
					<img src="https://pimg.dmcdn.cn/perform/project/1521/152193_n.jpg?_t=1579069979090&x-oss-process=image/quality,q_60/format,webp" width="153px" height="206px" style="position: absolute; top:3490px; left: 0px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 150px; top: 3490px;"><h4>【上海】 百老汇经典音乐剧《美女与野兽》</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 3530px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 3525px; left: 190px;">上海 | 华特迪士尼大剧院</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 3560px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 3555px; left: 190px;">2020.01.25 13:00</p>
					<h2 style="position: absolute; top: 3675px; left: 170px;">88-158 元</h2> 
					<p style="font-size: 15px; position: absolute; left: 280px; top: 3678px;">售票中</p>
					
					<img src="https://pimg.dmcdn.cn/perform/project/1656/165625_n.jpg?_t=1539584142297&x-oss-process=image/quality,q_60/format,webp" width="153px" height="206px" style="position: absolute; top:3490px; left: 550px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 700px; top: 3490px;"><h4>【上海】 爱乐汇轻音乐团经典专辑</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 3530px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 3525px; left: 740px;">上海 | 中国票务在线上海站</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 3560px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 3555px; left: 740px;">常年</p>
					<h2 style="position: absolute; top: 3675px; left: 720px;">50-100 元</h2> 
					<p style="font-size: 15px; position: absolute; left: 830px; top: 3678px;">售票中</p>
					
					
					
					
					
					
					
					<img src="https://pimg.dmcdn.cn/perform/project/1809/180921_n.jpg?_t=1585535014752&x-oss-process=image/quality,q_60/format,webp" width="153px" height="206px" style="position: absolute; top:3780px; left: 0px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 150px; top: 3780px;"><h4>【国际及港澳台】 2020越南下龙湾马拉松</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 3820px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 3815px; left: 190px;">国际及港澳台 | 广宁市会展中心</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 3850px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 3845px; left: 190px;">2020.11.22 05:30</p>
					<h2 style="position: absolute; top: 3965px; left: 170px;">239-790 元</h2> 
					<p style="font-size: 15px; position: absolute; left: 280px; top: 3968px;">售票中</p>
					
					<img src="https://pimg.dmcdn.cn/perform/project/1595/159582_n.jpg?_t=1533527466702&x-oss-process=image/quality,q_60/format,webp" width="153px" height="206px" style="position: absolute; top:3780px; left: 550px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 700px; top: 3780px;"><h4>【苏州】 VR+Room Break密室(观前旗舰店)</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 3820px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 3815px; left: 740px;">苏州 | VR+Room Break 密室（观前店）</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 3850px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 3845px; left: 740px;">常年</p>
					<h2 style="position: absolute; top: 3965px; left: 720px;">70-540 元</h2> 
					<p style="font-size: 15px; position: absolute; left: 830px; top: 3968px;">售票中</p>
					
					
					
					
					
					
					
					<img src="https://img.alicdn.com/bao/uploaded/i4/2251059038/O1CN01jrJSkc2GdSHEW2EBp_!!2-item_pic.png_q60.jpg_.webp" width="153px" height="206px" style="position: absolute; top:4070px; left: 0px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 150px; top: 4070px;"><h4>【深圳】 大型童话音乐剧《海底总动员》</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 4110px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 4105px; left: 190px;">深圳 | 龙岗文化中心大剧院</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 4140px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 4135px; left: 190px;">2020.12.27 周日</p>
					<h2 style="position: absolute; top: 4255px; left: 170px;">58-300 元</h2> 
					<p style="font-size: 15px; position: absolute; left: 280px; top: 4258px;">售票中</p>
					
					<img src="https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i3/2251059038/O1CN01iW52Hh2GdSHG65K74_!!2251059038.jpg_q60.jpg_.webp" width="153px" height="206px" style="position: absolute; top:4070px; left: 550px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 700px; top: 4070px;"><h4>【成都】 Hickey喜祺2020巡回演出</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 4110px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 4105px; left: 740px;">成都 | 东郊记忆·Alive 壹现场</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 4140px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 4135px; left: 740px;">2020.11.21 周六 19:30</p>
					<h2 style="position: absolute; top: 4255px; left: 720px;">280-680 元</h2> 
					<p style="font-size: 15px; position: absolute; left: 830px; top: 4258px;">售票中</p>
					
					
					
					
					
					
					
					<img src="https://img.alicdn.com/bao/uploaded/i1/2251059038/O1CN01mNAfJG2GdSHA5T8cv_!!0-item_pic.jpg_q60.jpg_.webp" width="153px" height="206px" style="position: absolute; top:4360px; left: 0px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 150px; top: 4360px;"><h4>【惠州】 舞台剧 《夔龙玉》</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 4400px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 4395px; left: 190px;">惠州 | 惠州文化艺术中心</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 4430px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 4425px; left: 190px;">2020.11.27 周五 20:00</p>
					<h2 style="position: absolute; top: 4545px; left: 170px;">76-266 元</h2> 
					<p style="font-size: 15px; position: absolute; left: 280px; top: 4548px;">售票中</p>
					
					<img src="https://img.alicdn.com/bao/uploaded/i4/2251059038/O1CN01hSvsw32GdSHEWWIpI_!!2-item_pic.png_q60.jpg_.webp" width="153px" height="206px" style="position: absolute; top:4360px; left: 550px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 700px; top: 4360px;"><h4>【深圳】 海鸥</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 4400px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 4395px; left: 740px;">深圳 | 万象天地剧场</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 4430px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 4425px; left: 740px;">2020.11.22-11.23</p>
					<h2 style="position: absolute; top: 4545px; left: 720px;">120-380 元</h2> 
					<p style="font-size: 15px; position: absolute; left: 830px; top: 4548px;">售票中</p>
					
					
					
					
					
					
					
					<img src="https://img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01jJoOPM2GdSHH9vyky_!!0-item_pic.jpg_q60.jpg_.webp" width="153px" height="206px" style="position: absolute; top:4650px; left: 0px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 150px; top: 4650px;"><h4>【南宁】 大型歌舞《花开东方》</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 4690px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 4685px; left: 190px;">南宁 | 南宁剧场</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 4720px; left: 160px;"/>
					<p style="font-size: 15px; position: absolute; top: 4715px; left: 190px;">2020.11.23 周一 20:00</p>
					<h2 style="position: absolute; top: 4835px; left: 170px;">80-880 元</h2> 
					<p style="font-size: 15px; position: absolute; left: 280px; top: 4838px;">售票中</p>
					
					<img src="https://img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01e0CKgO2GdSHBpA4YM_!!0-item_pic.jpg_q60.jpg_.webp" width="153px" height="206px" style="position: absolute; top:4650px; left: 550px;"/>
					<router-link to="/tiyu" class="shouye" style="position: absolute; left: 700px; top: 4650px;"><h4>【太原】 话剧《爸爸的马拉松》</h4> </router-link>
					<Icon type="ios-pin" style="font-size: 18px; position: absolute; top: 4690px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 4685px; left: 740px;">太原 | 山西大剧院</p>
					<Icon type="ios-card" style="font-size: 18px; position: absolute; top: 4720px; left: 710px;"/>
					<p style="font-size: 15px; position: absolute; top: 4715px; left: 740px;">2020.12.10 周四 19:30</p>
					<h2 style="position: absolute; top: 4835px; left: 720px;">30-280 元</h2> 
					<p style="font-size: 15px; position: absolute; left: 830px; top: 4838px;">售票中</p>
				</TabPane>
		        <TabPane label="购票须知">
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
		        <TabPane label="观演须知">
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
			<!-- 返回顶部 -->
			<BackTop></BackTop>
			<!-- 尾部 -->
			<div class="hello">
				<div style="width: 100%; height: 200px; position: absolute;top: 5500px;">
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
				<img src="https://img.alicdn.com/tfs/TB1otMASmzqK1RjSZPxXXc4tVXa-167-60.png" style="position: absolute; left: 30px; top: 5560px;" />
				<img src="https://img.alicdn.com/tfs/TB1TBEJSkvoK1RjSZFNXXcxMVXa-280-280.jpg" style="position: absolute; left: 250px; top: 5560px; width: 70px;" />
				<div style="position: absolute; left: 250px; top: 5640px;">App下载</div>
				<router-link to="" style="position: absolute; left: 420px; top: 5560px;"><Button type="warning">客服中心</Button>
				</router-link>
				<div style="position: absolute; left: 420px; top: 5600px;">京ICP证031057号|京ICP备11043884号|京公网安备11010502037341号|广播电视节目制作经营许可证(京)字第02253号<br />
					网络文化经营许可证 京网文[2019]4082-420号|营业性演出许可证京市演587号<br />
					北京红马传媒文化发展有限公司 版权所有大麦网Copyright 2003-2020 All Rights Reserved<br />
					举报投诉：damai_tousu@member.alibaba.com 浙江省杭州市余杭区文一西路969号<br />
					违法不良信息举报电话：020-62108294</div>
			</div>
	</div>
</template>

<script>
	export default {
		name: "fenlei",
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
		top: 100px;
		left: 80px;
	
	}
	
</style>