import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPostByName } from "../redux/actions/index";
import Button from "react-bootstrap/Button";
import "../styles/SearchPost.css";

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
    <form>
      <div className="containerP">
        <input
          className="inputSize"
          value={name}
          type="text"
          placeholder="Filtro de Nombre"
          onChange={(e) => handleInputChange(e)}
          required
        />

        <Button
          variant="dark"
          id="button-addon2"
          type="submit"
          onClick={(e) => handleSubmit(e)}
          size="lg"
          required
        >
          Buscar
        </Button>
      </div>
    </form>
  );
};

export default SearchPost;
