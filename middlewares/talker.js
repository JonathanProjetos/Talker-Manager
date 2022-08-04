const fs = require('fs').promises;

const PATH = './talker.json';

const verifyArryaUsers = async (_req, res, next) => {
  const list = await fs.readFile(PATH, 'utf-8');
  const talkerList = JSON.parse(list);
  if (talkerList.length > 0) return res.status(200).json(talkerList);
  if (talkerList.length <= 0) return res.status(200).json([]);
  next();
};

module.exports = {
  verifyArryaUsers,
};