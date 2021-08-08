const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const challengeSchema = mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    counts: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
    },
  },
  {}
);

// add plugin that converts mongoose to json
challengeSchema.plugin(toJSON);

challengeSchema.pre('save', async (next) => {
  next();
});

/**
 * @typedef records
 */
const Challenge = mongoose.model('records', challengeSchema);

module.exports = Challenge;
