const express = require('express');
const challengeRoute = require('./challenge.route');
const docsRoute = require('./docs.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/docs',
    route: docsRoute,
  },
  {
    path: '',
    route: challengeRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
