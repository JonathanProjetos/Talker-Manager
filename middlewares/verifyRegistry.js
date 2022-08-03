const verifyRegistryUserName = (req, res, next) => {
  const { name } = req.body;  
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  if (name.length === 0) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  next();
};

const verifyRegistryUserAge = (req, res, next) => {
  const { age } = req.body;
  if (!age || age === 0) return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  if (age < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

const verifyRegistryUserTalk = (req, res, next) => {
  const { talk } = req.body;
  const { talk: { watchedAt, rate } } = req.body;
  const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (!talk) return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  if (!dateRegex.test(watchedAt)) return 
  if (!watchedAt) return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  if ()
};

module.exports = {
  verifyRegistryUserName,
  verifyRegistryUserAge,
  verifyRegistryUserTalk,
};