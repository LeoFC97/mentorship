const Joi = require('joi'); 
const { userSchema } = require('./user-schema');


const objectToValidateWithWrongBirthyear = { // objeto com problema, o campo birthyear não está no range definido no schema
  name: 'Maria', 
  birthyear: 1971 
} 
const objectMissingParams = { // objeto com problema, o campo birthyear não está no range definido no schema
    name: 'Apito', 
} 
const objectWithCorrectParams = { // objeto com problema, o campo birthyear não está no range definido no schema
    name: 'Leo', 
    birthyear: 2004 
} 

const resultObject1 = userSchema.validate(objectToValidateWithWrongBirthyear);
const resultObject2 = userSchema.validate(objectMissingParams);
const resultObject3 = userSchema.validate(objectWithCorrectParams);

console.log('Resultado do objeto 1: ', resultObject1.error); // { birthyear: 'birthyear must be between 1980 and 2022' }
console.log('Resultado do objeto 2: ', resultObject2.error); // { birthyear: 'birthyear is required' }
console.log('Resultado do objeto 3: ', resultObject3.error); //undefined pq não teve nenhum erro
