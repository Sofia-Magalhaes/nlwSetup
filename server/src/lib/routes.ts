import { FastifyInstance } from 'fastify'
import { prisma } from '.prisma/client'

export async function appRoutes(app: FastifyInstance){
    app.get('/hello', async () => {
        const habits = await prisma.habit.findMany()
    
        return habits
    })    

}
