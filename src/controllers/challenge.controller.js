const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { challengeService } = require('../services');

const challenge = catchAsync(async (req, res) => {
  const records = await challengeService.queryChallenges(req.body, {});
  res.status(httpStatus.OK).send({ code: 0, msg: 'Success', records });
});

module.exports = {
  challenge,
};
