import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MView from '../components/m-view';
import * as actionCreators from '../actions/actions';
import { bindActionCreators } from 'redux';
import {StyleSheet,Dimensions} from 'react-native';

import {
  View
} from 'react-native';


let heightDimensions = Dimensions.get("window").height;
let widthDimensions = Dimensions.get("window").width;

let strOut;

class Main extends Component {
  constructor(props){
    super(props);

  }
  render() {
    const { maindata } = this.props;
    alert(maindata);
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{ width:widthDimensions,height:40 , backgroundColor: '#3e9ce9'}}
          >
        </View>

      <MView
        style={{ flex: 1 }}
        str={maindata.str}
        handleSetStr={this.handleSetStr}
      />
      </View>
    )
  }

  handleSetStr=()=>{
    this.props.actions.actionSetStr('sdfasdfasdfasdfafsdfsd');
  }
}

export default Main;
