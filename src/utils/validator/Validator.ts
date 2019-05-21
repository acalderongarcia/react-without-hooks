const Joi = require('@hapi/joi');

const schemaEmail = Joi.string().email({ minDomainSegments: 2 }).required();
const emailResult=schemaEmail.validate(document.getElementById('email') as HTMLInputElement).value; 

const schemaPass = Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/);
const passResult=schemaPass.validate(document.getElementById('password') as HTMLInputElement).value; 

export default {emailResult, passResult, schemaEmail, schemaPass};