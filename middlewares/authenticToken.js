const authenticToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || authorization.length !== 16) {
    return res.status(404).json({ message: 'token invalido' });
  }
  next();
};

module.exports = {
  authenticToken,
};