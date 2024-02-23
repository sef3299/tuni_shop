const{body,validationResult}=require("express-validator")
exports.registervalidation = [
    body("email","this email is not a valid format").isEmail(),
    body("password","this password should incloude symbols,numbers,minimum length 8 caracter").isStrongPassword({
        minLength: 8,
       minUppercase:1,
       minSymbols:1,
       minNumbers:2
    })
]
exports.loginvalidation=[
    body("email","this email is not a valid format").isEmail()

]
exports.validation = (req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        res.status(400).send({errors:errors.array()})
    }
    else{
        next()
    }
}