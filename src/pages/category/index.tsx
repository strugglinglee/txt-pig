import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text ,RichText,Image,ScrollView} from '@tarojs/components'
import './index.scss'
import { AtTabs, AtTabsPane } from 'taro-ui'

// import {  dgrList,cuteList,loneList,nightList,wyyList,zyList,chpList } from '../../json/sentence'

import api from '../../services/api.ts'

const initTextParams={
  pageSize: 10,
  page: 1,
  category:''
}

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      activeType:'zy',
      categorys:[],
      textParams:{...initTextParams},
      textList:[]
    }
  }
  handleClick (value) {
    //scrollTo(0)
    this.setState({
      current: value,
      activeType:value
    },()=>{
      this.changeCurCategory(this.state.categorys[value].type)
    })

  }

  componentWillMount () {
    this.getCategories()
  }

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

  getCategories(){
    api.get('/api/categories',{
      pageSize: 10,
      page: 1
    }).then(({ data :{ response }})=>{
      const categorys=response.map(m=>({...m,title:m.name}))
      this.setState({
        categorys
      },()=>{
        this.changeCurCategory('')
      })
    })
  }

  getTextList(){
    const textParams={...initTextParams,category:this.state.textParams.category}
    api.get('/api/texts',textParams).then(({ data :{ response }})=>{
      this.setState({
        textList:response
      })
    })
  }

  getNextTextList(){
    let {textParams,textList}=this.state
    textParams={...textParams,page:++textParams.page}
    api.get('/api/texts',textParams).then(({ data :{ response }})=>{
      if(response.length){
        this.setState({
          textList:[...textList,...response],
          textParams:{...textParams,page:++textParams.page}
        })
      }else{
        Taro.showToast({
          title: "到底了～",
          icon: "none"
        });
      }
    })
  }

  onPullDownRefresh(){
    this.getTextList()
  }

  onReachBottom(){
    this.getNextTextList()
  }

  changeCurCategory(category){
    //如果未传值 则取第一个分类
    if(!category && this.state.categorys.length>0){
      category=this.state.categorys[0].type
    }
    //仍无值 则退出
    if(!category) return

    this.setState({
      textParams:{
        ...this.state.textParams,
        category
      }
    },()=>{
      this.getTextList()
    })
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

  onShareAppMessage() {
    return {
        title: `欢迎进入文案猪猪的神奇世界`,
        path: `/pages/index/index`
    };
  }

  render () {
    const {current,categorys,textList}=this.state
    return (
      <AtTabs
        current={current}
        scroll
        tabList={categorys}
        onClick={this.handleClick.bind(this)}
      >

        <AtTabsPane current={current} index={current}>
            <View className='list'>
              {
                textList.map((m, n) =>{
                return <View  className='list-item' key={n}>

                  <View className='list-item-top'>
                      <View className='left'>
                          <Image
                            className='pig-img'
                            src={require('../../icons/mine-s.png')}
                          />
                          <Text className='title'>#{categorys[current].title}#</Text>
                      </View>

                      <View className='right'>
                          <Text className='copy' onClick={()=>{this.copyHandle(m.text)}}>一键复制</Text>
                      </View>

                      {/* <Image className='copy' src={require('../../icons/home/copy.png')} /> */}

                  </View>

                  <RichText
                    className='list-item-txt'
                    nodes={m.text.replace(/\/n/g,'<br />')||'暂无内容'}
                  ></RichText>

                  <View
                    className='tips'
                  >
                    {m.author+(m.origin?`《${m.origin}》`:'')}
                  </View>
                </View>
                })
              }
            </View>
        </AtTabsPane>
      </AtTabs>
    )
  }
}


