import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actions';
import { bindActionCreators } from 'redux';
import {StyleSheet,Dimensions} from 'react-native';

import MView from '../components/m-view';
import ToolBar from '../components/ToolBar';
import TabLayout from '../components/TabLayout';

import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';

import {
  View,
  Text,
  ViewPagerAndroid,
} from 'react-native';


let heightDimensions = Dimensions.get("window").height;
let widthDimensions = Dimensions.get("window").width;

let strOut;

const titles=[
  "one"
  ,"two"
  ,"three"
]

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
              currentIndex:0,
            };
  }


  render() {
    let {str}=this.props;

    return (
      <View style={
        { flex: 1
          ,flexDirection:'column'
        }}>
        <ToolBar title='sdutystep'/>
        <TabLayout
          clickOnBack={this.onTabClick}
          titles={titles}
          currentIndex={this.state.currentIndex}
        />
        <ViewPager {...this.props}/>
      </View>
    )
  }
}


class ViewPager extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
          this.listener = RCTDeviceEventEmitter.addListener('changeTab',(value)=>{
          this.viewPager.setPage(value);
        });
    }
    componentWillUnmount(){
        this.listener.remove();
    }

  render(){
        return(
          <ViewPagerAndroid
           ref={(viewPager) =>  this.viewPager = viewPager }
           style={{flex:1}}
           onPageScroll={this.onPageScroll}
           onPageScrollStateChanged={this.onPageScrollStateChanged}
           onPageSelected={this.onPageSelected}
          >
            <View>
            <MView
            actions={this.props.actions}
            str ={this.props.maindata.str}
            />
            </View>

          <View
            style={{flex:1, backgroundColor: '#3e8ce9'}}
          >

          </View>
          <View
            style={{flex:1, backgroundColor: '#3e7c69'}}
          >
          </View>
          </ViewPagerAndroid>
        );
    }

    onPageSelected =(e) =>{
      this.setState({page: e.nativeEvent.position});
      RCTDeviceEventEmitter.emit("changeTab",e.nativeEvent.position);
    }

    onPageScroll = (e) => {
      this.setState({progress: e.nativeEvent});
    }

    onPageScrollStateChanged=(state : ViewPagerScrollState)=> {
      this.setState({scrollState: state});
    }

}
export default Main;
