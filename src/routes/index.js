'use strict';

import express from 'express';
const router = express.Router();

/**
 * @swagger
 * /api/echo/v1:
 *   get:
 *     description: Returns Request Http Headers as Json
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Request Http Headers as Json
 */
router.get('/echo/v1', (request, response) => {
	response.status(200);
	response.json(request.headers);
	response.end();
});


/**
 * @swagger
 * /api/healthcheck:
 *   get:
 *     description: Healthcheck endpoint
 *     produces:
 *       - application/json
 *     responses:
 *       204:
 *         description: Server is up
 */

router.get('/healthcheck', (request, response) => {
	response.status(204).send();
});

module.exports = {router};