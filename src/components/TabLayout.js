import React, { Component, PropTypes } from 'react';
import {StyleSheet} from 'react-native';
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';

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
    this.state = {
              currentIndex:this.props.currentIndex,
            };
  }

  componentDidMount(){
        this.listener = RCTDeviceEventEmitter.addListener('changeTab',(value)=>{
            this.setState({currentIndex:value});
        });
    }
    componentWillUnmount(){
        this.listener.remove();
    }

  clickHandler =(pos, event) =>{
    RCTDeviceEventEmitter.emit('changeTab',pos);
  }

  render() {
    let self=this;
    const { titles } = this.props;
    var tabs = [];
       for (var i = 0; i <titles.length; i++) {
        let tempStyle;
        if (this.state.currentIndex==i) {
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
