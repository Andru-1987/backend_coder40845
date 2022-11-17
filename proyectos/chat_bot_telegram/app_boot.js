const {Telegraf} = require('telegraf') ;
require('dotenv').config()

const andru_vbot = new Telegraf(process.env.ACCESS_TOKEN)



andru_vbot.command('start', ctx => {
    console.log(ctx.from);
    andru_vbot.telegram.sendMessage(ctx.chat.id, 'usando chat telegram',{} )
})


andru_vbot.hears('hola', ctx => {
    console.log(ctx.from);

    let message = 'Hola como estas?'

    ctx.deleteMessage();

    andru_vbot.telegram.sendMessage(ctx.chat.id , message,{

        reply_markup:{
            inline_keyboard:[
                [{text:'dog',callback_data:'dog'},{text:'cat',callback_data:'cat'}]
            ]
        }
    })

})

andru_vbot.launch()