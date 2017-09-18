const path = require('path');
module.exports = {
  egg: true,
  proxy:false,
  framework: 'react',
  buildPath: 'store/public',
  publicPath: '/store/public/',
  entry: {
    include: 'app/web/page',
    exclude: ['app/web/page/test'],
    extMatch: '.jsx',
    loader: {
      client: 'app/web/framework/entry/loader.js'
    }
  },
  alias: {
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store'
  },
  cssModule: {
    include: 'app/web/page/css/module'
  },
  cssExtract: true,
  loaders: {
    eslint: {
      options: {
        fix: true
      }
    },
    css: {
      exclude: []
    }
  },
  onClient(){
    this.setProxy(false);
    this.setPrefix('static');
  },
  onServer(){
    this.addEntry('layout', path.join(this.config.baseDir, 'app/web/view/layout.jsx'));
    this.publicPath = this.publicPath.replace(/\/client\//, '/static/');
  }
};