'use strict';

import supertest from 'supertest';
import chai from 'chai';
import {app} from '../../../src';

const expect = chai.expect;
const request = supertest(app);

const X_API_ID = 'x-api-transaction-id';

describe('Routes: Index',() => {

	describe("GET /api/echo/v1:",() => {
		it("200 status code", done => {
			request.get('/api/echo/v1').expect(200,done);
		});

		it("200 status code and receive API transaction id header", done => {
			request
				.get('/api/echo/v1')
				.set(X_API_ID,'foobar')
				.expect(200)
				.end((err, response) => {
					if(err) {
						done(err);
					}
					expect(response.body).to.have.property(X_API_ID);
					expect(response.body).to.include.all.keys(X_API_ID);
					done();
				});
		});

	});

	describe("GET /api/healthcheck:",() => {
		it("200 status code", done => {
			request.get('/api/healthcheck').expect(204, done);

		});
	});
});

