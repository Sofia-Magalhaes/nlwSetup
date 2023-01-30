import WebPush from "web-push"
import { FastifyInstance } from "fastify"
import { request } from "express"

const publicKey = 'BMfd4uDHAaiIkILjvNf9uNSFks2oecuupNtW904PwH-kaNIt7MA2z_co9FiMlautpIXjsRAS5aHL8rkPJVuwJP4'
const privateKey = 'RpSP2GIBPeJO4Z9Nm-WrE-TclczLplcjwaf2hWgjJYo'

WebPush.setVapidDetails(
    'https://localhost:3333',
    publicKey,
    privateKey,
)

export async function notificationsRoutes(app: FastifyInstance) {
    app.get('/push/public_key', () => {
        return {
            publicKey,
        }
    })

    app.post('/push/register', (request, reply) => {
        console.log(request.body)

        return reply.status(201).send()
    })

    app.post('/push/send', async (request, reply) => {
        console.log(request.body)

        return reply.status(201).send()

    })
}