const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.join(__dirname, './src/main.js'),//入口 表示 要用webpack 打包哪个文件
    output: {
        // webpack 如何输出结果的相关选项
        path: path.join(__dirname, './dist'), // 指定 打包好的文件 输出到哪个目录去
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）
        filename: "bundle.js"// 这是指定 输出的文件的名称
    },
    // devServer: {
    //     open:true,//自动打开浏览器
    //     post:8080,//设置启动时候的运行端口
    //     contentBase:'src',//指定托管的根目录
    //     hot:true//启用热更新的第一步
    // },
    plugins: [ //配置插件的节点
        // new webpack.HotModuleReplacementPlugin(),//new一个热更新的模块对象 这是启用热更新的第三部
        new htmlWebpackPlugin({
            //创建一个 在内存中的HTML页面选择
            template:path.join(__dirname, './src/index.html'),//指定模板页面 将来会根据指定的页面路径 去生成内存中的页面
            filename: 'index.html'//指定生成的页面的名称
        }),
        new VueLoaderPlugin(),

    ],
    module: {
        rules: [
            { test: /\.css$/, use:['vue-style-loader', 'css-loader']},
            { test: /\.less$/, use:['style-loader', 'css-loader', 'less-loader']},
            { test: /\.scss$/, use:['style-loader', 'css-loader', 'sass-loader']},
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=36303&name=[hash:8]-[name].[ext]'},
            

            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
            // { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' },
        ]
    },
    resolve: {
        alias:{//修改 Vue 被导入时候的路径
            "vue$":"vue/dist/vue.js"
        }
    }
};