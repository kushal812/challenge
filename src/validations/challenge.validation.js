const Joi = require('joi').extend(require('@joi/date'));

const dateFormat = 'YYYY-MM-DD';

const getChallenge = {
  body: Joi.object().keys({
    startDate: Joi.date().required().format([dateFormat]).max(Joi.ref('endDate')),
    endDate: Joi.date().required().format([dateFormat]),
    minCount: Joi.number().required().integer().max(Joi.ref('maxCount')),
    maxCount: Joi.number().required().integer(),
  }),
};

module.exports = {
  getChallenge,
};
