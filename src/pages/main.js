import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MView from '../components/m-view';
import * as actionCreators from '../actions/actions';
import { bindActionCreators } from 'redux';
import {StyleSheet,Dimensions} from 'react-native';

import {
  View,
  ViewPagerAndroid,
} from 'react-native';


let heightDimensions = Dimensions.get("window").height;
let widthDimensions = Dimensions.get("window").width;

let strOut;

class Main extends Component {
  constructor(props){
    super(props);

  }
  render() {
    let {str}=this.props;

    return (
      <View style={{ flex: 1 }}>
        <View
          style={{ width:widthDimensions,height:40 , backgroundColor: '#3e9ce9'}}
          >
        </View>

      <ViewPager {...this.props}/>
      </View>
    )
  }

}


class ViewPager extends Component{
  constructor(props){
    super(props);
  }
    render(){

        return(
          <ViewPagerAndroid
           ref='ViewPager'
           style={{flex:1}}
           onPageScroll={this.onPageScroll}
           onPageScrollStateChanged={this.onPageScrollStateChanged}
           onPageSelected={this.onPageSelected}
          >
          <MView
            {...this.props} />
          <View/>
          <View/>
          <View/>
          </ViewPagerAndroid>
        );
    }

    onPageSelected =(e) =>{
      this.setState({page: e.nativeEvent.position});
    }

    onPageScroll = (e) => {
      this.setState({progress: e.nativeEvent});
    }

    onPageScrollStateChanged=(state : ViewPagerScrollState)=> {
      this.setState({scrollState: state});
    }

}
export default Main;
