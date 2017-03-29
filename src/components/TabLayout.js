import React, { Component, PropTypes } from 'react';
import {StyleSheet} from 'react-native';

import {
  View,
  Text,
} from 'react-native';



export default class TabLayout extends Component{
  static defaultProps = {
    currentIndex:0,
  }
  static propTypes = {
     titles: PropTypes.arrayOf(React.PropTypes.string),
     currentIndex: React.PropTypes.number.isRequired,
  }

  constructor(props){
    super(props);
  }

  render() {
    const { titles } = this.props;
    var tabs = [];
       for (var i = 0; i <titles.length; i++) {
        let tempStyle;
        if (this.props.currentIndex==i) {
          tempStyle = styles.itemSelect;
        }else {
          tempStyle = styles.itemUnselect;
        }

        tabs.push(
          <Text key={ i } style={tempStyle}>
            { titles[i] }
          </Text>
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
