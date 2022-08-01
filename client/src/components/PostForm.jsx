import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/actions/index";
import "../styles/PostForm.css";
import Button from "react-bootstrap/Button";

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
      <div className="containerS">
        <input
          className="inputSize1"
          type="text"
          name="name"
          placeholder="Nombre"
          value={input.name}
          onChange={handleInputChange}
          required
        />
        <input
          className="inputSize2"
          type="text"
          name="description"
          placeholder="Descripción"
          value={input.description}
          onChange={handleInputChange}
          required
        />
        <Button type="submit" variant="dark" id="button-addon2" size="lg">
          Crear
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
