const { version } = require('../../package.json');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Challenge',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/kushal812/challenge.git',
    },
  },
  servers: [
    {
      url: `https://tranquil-crag-18721.herokuapp.com/v1`,
    },
  ],
};

module.exports = swaggerDef;
