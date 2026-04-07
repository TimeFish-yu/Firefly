import type { SiteConfig } from "@/types/config";
import { fontConfig } from "./fontConfig";

// 定义站点语言
// 语言代码，例如：'zh_CN', 'zh_TW', 'en', 'ja', 'ru'。
const SITE_LANG = "zh_CN";

export const siteConfig: SiteConfig = {
	// 站点标题
	title: "Zane Labs",

	// 站点副标题
	subtitle: "a blog",

	// 站点 URL
	site_url: "https://blog.ezane.top/",

	// 站点描述
	description:
		"",

	// 站点关键词
	keywords: [
		"Firefly",
		"Fuwari",
		"Astro",
		"ACGN",
		"博客",
		"技术博客",
		"静态博客",
	],

	// 主题色
	themeColor: {
		// 主题色的默认色相，范围从 0 到 360。例如：红色：0，青色：200，蓝绿色：250，粉色：345
		hue: 225,
		// 是否对访问者隐藏主题色选择器
		fixed: false,
		// 默认模式："light" 亮色，"dark" 暗色，"system" 跟随系统
		defaultMode: "system",
	},

	// 页面整体宽度（单位：rem）
	// 数值越大可以让页面内容区域更宽
	// 在使用单侧栏边栏时，建议调低一些宽度以获得更好的视觉效果。
	pageWidth: 100,

	// 网站Card样式配置
	card: {
		// 是否开启卡片边框和阴影，开启后让网站更有立体感
		border: true,
		// 是否让卡片风格跟随主题色相
		followTheme: false,
	},

	// Favicon 配置
	favicon: [
		{
			// 图标文件路径
			src: "/favicon/favicon.ico",
			// 可选，指定主题 'light' | 'dark'
			// theme: "light",
			// 可选，图标大小
			// sizes: "32x32",
		},
	],

	// 导航栏配置
	navbar: {
		// 导航栏Logo
		// 支持三种类型：
		// 1. Astro图标库: { type: "icon", value: "material-symbols:home-pin-outline" }
		// 2. 本地图片（public目录，不优化）: { type: "image", value: "/assets/images/logo.webp", alt: "Logo" }
		// 3. 本地图片（src目录，自动优化但会增加构建时间，推荐）: { type: "image", value: "assets/images/logo.webp", alt: "Logo" }
		// 4. 网络图片: { type: "url", value: "https://example.com/logo.png", alt: "Logo" }
		logo: {
			type: "image",
			value: "assets/images/square.png",
			alt: "🍀",
		},
		// 导航栏标题
		title: "Zane Labs",
		// 全宽导航栏，导航栏是否占满屏幕宽度，true：占满，false：不占满
		widthFull: false,
		// 导航菜单对齐方式，left：左对齐，center：居中
		menuAlign: "center",
		// 导航栏图标和标题是否跟随主题色
		followTheme: false,
		// 导航栏是否固定在顶部并始终可见
		stickyNavbar: true,
	},

	// 站点开始日期，用于统计运行天数
	siteStartDate: "2026-03-07",

	// 站点时区（IANA 时区字符串），用于格式化bangumi、rss里的构建日期时间等等..
	// 示例："Asia/Shanghai", "UTC", 如果为空，则按照构建服务器的时区进行时区转换
	timezone: "Asia/Shanghai",

	// 提醒框（Admonitions）配置，修改后需要重启开发服务器才能生效
	admonition: {
		// 是否启用提醒框
		enable: true,
		// 提醒框样式，可选值："callout" | "block"
		style: "callout",
	},

	// 侧边栏配置
	sidebar: {
		// 侧边栏宽度（单位：rem）
		width: 12,
		// 侧边栏对齐方式，可选值："left" | "right"
		align: "left",
		// 侧边栏是否固定
		sticky: true,
		// 侧边栏是否可折叠
		collapsible: true,
	},

	// 页脚配置
	footer: {
		// 是否显示页脚
		enable: true,
		// 页脚内容
		content: "Powered by [Astro](https://astro.build/) & [Firefly](https://github.com/CuteLeaf/Firefly)",
	},

	// 评论系统配置
	comment: {
		// 是否启用评论
		enable: false,
		// 评论系统类型，可选值："giscus" | "waline" | "twikoo"
		type: "giscus",
		// 评论系统配置
		giscus: {
			// GitHub 仓库
			repo: "TimeFish-yu/Firefly",
			// 仓库 ID
			repoId: "R_kgDON...",
			// 分类
			category: "General",
			// 分类 ID
			categoryId: "DIC_kwDON...",
			// 映射方式
			mapping: "pathname",
			// 反应
			reactionsEnabled: "1",
			// 发射
			emitMetadata: "0",
			// 输入位置
			inputPosition: "bottom",
			// 语言
			lang: "zh-CN",
			// 主题
			theme: "light",
		},
	},

	// 音乐播放器配置
	music: {
		// 是否启用音乐播放器
		enable: false,
		// 音乐播放器类型，可选值："meting" | "aplayer"
		type: "meting",
		// 音乐播放器配置
		meting: {
			// 服务器，可选值："netease" | "tencent" | "kugou" | "xiami" | "baidu"
			server: "netease",
			// 类型，可选值："song" | "album" | "artist" | "playlist"
			type: "playlist",
			// ID
			id: "7812390483",
		},
	},

	// 相册配置
	gallery: {
		// 是否启用相册
		enable: true,
		// 相册配置
		albums: [
			{
				// 相册名称
				name: "示例相册",
				// 相册描述
				description: "这是一个示例相册",
				// 相册封面
				cover: "/images/gallery/cover.avif",
				// 相册图片
				images: [
					{
						// 图片地址
						src: "/images/gallery/1.avif",
						// 图片描述
						alt: "示例图片1",
					},
					{
						// 图片地址
						src: "/images/gallery/2.avif",
						// 图片描述
						alt: "示例图片2",
					},
				],
			},
		],
	},

	// 友链配置
	friends: {
		// 是否启用友链
		enable: true,
		// 友链配置
		links: [
			{
				// 友链名称
				name: "示例友链",
				// 友链链接
				link: "https://example.com",
				// 友链头像
			avatar: "https://example.com/avatar.jpg",
				// 友链描述
				description: "这是一个示例友链",
			},
		],
	},

	// 赞助配置
	sponsor: {
		// 是否启用赞助
		enable: false,
		// 赞助链接
		link: "https://afdian.net/a/username",
	},

	// 公告配置
	announcement: {
		// 是否启用公告
		enable: false,
		// 公告内容
		content: "",
	},

	// 樱花特效配置
	sakura: {
		// 是否启用樱花特效
		enable: false,
		// 樱花数量
		count: 20,
	},

	// Live2D 配置
	live2d: {
		// 是否启用 Live2D
		enable: false,
		// Live2D 模型
		model: "haru",
	},

	// 字体配置
	font: fontConfig,

	// 背景壁纸配置
	wallpaper: {
		// 是否启用背景壁纸
		enable: false,
		// 背景壁纸图片
		image: "/images/wallpaper.jpg",
		// 背景壁纸透明度
		opacity: 0.5,
	},

	// 个人信息配置
	profile: {
		// 是否启用个人信息
		enable: true,
		// 名称
		name: "Zane",
		// 头像
		avatar: "/images/avatar.jpg",
		// 简介
		description: "一个爱折腾的博主",
		// 社交链接
		social: [
			{
				// 社交平台
				platform: "github",
				// 社交链接
				link: "https://github.com/TimeFish-yu",
			},
			{
				// 社交平台
				platform: "email",
				// 社交链接
				link: "mzane@foxmail.com",
			},
		],
	},

	// 文章配置
	post: {
		// 文章默认封面
		defaultCover: "/images/default-cover.avif",
		// 文章摘要长度
		excerptLength: 200,
		// 文章是否显示目录
		toc: true,
		// 文章是否显示字数统计
		wordCount: true,
		// 文章是否显示阅读时间
		readTime: true,
		// 文章是否显示更新日期
		showUpdatedDate: true,
	},

	// 分页配置
	pagination: {
		// 每页文章数量
		size: 10,
		// 是否显示分页
		enable: true,
	},

	// 搜索配置
	search: {
		// 是否启用搜索
		enable: true,
		// 搜索类型，可选值："local" | "algolia"
		type: "local",
	},

	// 代码块配置
	codeBlock: {
		// 是否启用代码块
		enable: true,
		// 代码块主题
		theme: "github-dark",
		// 代码块是否显示行号
		showLineNumbers: true,
		// 代码块是否可复制
		copyable: true,
	},

	// 数学公式配置
	math: {
		// 是否启用数学公式
		enable: true,
		// 数学公式引擎，可选值："katex" | "mathjax"
		engine: "katex",
	},

	// 图表配置
	chart: {
		// 是否启用图表
		enable: true,
		// 图表引擎，可选值："mermaid"
		engine: "mermaid",
	},

	// 加密配置
	encryption: {
		// 是否启用加密
		enable: false,
		// 加密密码
		password: "",
	},

	// 自定义头部代码
	customHead: "",

	// 自定义底部代码
	customFooter: "",
};