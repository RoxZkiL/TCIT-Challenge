import axios from "axios";

export const getPosts = () => {
  return async function (dispatch) {
    try {
      const posts = await axios.get("http://localhost:3001/posts");
      return dispatch({
        type: "GET_POST",
        payload: posts.data,
      });
    } catch (error) {
      console.log(error.response.data);
      alert(error.response.data.message);
    }
  };
};

export const createPost = (payload) => {
  return async function () {
    try {
      const createPost = await axios.post(
        "http://localhost:3001/posts",
        payload
      );
      return createPost;
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };
};

export function deletePost(id) {
  return async function (dispatch) {
    try {
      const deletePost = await axios.delete(
        `http://localhost:3001/posts/${id}`
      );
      return dispatch({
        type: "DELETE_POST",
        payload: deletePost,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getPostByName(payload) {
  return async function (dispatch) {
    try {
      let postName = await axios.get(
        `http://localhost:3001/post?name=${payload}`
      );
      return dispatch({
        type: "GET_POST_NAME",
        payload: postName.data,
      });
    } catch (error) {
      console.log(error);
      alert("Post not found");
    }
  };
}
