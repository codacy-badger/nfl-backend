
const options = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Fastify API',
      description: 'Building a national football league REST API with Node.js, MongoDB, Fastify and Swagger',
      version: '1.0.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
}

const initSwagger = async (fastify) => {
  await fastify.register(require('fastify-swagger'), options)
}

module.exports = initSwagger