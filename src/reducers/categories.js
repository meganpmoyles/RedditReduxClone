export const categoryReducer = (state=[], action) => {
  switch(action.type) {
    case 'FETCH_CATEGORIES':
        state["categories"] = action.result.map(category => category.name);
        return state;
      default:
        return state;
  }
};

