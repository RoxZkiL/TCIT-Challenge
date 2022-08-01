import React from "react";
import TableList from "./TableList";
import SearchPost from "./SearchPost";
import PostForm from "./PostForm";

const Home = () => {
  return (
    <>
      <SearchPost />
      <TableList />
      <PostForm />
    </>
  );
};

export default Home;
