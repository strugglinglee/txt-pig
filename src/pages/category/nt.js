

      {
        categorys.map((item, index) => {
          return  <AtTabsPane current={index} index={index}>
                  <View className='list'>
                    {
                      item.list.map((m, n) =>{
                      return <View  className='list-item' key={Math.random()}>

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
        })
      }