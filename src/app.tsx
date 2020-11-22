import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'
import 'taro-ui/dist/style/index.scss'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/category/index',
      'pages/mine/index'
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color:"#777",
      selectedColor:"#000",
      backgroundColor:"#fff",
      list: [{
        pagePath: "pages/index/index",
        text: "推荐",
        iconPath:"./icons/home.png",
        selectedIconPath:"./icons/home-s.png"
      }, {
        pagePath: "pages/category/index",
        text: "探索",
        iconPath:"./icons/category.png",
        selectedIconPath:"./icons/category-s.png"
      }/* , {
        pagePath: "pages/mine/index",
        text: "我的",
        iconPath:"./icons/mine.png",
        selectedIconPath:"./icons/mine-s.png"
      } */]
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
