const CompressionPlugin = require("compression-webpack-plugin");
const path = require("path");
module.exports = {
  outputDir: "dist",

  // 配置打包后文件名是否需要hash值
  filenameHashing: true,

  devServer: {
    port: 8081,
    host: "localhost",
    open: true
  },

  configureWebpack: () => {
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
  },
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("less").oneOf(type))
    );
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname), "src/style/mixin.less"]
    }
  }
};
function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/style/mixin.less")]
    });
}
