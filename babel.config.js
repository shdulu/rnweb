const env = process.env.RUNTIME_ENV || 'rn'
const rnBabelConfig = function (api) {
  api.cache(true)
  return {
    presets: ['module:metro-react-native-babel-preset']
  }
}
const wechatBabelConfig = function (api) {
  api.cache(true)
  return {}
}
module.exports = env === 'rn' ? rnBabelConfig : wechatBabelConfig
