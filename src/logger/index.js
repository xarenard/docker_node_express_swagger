'use strict';

import fs from 'fs';
import {createLogger, format, transports} from 'winston';

const {combine, printf} = format;

const morganFormat = printf(info => {
	return info.message;
});

const logDir = `${__dirname}/logs`;
if (!fs.existsSync(logDir)) {
	fs.mkdirSync(logDir);
}

const transportsOutput = [];

transportsOutput.push(
	new transports.File({
		level: 'info',
		filename: `${logDir}/access.log`,
		handleExceptions: true,
		json: false,
		maxsize: 5242880, //5MB
		maxFiles: 5,
		colorize: false
	})
);

transportsOutput.push(
	new transports.Console({
		colorize: true,
		level: 'info',
		json: false
	})
);


const logger = createLogger({
	silent: process.env.NODE_ENV === 'test',
	format: combine(
		format.simple(),
		morganFormat
	),
	transports: transportsOutput,

});

const stream = {
	// eslint-disable-next-line no-unused-vars
	write: function (message, encoding) {
		logger.info(message.slice(0, -1));
	}
};

module.exports = {logger, stream};