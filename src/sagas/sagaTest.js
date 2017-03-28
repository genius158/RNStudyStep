import * as types from '../actions/types';

const initialState = {
  str:'strDefault',
  data:"null",
};
export default function setStr(state = initialState, action){
  switch(action.type) {
    case types.ACTION_CHANGE_STR:
    let st = Object.assign({}, state, {
      str:action.str,
    });
    return st;

    case types.DATA_FROM_BAIDU:
    return Object.assign({}, state, {
      data:action.data,
    });

    default:
    return state;
  }
}
