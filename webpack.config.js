const path = require('path');
module.exports = {
    mode: 'development', //指定构建模式
    entry: './src/index.js', // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: { //(如果不注释掉 npm run serve起不来，原因待查)
        // contentBase: path.join(__dirname, 'dist') // 开发服务器启动路径
        static: {
            directory: path.join(__dirname, 'dist'),
          },
    },
    // module: {
    //     rules: [
    //         {
    //             text: /\.jsx?/, // 匹配文件类型
    //             include: [
    //                 path.resolve(__dirname, 'src') //指定哪些路径下文件需要loader处理
    //             ],
    //             use: {//指定使用的loader
    //                 loader: 'babel-loader',
    //                 options: {
    //                     presets: ['@babel/preset-env']
    //                 }
    //             }
    //         }
    //     ]
    // }


}