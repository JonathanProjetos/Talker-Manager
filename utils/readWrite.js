const fs = require('fs').promises;

const readFile = async (PATH1) => {
  const data = await fs.readFile(PATH1, 'utf-8');
  return data;
};

const whiteFile = async (PATH2, filename) => {
  const data = await fs.whiteFile(PATH2, JSON.stringify(filename));
  return data;
};

module.exports = {
  readFile,
  whiteFile,
};