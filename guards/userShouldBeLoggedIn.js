const jwt = require('jsonwebtoken');
const supersecret = process.env.SUPER_SECRET;
require("dotenv").config();

function userShouldBeLoggedIn(req, res, next) {
    const token = req.headers["authorization"]?.replace(/^Bearer\s/, "");
    if (!token) {
        res.status(401).send({ message: "Please provide a token" });
    } else {

        //verify the token
        jwt.verify(token, supersecret, function (err, decoded) {
            if (err) res.status(401).send({ message: err.message });
            else {
                req.user_id = decoded.userId;
                next();
            }
        });
        // res.send({message: "everything is fine"});
    }
}
module.exports = userShouldBeLoggedIn;