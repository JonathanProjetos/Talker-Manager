const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const { keyRandomToken } = require('./middlewares/tokenGenerator')
// const talker = require('./talker.json');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const PATH = './talker.json'

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_req, res) => {
 const list = await fs.readFile(PATH, 'utf-8')
 const talkerList = JSON.parse(list)
  if(talkerList.length > 0) return res.status(200).json(talkerList)
  return res.status(200).json([])
});

app.get('/talker/:id', async(req, res) => {
  const { id } = req.params;
  const list = await fs.readFile(PATH, 'utf-8');
  const talkerList = JSON.parse(list);
  const result = talkerList.find((d) => d.id === Number(id));
  if(!result) return res.status(404).json({ "message": "Pessoa palestrante não encontrada"});
  return res.status(200).json(result);
});

app.post('/login', (req, res, next) => {
  const { name, password } = req.body;
  const token = keyRandomToken();
  if(name, password) return res.status(200).json({token})
});

app.listen(PORT, () => {
  console.log('Online');
});
