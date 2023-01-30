import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from "./routes"
import { notificationsRoutes } from "./notifications-routes"


const app = Fastify()


app.register(cors, {
  origin: true,
})
app.register(appRoutes)
app.register(notificationsRoutes)

app.listen({
  port: 3333,
  host: '0.0.0.0'
}).then((url) => {
  console.log(`HTTP Server running on ${url}`)
})