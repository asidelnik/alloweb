// Get dependencies
const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const parentApi = require('./server/routes/parentApi');
const childApi = require('./server/routes/childApi');
const wishListApi = require('./server/routes/wishListApi');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist/alloweb')));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/parent', parentApi);
app.use('/child', childApi);
app.use('/add-user', parentApi);
app.use('/add-task', parentApi);
app.use('/wishList', wishListApi);


app.all('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'alloweb/dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
