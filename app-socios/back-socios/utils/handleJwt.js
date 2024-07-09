const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

const tokenSign = async (user, log) => {
    const sign = jwt.sign(
        {
            _id: user._id,
            log: log,
        },
        JWT_SECRET,
        {
            expiresIn: "2h",
        }
    );
    return sign;
};

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (e) {
        return null;
    }
};

module.exports = { tokenSign, verifyToken };
