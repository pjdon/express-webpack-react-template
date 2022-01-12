const { merge } = require('webpack-merge');

module.exports = (env) => {
  return merge(
    require('./webpack/config.base'),    
    env.development === true
      ? require(`./webpack/config.dev`)
      : require(`./webpack/config.prod`)
  );
}