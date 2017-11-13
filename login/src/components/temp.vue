<template>
  <div class="header">
    <div class="header-top">
			<div class="top_nav_l">
				<ul>
          <li v-for="(hl, index) in headerTops.left" :class="hl.class"><a :href="hl.href">{{hl.title}}</a></li>
					<!-- <li class="tel">188-8888-8888<a href="javascript: void(0)"></a></li>
	        <li><a href="javascript: void(0)">一键入款</a></li>
	        <li><a href="javascript: void(0)">VIP贵宾会</a></li>
	        <li><a href="javascript: void(0)">活动申请大厅</a></li>
	        <li class="domain"><a href="javascript:void(0)">www.5454<span id="domain-slide">A</span>.com</a></li>
	        <li><a href="javascript: void(0)">抢红包</a></li> -->
				</ul>
			</div>

			<div class="top_nav_r">
				<ul>
					<li><a href="javascript: void(0)">下载手机APP</a></li>
	        <li><a href="javascript: void(0)">金管家</a></li>
	        <li><a href="javascript: void(0)">手机投注</a></li>
	        <li class="license"><a href="javascript:void(0)">牌照展示</a></li>
	        <li><a href="javascript:void(0)">加入收藏</a></li>
				</ul>
			</div>
    </div>

    <div class="header-content">
      <div id="logo-bg"><a class="onHomepage" href="javascript: void(0)"></a></div>
			<!-- <nav id="nav">
				<ul>
	      	<li><a class="onHomepage" href="javascript: void(0)">网站首页<span>HOME</span></a></li>
	        <li class="hot">
	        	<a href="javascript:void(0)">MG电子<span>MG SLOTS</span></a>
	          <ol class="subnav">
	          	<li game-box="pic">天天返水3.0%</li>
	            <li game-box="mg">摆脱</li>
							<li game-box="mg">摆脱</li>
	          </ol>
	        </li>
	        <li class="hot">
	          <a href="javascript:void(0)">PT电子<span>PT SLOTS</span></a>
	          <ol class="subnav">
	            <li game-box="pic">天天返水3.0%</li>
	            <li game-box="pt-slots">招财进宝</li>
							<li game-box="mg">摆脱</li>
	          </ol>
	        </li>
	        <li class="hot">
	          <a href="/Lobby/Game">电子游艺<span>SLOTS</span></a>
	          <ol class="subnav">
              <li game-box="pic">天天返水3.0%</li>
              <li game-box="mg">MG电子</li>
							<li game-box="mg">摆脱</li>
	          </ol>
	        </li>
	        <li>
	          <a href="/Lobby/Live">真人娱乐<span>CASINO</span></a>
	          <ol class="subnav">
	            <li game-box="pic">天天返水1.0%</li>
	            <li game-box="bb">BBIN旗舰厅</li>
							<li game-box="mg">摆脱</li>
	          </ol>
	        </li>
	        <li>
	          <a href="/Lobby/Sport">皇冠体育<span>SPORTS</span></a>
	          <ol class="subnav">
	            <li game-box="pic">天天反水0.5％起</li>
	            <li game-box="hg">皇冠体育</li>
							<li game-box="mg">摆脱</li>
	          </ol>
	        </li>
	        <li>
	          <a href="/Lobby/Lottery">时时彩<span>LOTTERY</span></a>
	          <ol class="subnav">
	            <li game-box="pic">天天反水0.6％起</li>
	            <li game-box="bb">BBIN彩票</li>
							<li game-box="mg">摆脱</li>
	          </ol>
	        </li>
	        <li class="prmotion hot">
	          <a href="/Promotion">优惠活动<span>PROMOTION</span></a>
	          <ol class="subnav">
	            <li game-box="link"><a href="http://www.2211777.com" target="_blank">金管家</a></li>
	            <li game-box="link"><a ng-href="{{ContactInfo.HttpDeposit==''? '#': ContactInfo.HttpDeposit}}" target="_blank">一键入款</a></li>
							<li game-box="mg">摆脱</li>
	          </ol>
	        </li>
	        <li class="chat">
	            <a href="javascript:void(0)" ng-click="lineChatClick()">在线客服<span>SERVICE</span></a>
	        </li>
	    </ul>
		</nav> -->
  </div>

  </div>
</template>

<script>
export default {
  name: 'header-view',
  data() {
    return {
      headerTops: {
        left: [
          {class: 'tel', title: '188-8888-8888', href: "www.baidu.com"},
          {class: '', title: '一键入款', href: "http://element-cn.eleme.io/#/zh-CN"},
          {class: '', title: 'VIP贵宾会', href: "javascript: void(0)"},
          {class: '', title: '活动申请大厅', href: "javascript: void(0)"},
          {class: '', title: 'www.5454.com', href: "javascript: void(0)"},
          {class: '', title: '抢红包', href: "javascript: void(0)"},
        ],
        right: []
      }
    }
  },
  computed: {
  },
  methods: {
  }
}

</script>

<style>
ol,ul{
  display: inline-block;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}
.header{
  height: 120px;

}
/**header-top**/
.header-top{
  height:34px;border-bottom:1px solid #402b2d;
  background:#2f1c20;
}
.top_nav_l {
	float: left;
  line-height: 34px;
}
.top_nav_r {
	float: right;
  line-height: 34px;
}
.top_nav_l>ul>li, .top_nav_r>ul>li {
  float: left;
  color:#fbc85b;
  line-height: 34px;
}
.top_nav_l>ul>li>a, .top_nav_r>ul>li>a {
  color:#fbc85b;text-decoration:none;
}
.top_nav_l>ul>li>a:hover, .top_nav_r>ul>li>a:hover{
  /*color:#fbc85b;*/
  color:white;
}
.top_nav_l>ul>li+li:before, .top_nav_r>ul>li+li:before{
  content:'';display:inline-block;width:1px;height:8px;margin:0 10px;background:#83523e;vertical-align:middle
}
.top_nav_l>ul>li.tel:before{
  content:'';float:left;width:20px;height:34px;background:url('../assets/tel.png') no-repeat center center
}
.top_nav_l>ul>li.domain span{
  display:inline-block;color:#fff;width:1em
}

.top_nav_r>ul>li.license a{
  position:relative;padding-left:20px;background:url('../assets/h_icon04.png') no-repeat left center
}
.top_nav_r>ul>li.license a:after{
  content:'';position:absolute;top:100%;right:-40px;z-index:8;display:none;width:768px;height:309px;background:url('../assets/license.png') no-repeat;-moz-transition:all .4s;-o-transition:all .4s;-webkit-transition:all .4s;transition:all .4s
}
.top_nav_r>ul>li.license:hover a:after{
  display:inline-block
}

/**header content**/
.header-content {
  height: 86px;
}
#logo-bg{
  /*position:relative;display:inline-block;*/
  width:225px;height:62px;
  margin-top: 10px;
  /*border: 1px solid red;*/
  background:url('../assets/logo.png') no-repeat
}
#logo-bg>a{
  position:absolute;top:0;left:0;display:inline-block;width:100%;height:100%
}
</style>
