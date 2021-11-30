const jwt = require('jsonwebtoken');
const supersecret = process.env.SUPER_SECRET;
require("dotenv").config();

function userShouldBeLoggedIn(req,res, next) {
    console.log("this is the header", req.headers);
    const token = req.headers["authorization"]?.replace(/^Bearer\s/, "");
    console.log("this is the secret shhh", token, supersecret);
    if(!token) {
       res.status(401).send({ message: "Please provide a token" });
    }else {



    //verify the token
    jwt.verify(token, supersecret, function (err, decoded)  {
        if (err)  res.status(401).send({ message: err.message});
  else{
    
        req.user_id = decoded.user_id;
        console.log(req.user_id);
        next();
    }
});
    // res.send({message: "everything is fine"});
}
}
module.exports = userShouldBeLoggedIn;