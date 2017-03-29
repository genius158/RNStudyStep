import React, { Component, PropTypes } from 'react';
import {StyleSheet} from 'react-native';

import {
  View,
  Text,
} from 'react-native';

export default class ToolBar extends Component{
  static defaultProps = {
    title: 'request title',
  }

  static propTypes = {
     title: PropTypes.string.isRequired,
  }

  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style = {styles.container} >
            <Text style={styles.testStyle} >
              {this.props.title}
            </Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { height:40
             ,backgroundColor: '#3e9ce9'
             ,flexDirection:'row'
             ,justifyContent:'center'
             ,alignItems:'center'
  },
  testStyle: {fontSize: 20
             ,color:'#ffffff'
  },

});


// // The ES6+ way
// class Video extends React.Component {
//   static defaultProps = {
//     autoPlay: false,
//     maxLoops: 10,
//   }
//   static propTypes = {
//     autoPlay: React.PropTypes.bool.isRequired,
//     maxLoops: React.PropTypes.number.isRequired,
//     posterFrameSrc: React.PropTypes.string.isRequired,
//     videoSrc: React.PropTypes.string.isRequired,
//   }
//   state = {
//     loopsRemaining: this.props.maxLoops,
//   }
// }
