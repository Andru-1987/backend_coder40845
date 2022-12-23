const multer = require('multer');


const storage = multer.diskStorage(
    {
        destination : (req,file,cb)=>{
            cb(null,'./clase8/uploads')
        },
        filename:(req,file,cb)=>{
            console.log(file);
            cb(null, `${Date.now()}-${file.originalname}`)
        }
    }
)

const upload = multer({storage})

exports.upload = upload.single('myFile');

exports.uploadFile = (req,res)=>{
    res.send({data: 'enviar un archivo'})
};