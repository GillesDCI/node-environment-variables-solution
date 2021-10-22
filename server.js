//task 1
// process.env.SERVER_NAME = 'Papagei 5000'
// process.env.SERVER_CPU = 'Archimedes '
// process.env.SERVER_URL = 'http://localhost:5000/'
// process.env.SERVER_LOG = 'LOG.txt'

//log the variables
// console.log(process.env.SERVER_NAME) 
// console.log(process.env.SERVER_CPU) 
// console.log(process.env.SERVER_URL) 
// console.log(process.env.SERVER_LOG) 

require('dotenv').config();

console.log(process.env.SERVER_NAME) 
console.log(process.env.SERVER_CPU) 
console.log(process.env.SERVER_URL) 
console.log(process.env.SERVER_LOG) 

const {SERVER_NAME, SERVER_CPU, SERVER_URL, SERVER_LOG} = process.env

console.log(`"Hallo! Ich bin ${SERVER_NAME}! Ich habe ein ${SERVER_CPU}, und mein URL ist ${SERVER_URL}. Ich schreibe alles was passiert zu ${SERVER_LOG}"`)



