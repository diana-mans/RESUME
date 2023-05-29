const defaultState = {
  items: [],
  isLoading: true,
};

export const postReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return { ...state, items: action.payload };
    case 'SET_LOADING_POSTS':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
