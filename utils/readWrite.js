const fs = require('fs/promises');

const readFile = async () => {
  const data = await fs.readFile('./talker.json', 'utf8');
  return JSON.parse(data);
};

const writeFile = async (filename) => {
  await fs.writeFile('./talker.json', JSON.stringify(filename));
};

module.exports = {
  readFile,
  writeFile,
};