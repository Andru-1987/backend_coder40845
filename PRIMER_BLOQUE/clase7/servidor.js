const express = require('express')
const app = require('./servidor/api_sumar')



const PORT = process.env.EXPRESS_PORT || 8080;
const HOST = process.env.EXPRESS_HOST || 'localhost';

app.set('json spaces',40)

const responseCb = 
()=> console.log(`Serving at : ${HOST}:${PORT}`);


app.listen(PORT,HOST,responseCb)


