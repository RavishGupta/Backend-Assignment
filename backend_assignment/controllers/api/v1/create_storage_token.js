const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
  
const app = express();
  
// Set up Global configuration access
dotenv.config();


app.post("/user/create_new_storage", (req, res) => {
    // Validate User Here
    // Then generate JWT Token
  
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        status: "ok",
        message: "Storage Created Successfully"  
    }
  
    const token = jwt.sign(data, jwtSecretKey);
  
    res.send(token);
});
  

app.get("/user/validateToken", (req, res) => {
  
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
  
    try {
        const token = req.header(tokenHeaderKey);
  
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified){
            return res.send("Successfully Verified");
        }else{
            // Access Denied
            return res.status(401).send(error);
        }
    } catch (error) {
        // Access Denied
        return res.status(401).send(error);
    }
});