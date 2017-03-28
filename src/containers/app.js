import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MainContainer from '../containers/MainContainer';
import * as actionCreators from '../actions/actions';
import { bindActionCreators } from 'redux';

import {
  Navigator,
  View,
  StatusBar,
  BackAndroid,
  ToastAndroid,
} from 'react-native';

let _navigator;
let lastBackPressed =null;

class App extends Component {
    constructor(props){
      super(props);
      BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    }
    goBack() {
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
    }

    renderScene(route, navigator) {
    _navigator = navigator;
      const Component = route.component;

      return (
        <Component navigator={navigator} route={route} />
      );
    }


   render() {
      return (
        <View style={{ flex: 1 }}>
          <StatusBar
            backgroundColor="#3e9ce9"
            barStyle="light-content"
          />

          <Navigator
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



export default App;
