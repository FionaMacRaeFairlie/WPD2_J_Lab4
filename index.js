const express = require('express');
const app = express();

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

const mustache = require('mustache-express');
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

const router = require('./routes/guestbookRoutes');
app.use('/', router); 

app.listen(3000, () => {
    console.log('Server started on port 3000. Ctrl^c to quit.');
})