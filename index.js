const express  = require('express');
const app = express();

require('./server/config/db')

app.use(express.static('public'))
app.set('view engine' , 'ejs');

app.listen(3000, () => {
    console.log('server work on port 3000')
})

app.use(require('./server/pages/router'))
app.use(require('./server/category/router'))
