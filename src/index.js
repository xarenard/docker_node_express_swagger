'use strict';

import express from 'express';
import {logger, stream} from './logger';
import morgan from 'morgan';
import {apirouter} from './routes/api';
import {swagger} from './routes/swagger';

const PORT = process.env.PORT || 8084;

const app = express();

app.use(morgan('combined', {stream: stream}));

app.use('/api/', apirouter);
app.use('/api-docs/', swagger);

app.use((req, res) => {
	res.status(404).end();
});

app.listen(PORT, () => {
	logger.info( `Server started on port: ${PORT}`);
});


module.exports = {app};