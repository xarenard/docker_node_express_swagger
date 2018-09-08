'use strict';

import express from 'express';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


const swagger = express.Router();

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
		host: 'localhost:8084',
		basePath: '/'
	},
	apis: [`${__dirname}/index.js`]
};

const swaggerSpec = swaggerJSDoc(options);

swagger.get('/json', (request, response) => {
	response.setHeader('Content-Type', 'application/json');
	response.send(swaggerSpec);
});

swagger.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = {swagger};