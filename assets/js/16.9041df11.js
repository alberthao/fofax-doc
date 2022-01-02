(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{407:function(t,a,s){"use strict";s.r(a);var e=s(52),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"快速开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),s("h2",{attrs:{id:"参数介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数介绍"}},[t._v("#")]),t._v(" 参数介绍")]),t._v(" "),s("p",[t._v("fofax 命令行参数可以分为四种配置项、输入源、过滤参数、输出格式")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("fofax "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("option"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("filter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("fofax "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-email -key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("/-config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-q/-uc/-iu/-if/-fcf/-qf/-ucf/-iuf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-fs/-e/-ec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-ffi/-fto/-ff"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("这里先简单介绍一下。后续会分别介绍输入源、输出格式、过滤参数")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("Usage:\n  fofax "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nFlags:\nCONFIGS:\n   -email, -fofa-email string  Fofa API Email \n   -key, -fofakey string       Fofa API Key\n   -p, -proxy string           proxy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" http like http://127.0.0.1:8080\n   -fofa-url string            Fofa url "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://fofa.so"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   -debug                      Debug mode\n   -sp, -show-privacy          Debug mode Show Privacy\n   -update                     Update fofax\n   -du, -disable-update        Close update alerts\n\nFILTERS:\n   -fs, -fetch-size int      The maximum number of query "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   -e, -exclude              Exclude the honeypot.\n   -ec, -exclude-country-cn  Exclude CN.\n\nOUTPUT FORMAT:\n   -ffi, -fetch-fullHost-info    URL fetch, with scheme, hostname, port\n   -fto, -fetch-titles-ofDomain  Fetch website title\n   -fjo, -fetch-jarm-ofDomain    Fetch website jarm\n   -ff, -fetch-fields string     Fetch by fields.eg: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host,lastupdatetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   -fetch-fields-split string    Specify characters to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" different fields "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nSINGLE QUERY/CERT/ICON:\n   -q, -query string              FoFa query statement\n   -uc, -url-cert string          Enter the certificate of the https URL to query\n   -iu, -url-to-icon-hash string  Enter the URL of an icon, calculate it and query it\n   -if, -icon-file-path string    Calculate the "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("hash")]),t._v(" of the "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" icon file, "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" query it\n\nMULTIPLE QUERY/CERT/ICON:\n   -fcf, -fofa-coin-file string      Load files downloaded with fofa coins "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("only use -ffi -fs or not"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   -qf, -query-file string           Load files, query multiple statements\n   -qx, -query-fx string             Find all statements from the fx rules\n   -ucf, -url-cert-file string       Read the URL from the file, calculate the cert and "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" query it\n   -iuf, -icon-hash-url-file string  Retrieve the URL from the file, calculate the icon "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("hash")]),t._v(" and query it\n\nFX GRAMMER:\n   -g, -gen string           Generate fx statement files eg: default_fx.yaml\n   -fd, -fxdir string        fxdir directory "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Users/user/.config/fofax/fxrules"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   -l, -lists                List of fx statements\n   -lt, -list-tags           List fx tags\n   -s, -search string        Search "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" fx statements. Statements are separated by semicolons eg: "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("fx-2021-01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("query")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jupyter Unauth"')]),t._v("\n   -tree                     Print syntax tree\n   -fe, -fofa-ext            Using extended syntax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   -ss, -show-single string  Display a single fx message\n\nOTHER OPTIONS:\n   -config string  fofax configuration file.The "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" reading order"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fofax.yaml,/Users/user/.config/fofax/fofax.yaml,/etc/fofax/fofax.yaml,/etc/fofax.yaml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Users/user/.config/fofax/fofax.yaml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   -v, -version    Show fofaX version\n   -use            Syntax queries\n   -open           Open with your browser only support pipline/-q/-uc/-iu/-if\n   -no-limit-open  No limit to the number of openings "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" your browser\n")])])]),s("h2",{attrs:{id:"基础查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础查询"}},[t._v("#")]),t._v(" 基础查询")]),t._v(" "),s("p",[t._v("有如下两种方式查询 "),s("code",[t._v('app="APACHE-Solr"')]),t._v("，不指定数量默认会输出100个 host，并且默认会对数据进行去重。")]),t._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("fofax -q 'app=\"APACHE-Solr\"'\n\n2021/12/23 20:17:32 [SUCC] Fetch Data From FoFa: [100/30830]\n54.114.20.168:8443\n193.8.4.43:8983\n208.37.227.95:8983\n3.20.255.140:8983\n3.114.85.178:8983\n82.142.82.197:8983\n159.39.10.212:8983\n199.102.27.69:8983\n…………\n")])])]),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("echo 'app=\"APACHE-Solr\"' | fofax\n2021/12/23 20:17:59 [SUCC] Fetch Data From FoFa: [100/30830]\n54.114.20.168:8443\n193.8.4.43:8983\n208.37.227.95:8983\n3.20.255.140:8983\n3.114.85.178:8983\n82.142.82.197:8983\n159.39.10.212:8983\n199.102.27.69:8983\n…………\n")])])]),s("h2",{attrs:{id:"指定查询数量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指定查询数量"}},[t._v("#")]),t._v(" 指定查询数量")]),t._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("echo 'app=\"APACHE-Solr\"' | fofax -fs 5\n2021/12/23 20:19:00 [SUCC] Fetch Data From FoFa: [5/30830]\n13.57.71.190:8443\n165.22.215.32:8983\n184.73.40.143:8443\n3.20.255.140:8983\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("只输出了4条数据，是因为 fofax 自动对重复的数据进行了去重,高级会员大于 10000 条数据开始消耗 fofa币")])]),t._v(" "),s("h2",{attrs:{id:"排除查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#排除查询"}},[t._v("#")]),t._v(" 排除查询")]),t._v(" "),s("p",[t._v("添加 "),s("code",[t._v("-e")]),t._v(" 参数，排除蜜罐的干扰。")]),t._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("echo 'app=\"APACHE-Solr\"' | fofax -fs 10 -e\n2021/12/23 22:56:14 [SUCC] Fetch Data From FoFa: [10/30849]\n13.126.128.253:80\n185.22.235.14:8983\n151.248.126.4:8983\n20.71.77.183:80\n23.102.46.20:443\n15.113.170.101:8443\n52.58.201.109:80\n")])])]),s("p",[t._v("添加 "),s("code",[t._v("-ec")]),t._v(" 参数，排除中国的数据。")]),t._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("echo 'app=\"APACHE-Solr\"' | fofax -fs 10 -ec\n2021/12/23 22:56:36 [SUCC] Fetch Data From FoFa: [10/26044]\n15.113.170.101:8443\n52.58.201.109:80\n13.126.128.253:80\n185.22.235.14:8983\n151.248.126.4:8983\n20.71.77.183:80\n23.102.46.20:443\n")])])]),s("h2",{attrs:{id:"获取-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取-url"}},[t._v("#")]),t._v(" 获取 URL")]),t._v(" "),s("p",[t._v("添加 "),s("code",[t._v("-ffi")]),t._v(" 参数，根据查询语句直接获取对应的 URL（[scheme]😕/[host]:[port]）。")]),t._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("echo 'app=\"APACHE-Solr\"' | fofax -fs 5\n2021/12/23 20:21:03 [SUCC] Fetch Data From FoFa: [5/30830]\nhttps://184.73.40.143:8443\nhttp://120.24.42.244:8983\nhttps://13.57.71.190:8443\nhttp://165.22.215.32:8983\n")])])]),s("h2",{attrs:{id:"获取-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取-title"}},[t._v("#")]),t._v(" 获取 Title")]),t._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('echo \'domain="baidu.com" && status_code="200"\' | fofax -fs 10 -fto\n2021/12/23 20:21:19 [SUCC] Fetch Data From FoFa: [10/1124]\nhttps://home.baidu.com [关于百度]\nhttp://research.baidu.com [Baidu Research]\nhttp://fecs.baidu.com [FECS - Front End Code Style Suite]\nhttp://yuntu.baidu.com [企业图谱]\nhttps://ditu.baidu.com [百度地图]\nhttps://sp2.baidu.com [百度一下，你就知道]\nhttps://tushuo.baidu.com [图说]\nhttps://ocpc.baidu.com [百度 oCPC 开发者中心]\nhttps://naotu.baidu.com [百度脑图 - 便捷的思维工具]\nhttp://usa.baidu.com [Baidu USA]\n')])])]),s("h2",{attrs:{id:"debug-模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debug-模式"}},[t._v("#")]),t._v(" Debug 模式")]),t._v(" "),s("p",[t._v("添加 "),s("code",[t._v("-debug")]),t._v(" 参数，开启 Debug 详细模式。")]),t._v(" "),s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('echo \'app="APACHE-Solr"\' | fofax -fs 5 -ffi -debug\n2021/12/25 21:28:57 [DEBUG] FoFa Size : 5\n2021/12/25 21:28:57 [DEBUG] FoFa Query of: app="APACHE-Solr"\n2021/12/25 21:28:57 [DEBUG] https://fofa.so/api/v1/search/all?email=**********@gmail.com&key=**************************&qbase64=YXBwPSJBUEFDSEUtU29sciI=&size=5&page=1&fields=protocol,ip,port,host\n2021/12/25 21:28:57 [DEBUG] Resp Time: 432/millis\n2021/12/25 21:28:57 [SUCC] Fetch Data From FoFa: [5/30942]\nhttp://35.183.115.103\nhttp://3.17.203.145:8983\nhttp://195.201.119.15:49154\nhttps://18.169.23.120\nhttp://174.138.127.51:8983\n')])])])])}),[],!1,null,null,null);a.default=n.exports}}]);