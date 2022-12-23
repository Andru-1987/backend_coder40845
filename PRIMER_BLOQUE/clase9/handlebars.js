const express = require('express')
const path = require('path')
const {Router} = express
const app = express()
const handlebars = require('express-handlebars')


const PORT = 3000
const HOST = 'localhost'

app.use(express.json())
app.use(express.urlencoded({extended:'utf-8'}))



// ROUTING

const templateRouter = Router()

templateRouter.use(express.json())
templateRouter.use(express.urlencoded({extended:'utf-8'}))

// USING ENGINE of HANDLEBARS


optionHbs={
    extname:'.hbs',
    defaultLayout:'index',
    layoutsDir: path.join(__dirname ,'/viewsHandle/templates/layouts'),
    partialsDir: path.join(__dirname, '/viewsHandle/templates/partials')
}



app.engine('.hbs', handlebars.engine(optionHbs))
app.set('views', './clase9/viewsHandle')
app.set('view engine','hbs')



// app.get('/',(req,res)=>{
//     console.log(optionHbs);
//     res.render('main')
// })



templateRouter.get('/',(req,res)=>{
    res.render('main')
})


app.use('/',express.static(path.join(__dirname,'public')))
app.use('/template',templateRouter)

app.listen(PORT,HOST,()=>{
    console.log(`SERVING AT 🚀 http://${HOST}:${PORT}`);
})