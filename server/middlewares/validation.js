const { body } = require('express-validator');
const validateRegistrationBody = ()=>{
    return [
        body('name').exists().withMessage('Name field is required').isLength({min:3}).withMessage('Name must be greater than 3 letters'),
        body('email').exists().withMessage('Email field is required').isEmail().withMessage('Email is invalid'),
        body('password').exists().withMessage('Password field is requird').isLength({min: 6, max:12}).withMessage('Password must be in between 6 to 12 characters long')
    ]
}


const validateLoginBody = () =>{
    return [
        body('email').exists().withMessage('Email field is required').isEmail().withMessage('Email is invalid'),
        body('password').exists().withMessage('password field is required').isLength({min: 6, max:12}).withMessage('password must be in between 6 to 12 characters long')
    ]
}

module.exports = {
    validateRegistrationBody: validateRegistrationBody,
    validateLoginBody: validateLoginBody
}