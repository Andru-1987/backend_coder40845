/*
Express avanzado.
Routers

CRUD >> CREATE RETRIEVE UPDATE DELETE
*/

require('dotenv').config();
const app = require('./modulos/msg');
const userRouter = require('./modulos/user')


const PORT = process.env.EXPRESS_PORT || 8080;
const HOST = process.env.EXPRESS_HOST || 'localhost';


// ejemplo simple de una peticion del tipo get


app.set('json spaces',40)

const responseCb = ()=> console.log(`Serving at : ${HOST}:${PORT}`);

app.use('/api',userRouter);

app.listen(PORT,HOST,responseCb)

