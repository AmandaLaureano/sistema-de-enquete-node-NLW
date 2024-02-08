import fastify from 'fastify'
import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'
import fastifyCookie from '@fastify/cookie'

const app = fastify()

app.register(fastifyCookie, {
    secret: "polls-app-nlw",
    hook: 'onRequest',
    parseOptions: {}
})

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.listen({ port: 3333 }).then(() => {
    console.log("HTTP server running!")
})

