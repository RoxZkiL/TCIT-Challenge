import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPosts } from "../actions/index";
import ChargeAllPost from "./ChargeAllPost";
import "../styles/tableList.css";

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
      <div className="app-container">
        <table>
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
                  <button onClick={() => handleDelete(post.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="app-container">
        <table>
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
                  <button onClick={() => handleDelete(post.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ChargeAllPost />
      </div>
    );
  }
};

export default TableList;
