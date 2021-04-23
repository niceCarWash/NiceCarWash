module.exports = (req, res, next) => {
  res.header('Content-Range', 'plans 0-5/6');
  next();
};
