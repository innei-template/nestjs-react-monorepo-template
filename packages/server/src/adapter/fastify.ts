import { FastifyAdapter } from '@nestjs/platform-fastify'

export const fastifyAdpter = new FastifyAdapter({
  logger: {
    prettyPrint: true,
  },
  trustProxy: true,
})
