!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(e){}r=o.write?o.write(r,n):encodeURIComponent(r+"").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(n+"")).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var s="";for(var f in i)i[f]&&(s+="; "+f,!0!==i[f]&&(s+="="+i[f]));return document.cookie=n+"="+r+s}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");this.json||'"'!==C.charAt(0)||(C=C.slice(1,-1));try{var m=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,m):o(C,m)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(e){}if(n===m){c=C;break}n||(c[m]=C)}catch(e){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}return n(function(){})});

var comm_list=[{slug:"common",list:[{tag:"常用",link:[
{name:"吾爱破解",url:"https://www.52pojie.cn/"},
{name:"无忧论坛",url:"http://bbs.wuyou.net/forum.php"},
{name:"红尘答题",url:"https://www.woxunbudao.cn/"},
{name:"天达云",url:"https://www.tdyun.com/user/login.aspx?urlrun=https://www.tdyun.com/user/hostadm.aspx"},
{name:"极客之眼",url:"https://www.geekeyes.cn/forum.php"},
{name:"果核剥壳",url:"https://www.ghxi.com/"},
{name:"B612",url:"http://www.lpb612.com"}]},



{tag:"热门",link:[
{name:"阿里服务器",url:"https://ecs.console.aliyun.com/home?spm=5176.8789780.J_4267641240.3.273c45b55eQogy"},
{name:"图片",url:"https://yandex.com/"},
{name:"Wall-e网盘",url:"https://www.wall-e.cn/103/"},
{name:"云电脑",url:"https://cloudgame.ds.163.com/nsh/?utm_source=nshfab"},
{name:"磁力搜索",url:"https://18mag.net/"},
{name:"光伏星球",url:"http://edu.chint.com/"},
{name:"彩虹云",url:"https://www.cccyun.net/"}]},

{tag:"社交",link:[
{name:"微博",url:"https://www.weibo.com/"},
{name:"贴吧",url:"https://tieba.baidu.com/"},
{name:"知乎",url:"https://www.zhihu.com/"},
{name:"豆瓣",url:"https://www.douban.com/"},
{name:"V2EX",url:"https://www.v2ex.com/"},
{name:"简书",url:"https://www.jianshu.com/"},
{name:"Twitter",url:"https://twitter.com/"}]},

{tag:"科学",link:[
{name:"科学",url:"https://www.nthu1.com/#/register?code=k0EEQ0HR"},
{name:"科学",url:"https://ccy01.cloud/#/register?code=AvAM1sJE"},
{name:"科学",url:"https://www.vultr.com"},
{name:"美区ID",url:"https://apple.laogoubi.net/p/803926451363ce6f78a95135e687c979"},
{name:"待",url:"http://www.lpb612.com/"},
{name:"待",url:"http://lpb612.com/"},
{name:"永久",url:"http://www.nthu.cc"}]},

{tag:"购物",link:[
{name:"淘宝",url:"https://www.taobao.com/"},
{name:"京东",url:"https://www.jd.com/"},
{name:"拼多多",url:"https://youhui.pinduoduo.com/"},
{name:"亚马逊",url:"https://www.amazon.cn/"},
{name:"苏宁易购",url:"https://www.suning.com/"},
{name:"网易严选",url:"https://you.163.com/"},
{name:"APSGO软购",url:"https://apsgo.com/"}]},

{tag:"媒体",link:[
{name:"YouTube",url:"https://www.youtube.com/"},
{name:"硕鼠解析",url:"https://www.flvcd.com/"},
{name:"P站",url:"https://cn.pornhub.com/"},
{name:"哔哩哔哩",url:"https://www.bilibili.com/"},
{name:"网易云音乐",url:"https://music.163.com/"},
{name:"斗鱼直播",url:"https://www.douyu.com/"},
{name:"虎牙直播",url:"https://www.huya.com/"}]},

{tag:"工具",link:[
{name:"B站风纪委",url:"https://www.bilibili.com/judgement/apply"},
{name:"显卡天阶图",url:"https://www.mydrivers.com/zhuanti/tianti/gpu/"},
{name:"CPU天阶图",url:"https://www.mydrivers.com/zhuanti/tianti/CPU/"},
{name:"前程无忧",url:"https://www.51job.com/"},
{name:"应届生",url:"http://www.yingjiesheng.com/"},
{name:"脉脉",url:"https://maimai.cn/"},
{name:"酷工作",url:"https://www.v2ex.com/?tab=jobs"}]},

{tag:"生活",link:[
{name:"美团",url:"https://www.meituan.com/"},
{name:"大众点评",url:"https://www.dianping.com/"},
{name:"携程",url:"https://www.ctrip.com/"},
{name:"去哪儿",url:"https://www.qunar.com/"},
{name:"飞猪",url:"https://www.alitrip.com/"},
{name:"12306",url:"https://kyfw.12306.cn/otn/index/init"},
{name:"马蜂窝",url:"https://www.mafengwo.cn/"}]},

{tag:"便捷",link:[
{name:"Google翻译",url:"https://translate.google.cn/"},
{name:"天气预报",url:"https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&tn=baidu&wd=%E5%A4%A9%E6%B0%94%E9%A2%84%E6%8A%A5/"},
{name:"快递查询",url:"https://www.kuaidi100.com/"},
{name:"在线转换",url:"https://cn.office-converter.com/"},
{name:"阿里网盘",url:"https://www.aliyundrive.com/"},
{name:"163邮箱",url:"https://mail.163.com/"},
{name:"QQ邮箱",url:"https://mail.qq.com/"}]},

{tag:"",link:[

]}]},{slug:"amuse",list:[

{tag:"临时记录",link:[
{name:"跳转查询",url:"https://blog.csdn.net/u012241616/article/details/114603874"},
{name:"适配查询",url:"https://wenku.baidu.com/view/d7b82512ed06eff9aef8941ea76e58fafab045f2.html?_wkts_=1676963433627"},
{name:"低端影视",url:"https://ddrk.me/"},
{name:"阿房影视",url:"https://bwl87.com/"},
{name:"4k鸭",url:"https://yanetflix.com/"},
{name:"在线之家",url:"https://www.zxzj.me/"},
{name:"AGE动漫",url:"https://www.agefans.cc/"}]},

{tag:"BT电影",link:[
{name:"片库",url:"https://www.pianku.li/"},
{name:"电影天堂",url:"https://www.dy2018.com/"},
{name:"BT吧",url:"https://www.ibtba.cc/"},
{name:"阳光电影",url:"https://www.ygdy8.com/index.html"},
{name:"6v电影",url:"http://www.hao6v.com/"},
{name:"人人影视",url:"http://www.yyetss.com/"},
{name:"音范丝",url:"https://www.yinfans.me/"}]},

{tag:"发现",link:[
{name:"煎蛋",url:"https://jandan.net/"},
{name:"果壳网",url:"https://www.guokr.com/"},
{name:"堆糖",url:"https://www.duitang.com/"},
{name:"糗事百科",url:"https://www.qiushibaike.com/"},
{name:"暴走漫画",url:"http://baozou.com/"},
{name:"百思不得姐",url:"http://www.budejie.com/"},
{name:"好奇心日报",url:"http://www.qdaily.com/"}]},

{tag:"影视",link:[
{name:"优酷",url:"https://www.youku.com/"},
{name:"爱奇艺",url:"https://www.iqiyi.com/"},
{name:"腾讯视频",url:"https://v.qq.com/"},
{name:"乐视视频",url:"http://www.le.com/"},
{name:"芒果TV",url:"https://www.mgtv.com/"},
{name:"央视网",url:"http://tv.cctv.com/"},
{name:"YouTube",url:"https://www.youtube.com/"}]},

{tag:"直播",link:[{name:"斗鱼直播",url:"https://www.douyu.com/"},
{name:"YY直播",url:"https://www.yy.com/"},
{name:"虎牙直播",url:"https://www.huya.com/"},
{name:"花椒直播",url:"http://www.huajiao.com/"},
{name:"企鹅电竞",url:"https://egame.qq.com/"},
{name:"一直播",url:"https://www.yizhibo.com/"},
{name:"Twitch",url:"https://www.twitch.tv/"}]},
{tag:"动漫",link:[{name:"哔哩哔哩",url:"https://www.bilibili.com/"},
{name:"AcFun",url:"http://www.acfun.cn/"},
{name:"嘀哩嘀哩",url:"http://www.dilidili.name/"},
{name:"半次元",url:"https://bcy.net/"},
{name:"网易漫画",url:"https://manhua.163.com/"},
{name:"有妖气",url:"http://u17.com/"},
{name:"萌娘百科",url:"https://zh.moegirl.org/"}]},

{tag:"游戏",link:[{name:"Steam",url:"https://store.steampowered.com/"},
{name:"游民星空",url:"http://www.gamersky.com/"},
{name:"口袋巴士",url:"http://www.tgbus.com/"},
{name:"17173",url:"https://www.17173.com/"},
{name:"多玩游戏",url:"http://www.duowan.com/"},
{name:"3DMGAME",url:"https://www.3dmgame.com/"},
{name:"橙光游戏",url:"http://www.66rpg.com/"}]},

{tag:"音乐",link:[{name:"网易云音乐",url:"https://music.163.com/"},
{name:"虾米音乐",url:"https://www.xiami.com/"},
{name:"QQ音乐",url:"https://y.qq.com/"},
{name:"豆瓣FM",url:"https://douban.fm/"},
{name:"喜马拉雅FM",url:"https://www.ximalaya.com/"},
{name:"音悦Tai",url:"http://www.yinyuetai.com/"},
{name:"5sing原创",url:"http://5sing.kugou.com/"}]},

{tag:"体育",link:[
{name:"腾讯体育",url:"http://sports.qq.com/"},
{name:"网易体育",url:"http://sports.163.com/"},
{name:"新浪体育",url:"http://sports.sina.com.cn/"},
{name:"央视体育",url:"http://sports.cctv.com/"},
{name:"乐视体育",url:"http://www.lesports.com/"},
{name:"直播吧",url:"https://www.zhibo8.cc/"},
{name:"虎扑",url:"https://www.hupu.com/"}]},

{tag:"小说",link:[
{name:"新笔趣阁",url:"http://www.xbiquge.la/"},
{name:"起点中文网",url:"https://www.qidian.com/"},
{name:"纵横中文网",url:"http://www.zongheng.com/"},
{name:"红袖添香",url:"https://www.hongxiu.com/"},
{name:"豆瓣阅读",url:"https://read.douban.com/"},
{name:"网易云阅读",url:"http://yuedu.163.com/"},
{name:"鲸鱼阅读",url:"http://www.jingyu.com/"}]}]},{slug:"study",list:[

{tag:"题库",link:[
{name:"光伏星球",url:"https://www.wall-e.cn/gf/"},
{name:"正泰智维",url:"https://www.wall-e.cn/DT/"},
{name:"每天一个知识点",url:"https://www.wall-e.cn/zs"},
{name:"空",url:"https://www.wall-e.cn"},
{name:"空",url:"https://www.wall-e.cn"},
{name:"空",url:"https://www.wall-e.cn"},
{name:"空",url:"https://www.wall-e.cn"}]},

{tag:"文库",link:[
{name:"百度文库",url:"https://wenku.baidu.com/"},
{name:"道客巴巴",url:"http://www.doc88.com/"},
{name:"豆丁网",url:"http://www.docin.com/"},
{name:"爱问共享资料",url:"http://ishare.iask.sina.com.cn/"},
{name:"360doc",url:"http://www.360doc.com/"},
{name:"凌风云文库",url:"https://wenku.lingfengyun.com/"},
{name:"MBA智库",url:"http://www.mbalib.com/"}]},

{tag:"学术",link:[
{name:"谷歌学术",url:"https://scholar.google.com/"},
{name:"百度学术",url:"http://xueshu.baidu.com/"},
{name:"必应学术",url:"https://cn.bing.com/academic"},
{name:"中国知网",url:"http://www.cnki.net/"},
{name:"万方数据",url:"http://www.wanfangdata.com.cn/"},
{name:"维普网",url:"http://www.cqvip.com/"},
{name:"OALib",url:"http://www.oalib.com/"}]},

{tag:"词典",link:[
{name:"汉语词典",url:"http://hd.cnki.net/kxhd"},
{name:"剑桥词典",url:"https://dictionary.cambridge.org/zhs/"},
{name:"柯林斯词典",url:"https://www.collinsdictionary.com/zh/"},
{name:"有道词典",url:"https://www.youdao.com/"},
{name:"汉典",url:"http://www.zdic.net/"},
{name:"日中辞典",url:"https://cjjc.weblio.jp/"},
{name:"韩中词典",url:"https://zh.dict.naver.com/"}]},

{tag:"资讯",link:[
{name:"腾讯教育",url:"http://edu.qq.com/"},
{name:"搜狐教育",url:"http://learning.sohu.com/"},
{name:"新浪教育",url:"http://www.163.com/"},
{name:"中国教育在线",url:"http://www.eol.cn/"},
{name:"新东方",url:"http://www.xdf.cn/"},
{name:"沪江英语",url:"http://www.hjenglish.com/"},
{name:"无忧考网",url:"https://www.51test.net/"}]},

{tag:"模考",link:[
{name:"我要模考",url:"http://www.51mokao.com/"},
{name:"考满分留学",url:"http://www.kmf.com/"},
{name:"LeetCode",url:"https://leetcode-cn.com/"},
{name:"中华会计网校",url:"http://www.chinaacc.com/tiku/"},
{name:"打字练习",url:"https://www.typing.com/student"},
{name:"驾校一点通",url:"http://www.jxedt.com/"},
{name:"驾考宝典",url:"http://www.jiakaobaodian.com/"}]},

{tag:"便捷",link:[{name:"多邻国",url:"http://www.duolingo.cn/"},
{name:"扇贝",url:"https://www.shanbay.com/"},
{name:"百词斩",url:"http://www.baicizhan.com/"},
{name:"51VOA",url:"http://www.51voa.com/"},
{name:"在线PDF",url:"https://smallpdf.com/cn"},
{name:"公式字符",url:"http://webdemo.myscript.com/"},
{name:"Wolfram Alpha",url:"https://www.wolframalpha.com/"}]},

{tag:"成绩",link:[
{name:"英语四六级",url:"http://cet.neea.edu.cn/cet/"},
{name:"普通话水平",url:"http://www.cltt.org/studentscore"},
{name:"会计从业资格",url:"http://kzp.mof.gov.cn/cjcx/cjcx.jsp"},
{name:"教师资格",url:"http://ntce.neea.edu.cn/html1/folder/1508/211-1.htm?sid=660"},
{name:"计算机等级",url:"http://zscx.neea.edu.cn/html1/folder/1508/211-1.htm?sid=300"},
{name:"雅思",url:"https://ielts.neea.cn/"},
{name:"托福",url:"https://toefl.neea.cn/"}]}]},
{slug:"life",list:[

{tag:"出行",link:[
{name:"美团",url:"https://www.meituan.com/"},
{name:"携程",url:"https://www.ctrip.com/"},
{name:"去哪儿",url:"https://www.qunar.com/"},
{name:"飞猪",url:"https://www.alitrip.com/"},
{name:"途牛",url:"http://www.tuniu.com/"},
{name:"12306",url:"https://kyfw.12306.cn/otn/index/init"},
{name:"马蜂窝",url:"https://www.mafengwo.cn/"}]},

{tag:"美食",link:[
{name:"下厨房",url:"http://www.xiachufang.com/"},
{name:"美食天下",url:"https://www.meishichina.com/"},
{name:"豆果美食",url:"https://www.douguo.com/"},
{name:"搜狐美食",url:"http://chihe.sohu.com/"},
{name:"心食谱",url:"https://www.xinshipu.com/"},
{name:"中华菜谱网",url:"http://www.chinacaipu.com/"},
{name:"美食杰",url:"http://www.meishij.net/"}]},

{tag:"房产",link:[
{name:"房天下",url:"http://www.fang.com/"},
{name:"链家",url:"http://www.lianjia.com/"},
{name:"房多多",url:"http://www.fangdd.com/"},
{name:"安居客",url:"http://www.anjuke.com/"},
{name:"腾讯房产",url:"http://house.qq.com/"},
{name:"搜狐焦点",url:"https://house.focus.cn/"},
{name:"乐居",url:"http://www.leju.com/"}]},

{tag:"汽车",link:[
{name:"汽车之家",url:"http://www.autohome.com.cn/"},
{name:"太平洋汽车",url:"http://www.pcauto.com.cn/"},
{name:"易车网",url:"http://www.bitauto.com/"},
{name:"爱卡汽车",url:"http://www.xcar.com.cn/"},
{name:"网易汽车",url:"http://auto.163.com/"},
{name:"新浪汽车",url:"http://auto.sina.com.cn/"},
{name:"搜狐汽车",url:"http://auto.sohu.com/"}]},

{tag:"财经",link:[
{name:"东方财富",url:"http://www.eastmoney.com/"},
{name:"第一财经",url:"http://www.yicai.com/"},
{name:"凤凰财经",url:"http://finance.ifeng.com/"},
{name:"网易财经",url:"http://money.163.com/"},
{name:"和讯财经",url:"http://www.hexun.com/"},
{name:"雪球",url:"https://xueqiu.com/"},
{name:"股吧",url:"http://guba.eastmoney.com/"}]},

{tag:"时尚",link:[
{name:"太平洋时尚",url:"https://www.pclady.com.cn/"},
{name:"瑞丽网",url:"http://www.rayli.com.cn/"},
{name:"美丽说",url:"http://www.meilishuo.com/"},
{name:"蘑菇街",url:"http://www.mogujie.com/"},
{name:"YOKA",url:"http://www.yoka.com/"},
{name:"OnlyLady",url:"http://www.onlylady.com/"},
{name:"VOGUE",url:"http://www.vogue.com.cn/"}]},

{tag:"健康",link:[
{name:"搜狐健康",url:"http://health.sohu.com/"},
{name:"新浪健康",url:"http://health.sina.com.cn/"},
{name:"凤凰健康",url:"http://fashion.ifeng.com/health/"},
{name:"寻医问药",url:"http://www.xywy.com/"},
{name:"丁香园",url:"http://www.dxy.cn/"},
{name:"39健康网",url:"http://www.39.net/"},
{name:"有问必答",url:"http://www.120ask.com/"}]},

{tag:"查询",link:[
{name:"网速测试",url:"http://www.speedtest.net/"},
{name:"电话归属地",url:"http://www.114best.com/dh/"},
{name:"列车时刻",url:"http://qq.ip138.com/train/"},
{name:"实时航班",url:"http://map.variflight.com/"},
{name:"台风路径",url:"http://typhoon.zjwater.gov.cn/"},
{name:"交通违章查询",url:"http://www.ip138.com/weizhang.htm"},
{name:"比一比价",url:"http://www.b1bj.com/"}]}]},{slug:"tech",list:[


{tag:"插件",link:[
{name:"Greasy Fork",url:"https://greasyfork.org/zh-CN"},
{name:"极简插件",url:"https://chrome.zzzmh.cn/"},
{name:"极简插件",url:"https://chrome.zzzmh.cn/"},
{name:"插件网",url:"http://www.cnplugins.com/"},
{name:"插件网",url:"https://chromecj.com/"},
{name:"插件扩展",url:"https://www.extfans.com/"},
{name:"克隆窝",url:"https://www.kelongwo.com/project/Chrome_find/"}]},

{tag:"发现",link:[
{name:"V2EX",url:"https://www.v2ex.com/"},
{name:"掘金",url:"https://juejin.im/"},
{name:"开源中国",url:"https://www.oschina.net/"},
{name:"CSDN",url:"https://www.csdn.net/"},
{name:"InfoQ",url:"http://www.infoq.com/cn/"},
{name:"NEXT",url:"http://next.36kr.com/"},
{name:"HackerNews",url:"https://news.ycombinator.com/"}]},

{tag:"数码",link:[
{name:"数字尾巴",url:"http://www.dgtle.com/"},
{name:"爱范儿",url:"https://www.ifanr.com/"},
{name:"雷锋网",url:"https://www.leiphone.com/"},
{name:"极客公园",url:"http://www.geekpark.net/"},
{name:"比特网",url:"http://www.chinabyte.com/"},
{name:"ZEALER",url:"http://www.zealer.com/"},
{name:"Engadget",url:"https://chinese.engadget.com/"}]},

{tag:"平台",link:[{name:"GitHub",url:"https://github.com/"},
{name:"Coding",url:"https://coding.net/"},
{name:"石墨",url:"https://shimo.im/"},
{name:"百度脑图",url:"http://naotu.baidu.com/"},
{name:"CmdMarkdown",url:"https://www.zybuluo.com/mdeditor"},
{name:"TinyPNG",url:"https://tinypng.com/"},
{name:"SM.MS 图床",url:"https://sm.ms/"}]},

{tag:"工具",link:[
{name:"IP查询",url:"https://www.ipip.net/ip.html"},
{name:"Speedtest",url:"http://www.speedtest.net/"},
{name:"17CE",url:"https://www.17ce.com/"},
{name:"在线工具",url:"https://tool.lu/"},
{name:"代码格式化",url:"https://www.freeformatter.com/"},
{name:"临时邮箱",url:"https://www.moakt.com/"},
{name:"域名比价",url:"https://www.domcomp.com/"}]},

{tag:"文档",link:[
{name:"Microsoft文档",url:"https://docs.microsoft.com/zh-cn/"},
{name:"Google开发者",url:"https://developers.google.com/china/"},
{name:"MDN文档",url:"https://developer.mozilla.org/zh-CN/"},
{name:"W3school",url:"http://www.w3school.com.cn/"},
{name:"菜鸟教程",url:"http://www.runoob.com/"},
{name:"Linux命令",url:"http://man.linuxde.net/"},
{name:"微信小程序",url:"https://mp.weixin.qq.com/debug/wxadoc/dev/index.html"}]},

{tag:"博客",link:[
{name:"阿里UED",url:"http://www.aliued.cn/"},
{name:"有赞技术",url:"https://tech.youzan.com/"},
{name:"京东JDC",url:"http://jdc.jd.com/"},
{name:"腾讯全端",url:"http://www.alloyteam.com/"},
{name:"百度UED",url:"http://ued.baidu.com/"},
{name:"人人网FED",url:"https://fed.renren.com/"},
{name:"阮一峰博客",url:"http://www.ruanyifeng.com/"}]},

{tag:"资源",link:[{name:"少数派",url:"https://sspai.com/"},
{name:"数码荔枝",url:"https://www.lizhi.io/"},
{name:"异次元",url:"https://www.iplaysoft.com/"},
{name:"Softonic",url:"https://en.softonic.com/"},
{name:"MacInformer",url:"http://macdownload.informer.com/"},
{name:"站长下载",url:"http://down.chinaz.com/"},
{name:"中科大镜像",url:"http://mirrors.ustc.edu.cn/"}]},

{tag:"云端",link:[{name:"阿里云",url:"https://www.aliyun.com/"},
{name:"腾讯云",url:"https://cloud.tencent.com/"},
{name:"AWS",url:"https://aws.amazon.com/cn/"},
{name:"GoogleCloud",url:"https://cloud.google.com/"},
{name:"Linode",url:"https://www.linode.com/"},
{name:"DigitalOcean",url:"https://www.digitalocean.com/"},
{name:"Bandwagon",url:"https://bandwagonhost.com/"}]}]},{slug:"design",list:[


{tag:"中央频道",link:[
{name:"CCTV--1",url:"http://www.hao5.net/app/h5.html?id=http://14.152.88.77/liveplay-kk.rtxapp.com/live/program/live/cctv1hd/4000000/mnf.m3u8"},
{name:"CCTV--2",url:"http://www.hao5.net/app/h5.html?id=http://14.152.88.77/liveplay-kk.rtxapp.com/live/program/live/cctv2/1300000/mnf.m3u8"},
{name:"CCTV--3",url:"http://www.hao5.net/app/h5.html?id=http://14.152.88.77/liveplay-kk.rtxapp.com/live/program/live/cctv3hd/4000000/mnf.m3u8"},
{name:"CCTV--4",url:"http://www.hao5.net/app/h5.html?id=http://14.152.88.77/liveplay-kk.rtxapp.com/live/program/live/cctv4/1300000/mnf.m3u8"},
{name:"CCTV--5",url:"http://www.hao5.net/app/h5.html?id=http://14.152.88.77/liveplay-kk.rtxapp.com/live/program/live/cctv5/1300000/mnf.m3u8"},
{name:"CCTV--6",url:"http://www.hao5.net/app/h5.html?id=http://14.152.88.77/liveplay-kk.rtxapp.com/live/program/live/cctv6/1300000/mnf.m3u8"},
{name:"CCTV--8",url:"http://www.hao5.net/app/h5.html?id=http://14.152.88.77/liveplay-kk.rtxapp.com/live/program/live/cctv8/1300000/mnf.m3u8"}]},

{tag:"中央频道",link:[
{name:"CCTV--10",url:"http://www.hao5.net/app/h5.html?id=http://14.152.88.77/liveplay-kk.rtxapp.com/live/program/live/cctv10/1300000/mnf.m3u8"},
{name:"CCTV--军事",url:"http://www.hao5.net/app/h5.html?id=http://14.152.88.77/liveplay-kk.rtxapp.com/live/program/live/cctv7/1300000/mnf.m3u8"}]},

{tag:"卫视",link:[
{name:"湖南卫视",url:"http://www.hao5.net/app/h5.html?id=http://14.152.88.77/liveplay-kk.rtxapp.com/live/program/live/hnwshd/2300000/mnf.m3u8"},
{name:"安徽卫视",url:"http://www.hao5.net/app/h5.html?id=http://zbbf2.ahtv.cn/live/749.m3u8"},
{name:"江苏卫视",url:"http://www.hao5.net/app/h5.html?id=http://14.152.88.77/liveplay-kk.rtxapp.com/live/program/live/jsws/1300000/mnf.m3u8"},
{name:"浙江卫视",url:"http://www.hao5.net/app/h5.html?id=http://14.152.88.77/liveplay-kk.rtxapp.com/live/program/live/zjws/1300000/mnf.m3u8"},
{name:"辽宁卫视",url:"http://www.hao5.net/app/h5.html?id=http://1.183.73.177/liveplay-kk.rtxapp.com/live/program/live/lnwshd/2300000/mnf.m3u8"},
{name:"广西卫视",url:"http://www.hao5.net/app/h5.html?id=http://14.152.88.77/liveplay-kk.rtxapp.com/live/program/live/gxws/1300000/mnf.m3u8"},
{name:"北京卫视",url:"http://www.hao5.net/app/h5.html?id=http://14.152.88.77/liveplay-kk.rtxapp.com/live/program/live/bjwshd/2300000/mnf.m3u8"}]},

{tag:"卫视",link:[
{name:"广东卫视",url:"https://www.hao5.net/app/h5.html?id=http://14.152.88.77/liveplay-kk.rtxapp.com/live/program/live/gdwshd/2300000/mnf.m3u8"},
{name:"江西卫视",url:"http://www.hao5.net/app/h5.html?id=http://14.152.88.77/liveplay-kk.rtxapp.com/live/program/live/jxwshd/2300000/mnf.m3u8"},
{name:"四川卫视",url:"http://www.hao5.net/app/h5.html?id=http://14.152.88.77/liveplay-kk.rtxapp.com/live/program/live/scws/1300000/mnf.m3u8"},
{name:"山东卫视",url:"http://www.hao5.net/app/h5.html?id=http://1.183.73.177/liveplay-kk.rtxapp.com/live/program/live/sdwshd/2300000/mnf.m3u8"},
{name:"天津卫视",url:"http://www.hao5.net/app/h5.html?id=http://14.152.88.77/liveplay-kk.rtxapp.com/live/program/live/tjwshd/2300000/mnf.m3u8"},
{name:"深圳卫视",url:"http://www.hao5.net/app/h5.html?id=http://14.152.88.77/liveplay-kk.rtxapp.com/live/program/live/szwshd/2300000/mnf.m3u8"},
{name:"云南卫视",url:"http://www.hao5.net/app/h5.html?id=http://14.152.88.77/liveplay-kk.rtxapp.com/live/program/live/ynws/1300000/mnf.m3u8"}]},

{tag:"卫视",link:[
{name:"河南卫视",url:"http://www.hao5.net/app/h5.html?id=http://14.152.88.77/liveplay-kk.rtxapp.com/live/program/live/hnws/1300000/mnf.m3u8"},
{name:"上海卫视",url:"http://www.hao5.net/app/h5.html?id=http://14.152.88.77/liveplay-kk.rtxapp.com/live/program/live/dfws/1300000/mnf.m3u8"},
{name:"凤凰卫视",url:"http://www.hao5.net/app/h5.html?id=http://zb.ios.ifeng.com/live/05QGDA0CIRK/index.m3u8"},
{name:"凤凰资讯",url:"http://www.hao5.net/app/h5.html?id=http://zb.ios.ifeng.com/live/05QGCOB3T34/index.m3u8"},
{name:"AGE动漫",url:"https://www.agefans.cc/"}]},

{tag:"未完待续",link:[
{name:"UICN",url:"http://www.ui.cn/"},
{name:"SiteSee",url:"https://sitesee.co/"},
{name:"UIGarage",url:"https://uigarage.net/"},
{name:"BestWebsite",url:"https://bestwebsite.gallery/"},
{name:"CollectUI",url:"http://collectui.com/"},
{name:"UIMovement",url:"https://uimovement.com/"},
{name:"Reeoo",url:"https://reeoo.com/"}]},

{tag:"颜色",link:[
{name:"ColorHunt",url:"https://colorhunt.co/"},
{name:"Coolors",url:"https://coolors.co/"},
{name:"AdobeColor",url:"https://color.adobe.com/zh/"},
{name:"WebGradients",url:"https://webgradients.com/"},
{name:"Trianglify",url:"https://trianglify.io/"},
{name:"ColorFavs",url:"http://www.colorfavs.com/"},
{name:"Colllor",url:"http://colllor.com/"}]},

{tag:"工具",link:[
{name:"Fotor",url:"https://www.fotor.com.cn/"},
{name:"Photopea",url:"https://www.photopea.com/"},
{name:"AutoDraw",url:"https://www.autodraw.com/"},
{name:"Figma",url:"https://www.figma.com/"},
{name:"SVG Draw",url:"http://editor.method.ac/"},
{name:"CloudConvert",url:"https://cloudconvert.com/"},
{name:"TinyPNG",url:"https://tinypng.com/"}]},

{tag:"规范",link:[
{name:"Apple",url:"https://developer.apple.com/design/"},
{name:"Google",url:"https://design.google/"},
{name:"Microsoft",url:"https://www.microsoft.com/design/"},
{name:"Material",url:"https://material.io/"},
{name:"Android",url:"https://developer.android.google.cn/design/"},
{name:"ScreenSize",url:"http://screensiz.es/phone"},
{name:"WeUI",url:"https://weui.io/"}]}]}]


var _hmt=_hmt||[];!function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?6ebd1081e358e76bc9f28b8496522d7f";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()
!function(o){"use strict"
function t(t){o(".work-link").find(".tab span.active").removeClass("active")
var e,n,a="",l=o(t).attr("class")
if(o(t).addClass("active"),o.each(comm_list,function(t,i){l==i.slug&&(e=i.list,o.each(e,function(t,i){a+="<ul><li>"+i.tag+"</li>",n=i.link,o.each(n,function(o,t){a+='<li><a href="'+t.url+'" target="_blank">'+t.name+"</a></li>"}),a+="</ul>"}))}),o(".work-link").find(".tab span:first").hasClass("active")&&"1"==i("schl")){var s="assets/data/univ/"+i("univ")+".js"
o.getScript(s,function(){var t=univ_list.link,i="<ul><li>校园</li>"
o.each(t,function(o,t){i+='<li><a href="'+t.url+'" target="_blank">'+t.name+"</a></li>"}),i+="</ul>",o(".work-link").css("opacity","1").find(".info").hide().html(a).fadeIn(200).find("ul:nth-child(6)").html(i)}).fail(function(){var t="<ul><li>校园</li><li>暂未收录</li></ul>"
o(".work-link").css("opacity","1").find(".info").hide().html(a).fadeIn(200).find("ul:nth-child(6)").html(t)})}else o(".work-link").css("opacity","1").find(".info").hide().html(a).fadeIn(200)}function i(o){var t={bkgd:"#ededed",srch:"baidu",schl:"0",prov:"1",univ:"1001"}
return Cookies.get(o)||t[o]}function e(o,t,i){Cookies.set(o,t,{expires:i||3650})}function n(t){o("body").css("background",t)}function a(t){if(o(t).addClass("active").siblings(".active").removeClass("active"),o(".search-hidden").remove(),o(t).hasClass("baidu"))o(".search-form").attr("action","https://www.baidu.com/s"),o(".search-keyword").attr({name:"word",placeholder:"百度一下，你就知道"})
else if(o(t).hasClass("google"))o(".search-form").attr("action","https://www.google.com/search"),o(".search-keyword").attr({name:"q",placeholder:"Google 搜索"})
else if(o(t).hasClass("bing"))o(".search-form").attr("action","https://cn.bing.com/search"),o(".search-keyword").attr({name:"q",placeholder:"微软 Bing 搜索"})
else if(o(t).hasClass("image")){o(".search-form").attr("action","https://cn.bing.com/images/search"),o(".search-keyword").attr({name:"q",placeholder:"海量图片搜索"})
var i=new Image
i.src="https://images.google.com/favicon.ico?"+Date.now(),i.onload=function(){o(".search-form").attr("action","https://www.google.com/search"),o(".search-form").prepend('<input class="search-hidden" type="hidden" name="tbm" value="isch">')}}else if(o(t).hasClass("lookao")){o(".search-form").attr("action","https://lookao.com/search"),o(".search-keyword").attr({name:"q",placeholder:"Lookao 搜索"})}else if(o(t).hasClass("torrent"))o(".search-form").attr("action","https://torrentz2.eu/search"),o(".search-keyword").attr({name:"f",placeholder:"磁力链，种子搜索"})
else if(o(t).hasClass("scholar")){o(".search-form").attr("action","https://xueshu.baidu.com/s"),o(".search-keyword").attr({name:"wd",placeholder:"中英文文献检索"})
var i=new Image
i.src="https://scholar.google.com/favicon.ico?"+Date.now(),i.onload=function(){o(".search-form").attr("action","https://scholar.google.com/scholar"),o(".search-keyword").attr({name:"q"}),o(".search-form").prepend('<input class="search-hidden" type="hidden" name="hl" value="zh-CN">')}}o(".search-keyword").focus()}o.ajaxSetup({cache:!0}),n(i("bkgd")),t(o(".work-link").find(".tab span:first")),a(o(".search-tab").find("span."+i("srch"))),o(".work-link .tab").on("click","span",function(){t(o(this))}),o(".search-tab").on("click","span",function(){a(o(this)),e("srch",this.className.split(" ")[0])}),o("#setting-icon").on("click",function(){o(".work-link .info").hide().html('<div style="padding: 30px 30px 0;min-height: 400px;"><div class="row"><div id="setting-bkgd"class="column col-4"><label>站点背景</label><select><option value="#ededed">山雾</option><option value="#ffffff">素白</option><option value="#f5d9d9">桃夭</option><option value="#8d6262">荔枝</option><option value="#b9d7ea">天色</option><option value="#aacfd0">青川</option><option value="#283c63">深海</option><option value="#928a97">陆离</option><option value="#444f5a">青纯</option><option value="#373c38">石墨</option><option value="#40514e">月夜</option><option value="#4d4545">消炭</option></select></div><div class="column col-4"></div></div><div class="row"><div id="setting-schl"class="column col-4"><label>校园导航</label><select><option value="1">启用</option><option value="0">关闭</option></select></div><div id="setting-prov"class="column col-4"><label>选择省份</label><select><option value="1">北京市</option><option value="2">上海市</option><option value="3">黑龙江省</option><option value="4">吉林省</option><option value="5">辽宁省</option><option value="6">天津市</option><option value="7">安徽省</option><option value="8">江苏省</option><option value="9">浙江省</option><option value="10">陕西省</option><option value="11">湖北省</option><option value="12">广东省</option><option value="13">湖南省</option><option value="14">甘肃省</option><option value="15">四川省</option><option value="16">山东省</option><option value="17">福建省</option><option value="18">河南省</option><option value="19">重庆市</option><option value="20">云南省</option><option value="21">河北省</option><option value="22">江西省</option><option value="23">山西省</option><option value="24">贵州省</option><option value="25">广西壮族自治区</option><option value="26">内蒙古自治区</option><option value="27">宁夏回族自治区</option><option value="28">青海省</option><option value="29">新疆维吾尔自治区</option><option value="30">海南省</option><option value="31">西藏自治区</option><option value="32">香港特别行政区</option><option value="33">澳门特别行政区</option><option value="34">台湾省</option></select></div><div id="setting-univ"class="column col-4"><label>选择学校</label><select></select></div></div><div class="row"><input id="setting-save"type="button"value="保存"style="padding: 0 40px;"></div></div>').fadeIn(200),o("#setting-bkgd select").val(i("bkgd")),o("#setting-schl select").val(i("schl")),o("#setting-prov select").val(i("prov")),o("#setting-bkgd select").change(function(){n(o(this).val())}),o.getScript("assets/data/univ.li.js",function(){function t(t,i){var e,n
o.each(univ_list,function(a,l){t==l.id&&(e=l.univs,n="",o.each(e,function(o,t){n+="<option value="+t.id+">"+t.name+"</option>"}),o("#setting-univ select").html(n),i&&o("#setting-univ select").val(i))})}t(o("#setting-prov select").val(),i("univ")),o("#setting-prov select").change(function(){t(o("#setting-prov select").val())})}),o("#setting-save").off("click").on("click",function(){e("bkgd",o("#setting-bkgd select").val()),e("schl",o("#setting-schl select").val()),o("#setting-univ select").val()&&(e("prov",o("#setting-prov select").val()),e("univ",o("#setting-univ select").val())),t(o(".work-link").find(".tab span:first"))})})}(jQuery)
