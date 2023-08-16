import {AppRegistry} from 'react-native'
import App from './src/pages/home/index'

AppRegistry.registerComponent("RNWEB", () => App)
AppRegistry.runApplication("RNWEB", {
  initialProps: {},
  rootTag: document.getElementById('root')
})
