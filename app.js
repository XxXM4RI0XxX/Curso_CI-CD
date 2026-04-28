const express = require('express');
const app = express();

app.get('/', (req,res) =>{
	res.send('Esta es una respuesta sencilla')
})

app.get('/suma', (req,res) => {
	const {a,b} = req.query;
	const resultado = Number(a) + Number(b);
	res.json({resultado})
});

module.exports = app;
