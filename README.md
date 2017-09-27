

使用方式

	
	npm run dev   [启动开发环境]
	node server.js [启动服务器]
使用webpack搭建一个简单的热更新页面

步骤：


	1, 初始化package.json文件；	npm init [根据提示完成相应的配置填写]
	2, 安装webpack   使用cnpm[镜像]  cnpm install webpack --save-dev
	3, 安装webpack-dev-server  cnpm install webpack-dev-server --save-dev [小型的node.js Express服务器]
	4, 安装html-webpack-plugin cnpm install html-webpack-plugin --save-dev

	5, 创建webpack.config.js配置文件，和webpack.config.release.js发布文件
	6, 创建app/index.js入口文件
	7, 创建server.js文件 [node.js的express服务]