const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const { authenticToken } = require('./middlewares/authenticToken');
const { verifyArryaUsers } = require('./middlewares/talker');
const { keyRandomToken } = require('./middlewares/tokenGenerator');
const { validateEmail, validatePassword } = require('./middlewares/verifyEmailPassword');
// const talker = require('./talker.json');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const PATH = './talker.json';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', verifyArryaUsers, async (_req, _res) => {

});

app.post('/login', validateEmail, validatePassword, (req, res, _next) => {
  // const { name, password } = req.body;
  const token = keyRandomToken();
  return res.status(200).json({ token });
});

app.post('/talker', authenticToken, async (req, res) => {
  const { name, age, talk: { watchedAt, rate } } = req.body;
  const list = JSON.parse(await fs.readFile(PATH, 'utf-8'));
  const id = list.length + 1;
  const newMember = { name, age, id, talk: { watchedAt, rate } };
  list.push(newMember);
  await fs.writeFile(PATH, JSON.stringify(list));
  res.status(201).json(newMember);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const list = await fs.readFile(PATH, 'utf-8');
  const talkerList = JSON.parse(list);
  const result = talkerList.find((d) => d.id === Number(id));
  if (!result) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  return res.status(200).json(result);
});

app.listen(PORT, () => {
  console.log('Online');
});
