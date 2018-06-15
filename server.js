const express = require('express');
const app = express();
app.get('/forms', (req, res) => {
	res.redirect(`http://localhost:3003/100/bundle.js`);
});
app.get('/forms/:id', (req, res) => {
	console.log(req.params.id);
	res.redirect(`http://localhost:3003/forms/${req.params.id}`)
});
app.use('/:id', express.static('public'));
app.listen(3000);
console.log('http://localhost:3000');