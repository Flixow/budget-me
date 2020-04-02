module.exports = (req, res, next) => {
  res.header('Cache-Control', 'public, max-age=60, s-maxage=60');
  res.removeHeader('Pragma');
  next();
};
