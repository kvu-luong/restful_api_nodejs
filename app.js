const express = require('express');

const app = express();

//Middlewares
app.use('/posts', () =>{
	console.log('The middlewre running');
})


// ROUTES
app.get('/', (req, res) => {
	res.send('We are on home');
})

//Listening to the sever
app.listen(3000);