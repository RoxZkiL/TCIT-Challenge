import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../redux/actions/index";
import Button from "react-bootstrap/Button";
import "../styles/ChargeAllPosts.css";

const ChargeAllPost = () => {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(getPosts());
  }

  return (
    <div className="containerZ">
      <Link to="/">
        <Button
          variant="dark"
          id="button-addon2"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Todos los posts
        </Button>
      </Link>
    </div>
  );
};

export default ChargeAllPost;
