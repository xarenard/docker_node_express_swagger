'use strict';

import express from 'express';
import {logger} from 'winston'
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
const app = express();

const swagger = express.Router();
const PORT=process.env.PORT || 8084;
const options = {
	swaggerDefinition: {
		info: {
			title: 'REST - Swagger',
			version: '1.0.0',
			description: 'REST API with Swagger doc',
			contact: {
				email: 'xafoxy@yeps.co.uk'
			}
		},
		tags: [
			{
				name: 'echo',
				description: 'Echo Http Request Headers'
			}
		],
		schemes: ['http'],
		host: `localhost:${PORT}`,
		basePath: '/'
	},
	apis: [`${__dirname}/../api/index.js`]
};

const swaggerSpec = swaggerJSDoc(options);

swagger.get('/json', (request, response) => {
	console.log(__dirname)
	response.setHeader('Content-Type', 'application/json');

	response.send(swaggerSpec);
});

swagger.use('/',
	swaggerUi.serve,
	swaggerUi.setup(swaggerSpec));

export {swagger};