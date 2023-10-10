const express  = require('express');
const router = express.Router()

router.get ('/', (req, res) => {
    res.end('Hello')
})
router.get ('/header', (req, res) => {
    res.render('partials/header.ejs')
})
router.get ('/blog', (req, res) => {
    res.render('blog.ejs')
})

router.get ('/myBlog', (req, res) => {
    res.render('myBlog.ejs')
})

router.get ('/commentBlog', (req, res) => {
    res.render('commentBlog.ejs')
})

router.get ('/myCommentBlog', (req, res) => {
    res.render('myCommentBlog.ejs')
})

router.get ('/newBlog', (req, res) => {
    res.render('newBlog.ejs')
})

router.get ('/entrance', (req, res) => {
    res.render('entrance.ejs')
})

router.get ('/registration', (req, res) => {
    res.render('registration.ejs')
})

module.exports = router