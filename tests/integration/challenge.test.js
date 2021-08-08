const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');

setupTestDB();

describe('Challenge routes', () => {
  describe('POST /v1/challenge', () => {
    let query;
    beforeEach(() => {
      query = {
        startDate: '2016-01-26',
        endDate: '2018-02-02',
        minCount: 1,
        maxCount: 10,
      };
    });
    test('should return 200 and apply the default query options', async () => {
      const res = await request(app).post('/v1/challenge').send(query).expect(httpStatus.OK);
      expect(res.body).toMatchSnapshot();
    });

    test('should return 400 error if startDate is invalid', async () => {
      query.startDate = 'invalid';
      await request(app).post('/v1/challenge').send(query).expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if endDate is invalid', async () => {
      query.endDate = 'invalid';
      await request(app).post('/v1/challenge').send(query).expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if minCount is invalid', async () => {
      query.minCount = 'invalid';
      await request(app).post('/v1/challenge').send(query).expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if maxCount is invalid', async () => {
      query.maxCount = 'invalid';
      await request(app).post('/v1/challenge').send(query).expect(httpStatus.BAD_REQUEST);
    });
  });
});
