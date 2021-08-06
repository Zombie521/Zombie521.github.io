(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{450:function(e,t,a){"use strict";a.r(t);var i=a(15),v=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vite"}},[e._v("#")]),e._v(" Vite")]),e._v(" "),a("p",[e._v("vite和Vue cli一样都是web开发构建工具（脚手架）。"),a("br"),e._v("\nvite是尤雨溪在发布Vue 3时同时发布的，目前仅支持Vue 3.x，这意味着与Vue 3不兼容的库也不能与Vite一起使用。"),a("br"),e._v("\nIE11不支持vite,因为vite是一个基于浏览器原生ES模块导入的开发服务器，IE 11并不支持ES的模块导入。"),a("br"),e._v("\n在开发环境下，利用浏览器去解析import，在服务器端按需编译返回，完全跳过了打包这个概念（打包是webpack等打包工具的工作），服务器随启随用。同时不仅对Vue文件提供了支持，还支持热更新，而且热更新的速度不会随着模块增多而变慢。"),a("br"),e._v("\n在生产环境下使用Rollup打包。")]),e._v(" "),a("p",[e._v("Vite具有以下特点：")]),e._v(" "),a("ul",[a("li",[e._v("快速的冷启动")]),e._v(" "),a("li",[e._v("即时热模块更新（HMR，Hot Module Replacement）")]),e._v(" "),a("li",[e._v("真正按需编译")])]),e._v(" "),a("h2",{attrs:{id:"使用vite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用vite"}},[e._v("#")]),e._v(" 使用Vite")]),e._v(" "),a("p",[e._v("与Vue CLI类似，Vite也提供用npm或者yarn来生成项目结构的方式。选择一个目录，打开命令提示窗口，依次执行下面的命令构建脚手架项目，并启动项目。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("    npm init vite-app <project-name>\n    cd <project-name>\n    npm install\n    npm run dev\n\n    # 如果使用yarn，则依次执行下面的命令：\n    yarn create vite-app <project-name>\n    cd <project-name>\n    yarn\n    yarn dev\n")])])]),a("p",[e._v("例如，创建的项目名为hello，执行完最后一个命令的结果如下图所示。")]),e._v(" "),a("div",{staticClass:"center-container"},[a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Zombie521/21sBlogImg/imga9d3fd1f4134970a90ea9f5025db7acfa6865dc9.jpeg",alt:""}})])]),a("h2",{attrs:{id:"启动项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动项目"}},[e._v("#")]),e._v(" 启动项目")]),e._v(" "),a("p",[e._v("打开Chrome浏览器（浏览器不能使用IE11，其他主流的浏览器均支持ES模块的模块功能），访问http://localhost:3000/，界面如下图所示。")]),e._v(" "),a("div",{staticClass:"center-container"},[a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Zombie521/21sBlogImg/imgd31b0ef41bd5ad6ebd564b2730da92dcb7fd3c6c.jpeg",alt:"hello项目的默认页面"}})])]),a("p",[e._v("使用Vite生成的项目结构如下图所示。")]),e._v(" "),a("div",{staticClass:"center-container"},[a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Zombie521/21sBlogImg/imgdcc451da81cb39db65f2fba76307a223ab18302e.jpeg",alt:"hello项目的目录结构"}})])]),a("p",[e._v("Vite生成的脚手架项目的目录结构与Vue CLI生成的项目目录结构很类似，而且开发方式也基本相同。不过Vite项目的默认配置文件是vite.config.js，而不是vue.config.js。")]),e._v(" "),a("p",[e._v("package.json文件的内容如下所示：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('    {\n        "name": "hello",\n        "version": "0.0.0",\n        "scripts": {\n            "dev": "vite",\n            "build": "vite build"\n        },\n        "dependencies": {\n            "vue": "^3.0.2"\n        },\n        "devDependencies": {\n            "vite": "^1.0.0-rc.8",\n            "@vue/compiler-sfc": "^3.0.2"\n        }\n    }\n')])])]),a("p",[e._v("如果要构建生产环境下应用的发布版本，只需要在终端窗口中执行下面的命令即可：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("    npm run build\n")])])]),a("p",[e._v("虽然Vite的作者已经在背后做了很多工作，让我们能够沿用基于Vue CLI建立的脚手架项目的开发习惯，但仍然会有一些细微的差别，详细的介绍请参看Vite源码库的GitHub网址。")]),e._v(" "),a("h2",{attrs:{id:"与vue-cli的不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与vue-cli的不同"}},[e._v("#")]),e._v(" 与Vue CLI的不同")]),e._v(" "),a("p",[e._v("主要区别在于，对于Vite，在开发过程中没有捆绑。源代码中的ES Import语法直接提供给浏览器，浏览器通过原生的"),a("code",[e._v("<script module>")]),e._v("支持解析这些语法，并为每次导入发起HTTP请求。dev服务器拦截请求，并在必要时执行代码转换。例如，导入到*.vue文件的内容在发送回浏览器之前被即时编译。")]),e._v(" "),a("p",[e._v("这种方法有几个优点：")]),e._v(" "),a("ul",[a("li",[e._v("因为没有打包工作要做，所以服务器冷启动非常快。")]),e._v(" "),a("li",[e._v("代码是按需编译的，因此只有在当前页面上实际导入的代码才会编译。我们不必等到整个应用程序打包后才开始开发，这对于有几十个页面的应用程序来说是一个巨大的不同。")]),e._v(" "),a("li",[e._v("热模块更新（HMR）的性能与模块总数解耦。这使得无论应用程序有多大，HMR都能保持快速。")])]),e._v(" "),a("p",[e._v("整个页面的重新加载可能比基于绑定包的设置稍慢，因为本机ES导入会导致具有深度导入链的网络瀑布。但是，由于这是本地开发，所以与实际编译时间相比，差异是很小的。由于已编译的文件缓存在内存中，因此在页面重新加载时没有编译开销。")]),e._v(" "),a("p",[e._v("简单来说，就是使用Vite来开发Vue 3项目可以减少不必要的等待项目重启或模块更新的时间，加快开发进度。在生成环境下，我们依然是需要对项目进行打包的，以避免频繁的网络请求，Vite也提供了一个vite build来实现这一点，我们在终端窗口中执行npm run build，实际执行的就是vite build命令。")]),e._v(" "),a("h2",{attrs:{id:"webpack会被vite替代吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack会被vite替代吗"}},[e._v("#")]),e._v(" webpack会被vite替代吗")]),e._v(" "),a("p",[e._v("Vite 更多还是基于 ES 6 的 JavaScript modules 模块 + esbuild 的能力，并且做了按需访问构建的优化，实现了快速冷启动和更精细化的 HMR（热更新）。和 Snowpack - The faster frontend build tool 对标，都代表了未来前端工程化的方向，snowpack 对各种框架的支持更开放一些，vite 前期跟 vue 关联更紧一些但现在也加上了对 react 的集成支持。不过以目前的生态规模，webpack 虽然是有配置复杂、性能不够各种问题，但性能方面的优化加上 esbuild 也还有提升空间。而且对于稍微大一些的前端团队来讲，往往工具链的建设已经重度依赖于 webpack 之上，webpack 虽然配置会繁琐但同时也提供了足够的定制性。因此短期还没有那么容易被替代的。")]),e._v(" "),a("h2",{attrs:{id:"关于vite的学习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于vite的学习"}},[e._v("#")]),e._v(" 关于vite的学习")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://cn.vitejs.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vite官方文档"),a("OutboundLink")],1),a("br"),e._v("\n但我估计不会学习vite，因为vite开箱即用，知道它是做什么的，怎么用就够了。"),a("br"),e._v("\n以后闲下来了可以看看官方文档，研究一下源码。")]),e._v(" "),a("blockquote",[a("p",[e._v("本文大部分来自"),a("a",{attrs:{href:"https://baijiahao.baidu.com/s?id=1684779666333900793&wfr=spider",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue 3全新的Web开发构建工具——Vite介绍"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=v.exports}}]);