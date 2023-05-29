const defaultState = {
  searchValue: '',
  sort: '',
  currentPage: 1,
  pageCount: 10,
};

export const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_VALUE':
      return { ...state, searchValue: action.payload };
    case 'SET_SORT':
      return { ...state, sort: action.payload };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    case 'SET_PAGE_COUNT':
      return { ...state, pageCount: action.payload };
    default:
      return state;
  }
};
