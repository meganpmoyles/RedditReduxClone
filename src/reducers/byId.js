export const postsById = (state=[], action) => {
  switch(action.type) {
    case 'REMOVE_POSTS':
        let newState= Object.assign({}, state);
        delete newState[action.result.id];
        return newState;
    case 'ADD_POSTS':
        var newState = { ...state };
        newState[action.result.id] = action.result;
        return newState;
    case 'FETCH_POSTS_SUCCESS':
        const nextState = { ...state };
        // Determine if stuff needs to be removed from the state dictionary
        action.result.forEach(post => {
          nextState[post.id] = post;
        });
        return nextState;
    default:
        return state;
  }
};

export const getPostById = (state, id) => state[id];

