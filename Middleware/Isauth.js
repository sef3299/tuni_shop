// Isauth.js
const jwt = require('jsonwebtoken');
const users = require('../model/model');

exports.isauth = async (req, res, next) => {
    const token = req.header('token');
    try {
        
        
        const secretKey = "azerty";
        const decoded = jwt.verify(token, secretKey);
        if (!decoded) {
         res.status(401).json({ msg: 'Unauthorized' });
        }
        const user = await users.findById(decoded.id);
        if (!user) {
         res.status(401).json({ msg: 'Unauthorized' });
        }else{
            req.user = user;
            next();
        }
       
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
};



