import React, {
  Component
} from 'react'; 

import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class MView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { str } = this.props;

    return (
      <View>
      <Text>
      {this.props.str}
      </Text>
      <TouchableHighlight
      onPress={ this.handleSetStr }
      >
      <View >
      <Text>
      btn_change
      </Text>
      </View>
      </TouchableHighlight>

      </View>
    );
  }


    handleSetStr=()=>{
      this.props.actions.actionSetStr('sdfasdfasdfasdfafsdfsd');
    }

}
