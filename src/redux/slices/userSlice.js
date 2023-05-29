const defaultState = {
  userInfo: {},
  userPosts: [],
  id: '',
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, userInfo: action.payload };
    case 'SET_USER_POSTS':
      return { ...state, userPosts: action.payload };
    case 'SET_USER_ID':
      return { ...state, id: action.payload };
    default:
      return state;
  }
};
