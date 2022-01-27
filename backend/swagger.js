import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

export const basePath = '/api/v1'

const options = {
  definition: {
    // openapi: '3.0.0',
    // https://github.com/scottie1984/swagger-ui-express/issues/189
    swagger: '2.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
    basePath
  },
  // https://blog.csdn.net/bbsyi/article/details/85046863
  apis: ['./backend/router/**/!(index)*.js'],
}

const swaggerSpec = swaggerJsdoc(options)
export default app => app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
