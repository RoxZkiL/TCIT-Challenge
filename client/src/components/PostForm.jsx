import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../actions";

const PostForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    description: "",
  });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(input));
    setInput({
      name: "",
      description: "",
    });
    window.location.reload(false);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={input.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Descripción"
        value={input.description}
        onChange={handleInputChange}
      />
      <button type="submit">Crear</button>
    </form>
  );
};

export default PostForm;
