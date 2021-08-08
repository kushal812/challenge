const faker = require('faker');
const { Challenge } = require('../../../src/models');

describe('Challenge model', () => {
  describe('Challenge validation', () => {
    let record;
    beforeEach(() => {
      record = {
        key: faker.name.findName(),
        createdAt: "2016-05-04T05:15:21.742Z",
        counts: [1,2]
      };
    });

    test('should correctly validate a valid Challenge', async () => {
      await expect(new Challenge(record).validate()).resolves.toBeUndefined();
    });

    test('should throw a validation error if key is invalid', async () => {
      record.key = '';
      await expect(new Challenge(record).validate()).rejects.toThrow();
    });

    test('should throw a validation error if createdAt is empty', async () => {
      record.createdAt = '';
      await expect(new Challenge(record).validate()).rejects.toThrow();
    });

    test('should throw a validation error if createdAt is not a date', async () => {
      record.createdAt = 'test';
      await expect(new Challenge(record).validate()).rejects.toThrow();
    });
  });
});
