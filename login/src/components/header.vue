<template>
  <div class="header">
    <div class="header-top">
			<div class="top_nav_l">
				<ul>
					<li class="tel">188-8888-8888<a href="javascript: void(0)"></a></li>
	        <li><a href="javascript: void(0)">一键入款</a></li>
	        <li><a href="javascript: void(0)">VIP贵宾会</a></li>
	        <li><a href="javascript: void(0)">活动申请大厅</a></li>
	        <li class="domain"><a href="javascript:void(0)">www.5454<span id="domain-slide">A</span>.com</a></li>
	        <li><a href="javascript: void(0)">抢红包</a></li>
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
    </div>

  </div>
</template>

<script>
export default {
  name: 'header-view',
  data() {
    return {
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
  height:34px;border-bottom:1px solid #402b2d
}
.wrapper{
  position:relative;width:1000px;margin:0 auto;
  /*padding-left: 45px;*/
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
  /*background: #2f1c20 url('../assets/header_bg.jpg') repeat-x center top*/
}
</style>
