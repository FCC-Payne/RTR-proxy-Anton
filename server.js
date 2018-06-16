const express = require('express');
const app = express();
app.get('/forms', (req, res) => {
	console.log('3003');
	res.redirect(`http://localhost:3003/${req.params.id}/bundle.js`);
});
app.get('/:id/photo-viewer', (req, res) => {
	res.redirect(`http://localhost:3001/${req.params.id}/photo-viewer/bundle.js`);
});
app.get('/:id/photo-viewer/styles', (req, res) => {
  res.redirect(`http://localhost:3001/${req.params.id}/photo-viewer/styles.css`);
});
app.get('/:id/carousel/bundle', (req, res) => {
  console.log('3004 bundle');
  res.redirect(`http://localhost:3004/${req.params.id}/bundle.js`);
});
app.get('/:id/carousel/styles', (req, res) => {
  console.log('3004 style');
  res.redirect(`http://localhost:3004/${req.params.id}/styles.css`);
});
app.get('/:id/reviews/bundle', (req, res) => {
  res.redirect(`http://localhost:3002/${req.params.id}/bundle.js`);
});
app.get('/:id/reviews/styles', (req,res) => {
  res.redirect(`http://localhost:3002/${req.params.id}/stylesheet.css`);
});
app.use('/:id', express.static('public'));
app.listen(3000);
console.log('http://localhost:3000');