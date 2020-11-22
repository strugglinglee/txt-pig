import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, RichText,Text } from '@tarojs/components'
import './index.scss'
import {introList} from '../../json/sentence'

import { sentenceType } from '../../constants/sentence'

type IProps = {};

type PageState = {
  introList: sentenceType[];
  preList: sentenceType[];
  activeSentence: sentenceType;
};

export default class Index extends Component<IProps, PageState> {
  constructor(props) {
    super(props);
    this.state = {
        introList,
        preList:[],
        activeSentence:{text:''}
    };
  }

  componentWillMount () {

  }

  componentDidMount () {
    this.createNewSen(this.state.introList)
  }

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
    navigationBarTitleText: 'PIGPIGer!'
  }

  createNewSen(list){
    const len=list.length
    if(!len){
      wx.showToast({
        title: '我一片空白。。。',
        icon: 'none',
        duration: 2000
      })
      return
    }
    const index=Math.floor(Math.random()*len)
    const activeItem=list[index]
    activeItem.text=activeItem.text.replace(/\/n/g,'<br />')

    this.setState({
      activeSentence:activeItem
    })

    const {preList,introList,activeSentence}=this.state
    introList.splice(index,1)
    preList.push(activeSentence)

    this.setState({
      introList,
      preList
    })
  }

  backHandle(){
    const {preList}=this.state
    if(!preList.length)return

    const pre:any=preList.pop()

    this.setState({
      preList,
      activeSentence:pre
    })
  }

  nextHandle(){
    this.createNewSen(this.state.introList)
  }

  copyHandle(){
    wx.setClipboardData({
      data: this.state.activeSentence.text.replace(/\<br \/>/g,' '),
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
    const {activeSentence,preList}=this.state
    return (
      <View className='index'>
        <View className='main'>
            <RichText  nodes={activeSentence.text||'暂无内容'}></RichText>
            {(activeSentence.author||activeSentence.origin)&&
              <View  className='main-bottom'>--{activeSentence.author}{activeSentence.origin&&<Text>《{activeSentence.origin}》</Text>}</View>}
        </View>
        <View className='btns'>
            {preList.length>1&&<Image className='img' onClick={this.backHandle} src={require('../../icons/home/back.png')} />}
            <Image className='copy-img' onClick={this.copyHandle} src={require('../../icons/home/copy.png')} />
            <Image className='img' onClick={this.nextHandle} src={require('../../icons/home/next.png')} />
        </View>
      </View>
    )
  }
}
