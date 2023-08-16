const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  // Get the token from the request headers

  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).json({ message: "Token is missing" });
  }

  const token = authorizationHeader.split(" ")[1];

  try {
    // Verify the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    // Attach the decoded token to the request for later use if needed
    req.user = decodedToken;

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    return res.status(403).json({ message: "Token is invalid" });
  }
};

module.exports = verifyToken;
