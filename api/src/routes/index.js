const { Router } = require("express");
const router = Router();

const {
  getPosts,
  createPost,
  getPostByName,
  deletePost,
} = require("../controllers/index.controller");

router.get("/posts", getPosts);
router.post("/posts", createPost);
router.get("/post", getPostByName);
router.delete("/posts/:id", deletePost);

module.exports = router;
