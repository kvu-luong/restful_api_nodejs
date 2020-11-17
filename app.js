const express = require('express');

const app = express();
const mongoose = require('mongoose');
require('dotenv/config');


//Import Routes
const postsRoute = require('./routes/posts.js');

app.use('/posts', postsRoute);
// ROUTES
app.get('/', (req, res) => {
	res.send('We are on home');
})


//connect to DB

mongoose.connect(
 process.env.DB_CONNECTION,
 { useNewUrlParser: true,  useUnifiedTopology: true},
 ()=>{
	console.log('connected to DB');
});
//Listening to the sever
app.listen(3000);