module.exports = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Cars API Docs',
      description: 'API Documentations for Binar Car',
      version: '1.0.0',
    },
    externalDocs: {
      description: 'OpenAPI Specification',
      url: 'https://swagger.io/specification/',
    },
  },
  apis: ['./swagger/**/*.yaml'],
};
