const Telegraf = require('telegraf')

const app = new Telegraf("261228327:AAHtHPhCOPfRu6dYhPIQIjGdOSax9zHAlzw")

app.command('start', (ctx) => {
  console.log('start', ctx.from)
  ctx.reply('Welcome!')
})

app.hears('Hi', (ctx) => ctx.reply('Hey there!,  how may I help you?'))

app.on('sticker', (ctx) => ctx.reply('👍'))

app.startPolling()