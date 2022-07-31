import React from "react";
import TableList from "./TableList";
import SearchPost from "./SearchPost";
import PostForm from "./PostForm";
import "../styles/container.css";

const Home = () => {
  return (
    <div className="app-container">
      <SearchPost />
      <TableList />
      <PostForm />
    </div>
  );
};

export default Home;
