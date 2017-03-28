import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../pages/main';
import * as actionsCreators from '../actions/actions';

class MainContainer extends React.Component {

  render() {
    return (
      <Main {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  const { maindata } = state;
  return {
    maindata
  };
};

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(actionsCreators, dispatch);
  return {
    actions
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
