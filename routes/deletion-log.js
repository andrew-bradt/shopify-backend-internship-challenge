const express = require('express');
const router = express.Router();
const {getComments} = require('../helpers/queries');
const commentParser = require('../helpers/comment-parser');

router.get('/', async(req, res) => {
  const unparsedComments = await getComments();
  const comments = commentParser(unparsedComments);
  const templateVars = { comments };
  res.render('deletion-log', templateVars);
});

module.exports = router;