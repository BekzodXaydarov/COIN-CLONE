const jwt = require("jsonwebtoken");
const verifyToken = (key) => (req, res, next) => {
  const token = req.headers["token"];

  if (!token) {
    return res.status(403).json({ message: "No token provided!" });
  }

  jwt.verify(token, key, (err) => {
    if (err) {
      return res.status(401).json({ message: "Failed to authenticate token!" });
    }
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
