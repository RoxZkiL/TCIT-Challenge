import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPostByName } from "../actions";

const SearchPost = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPostByName(name));
    setName("");
  };

  return (
    <div>
      <input
        value={name}
        type="text"
        placeholder="Buscar post"
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Buscar
      </button>
    </div>
  );
};

export default SearchPost;
