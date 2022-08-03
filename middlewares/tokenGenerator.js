const crypto = require('crypto');

const keyRandomToken = (_req, _res, _next) => {
  const token = crypto.randomBytes(8).toString('hex');
  return token;
};

module.exports = {
  keyRandomToken,
};