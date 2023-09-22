const express  = require('express');
const app = express();

app.use(express.static('public'))
app.set('view engine' , 'ejs');

app.listen(3000, () => {
    console.log('server work on port 3000')
})

app.get ('/', (req, res) => {
    res.end('Hello')
})
app.get ('/header', (req, res) => {
    res.render('partials/header.ejs')
})
app.get ('/blog', (req, res) => {
    res.render('blog.ejs')
})

app.get ('/myBlog', (req, res) => {
    res.render('myBlog.ejs')
})

app.get ('/commentBlog', (req, res) => {
    res.render('commentBlog.ejs')
})

app.get ('/myCommentBlog', (req, res) => {
    res.render('myCommentBlog.ejs')
})


// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server work on port ${PORT}`)
// })