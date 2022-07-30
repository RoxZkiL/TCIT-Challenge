const { connection } = require("../../database/db");

const getPosts = async (req, res) => {
  try {
    const response = await connection.query("SELECT * FROM posts");
    if (response.rows.length) {
      res.status(200).json(response.rows);
    } else {
      res.status(400).json({ message: "There are no posts yet" });
    }
  } catch (error) {
    console.log(error);
  }
};

const createPost = async (req, res) => {
  try {
    const { name, description } = req.body;
    await connection.query(
      "INSERT INTO posts (name, description) VALUES ($1, $2)",
      [name.toLowerCase(), description.toLowerCase()]
    );
    if (name && description) {
      res.status(200).json({
        message: "Post created successfully",
        post: { name, description },
      });
    } else {
      res
        .status(400)
        .json({ message: "Parameters name and description are required" });
    }
  } catch (error) {
    console.log(error);
  }
};

const getPostByName = async (req, res) => {
  try {
    const { name } = req.query;
    const response = await connection.query(
      "SELECT * FROM posts WHERE name = $1",
      [name.toLowerCase()]
    );
    if (response.rows.length && name) {
      res.status(200).json(response.rows);
    } else {
      res
        .status(400)
        .json({ message: "The post you are looking for does not exists" });
    }
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await connection.query(
      "DELETE FROM posts where id = $1 RETURNING *",
      [parseInt(id)]
    );
    res.json({ message: "Post successfully deleted", post: response.rows });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPosts,
  createPost,
  getPostByName,
  deletePost,
};
