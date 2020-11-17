const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
	try{
		const posts = await Post.find();
		res.json(posts);
	}catch(err){
		res.json({message: err});
	}
})
router.get('/posts', (req, res) => {
	res.send('We are on posts');
})

router.get('/specific', (req, res) =>  {
	res.send("Specific");
})

router.post('/', async (req, res) => {
	const post = new Post({
		title: req.body.title,
		description: req.body.description
	});

	// post.save()
	// .then(data => {
	// 	res.json(data)
	// })
	// .catch(err => {
	// 	res.json({message: err})
	// })
	try{
		const savedPost = await post.save();
		res.json(savedPost);
	}catch (err){
		res.json({message: err});
	}
})

//specific post
router.get('/:postId', async (req, res) => {
	try{
		const post = await Post.findById(req.params.postId);
		res.json(post);
	}catch (err){
		res.json({message: err});
	}
});
//delete
router.delete('/:postId', async (req, res) => {
	try{
		const removedPost = await Post.remove({_id: req.params.postId})
		res.json(removedPost);
	}catch(err){
		res.json({message: err});
	}
})
//update
router.patch('/:postId', async (req, res) => {
	try{
		const updatePost = await Post.updateOne(
				{_id: req.params.postId}, 
				{$set: {title: req.body.title}}
			);
		res.json(updatePost);
	}catch(err){

	}
})
module.exports = router;