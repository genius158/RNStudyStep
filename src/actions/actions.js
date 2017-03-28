import * as types from './types';

export const actionSetStr = (str) => {
  // alert('action:'+str);
  return {
    type:types.ACTION_CHANGE_STR,
    str
  }
}

export let goForBaidu = () => {
  let URL = 'https://www.baidu.com/s?f=8&rsv_bp=1&rsv_idx=1&word=sdf&tn=99077181_hao_pg';
  return dispatch => {

    fetch(URL, {
      method: 'GET'
    })
    .then((response) => response.text())
    .then((responseText) => {
      dispatch(dateFromBaidu(responseText));
    })
    .catch((err) => {
      dispatch(dateFromBaidu(err));
    });

  }
}

let dateFromBaidu=(datas)=>{

  return {
    type: types.DATA_FROM_BAIDU,
    data: datas,
  }
}
