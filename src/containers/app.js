import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MainContainer from '../containers/MainContainer';
import * as actionCreators from '../actions/actions';
import { bindActionCreators } from 'redux';
import {StyleSheet,Dimensions} from 'react-native';

import {
  Navigator,
  View,
  StatusBar,
  BackAndroid,
  ToastAndroid,
} from 'react-native';

let heightDimensions = Dimensions.get("window").height;
let widthDimensions = Dimensions.get("window").width;

class App extends Component {
    constructor(props){
      super(props);

    }

    renderScene(route, navigator) {
      const Component = route.component;

      return (
        <Component navigator={navigator} route={route} />
      );
    }

   render() {
      return (
        <View style={{ width:widthDimensions,height:100}}>
          <StatusBar
            backgroundColor="#3e9ce9"
            barStyle="light-content"
          />

          <View
            style={{backgroundColor: 'powderblue',  flex:1}}

          >
          </View>

          <Navigator
            style={{ flex: 1 }}
            configureScene={this.configureScene}
            renderScene={this.renderScene}
            initialRoute={{
              component: MainContainer,
              name: 'MainContainer'
            }}
          />
        </View>
      );
    }

 }

var lastBackPressed =null;
BackAndroid.addEventListener("hardwareBackPress",()=>{
  if(_navigator && _navigator.getCurrentRoutes().length > 1){
      _navigator.pop();
      return false;
  }

  if (lastBackPressed && ((lastBackPressed + 3000) >= Date.now())) {
          return false;
    }
    lastBackPressed = Date.now();
    ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);

  return true;
});


export default App;
