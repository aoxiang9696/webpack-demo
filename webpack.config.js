const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //将HTML引用路径和构建结果关联起来

module.exports = {
    mode: 'development', //指定构建模式  production,none
    entry: './src/index.js', // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {// webpack5配置方法与webpack4不同
        static: {
            directory: path.join(__dirname, 'dist'),
        },
    },
    module: {
        rules: [
            {
                test: /\.css/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                use: [
                    'style-loader', //讲css-loader解析的结果转成js代码，运行时动态插入style标签让css代码生效
                    'css-loader' //解析css代码，处理css中的依赖，例如!import和url()外部文件的声明
                ]
            },
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     use: [
            //         {
            //             loader: 'file-loader', // 解析文件

            //         }
            //     ]
            // },
            // {
            //     test: /\.(js|jsx)?/, // 匹配文件类型
            //     include: [
            //         path.resolve(__dirname, 'src') //指定哪些路径下文件需要loader处理
            //     ],
            //     use: {//指定使用的loader
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env']
            //         }
            //     }
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ]


}