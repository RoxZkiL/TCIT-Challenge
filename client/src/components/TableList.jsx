import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPosts } from "../redux/actions/index";
import ChargeAllPost from "./ChargeAllPost";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../styles/TableList.css";
import Alert from "react-bootstrap/Alert";

const TableList = () => {
  const dispatch = useDispatch();

  const allPosts = useSelector((state) => state.posts);
  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deletePost(id));
    window.location.reload(false);
  };

  if (allPosts.length >= post.length) {
    return (
      <div className="containerX">
        {!allPosts.length && (
          <Alert variant="dark">Todavía no hay posts para mostrar</Alert>
        )}
        <Table striped bordered hover variant="dark" responsive="xl">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {allPosts?.map((post) => (
              <tr key={post.id}>
                <td>{post.name}</td>
                <td>{post.description}</td>
                <td className="button">
                  <Button variant="dark" onClick={() => handleDelete(post.id)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  } else {
    return (
      <div>
        <Table striped bordered hover variant="dark" responsive="xl">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {allPosts?.map((post) => (
              <tr key={post.id}>
                <td>{post.name}</td>
                <td>{post.description}</td>
                <td className="button">
                  <Button variant="dark" onClick={() => handleDelete(post.id)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ChargeAllPost />
      </div>
    );
  }
};

export default TableList;
