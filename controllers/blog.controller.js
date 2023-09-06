
const services = require('../services/blog.services')

const addPost = async (req, res, next) => {
    try {
        const post = await services.createPost(req.body);
        return res.status(post.code).json(post)
    } catch (error) {
        next(error)
    }
}

const getPost = async (req, res, next) => {
    try {
        const posts = await services.getPost()
        return res.status(posts.code).json(posts)
    } catch (error) {
        next(error)
    }
}

const updatePost = async (req, res, next) => {
    try {

        const postId = req.params.id;
        const updatedPostData = req.body;
        const updatedPost = await services.updatePost(postId, updatedPostData);
        return res.status(updatedPost.code).json(updatedPost);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addPost,
    getPost,
    updatePost
}