const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewwares
app.use(cors());//it not use it, we only fetech database from the same domain
app.use(bodyParser.json());
//Import Routes
const postsRoute = require('./routes/posts.js');

app.use('/post', postsRoute);
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