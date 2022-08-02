const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if(!email) return res.status(400).json({ message: "O campo \"email\" é obrigatório" });
  if(!emailRegex.test(email)) return res.status(400).json({ message: "O campo \"email\" deve receber um email válido"});
  next();
}

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if(!password) return res.status(400).json({ message: "O campo \"password\" é obrigatório"});
  if(password.length < 6) return res.status(400).json({ message: "O campo \"password\" deve ter pelo menos 6 caracteres"})
  next();
} 

module.exports = {
  validateEmail,
  validatePassword
}