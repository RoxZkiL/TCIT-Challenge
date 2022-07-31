import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../actions";

const ChargeAllPost = () => {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(getPosts());
  }

  return (
    <div>
      <Link to="/">
        <button
          onClick={(e) => {
            handleClick(e);
          }}
        >
          All posts
        </button>
      </Link>
    </div>
  );
};

export default ChargeAllPost;
