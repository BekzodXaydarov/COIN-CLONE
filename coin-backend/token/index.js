const jwt = require("jsonwebtoken");
const verifyToken = (key) => (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer token

  if (!token) {
    return res.status(403).json({ message: "No token provided!" });
  }

  jwt.verify(token, key, (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Failed to authenticate token!" });
    }
    req.user = user;
    next();
  });
};
const generateToken = (key, data) => {
  const token = jwt.sign({ id: data.id, name: data.name }, key, {
    expiresIn: "24h",
  });
  return token
};

module.exports = { generateToken, verifyToken };
