const crypto = require('crypto');
const keyRandomToken = (req, _res, next) => {
  const token = crypto.randomBytes(8).toString('hex');
  return token;
}

module.exports = {
  keyRandomToken,
};