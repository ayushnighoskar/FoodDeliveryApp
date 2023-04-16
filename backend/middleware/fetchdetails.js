var jwt = require('jsonwebtoken');
const jwtSecret = "HaHa"
const fetch = (req,res,next)=>{
    // get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Invalid Auth Token"})

    }
    try {
        const data = jwt.verify(token,jwtSecret);
        req.user = data.user
        next();
        
    } catch (error) {
        res.status(401).send({error:"Invalid Auth Token"})
    }

}
module.exports = fetch