const { Challenge } = require('../models');

/**
 * Query for Challenges
 * @param {Object} filter - Mongo filter
 * @returns {Promise<QueryResult>}
 */
const queryChallenges = async (filter) => {
  const Challenges = await Challenge.aggregate([
    {
      '$addFields': {
        'totalCount': {
          '$sum': '$counts'
        }
      }
    }, {
      '$match': {
        'createdAt': {
          '$gte': new Date(filter.startDate),
          '$lte': new Date(filter.endDate)
        },
        'totalCount': {
          '$gte': filter.minCount,
          '$lte': filter.maxCount
        }
      }
    }, {
      $project: {
        'createdAt': 1,
        'totalCount': 1,
        'key': 1,
        '_id': 0
      }
    }
  ])
  return Challenges;
};

module.exports = {
  queryChallenges,
};
