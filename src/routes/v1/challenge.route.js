const express = require('express');
const validate = require('../../middlewares/validate');
const challengeValidation = require('../../validations/challenge.validation');
const challengeController = require('../../controllers/challenge.controller');

const router = express.Router();

router.post('/challenge', validate(challengeValidation.getChallenge), challengeController.challenge);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: challenge
 *   description: get records
 */

/**
 * @swagger
 * /challenge:
 *   post:
 *     summary: To fetch records
 *     tags: [Challenge]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - startDate
 *               - endDate
 *               - minCount
 *               - maxCount
 *             properties:
 *               startDate:
 *                 type: Date
 *                 format: YYYY-MM-DD
 *                 description: should be less than equal to endtDate
 *               endDate:
 *                 type: Date
 *                 format: YYYY-MM-DD
 *                 description: should be greater than equal to startDate
 *               minCount:
 *                 type: number
 *                 format: Integer
 *                 description: minCount should be less than equal to maxCount
 *               maxCount:
 *                 type: number
 *                 format: Integer
 *                 description: maxCount should be greater than equal to maxCount
 *             example:
 *               startDate: 2016-05-04
 *               endDate: 2016-06-04
 *               minCount: 1
 *               maxCount: 10
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 challenge:
 *                   $ref: '#/components/schemas/Challenge'
 *       "400":
 *         $ref: '#/components/responses/StartDateInvalid'
 */
