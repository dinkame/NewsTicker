var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var port = process.env.PORT;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(port, function (err, result) {
    if (err) {
        return console.log(err);
    }

    console.log(`Listening at http://localhost:${port}/`);
});