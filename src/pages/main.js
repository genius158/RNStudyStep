import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actions';
import { bindActionCreators } from 'redux';
import {StyleSheet,Dimensions} from 'react-native';

import MView from '../components/m-view';
import ToolBar from '../components/ToolBar';
import TabLayout from '../components/TabLayout';

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
        <ViewPager
          tabChange={this.tabChange}
         {...this.props}/>
      </View>
    )
  }

  onTabClick=(pos)=>{
     this.refs.ViewPager.setPage(pos);
  }

  tabChange=(index)=>{
    this.setState({currentIndex:index});
  }

    // {this.renderToolBar()}

    // renderToolBar() {
    //   return(
    //   <View
    //       style={
    //         { width:widthDimensions
    //           ,height:40
    //           ,backgroundColor: '#3e9ce9'
    //           ,flexDirection:'column'
    //           ,justifyContent:'center'
    //           ,alignItems:'center'
    //
    //       }}
    //       >
    //         <Text
    //           style={
    //             { fontSize: 20
    //               ,color:'#ffffff'
    //             }}
    //         >
    //           studystep
    //         </Text>
    //     </View>
    //   );
    //   }

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
      this.props.tabChange(e.nativeEvent.position);
    }

    onPageScroll = (e) => {
      this.setState({progress: e.nativeEvent});
    }

    onPageScrollStateChanged=(state : ViewPagerScrollState)=> {
      this.setState({scrollState: state});
    }

}
export default Main;
