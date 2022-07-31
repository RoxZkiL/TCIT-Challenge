const initialState = {
  posts: [],
  post: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POST":
      return {
        ...state,
        posts: action.payload,
        post: action.payload,
      };
    case "GET_POST_NAME":
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
