import React from "react";
import TableList from "./TableList";
import SearchPost from "./SearchPost";
import PostForm from "./PostForm";

const Home = () => {
  return (
    <div>
      <SearchPost />
      <TableList />
      <PostForm />
    </div>
  );
};

export default Home;
