import Taro, { Component,Config } from '@tarojs/taro'
import { View,Image } from '@tarojs/components'
import './index.scss'

import { AtNoticebar } from 'taro-ui'

export default class Index extends Component {

  componentWillMount () {

  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config: Config = {
    navigationBarTitleText: '关于一只可爱猪'
  }



  onShareAppMessage() {
    return {
        title: `如果你也喜欢文字，那你一定会爱上文案猪猪～来自文案圈最有才的猪`,
        path: `/pages/index/index`
    };
  }

  render () {
    return (
      <View className='about'>

        <AtNoticebar  icon='volume-plus' marquee >
          文案猪猪正在成长阶段，欢迎各位热爱文字，需要文字的主子猪们热情投稿！
        </AtNoticebar>
        <View className='container'>
          <View>
            <Image className='avatar' src={require('../../icons/mine-s.png')}></Image>
          </View>
          <View>你好哇，主子猪～</View>
          <View>我是一匹来自南方的猪，我叫文案猪猪，之所以叫猪猪，绝对不是因为卖萌，而是一只猪已经不够形容我的聪明(不是chun,众所周知,pig is the most clever animal in the world)。</View>
          <View>
            我也是一只初生的萌猪，如果你恰好偶遇我，请你一定要温柔的对待我，因为我正在勇敢的茁壮成长，第一次做猪，难免有做的不好的地方，如果主子猪您有好的建议，请您给猪猪留言，猪猪想给你一个好的猪猪，在你需要时挺身而出。
          </View>
          <View>这绝对不是一个冰冷的机器，而是热爱文字的温暖猪在用心经营。没有什么原因，就只是想用心做好一件事。如果你也同样喜欢文字，常常被文字打动，也可以留言和我交流哦，说不定哪一天您留下的文字就会成为文案猪猪的珍宝，文案猪猪灰常灰常期待您的参与！</View>
        </View>
      </View>
    )
  }
}
