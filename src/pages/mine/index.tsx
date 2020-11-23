import Taro, { Component, Config } from '@tarojs/taro'
import { View,Image ,Button,Text} from '@tarojs/components'
import './index.scss'

type userInfoType={
  avatarUrl?:string;
  nickName?:string;
  gender?:string;
  language?:string;
  city?:string;
  province?:string;
  country?:string;
}

interface JItem {
  text:string;
  type:string;
  openType:string;
}

type PageState = {
  userInfo:userInfoType,
  jumpList:JItem[]
};

type IProps = {};

export default class Index extends Component<IProps, PageState>  {

  constructor(props) {
    super(props);
    this.state = {
      userInfo:{},
      jumpList:[
        {
          text:'给猪猪留言',
          type:'msg',
          openType:'contact'
        },
        {
          text:'猪猪喜爱',
          type:'like',
          openType:''
        },
        {
          text:'分享猪猪',
          type:'share',
          openType:'share'
        },
        {
          text:'关于猪猪',
          type:'about',
          openType:''
        }
      ]
    };
  }

  componentWillMount () {
    wx.getStorage({
      key: 'userInfo',
      success :(res) =>{
        this.setState({
          userInfo:JSON.parse(res.data)
        })
      }
    })
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
    navigationBarTitleText: '我的'
  }

  onGotUserInfo({detail:{userInfo}}){
    wx.setStorage({
      key:"userInfo",
      data:JSON.stringify(userInfo)
    })
    this.setState({
      userInfo
    })
  }

  handleCmd(type){
    switch(type){
      case 'like':
        wx.showToast({
          title: '主子猪等等我！！！可爱开发猪正在激情开发中...',
          icon: 'none',
          duration: 2000
        })
        return
      case 'about':
        wx.navigateTo({
          url: '/pages/about/index'
        })
        return
      default:
        return
    }
  }


  onShareAppMessage() {
    return {
        title: `如果你也喜欢文字，那你一定会爱上文案猪猪～来自文案圈最有才的猪`,
        path: `/pages/index/index`
    };
  }

  render () {
    const {userInfo,jumpList}=this.state
    return (
      <View className='mine'>
        <View className='mine-top'>
          {userInfo.avatarUrl?
          <Image  className='avatar' src={userInfo.avatarUrl}></Image>
          :
          <Image className='avatar' src={require('../../icons/mine-s.png')}></Image>
          }

          {
            userInfo.nickName? <View  className='info'>
              <Text className='info-top'>{userInfo.nickName}</Text>
              <Text className='info-bottom'>{userInfo.province}
                {userInfo.city&&<Text className='city'>,{userInfo.city}</Text>}
              </Text>
            </View>
            :<View>
                <Button
                  className='user-button'
                  openType='getUserInfo'
                  onGetUserInfo={this.onGotUserInfo}
                >登录 / 注册
                </Button>
            </View>
          }
        </View>
        <View className='mine-list'>
          {
            jumpList.map((item,index)=>{
              return <Button openType={item.openType} className='mine-list-item'  onClick={()=>{this.handleCmd(item.type)}}>
                  <View className='left'>
                    <Image className='icon' src={require(`../../icons/mine/${item.type}.png`)}></Image>
                    <Text className='text'>{item.text}</Text>
                  </View>
                  <View className='right'>{'>'}</View>
              </Button>
            })
          }
        </View>
      </View>
    )
  }
}
