<template>
  <MainHome :homeCategroy="homeCategroy.rows" :homeData="homeData"></MainHome>
</template>
<script>
//import  from "";
const MainHome = () => import("./MainHome");
export default {
  name: "",
  data() {
    return {
      homeCategroy: {
        total: 4,
        rows: [
          {
            id: "1",
            title: "常用网站",
          },
          {
            id: "2",
            title: "BT资源/磁力搜索与下载",
          },
          {
            id: "3",
            title: "美剧/动漫/视频",
          },
          {
            id: "4",
            title: "冷门网站",
          },
          {
            id: "5",
            title: "编程/开发",
          },
        ],
      },

      homeData: {
        secondCommonlyused: {
          page: 0,
          list: {
            total: 4,
            title: "常用",
            rows: [
              {
                title: "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili",
                url: "https://www.bilibili.com/",
                desc: "2020/7/24 15:02",
              },
              {
                title: "优酷",
                url: "https://youku.com/",
                desc: "2020/7/24 15:02",
              },
              {
                title: "谷歌翻译",
                url: "https://translate.google.cn/",
                desc: "2020/7/24 15:02",
              },
              {
                title: "剑网三",
                url: "http://jx3.xoyo.com/",
                desc: "2020/7/24 15:02",
              },
              {
                title: "JX3BOX",
                url: "https://www.jx3box.com/index/",
                desc: "2020/6/20 18:09",
              },
              {
                title: "Steam",
                url: "https://store.steampowered.com/",
                desc: "2019/12/01 18:09",
              },
              {
                title: "微博",
                url: "https://weibo.com/u/6582139287/home?wvr=5",
                desc: "2019/12/01 18:09",
              },
              {
                title: "Vultr-vps服务器",
                url: "https://my.vultr.com/subs/?SUBID=29970304#subsoverview",
                desc: "2019/12/01 18:09",
              },
              {
                title: "MCBBS中文论坛",
                url: "https://www.mcbbs.net/portal.php",
                desc: "2019/12/01 18:09",
              },
              {
                title: "其乐 Keylol -  驱动正版游戏的引擎！",
                url: "https://keylol.com/",
                desc: "2019/12/01 18:09",
              },
              {
                title:
                  "雷神加速器-银行专线级低延时真专线游戏加速器，按分钟计费，时长可暂停，免费试用",
                url: "https://jiasu.nn.com/",
                desc: "2019/12/01 18:09",
              },
              {
                title: "Notepad++",
                url: "https://notepad-plus-plus.org/",
                desc: "2019/12/01 18:09",
              },
              {
                title: "GitHub: Where the world builds software · GitHub",
                url: "https://github.com/",
                desc: "2019/12/01 18:09",
              },
              {
                title: "Icon Font & SVG Icon Sets ❍ IcoMoon",
                url: "https://icomoon.io/",
                desc: "2019/12/01 18:09",
              },
              {
                title: "Element - The world's most popular Vue UI framework",
                url: "https://element.eleme.cn/#/zh-CN",
                desc: "2019/12/01 18:09",
              },
            ],
          },
        },
        secondBtDownLoad: {
          page: 0,
          list: {
            total: 4,
            title: "BT 资源",
            rows: [
              {
                id: "1",
                title: "RARBG",
                url: "http://rarbg2018.org/torrents.php",
                desc: "2020/7/24 15:02",
              },
              {
                id: "3",
                title: "The Pirate Bay 永久发布页",
                url: "https://piratebayproxy.info/",
                desc: "2020/7/24 15:02",
              },
              {
                id: "4",
                title: "Data-Iceberg",
                url: "https://data-iceberg.com/",
                desc: "2020/7/24 13:04",
              },
              {
                id: "5",
                title: "BTHaha地址发布页",
                url: "https://wangzhi.men/bthaha/",
                desc: "2020/7/24 0:56",
              },
              {
                id: "6",
                title:
                  "Kickasss（俗称踢屁股，知名综合性种子站，新片老片应有尽有）",
                url: "https://kickasss.to/",
                desc: "2020/7/24 0:10",
              },
              {
                id: "7",
                title: "Tokyo Toshokan（主要是日系资源，生肉之类的）",
                url: "https://www.tokyotosho.info/",
                desc: "2020/7/23 23:27",
              },
              {
                id: "8",
                title: "LimeTorrents",
                url: "https://www.limetorrents.info/",
                desc: "2020/7/23 23:23",
              },
              {
                id: "9",
                title: "TorrentDownloads（找冷门种子推荐）",
                url: "https://www.torrentdownloads.me/",
                desc: "2020/7/23 23:23",
              },
              {
                id: "10",
                title: "EZTV（最新美剧）",
                url: "https://eztv.io/",
                desc: "2020/7/23 23:21",
              },
              {
                id: "11",
                title: "YTS（经典老片和冷门电影）",
                url: "https://yts.mx/",
                desc: "2020/7/23 23:20",
              },
              {
                id: "12",
                title: "Torlock（找动漫、电子书推荐）",
                url: "https://www.torlock.com/",
                desc: "2020/7/23 23:19",
              },
              {
                id: "13",
                title: "Zooqle（资源容量高达 28PB，找游戏、电影、纪录片推荐）",
                url: "https://zooqle.com/",
                desc: "2020/7/23 22:27",
              },
              {
                id: "14",
                title: "BTdig",
                url: "http://btdig.com/",
                desc: "2020/7/23 22:01",
              },
              {
                id: "15",
                title:
                  "The Pirate Bay（海盗湾，自称是目前世界上最大的 BT种子服务器）",
                url: "http://thepiratebay.ee/",
                desc: "2020/7/23 21:58",
              },
              {
                id: "16",
                title:
                  "The Pirate Bay（海盗湾，自称是目前世界上最大的 BT种子服务器）",
                url: "https://www.thepiratebay.org/",
                desc: "2020/7/23 21:57",
              },
              {
                id: "17",
                title: "1337x",
                url: "https://1337x.is/",
                desc: "2020/7/23 21:57",
              },
              {
                id: "18",
                title: "Rutracker（俄国最大的BT网站）",
                url: "http://rutracker.org/forum/index.php",
                desc: "2020/6/30 17:31",
              },
              {
                id: "19",
                title: "Similar Torrent Websites",
                url: "https://www.bestsevenreviews.com/similar/",
                desc: "2019/10/7 0:55",
              },
              {
                id: "20",
                title: "BTSOW地址发布页（5年以上老牌磁力搜索站）",
                url: "https://tellme.pw/btsow",
                desc: "2019/5/30 0:50",
              },
              {
                id: "21",
                title: "AIO Search（聚合搜索，几乎包含了国外所有热门的BT站）",
                url: "https://www.aiosearch.com/",
                desc: "2019/5/30 0:50",
              },
              {
                id: "22",
                title:
                  "Nyaa（世界上最大的动漫种子站，原站已凉，这是爱好者后续搭建的站）",
                url: "https://nyaa.si/",
                desc: "2019/5/30 0:49",
              },
              {
                id: "23",
                title: "AniRena（动漫种子站）",
                url: "https://www.anirena.com/",
                desc: "2019/5/30 0:48",
              },
              {
                id: "24",
                title: "Monova",
                url: "https://monova.org/",
                desc: "2019/5/30 0:47",
              },
              {
                id: "26",
                title: "下片片",
                url: "http://www.xiepp.com/",
                desc: "2020/9/13 15:24",
              },
              {
                id: "27",
                title: "MaGeDN（提供在线／磁力）",
                url: "https://www.magedn.com/",
                desc: "2020/7/24 13:35",
              },
              {
                id: "28",
                title: "BT之家",
                url: "http://www.415.net/",
                desc: "2020/7/24 13:07",
              },
              {
                id: "29",
                title: "电影天堂",
                url: "https://www.xiaopian.com/",
                desc: "2020/7/24 0:24",
              },
              {
                id: "30",
                title: "6V电影（提供磁力／百度云资源）",
                url: "http://www.hao6v.net/",
                desc: "2020/7/24 0:22",
              },
              {
                id: "31",
                title: "飘花电影（提供磁力和其本站软件下载链接）",
                url: "https://www.piaohua.com/",
                desc: "2020/7/24 0:22",
              },
              {
                id: "32",
                title:
                  "哔嘀影视（提供在线观看／BT／磁力／APP，备用：bdys.me／bd1s.com）",
                url: "https://bde4.com/",
                desc: "2020/7/24 0:17",
              },
              {
                id: "33",
                title: "片库（提供在线观看与BT下载）",
                url: "https://www.pianku.tv/",
                desc: "2020/7/24 0:14",
              },
              {
                id: "34",
                title: "五号站（一键搜索电影可用的在线播放／种子磁力）",
                url: "http://www.wuhaozhan.net/",
                desc: "2020/7/23 23:59",
              },
              {
                id: "35",
                title: "BT天堂",
                url: "http://www.btkat.com/",
                desc: "2020/7/21 22:49",
              },
              {
                id: "36",
                title: "电影天堂",
                url: "https://www.dytt8.net/",
                desc: "2020/3/14 17:32",
              },
              {
                id: "37",
                title: "BT天堂",
                url: "https://www.jsr9.com/",
                desc: "2020/3/14 17:32",
              },
              {
                id: "38",
                title: "高清MP4",
                url: "http://www.mp4ba.la/",
                desc: "2019/6/4 14:01",
              },
              {
                id: "39",
                title: "疯狂影视搜索",
                url: "http://ifkdy.com/",
                desc: "2019/6/3 23:46",
              },
              {
                id: "40",
                title: "BT部落天堂",
                url: "http://www.btbuluo.com/",
                desc: "2020/9/13 15:25",
              },
              {
                id: "41",
                title: "BT猫",
                url: "http://www.btcat.bid/",
                desc: "2020/9/13 15:15",
              },
              {
                id: "42",
                title: "柠檬磁力",
                url: "https://lemon28.xyz/",
                desc: "2020/9/13 15:15",
              },
              {
                id: "43",
                title: "磁力多",
                url: "https://cililian.pw/",
                desc: "2020/9/13 15:14",
              },
              {
                id: "44",
                title: "无极磁力",
                url: "https://6mag.net/",
                desc: "2020/9/13 15:14",
              },
              {
                id: "45",
                title: "磁力天堂",
                url: "https://www.sky2023.xyz/",
                desc: "2020/9/13 15:13",
              },
              {
                id: "46",
                title: "磁星",
                url: "https://cixing.org/",
                desc: "2020/9/13 15:12",
              },
              {
                id: "47",
                title: "BT兔子",
                url: "http://www.btrabbit.cyou/",
                desc: "2020/9/13 15:12",
              },
              {
                id: "48",
                title: "BTfox",
                url: "http://btfox0.net/",
                desc: "2020/9/13 15:11",
              },
              {
                id: "49",
                title: "超人搜索",
                url: "https://www.chaorens.me/",
                desc: "2020/9/13 15:11",
              },
              {
                id: "50",
                title: "种子吧",
                url: "http://zhongzi8.xyz/",
                desc: "2020/9/13 15:07",
              },
              {
                id: "51",
                title: "撩人磁力",
                url: "http://www.lrsoso10.xyz/",
                desc: "2020/7/24 13:30",
              },
              {
                id: "52",
                title: "磁力管家",
                url: "http://www.ciliguanjia.buzz/",
                desc: "2020/7/24 13:30",
              },
              {
                id: "53",
                title: "MAG磁力站",
                url: "http://mag234.com/home.html",
                desc: "2020/7/24 13:26",
              },
              {
                id: "54",
                title: "雨花阁地址发布页",
                url: "https://btcherries.xyz/",
                desc: "2020/7/24 13:26",
              },
              {
                id: "55",
                title: "老王磁力",
                url: "https://laowang46.icu/",
                desc: "2020/7/24 13:26",
              },
              {
                id: "56",
                title: "磁力蜘蛛",
                url: "http://www.eclzz.net/",
                desc: "2020/7/24 13:25",
              },
              {
                id: "57",
                title: "BT之家",
                url: "http://www.647.net/",
                desc: "2020/7/24 13:25",
              },
              {
                id: "58",
                title: "BT1207",
                url: "https://bt120717.icu/",
                desc: "2020/7/24 13:02",
              },
              {
                id: "59",
                title: "磁力银行",
                url: "https://oi8u.xyz:15249/",
                desc: "2020/7/24 0:58",
              },
              {
                id: "60",
                title: "磁力搜（磁力聚合搜索）",
                url: "https://biedian.me/",
                desc: "2020/7/24 0:12",
              },
              {
                id: "61",
                title: "种子搜",
                url: "https://www.zhongzilou.com/",
                desc: "2020/7/23 23:49",
              },
              {
                id: "62",
                title: "磁力王国（永久地址）",
                url: "http://9i9.ink/ydbV",
                desc: "2020/7/23 23:40",
              },
              {
                id: "63",
                title: "磁力王国（永久地址:http://9i9.ink/ydbV）",
                url: "https://geeg.xyz/",
                desc: "2020/6/28 17:17",
              },
              {
                id: "64",
                title: "BT目录",
                url: "https://btorg.info/",
                desc: "2020/6/28 17:12",
              },
              {
                id: "65",
                title: "SKrBT（自动跳转地址）",
                url: "https://skrbt.top/",
                desc: "2020/1/24 19:43",
              },
              {
                id: "66",
                title: "阿里BT",
                url: "https://alibt.pw/",
                desc: "2019/11/17 23:09",
              },
              {
                id: "67",
                title: "ED2000",
                url: "https://www.ed2000.com/",
                desc: "2019/6/19 18:14",
              },
              {
                id: "68",
                title: "TorrSE 磁力聚合搜索",
                url: "https://seedboxs.me/lang/zh-tw/index.html",
                desc: "2020/8/15 20:16",
              },
              {
                id: "69",
                title: "酷享云v4.5破解V2版",
                url: "https://www.lanzoux.com//i3Km6e6mgve",
                desc: "2020/6/30 19:39",
              },
              {
                id: "70",
                title: "磁力搜索浏览器v7.3直装破解版",
                url: "https://www.lanzoux.com//iMFp0e6mgxg",
                desc: "2020/1/14 23:27",
              },
              {
                id: "71",
                title: "BT种子搜索下载播放器",
                url: "https://www.lanzoux.com//ivDq3e6mgzi",
                desc: "2020/1/14 23:21",
              },
              {
                id: "72",
                title: "BT快搜v1.1.5",
                url: "https://www.lanzoux.com//iIwDle6mh8h",
                desc: "2020/1/14 23:17",
              },
              {
                id: "73",
                title: "悟空搜索",
                url: "https://s.luobo76.com/update/?qd=8",
                desc: "2019/6/18 15:51",
              },
              {
                id: "74",
                title: "小磁力BT4.5.2 高级版",
                url: "https://www.lanzoux.com//iFS5ze6mhfe",
                desc: "2019/5/30 1:41",
              },
              {
                id: "75",
                title: "magnetW",
                url: "https://github.com/xiandanin/magnetW",
                desc: "2020/6/3 17:34",
              },
              {
                id: "76",
                title: "迅雷资源助手TSearch 5.9单文件版（请解压看使用说明）",
                url: "https://axu.lanzous.com/ilUafe6mn4j",
                desc: "2019/5/30 1:13",
              },
              {
                id: "77",
                title: "比目鱼复活版",
                url: "https://axu.lanzous.com/iTyVRe6mn5a",
                desc: "2019/5/30 1:12",
              },
              {
                id: "78",
                title: "P2PSearcher 8.8单文件版",
                url: "https://axu.lanzous.com/irXWCe6mn6b",
                desc: "2019/5/30 1:11",
              },
              {
                id: "79",
                title: "磁力资源搜索助手绿色版",
                url: "https://axu.lanzous.com/ibkMJe6mn8d",
                desc: "2019/5/30 1:10",
              },
              {
                id: "80",
                title: "配置好的解压就可用eMule_xmod64位版",
                url: "https://axu.lanzous.com/iFG9Ye6mnbg",
                desc: "2019/5/30 1:09",
              },
            ],
          },
        },
        secondMovies: {
          page: 0,
          list: {
            total: 4,
            title: "美剧/动漫/视频",
            rows: [
              {
                id: "1210",
                title:
                  "娟娟看电影 - 私人影视大全免费追剧_高清免费播放观看在线视频",
                url: "https://www.juanjuankan.com/",
                desc: "2020/7/23 21:09",
              },
              {
                id: "120",
                title:
                  "腾讯（BBC／国家地理／HBO／NHK／历史频道／ITV／Discovery／ZDF等",
                url: "https://v.qq.com/doco/",
                desc: "2020/7/23 21:09",
              },
              {
                id: "121",
                title:
                  "B站（央视／BBC／Discovery／NHK／历史频道／卫视／国家地理／ITV／SKY／ZDF等）",
                url: "https://www.bilibili.com/documentary/",
                desc: "2020/7/23 21:09",
              },
              {
                id: "122",
                title: "爱奇艺（BBC／Discovery／CNEX）",
                url: "https://www.iqiyi.com/jilupian/",
                desc: "2020/7/23 21:08",
              },
              {
                id: "123",
                title:
                  "优酷（Discovery／BBC／国家地理／美国历史／上海纪实／五星传奇／IMG）",
                url: "https://jilupian.youku.com/",
                desc: "2020/7/23 21:08",
              },
              {
                id: "124",
                title: "乐视网（BBC／国家地理／BTV／CNTV／上海纪实）",
                url: "http://jilu.le.com/",
                desc: "2020/7/23 21:07",
              },
              {
                id: "125",
                title: "咪咕（BBC／Discovery）",
                url:
                  "http://www.miguvideo.com/mgs/website/prd/index.html?pageId=5fa4bf015b384c0db8fbfecbdf1c2365",
                desc: "2020/7/23 21:06",
              },
              {
                id: "126",
                title: "芒果TV（21部自制）",
                url: "https://www.mgtv.com/doc/?fpa=19687",
                desc: "2020/7/23 21:05",
              },
              {
                id: "127",
                title: "西瓜视频（BBC／Discovery）",
                url: "https://www.ixigua.com/channel/jilupian/",
                desc: "2020/7/23 21:05",
              },
              {
                id: "128",
                title: "02.知名纪录片字幕组（下载站）",
                url: "javascript:;",
                desc: "2020/7/23 20:29",
              },
              {
                id: "129",
                title: "道兰字幕组（需要魔法上网）（专注翻译NHK的纪录片）",
                url: "http://daolan.net/",
                desc: "2020/7/23 20:29",
              },
              {
                id: "130",
                title: "夏末秋字幕组－微博 （专门翻译BBC纪录片）",
                url: "https://weibo.com/xiamoqiuzmz",
                desc: "2020/7/23 20:28",
              },
              {
                id: "131",
                title: "人人字幕组",
                url: "http://www.yyets.com/",
                desc: "2020/7/23 20:28",
              },
              {
                id: "132",
                title: "纪录片之家字幕组－目前免费开放注册",
                url: "http://www.jlpzj.net/",
                desc: "2020/7/23 20:25",
              },
              {
                id: "133",
                title: "03.其他字幕组（下载站）",
                url: "javascript:;",
                desc: "2020/7/23 20:54",
              },
              {
                id: "134",
                title: "诸神字幕组（日语纪录片会多一点）",
                url: "http://subs.kamigami.org/",
                desc: "2020/7/23 20:54",
              },
              {
                id: "135",
                title:
                  "FIX字幕组（做得挺杂的，做过一些德语法语等小语种纪录片）",
                url: "http://www.zimuxia.cn/",
                desc: "2020/7/23 20:54",
              },
              {
                id: "136",
                title:
                  "ACI中文字幕组社区（ 主要翻译《空中浩劫》系列以及其它一些航空题材纪录片）",
                url: "http://forum.chineseaci.com/",
                desc: "2020/7/23 20:53",
              },
              {
                id: "137",
                title: "光合作用园艺（翻译过不少园艺题材的纪录片）",
                url: "https://weibo.com/ghzyzmz)",
                desc: "2020/7/23 20:53",
              },
              {
                id: "138",
                title: "波旁姐妹花字幕组（主要翻译欧洲历史剧、纪录片）",
                url: "https://weibo.com/u/3674900941",
                desc: "2020/7/23 20:30",
              },
              {
                id: "139",
                title: "Orange字幕组（一些英美的纪录片&微电影）",
                url: "http://www.orangesub.com/",
                desc: "2020/7/23 20:30",
              },
              {
                id: "140",
                title: "04.不推荐（防踩坑所以列在这里）👎",
                url: "javascript:;",
                desc: "2020/7/23 21:02",
              },
              {
                id: "141",
                title:
                  "每天一小时纪录片（目前3300+资源，但全都要VIP，25月／50季／150年／500终身）",
                url: "https://www.onehourlife.net/",
                desc: "2020/7/23 21:02",
              },
              {
                id: "142",
                title: "纪录天堂（几乎都要VIP，割韭菜型网站）",
                url: "https://www.ummu.net/",
                desc: "2020/7/23 21:02",
              },
              {
                id: "143",
                title:
                  "熊猫盘纪录片（多数资源是B站链接，也有百度云资源，数量不多，只有600部左右纪录片）",
                url: "https://xiongmaopan.com/",
                desc: "2020/7/23 21:02",
              },
              {
                id: "144",
                title:
                  "网易纪录片（上面资源都比较老了，基本上都是16年以前的老纪录片）",
                url: "http://v.163.com/jishi/",
                desc: "2020/7/23 21:02",
              },
              {
                id: "145",
                title:
                  "公开课纪录片下载网（资源多，但可惜的是大多数网盘资源已经失效）",
                url: "http://www.opclass.com/",
                desc: "2020/7/23 21:01",
              },
              {
                id: "146",
                title:
                  "盗版纪录片之家（都是引用的外站播放资源（优酷／A站／B站））",
                url: "https://www.05jl.com/",
                desc: "2020/7/23 20:56",
              },
              {
                id: "147",
                title:
                  "盗版纪录片之家（需要关注同名微信公众号才能获取到百度云资源（且链接容易失效））",
                url: "http://www.jlpdq.com/",
                desc: "2020/7/23 20:56",
              },
              {
                id: "148",
                title:
                  "天天看看－纪录片频道（都是1080P，但是资源实在太少（25部）",
                url: "http://1080.kankan.com/list/jilupian/hot/1.shtml",
                desc: "2020/7/23 20:56",
              },
            ],
          },
        },
        secondUnpopular: {
          page: 0,
          list: {
            total: 4,
            title: "冷门网站",
            rows: [
              {
                title: "接码平台：云短信（美国／中国／菲律宾）",
                url: "https://www.pdflibr.com/",
                desc: "2020/7/23 21:09",
              },
              {
                title: "接码平台：在线短信接收（美国／缅甸）",
                url: "http://www.114sim.com/",
                desc: "2020/7/23 21:09",
              },
              {
                title: "接码平台：免费接收短信（中国／缅甸）",
                url: "https://www.shejiinn.com/",
                desc: "2020/7/23 21:09",
              },
              {
                title: "临时邮箱",
                url: "http://t.odmail.cn/",
                desc: "2020/7/23 21:09",
              },
              {
                title: "24小时邮箱",
                url: "http://24mail.chacuo.net/",
                desc: "2020/7/23 21:09",
              },
              {
                title: "10分钟邮箱",
                url: "http://mail.bccto.me/",
                desc: "2020/7/23 21:09",
              },
            ],
          },
        },
        programming: {
          page: 0,
          list: {
            total: 4,
            title: "编程/开发",
            rows: [
              {
                title: "SQL审核平台，兼容99%SQL语法（高颜值）",
                url: "https://gitee.com/cookieYe/Yearning",
                desc: "2020/10/30 21:24",
              },
              {
                title: "mee-admin - 一款轻量级，可快速上手的开源后台系统",
                url: "https://github.com/funnyzpc/mee-admin",
                desc: "2020/10/30 21:26",
              },
              {
                title: "EuiAdmin - Vue+Element开源后台管理UI",
                url: "https://github.com/funnyzpc/mee-admin",
                desc: "2020/10/30 21:29",
              },
              {
                title:
                  "think-swagger-ui-vuele - 采用vue编写的功能强大的swagger-ui页面",
                url: "https://github.com/chfree/think-swagger-ui-vuele",
                desc: "2020/10/30 21:32",
              },
              {
                title: "Hutool，好用的 Java 工具类库",
                url: "https://www.hutool.cn/",
                desc: "2020/10/30 21:54",
              },
              {
                title: "SVG图片下载网站，资源还算比较全",
                url: "https://feathericons.com/",
                desc: "2020/11/9 16:10",
              },
            ],
          },
        },
      },
    };
  },
  components: { MainHome },
};
</script>
<style lang="less" scoped>
</style>