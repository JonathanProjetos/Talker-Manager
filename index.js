const express = require('express');
const bodyParser = require('body-parser');
const { 
  verifyRegistryUserName,
  verifyRegistryUserAge,
  verifyRegistryUserTalk,
  verifyRegistryUserRate } = require('./middlewares/verifyRegistry');
const { authenticToken } = require('./middlewares/authenticToken');
const { verifyArryaUsers } = require('./middlewares/talker');
const { keyRandomToken } = require('./middlewares/tokenGenerator');
const { validateEmail, validatePassword } = require('./middlewares/verifyEmailPassword');
const { readFile, writeFile } = require('./utils/readWrite');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', verifyArryaUsers, async (_req, _res) => {

});

app.post('/login', validateEmail, validatePassword, (_req, res) => {
  const token = keyRandomToken();
  return res.status(200).json({ token });
});

app.post('/talker', 
  authenticToken, 
  verifyRegistryUserName, 
  verifyRegistryUserAge,
  verifyRegistryUserTalk,
  verifyRegistryUserRate, async (req, res) => {
  const { name, age, talk: { watchedAt, rate } } = req.body;
  const list = await readFile();
  const id = list.length + 1;
  const newMember = { name, age, id, talk: { watchedAt, rate } };
  list.push(newMember);
  await writeFile(list);
  res.status(201).json(newMember);
});

app.get('/talker/search', authenticToken, async (req, res) => {
  const { q } = req.query;
  const talkerList = await readFile();
  const searchName = talkerList.filter((f) => f.name.includes(q));
  return res.status(200).json(searchName);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkerList = await readFile();
  const result = talkerList.find((d) => d.id === Number(id));
  if (!result) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  return res.status(200).json(result);
});

app.put('/talker/:id',
authenticToken, 
verifyRegistryUserName, 
verifyRegistryUserAge,
verifyRegistryUserTalk,
verifyRegistryUserRate, async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const talkerList = await readFile();
  const result = talkerList.findIndex((d) => d.id === Number(id));
  talkerList[result] = { ...talkerList[result], name, age, talk };
  await writeFile(talkerList);
  return res.status(200).json(talkerList[result]);
});

app.delete('/talker/:id', authenticToken, async (req, res) => {
  const { id } = req.params;
  const talkerList = await readFile();
  const filterId = talkerList.filter((f) => f.id !== Number(id));
  await writeFile(filterId);
  return res.status(204).end();
});

app.listen(PORT, () => {
  console.log('Online');
});
