const { Router } = require("express");
const router = Router();

const {
  getPosts,
  createPost,
  getPostName,
  deletePost,
} = require("../controllers/index.controller");

router.get("/posts", getPosts);
router.post("/posts", createPost);
router.delete("/posts/:id", deletePost);
router.get("/post", getPostName);

module.exports = router;
