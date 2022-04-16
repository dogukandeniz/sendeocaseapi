const express = require('express');
const router = express.Router();

const postController = require("../controllers/post");

//Get a list of all post
router.get('/', postController.getAllPosts);

//Get a post by term expression
router.get('/:term', postController.findPostByTerm);


module.exports = router;