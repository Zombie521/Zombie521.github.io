(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{442:function(e,n,t){"use strict";t.r(n);var s=t(15),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),t("p",[e._v("将 Vue.js 添加到项目中有四种主要方式：")]),e._v(" "),t("ol",[t("li",[e._v("在页面上以 CDN 包的形式导入。")]),e._v(" "),t("li",[e._v("下载 JavaScript 文件并自行托管。")]),e._v(" "),t("li",[e._v("使用 npm 安装。")]),e._v(" "),t("li",[e._v("使用官方的 CLI 来构建一个项目，它为现代前端工作流程提供了功能齐备的构建设置 (例如，热重载、保存时的提示等等)。"),t("br"),e._v("\n下面会针对以上四种方法进行说明。")])]),e._v(" "),t("h2",{attrs:{id:"发布版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布版本"}},[e._v("#")]),e._v(" 发布版本")]),e._v(" "),t("p",[e._v("写这篇文章时的版本为：v3.1.5（没有大的改动的话基本不会更新关于Vue的文章）"),t("br"),e._v("\n有时会需要查看每一版本更新了什么，可以去GitHub上查。")]),e._v(" "),t("h2",{attrs:{id:"vue-devtools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-devtools"}},[e._v("#")]),e._v(" Vue Devtools")]),e._v(" "),t("p",[e._v("Vue Devtools是浏览器的一款插件，能在一个更友好的界面中审查和调试 Vue 应用。"),t("br"),e._v("\n目前能在Chrome和Firefox中搜索插件并添加。"),t("br"),e._v("\n也可以在GitHub上获得"),t("a",{attrs:{href:"https://github.com/vuejs/vue-devtools/blob/dev/packages/shell-electron/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Electron"),t("OutboundLink")],1),e._v("应用程序。")]),e._v(" "),t("h2",{attrs:{id:"cdn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[e._v("#")]),e._v(" CDN")]),e._v(" "),t("p",[e._v("CDN的全称是Content Delivery Network，即内容分发网络，也称为内容传送网络。"),t("br"),e._v("\nCDN是构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。CDN的关键技术主要有内容存储和分发技术。"),t("br"),e._v("\n由于CDN是为加快网络访问速度而被优化的网络覆盖层，因此被形象地称为“网络加速器”。CDN网络的诞生大大地改善了互联网的服务质量。"),t("br"),e._v("\n以CDN包的形式VUE：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('<script src="https://unpkg.com/vue@next"><\/script>  //在生产环境下注意版本号\n')])])]),t("h2",{attrs:{id:"下载并自行托管"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载并自行托管"}},[e._v("#")]),e._v(" 下载并自行托管")]),e._v(" "),t("p",[e._v("下载相关js文件并自行托管在服务器上。然后通过 "),t("code",[e._v("<script>")]),e._v(" 标签引入，与使用 CDN 的方法类似。"),t("br"),e._v("\n这些文件可以在 unpkg 或者 jsDelivr 这些 CDN 上浏览和下载。通常需要同时下载开发环境构建版本以及生产环境构建版本。")]),e._v(" "),t("h2",{attrs:{id:"npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[e._v("#")]),e._v(" npm")]),e._v(" "),t("p",[e._v("在用 Vue 构建大型应用时推荐使用 npm 安装 。npm 能很好地和诸如 webpack 或 Rollup 模块打包器配合使用。")]),e._v(" "),t("h3",{attrs:{id:"npm-国内镜像源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-国内镜像源"}},[e._v("#")]),e._v(" npm 国内镜像源")]),e._v(" "),t("p",[e._v("npm是node.js的包管理器，用于node插件管理（安装、卸载、管理依赖等），但是插件是从国外服务器下载，受网络的影响比较大，于是淘宝团队在国内做了一个镜像，可以代替官方版本，且每10分钟与官方版本同步一次。")]),e._v(" "),t("div",{staticClass:"language-npm line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("#直接使用\nsudo npm install <PACKAGE_NAME> --registry https://registry.npm.taobao.org/\n\n#永久修改，把npm的源地址修改为国内，此方法不需要使用cnpm\n# 1. 设置\nnpm config set registry https://registry.npm.taobao.org\n# 2. 查看\nnpm config get registry\n# 如果不需要可以直接删除\nnpm config rm registry\n\n#使用cnpm\nsudo npm install -g cnpm --registry=https://registry.npm.taobao.org\n# 使用npm时，改为使用cnpm\ncnpm install <package_name>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br")])]),t("h3",{attrs:{id:"npm-下载-vue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-下载-vue"}},[e._v("#")]),e._v(" npm 下载 vue")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("#使用npm下载最新稳定版本的Vue \n$ npm install vue@next\n\n# Vue 还提供了编写单文件组件的配套工具，只需要安装 @vue/compiler-sfc\n$ npm install -D @vue/compiler-sfc\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("除了 @vue/compiler-sfc 之外，还需要为已选择的打包工具选择一个配套的单文件组件 loader 或 plugin。"),t("br"),e._v("\n更多信息请查阅"),t("a",{attrs:{href:"https://v3.cn.vuejs.org/guide/single-file-component.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("单文件组件文档"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("大多数情况下，更倾向于使用 Vue CLI 来创建一个配置最小化的 webpack 构建。")]),e._v(" "),t("h2",{attrs:{id:"命令行工具-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令行工具-cli"}},[e._v("#")]),e._v(" 命令行工具 (CLI)")]),e._v(" "),t("p",[e._v("Vue 提供了一个官方的 CLI，为单页面应用 (SPA) 快速搭建繁杂的脚手架。它为现代前端工作流提供了功能齐备的构建设置。只需要几分钟的时间就可以运行起来并带有热重载、保存时 lint 校验，以及生产环境可用的构建版本。更多详情可查阅 "),t("a",{attrs:{href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue CLI"),t("OutboundLink")],1),e._v(" 的文档。")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。新手建议先在不用构建工具的情况下通读指南，在熟悉 Vue 本身之后再使用 CLI。")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("# 下载@vue/cli\nyarn global add @vue/cli\n# OR\nnpm install -g @vue/cli\n# 更新到最新版本\nvue upgrade --next\n")])])]),t("h2",{attrs:{id:"vite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vite"}},[e._v("#")]),e._v(" Vite")]),e._v(" "),t("p",[e._v("Vite 是一个 web 开发构建工具，由于其原生 ES 模块导入方式，可以实现闪电般的冷服务器启动。"),t("br"),e._v("\n通过在终端中运行以下命令，可以使用 Vite 快速构建 Vue 项目。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("#使用 npm：\n$ npm init @vitejs/app <project-name>\n$ cd <project-name>\n$ npm install\n$ npm run dev\n\n#或者 yarn：\n$ yarn create @vitejs/app <project-name>\n$ cd <project-name>\n$ yarn\n$ yarn dev\n\n#可能会出现这样的情况，当你的用户名中有一个空格，比如“Mike Baker”时，Vite 就不能成功创建。这时可以尝试：\n$ create-vite-app <project-name>\n")])])]),t("blockquote",[t("p",[e._v("tip   "),t("a",{attrs:{href:"https://v3.cn.vuejs.org/guide/installation.html#%E5%AF%B9%E4%B8%8D%E5%90%8C%E6%9E%84%E5%BB%BA%E7%89%88%E6%9C%AC%E7%9A%84%E8%A7%A3%E9%87%8A",target:"_blank",rel:"noopener noreferrer"}},[e._v("对不同构建版本的解释"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=a.exports}}]);