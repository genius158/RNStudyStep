import React, { Component, PropTypes } from 'react';
import {StyleSheet} from 'react-native';

import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';



export default class TabLayout extends Component{
  static defaultProps = {
    currentIndex:0,
  }
  static propTypes = {
     titles: PropTypes.arrayOf(React.PropTypes.string),
     currentIndex: React.PropTypes.number.isRequired,
     clickOnBack: React.PropTypes.func,
  }

  constructor(props){
    super(props);
  }

  clickHandler =(pos, event) =>{
      
    this.props.clickOnBack(pos);
  }

  // <TouchableHighlight
  //        style={{marginTop:20}}
  //        //按下后背景透明度变化
  //        activeOpacity={0.7}
  //        //按下后背景颜色
  //        underlayColor={'red'}
  //        onPress={() => ToastAndroid.show('文本被点击了', ToastAndroid.SHORT)}>
  //        <Text
  //            style={{fontSize:23, color:'blue', backgroundColor:'white'}}
  //            >
  //            这是一个文本(测试TouchableHighlight)
  //        </Text>
  //      </TouchableHighlight>



  render() {
    let self=this;
    const { titles } = this.props;
    var tabs = [];
       for (var i = 0; i <titles.length; i++) {
        let tempStyle;
        if (this.props.currentIndex==i) {
          tempStyle = styles.itemSelect;
        }else {
          tempStyle = styles.itemUnselect;
        }
        let boundClick = this.clickHandler.bind(this, i);
        tabs.push(
          <TouchableHighlight
            style={{flex:1}}
            key={ i }
            underlayColor={'red'}
            activeOpacity={0.7}
            onPress={ boundClick }
          >
            <Text key={ i } style={tempStyle}>
              { titles[i] }
            </Text>
          </TouchableHighlight>
        );
       }

    return (
      <View style={styles.container}>
        { tabs.map((elem, index) => {
           return elem;
         })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { height:35
             ,backgroundColor: '#3e9ce9'
             ,flexDirection:'row'
             ,justifyContent:'center'
             ,alignItems:'center'
  },
  itemUnselect: { flex:1
        ,textAlign: 'center'
        ,fontSize: 20
        ,color:'#e8e8e8'
  },
  itemSelect: { flex:1
        ,textAlign: 'center'
        ,fontSize: 20
        ,color:'#ffffff'
  },
});
