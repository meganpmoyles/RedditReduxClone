export const category = (state=[], action) => {
  switch(action.type) {
    case 'FETCH_CATEGORIES':
        state["categories"] = action.result.map(category => category.name);
        return nextState;
      default:
        return state;
  }
};

export const getCategories = (state) => {
  return state["categories"];
}

export default categoryReducer
