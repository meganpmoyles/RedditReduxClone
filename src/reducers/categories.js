export const categories = (state=[], action) => {
  switch(action.type) {
    case 'FETCH_CATEGORIES':
        return action.result.categories.map(category => category.name);
      default:
        return state;
  }
};

export const getCurrentCategories = (state) => {
  return state["categories"];
}

export default categories;
