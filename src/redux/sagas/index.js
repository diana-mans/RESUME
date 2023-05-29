import { call, fork, put, select, take, takeLatest } from 'redux-saga/effects';
import { getLength, getPosts, getUser, getUserPosts } from '../../api';

const delay = (sek) =>
  new Promise((res, rej) => {
    setTimeout(res, sek * 1000);
  });

export function* loadPosts() {
  const { currentPage, sort, searchValue } = yield select((state) => state.search);
  yield delay(2);
  const items = yield call(getPosts, currentPage, searchValue, sort);
  yield put({ type: 'SET_ITEMS', payload: items });
}

export function* loadLength() {
  const searchValue = yield select((state) => state.search.searchValue);
  const lengthArray = yield call(getLength, searchValue);
  const length = Math.ceil(lengthArray / 10);
  yield put({ type: 'SET_PAGE_COUNT', payload: length });
}

export function* workerPostsSaga() {
  yield put({ type: 'SET_LOADING_POSTS', payload: true });
  yield fork(loadLength);
  yield loadPosts();
  yield put({ type: 'SET_LOADING_POSTS', payload: false });
}

export function* workerUserSaga() {
  const id = yield select((state) => state.user.id);
  const user = yield call(getUser, id);
  const posts = yield call(getUserPosts, id);
  yield put({ type: 'SET_USER', payload: user });
  yield put({ type: 'SET_USER_POSTS', payload: posts });
}

export function* wathchValueSaga() {
  yield takeLatest(['SET_SEARCH_VALUE', 'SET_CURRENT_PAGE', 'SET_SORT'], workerPostsSaga);
}

export function* wathchUserSaga() {
  yield takeLatest('SET_USER_ID', workerUserSaga);
}

function* rootSaga() {
  yield fork(wathchUserSaga);
  yield fork(wathchValueSaga);
}

export default rootSaga;
