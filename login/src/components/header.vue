<template>
  <div class="header">
    <div class="header-top">
			<div class="top_nav_l">
				<ul>
          <li v-for="(hl, index) in headerTops.left" :class="hl.class" :key="key('hl', index)">{{index===0 ? hl.title :''}}
            <a v-if="index!==0" :href="hl.href">{{hl.title}}</a>
          </li>
				</ul>
			</div>

			<div class="top_nav_r">
				<ul>
          <li v-for="(hr, index) in headerTops.right" :class="hr.class" :key="key('hr', index)">
            <a :href="hr.href">{{hr.title}}</a>
          </li>
				</ul>
			</div>
    </div>

    <div class="header-content">
      <div id="logo-bg"><a href="https://www.baidu.com/"></a></div>
      <nav id="nav">
				<ul>
          <li v-for="(nav, index) in headerContents" :class="nav.class" :key="key('nav', index)">
            <a :href="nav.href">
              {{ nav.cTitle }}
              <span>{{ nav.eTitle }}</span>
            </a>
            <ol v-if="nav.subs && nav.subs.length>0" class="subnav">
              <li v-for="(sub, index) in nav.subs" :key="key('subnav', index)">{{sub}}</li>
            </ol>
          </li>
        </ul>
      </nav>
    </div>

  </div>
</template>

<script>
const allUsers = {
  user: 1,
  delegate: 2,
  manager: 3,
  superManager: 10
}

const allNavs = [
  {
    permission: [1, 2, 3, 10],
    class: '',
    cTitle: "网站首页",
    eTitle: "Home",
    href: 'https://www.baidu.com/',
  },
  {
    permission: [1, 2, 3, 10],
    class: 'hot',
    cTitle: "购彩大厅",
    eTitle: "Lottery",
    href: 'https://www.baidu.com/',
    subs: ["重庆时时彩", "北京PK10", "泰国分分彩"],
  },
  {
    permission: [1, 2, 3, 10],
    class: '',
    cTitle: '在线客服',
    eTitle: 'Service',
    href: 'https://www.baidu.com/',
  }
]
function createNav(permission) {
  let navs = []
  for (let nav of allNavs) {
    if (nav.permission && nav.permission.indexOf(permission) !== -1) {
      navs.push(nav)
    }
  }
  return navs
}

const contents = new Map([
  [allUsers.user, createNav(allUsers.user)],
  [allUsers.delegate, createNav(allUsers.delegate)],
  [allUsers.manager, createNav(allUsers.manager)],
  [allUsers.superManager, createNav(allUsers.superManager)],
])

export default {
  name: 'header-view',
  props: {
    permission: {
      type: Number,
      // required: true,
      default: allUsers.user
    },
  },
  data() {
    return {
      headerTops: {
        left: [
          {class: 'tel', title: '188-8888-8888', href: "javascript: void(0)"},
          {class: '', title: '一键入款', href: "http://element-cn.eleme.io/#/zh-CN"},
          {class: '', title: 'VIP贵宾会', href: "javascript: void(0)"},
          {class: '', title: '活动申请大厅', href: "javascript: void(0)"},
          {class: '', title: 'www.5454.com', href: "javascript: void(0)"},
          {class: '', title: '抢红包', href: "javascript: void(0)"},
        ],
        right: [
          {class: '', title: '下载手机APP', href: "javascript: void(0)"},
          {class: '', title: '金管家', href: "http://element-cn.eleme.io/#/zh-CN"},
          {class: '', title: '手机投注', href: "javascript: void(0)"},
          {class: 'license', title: '牌照展示', href: "javascript: void(0)"},
          {class: '', title: '加入收藏', href: "javascript: void(0)"},
        ]
      },
      headerContents: []
    }
  },
  computed: {
  },
  methods: {
    key: function(type, index) {
      return `${type}-${index}`
    },
  },
  mounted: function() {
    console.log(this.permission)
    this.headerContents = contents.get(this.permission)
    console.log(this.headerContents);
  }
}

</script>

<style lang="scss">
$headerHeight: 120px;
$headerTopHeight: 34px;
$headerContentHeight: $headerHeight - $headerTopHeight;
// $headerContentHeight: 86px;
$logoWidth: 225px;
$logoHeight: 62px;

ol,ul{
  display: inline-block;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}
.header{
  height: $headerHeight;
}
/**header-top**/
.header-top{
  height:$headerTopHeight;
  border-bottom:1px solid #402b2d;
}
.top_nav_l {
	float: left;
  line-height: $headerTopHeight;
}
.top_nav_r {
	float: right;
  line-height: $headerTopHeight;
}
.top_nav_l>ul>li, .top_nav_r>ul>li {
  float: left;
  color:#fbc85b;
  line-height: $headerTopHeight;
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
  // position:absolute;top:$headerTopHeight;left:0;
  height: $headerContentHeight;
  border: 1px solid white;
  // background:#2f1c20 url('../assets/header_bg.png') repeat-x center top
}
#logo-bg{
  margin-top: 10px;
  width:$logoWidth;height:$logoHeight;
  background:url('../assets/logo.png') no-repeat
}
#logo-bg>a{
  position:absolute;top:0;left:0;display:inline-block;
  width:$logoWidth;height:$headerContentHeight;
}
#nav{
  border: 1px solid white;
  display:inline-block;
  position:absolute;bottom:0;left:$logoWidth + 10;
  width: 100%;
  text-align:center;
}
// #nav>ul{
//   width:100%;
// }
#nav>ul>li{
  position:relative;float:left;width:79px;height:84px;line-height:84px
}
#nav>ul>li.hot:before{
  content:'';position:absolute;top:15px;right:0;width:21px;height:12px;background:url('../assets/hot.gif') no-repeat center
}
#nav>ul>li>a{
  display:inline-block;padding:27px 0 15px;color:#f5ad90;line-height:1.5em;text-decoration:none
}
#nav>ul>li>a>span{
  display:block;line-height:2em
}
#nav>ul>li:hover>a{
  color:#ffd053
}
#nav>ul>li:hover .subnav{
  display:block
}
.subnav{
  display:none;position:absolute;top:100%;z-index:2;width:106px;margin:0 -13px;padding:5px 0;border:2px solid #ffd053;background:url('../assets/sub_navi_bg.png') repeat left top
}
.subnav:before{
  content:'▲';position:absolute;bottom:99.5%;left:0;right:0;color:#ffd053;line-height:normal
}
.subnav li,.subnav li>a{
  color:#fff;font-size:12px;line-height:30px;text-decoration:none
}
.subnav li:first-child{
  color:red;font-weight:bold
}
.subnav li:hover{
  color:#ffd954;
  cursor:pointer;
}
</style>
