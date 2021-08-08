const Joi = require('joi');

const getChallenge = {
  body: Joi.object().keys({
    startDate: Joi.string().required().isoDate(),
    endDate: Joi.string().required().isoDate(),
    minCount: Joi.number().required().integer(),
    maxCount: Joi.number().required().integer(),
  }),
};

module.exports = {
  getChallenge,
};
