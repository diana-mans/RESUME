import { combineReducers } from 'redux';
import { postReducer } from '../slices/postSlice';
import { searchReducer } from '../slices/searchSlice';
import { userReducer } from '../slices/userSlice';

const rootReducer = combineReducers({
  posts: postReducer,
  search: searchReducer,
  user: userReducer,
});

export default rootReducer;
