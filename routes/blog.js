const express = require('express')
const controllers = require('../controllers/blog.controller')

const router = express.Router()

router.post('/', controllers.addPost);
router.get('/', controllers.getPost);
router.put('/:id', controllers.updatePost);

module.exports = router;