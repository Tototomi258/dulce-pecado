const express = require ('express');
const app = express();
const fs = require('fs');
const path = require('path');

const PORT = 8080;
app.use(express.static('public'));

app.get('/Public/', function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('Public/index.html', null, (error, data) => {
  	if (error) {
  		res.writeHead(404);
  		res.write('File not found');
  	} else {
  		res.write(data);
  	}
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});