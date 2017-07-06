require('dotenv').config();
const server = require('./server/app.js');

const port = process.env.PORT || 8080;

server.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
