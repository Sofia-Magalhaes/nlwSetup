import Fastify from 'fastify';

const app = Fastify()

app.get('/', () => {
    return 'teste'
})

app.listen({
    port:3333,
})