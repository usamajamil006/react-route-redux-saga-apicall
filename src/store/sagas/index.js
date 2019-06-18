import { take , put , call } from 'redux-saga/effects';

function* workerSage(){
  console.log('Hey from worker')
  console.log(put({type:'ACTION_FROM_WORKER'}))
  yield put({type: 'ACTION_FROM_WORKER'})
}
function* logoutSaga(){
  console.log('logout from  app')
}

function* rootSaga() {
  yield take('LOGIN')
  yield call(workerSage)
  // yield take('ADD_TO_CART')
  // yield take('BUY')
  yield take('LOGOUT')
  yield call(logoutSaga)
}

export default rootSaga;

// watcher saga  -> action => worker saga
 