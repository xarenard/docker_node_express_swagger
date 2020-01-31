'use strict';

import supertest from 'supertest';
import {app} from '../src/index';

const request = supertest(app);

describe('Routes: /nowhere',() => {

	describe("GET /foobar:",() => {
		it("404 status code", (done) => {
			request.get('/foobar').expect(404,(error, response) => {
				done();
			});
		});
	});
});

