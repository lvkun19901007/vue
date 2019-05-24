const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  outputDir: "dist",
  filenameHashing: false, // 配置打包后文件名是否需要hash值
  devServer: {
    port: 8081,
    host: "localhost",
    open: true
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|.\css/, //匹配文件名
            threshold: 10240, //对超过10k的数据压缩
            deleteOriginalAssets: false //不删除源文件
          })
        ]
      };
    }
  }
};
