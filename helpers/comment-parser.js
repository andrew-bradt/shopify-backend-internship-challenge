const commentParser = (comments) => {
  const commentsArray = comments.split('\n');
  return commentsArray;
};

module.exports = commentParser;