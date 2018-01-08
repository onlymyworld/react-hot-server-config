

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



##使用webpack构建react应用,并实现热更新

### 

	npm run dev  [启动开发环境]  127.0.0.1:8082/index2.html
	npm run server [启动服务器]	 127.0.0.1


	

	热更新关键技术  - react-hot-loader [只有开发环境才会使用热更新,所以只需要在webpack.config.js文件里面配置]
	1:安装react-hot-loader    cnpm install --save-dev react-hot-loader @3.0.0-beta.7 [指定安装的版本]
	2:配置
		entry:{
			app:['.app/index.js']	//配置开发环境的入口文件 [index2.html就可以直接访问localhost/app.js]
		},
		module:{
			loaders:[
				{
					test:/\.(js|jsx)$/,
					include:__dirname,
					exclude:/node_modules/,
					loader:'babel-loader',
					query:{
						"presets":['react','es2015'], //在这里配置了,就可以不需要.babel文件
						"plugins":['react-hot-loader/babel']
					}
				}
			]
		}


