import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text ,RichText} from '@tarojs/components'
import './index.scss'
import { AtTabs, AtTabsPane,AtCard } from 'taro-ui'

import {  dgrList,cuteList,loneList,nightList,wyyList,zyList } from '../../json/sentence'

import {sentenceType} from '../../constants/sentence'

const categorys=[
  { title: '小治愈',type:'zy',list:zyList},
  { title: '打工人',type:'dgr',list:dgrList},
  { title: '网抑云',type:'wyy',list:wyyList},
  { title: '丧文化' ,type:'lone',list:loneList},
  { title: '晚安宝贝',type:'night',list:nightList },
  { title: '可可爱爱',type:'cute',list:cuteList }
]

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      activeType:'cute'
    }
  }
  handleClick (value) {
    this.setState({
      current: value,
      activeType:value
    })
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '探索'
  }

  copyHandle(text){
    text=text.replace(/\/n/g,' ')
    if(!text){
      wx.showToast({
        title: '无内容可供复制',
        icon: 'none',
        duration: 2000
      })
      return
    }
    wx.setClipboardData({
      data: text,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功',
              icon: 'success',
              duration: 2000
            })
          }
        })
      }
    })
  }

  render () {
    return (
      <AtTabs
        current={this.state.current}
        scroll
        tabList={categorys}
        onClick={this.handleClick.bind(this)}>

        {
          categorys.map((item, index) => {
            return  <AtTabsPane current={index} index={index}>
              <View className="list">
                {
                  item.list.map((m, n) =>{
                  return <View  className="list-item">
                      <AtCard thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
                      note={m.author+(m.origin?`《${m.origin}》`:'')}
                      onClick={()=>{this.copyHandle(m.text)}}>
                        <RichText nodes={m.text.replace(/\/n/g,'<br />')||'暂无内容'}></RichText>
                      </AtCard>
                  </View>
                  })
                }
              </View>
          </AtTabsPane>
          })
        }
      </AtTabs>
    )
  }
}