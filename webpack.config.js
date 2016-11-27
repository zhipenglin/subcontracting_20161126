/**
 * Created by ifchangetoclzp on 2016/6/28.
 */
var path=require('path');
var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var ROOT_PATH=path.resolve(__dirname);
var APP_PATH=path.resolve(ROOT_PATH,'src');
var BUILD_PATH=path.resolve(ROOT_PATH,'dist');
var TEM_PATH=path.resolve(ROOT_PATH,'template');
module.exports={
    entry:{
        app:path.resolve(APP_PATH,'index.js'),
        flexible:path.resolve(APP_PATH,'lib/flexible.js')
    },
    output:{
        path:BUILD_PATH,
        filename:'[name].[hash:8].js'
    },
    devtool:'eval-source-map',
    module:{
        loaders:[
            {
                test:/\.js?$/,
                loader:'babel',
                include:APP_PATH
            },{
                test:/\.css$/,
                loaders:['style','css','px2rem?remUnit=53&remPrecision=8','autoprefixer']
            },{
                test:/\.less$/,
                loaders:['style','css','px2rem?remUnit=53&remPrecision=8','autoprefixer','less']
            },{
                test:/\.(png|jpg|svg|gif)$/,
                loader:'url',
                query:{
                    limit:50000,
                    name:'images/[name].[ext]'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(TEM_PATH, 'index.html'),
            title:''
        }),new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
    ],
    resolve:{
        extensions:['','.js','.jsx']
    }
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ])
}