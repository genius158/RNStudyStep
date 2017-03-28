import { fork } from 'redux-saga/effects';

import sageTest from './sagaTest';

export default function* rootSaga() {
  yield [
    fork(sageTest),
  ];
}
